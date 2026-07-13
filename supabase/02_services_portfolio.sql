-- =====================================================================
-- FASE 2: Tabel services & portfolio untuk Supabase.
-- Jalankan di Supabase Dashboard > SQL Editor > New query > Run.
-- Field bertingkat (array / object) disimpan sebagai JSONB agar cocok
-- dengan struktur TypeScript yang sudah ada.
-- =====================================================================

-- ------------------------------ SERVICES -----------------------------
create table if not exists public.services (
  slug              text primary key,
  title             text not null,
  short_title       text not null,
  tagline           text not null default '',
  "desc"            text not null default '',
  img               text not null default '',
  hero_img          text not null default '',
  about_img         text not null default '',
  hero_alt          text not null default '',
  about_alt         text not null default '',
  icon              text not null default 'Package',
  meta_description  text not null default '',
  keywords          jsonb not null default '[]'::jsonb,
  service_type      text not null default '',
  highlights        jsonb not null default '[]'::jsonb,
  intro             jsonb not null default '{}'::jsonb,
  pain_point_heading text not null default '',
  pain_points       jsonb not null default '[]'::jsonb,
  features          jsonb not null default '[]'::jsonb,
  benefits          jsonb not null default '[]'::jsonb,
  use_cases         jsonb not null default '[]'::jsonb,
  process           jsonb not null default '[]'::jsonb,
  sort_order        int not null default 0,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create index if not exists services_sort_order_idx on public.services (sort_order);

alter table public.services enable row level security;

-- Publik hanya boleh membaca. Tulis via service_role (admin) yang bypass RLS.
drop policy if exists "services public read" on public.services;
create policy "services public read"
  on public.services for select
  using (true);

-- ------------------------------ PORTFOLIO ----------------------------
create table if not exists public.portfolio (
  slug              text primary key,
  short_title       text not null,
  title             text not null,
  client            text not null default '',
  category          text not null default '',
  location          text not null default '',
  year              text not null default '',
  excerpt           text not null default '',
  hero_image        text not null default '',
  images            jsonb not null default '[]'::jsonb,
  meta_title        text not null default '',
  meta_description  text not null default '',
  keywords          jsonb not null default '[]'::jsonb,
  highlights        jsonb not null default '[]'::jsonb,
  content           text not null default '',
  sort_order        int not null default 0,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create index if not exists portfolio_sort_order_idx on public.portfolio (sort_order);

alter table public.portfolio enable row level security;

drop policy if exists "portfolio public read" on public.portfolio;
create policy "portfolio public read"
  on public.portfolio for select
  using (true);
