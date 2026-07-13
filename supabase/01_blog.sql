-- =====================================================================
-- FASE 1 — Tabel BLOG
-- Jalankan di Supabase: Dashboard > SQL Editor > New query > paste > Run
-- =====================================================================

create table if not exists public.blog_posts (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title       text not null,
  excerpt     text not null default '',
  content     text not null default '',
  img         text not null default '',
  category    text not null default '',
  date        text not null default '',
  read_time   text not null default '',
  featured    boolean not null default false,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Auto-update kolom updated_at setiap row berubah
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_blog_posts_updated_at on public.blog_posts;
create trigger trg_blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();

-- =====================================================================
-- Row Level Security: publik hanya boleh BACA, tulis lewat service role
-- (service role otomatis melewati RLS, jadi admin panel tetap bisa tulis)
-- =====================================================================
alter table public.blog_posts enable row level security;

drop policy if exists "blog public read" on public.blog_posts;
create policy "blog public read"
  on public.blog_posts
  for select
  to anon, authenticated
  using (true);

-- =====================================================================
-- Storage bucket untuk gambar (publik dibaca, upload lewat service role)
-- =====================================================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "media public read" on storage.objects;
create policy "media public read"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'media');
