-- =============================================================
-- Zona Socios - Club Deportivo Español
-- Esquema, RLS y trigger de creación de perfil
-- Ejecutar con rol postgres (gestión Supabase)
-- =============================================================

-- Tabla de socios (perfil ligado a auth.users)
create table if not exists public.socios (
  id uuid primary key references auth.users (id) on delete cascade,
  numero_socio serial unique,
  nombre text not null,
  apellido text not null,
  email text not null unique,
  telefono text,
  tipo_membresia text not null default 'adherente',
  estado text not null default 'activo',
  cuota_vencimiento date,
  fecha_alta date default current_date,
  es_admin boolean not null default false,
  avatar_url text,
  created_at timestamptz not null default now()
);

comment on table public.socios is 'Perfiles de socios del club, ligados a auth.users';

-- Tabla de cuotas (historial de pagos por socio)
create table if not exists public.cuotas (
  id uuid primary key default gen_random_uuid(),
  socio_id uuid not null references public.socios (id) on delete cascade,
  periodo text not null,
  monto numeric(10, 2) not null,
  metodo text,
  pagado_at timestamptz default now(),
  created_at timestamptz not null default now(),
  unique (socio_id, periodo)
);

comment on table public.cuotas is 'Historial de pagos de cuotas sociales';

-- Tabla de noticias exclusivas para socios
create table if not exists public.noticias_socios (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  contenido text not null,
  imagen_url text,
  publicado boolean not null default true,
  creado_por uuid references auth.users (id),
  created_at timestamptz not null default now()
);

comment on table public.noticias_socios is 'Contenido exclusivo visible solo para socios autenticados';

-- =============================================================
-- ROW LEVEL SECURITY
-- =============================================================
alter table public.socios enable row level security;
alter table public.cuotas enable row level security;
alter table public.noticias_socios enable row level security;

-- Cada socio ve y edita solo su propio perfil
create policy "socios_ver_propio" on public.socios
  for select using (auth.uid() = id);

create policy "socios_editar_propio" on public.socios
  for update using (auth.uid() = id);

-- Nadie puede insertar socios desde el cliente (se crean vía trigger/servidor)
-- Cada socio ve sus propias cuotas
create policy "socios_ver_cuotas" on public.cuotas
  for select using (
    auth.uid() = socio_id
    or exists (select 1 from public.socios s where s.id = auth.uid() and s.es_admin)
  );

-- Socios autenticados pueden ver noticias exclusivas
create policy "socios_ver_noticias" on public.noticias_socios
  for select using (auth.role() = 'authenticated');

-- Solo administradores publican noticias
create policy "admins_publicar_noticias" on public.noticias_socios
  for insert with check (
    exists (select 1 from public.socios s where s.id = auth.uid() and s.es_admin)
  );

create policy "admins_editar_noticias" on public.noticias_socios
  for update using (
    exists (select 1 from public.socios s where s.id = auth.uid() and s.es_admin)
  );

create policy "admins_borrar_noticias" on public.noticias_socios
  for delete using (
    exists (select 1 from public.socios s where s.id = auth.uid() and s.es_admin)
  );

-- =============================================================
-- Trigger: crear perfil de socio al registrarse en auth.users
-- =============================================================
create or replace function public.handle_new_socio()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.socios (id, nombre, apellido, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'nombre', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data ->> 'apellido', ''),
    new.email
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_socio();

-- El trigger usa el rol definido como security definer (postgres).
-- Darle permiso mínimo al rol postgres no hace falta (ya es superusuario).
-- =============================================================
-- Grants para que la API (anon/authenticated) funcione con RLS
-- =============================================================
grant select, insert, update, delete on public.socios to authenticated;
grant select, update on public.socios to anon;

grant select, insert on public.cuotas to authenticated;

grant select, insert, update, delete on public.noticias_socios to authenticated;