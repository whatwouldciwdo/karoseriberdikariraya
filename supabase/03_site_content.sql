-- =====================================================================
-- FASE 3: Tabel site_content (key-value) untuk teks statis yang bisa
-- diedit lewat admin panel.
-- Jalankan di Supabase Dashboard > SQL Editor > New query > Run.
-- =====================================================================

create table if not exists public.site_content (
  key         text primary key,
  value       jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

alter table public.site_content enable row level security;

-- Publik hanya boleh membaca.
drop policy if exists "site_content public read" on public.site_content;
create policy "site_content public read"
  on public.site_content for select
  using (true);

-- =====================================================================
-- FASE 4: Supabase Storage bucket untuk upload gambar dari admin panel.
-- =====================================================================

-- Buat bucket 'media' (public read, admin write)
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

-- Siapa saja boleh baca file di bucket 'media'
drop policy if exists "media public read" on storage.objects;
create policy "media public read"
  on storage.objects for select
  using (bucket_id = 'media');

-- Hanya user terautentikasi boleh upload/update/delete
drop policy if exists "media auth insert" on storage.objects;
create policy "media auth insert"
  on storage.objects for insert
  with check (bucket_id = 'media' AND auth.role() = 'authenticated');

drop policy if exists "media auth update" on storage.objects;
create policy "media auth update"
  on storage.objects for update
  using (bucket_id = 'media' AND auth.role() = 'authenticated');

drop policy if exists "media auth delete" on storage.objects;
create policy "media auth delete"
  on storage.objects for delete
  using (bucket_id = 'media' AND auth.role() = 'authenticated');
