-- ============================================================
-- Supabase Storage: bucket "media" untuk upload gambar dari admin
-- ============================================================
-- Jalankan di Supabase SQL Editor SETELAH 01/02/03.
-- Upload dilakukan lewat service-role key (server action), jadi bucket
-- boleh private terhadap tulis publik tetapi harus bisa dibaca publik
-- supaya gambar tampil di situs.

-- 1. Buat bucket "media" (public read). Aman diulang.
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do update set public = true;

-- 2. Policy: siapa pun boleh MEMBACA objek di bucket media (gambar publik).
drop policy if exists "media public read" on storage.objects;
create policy "media public read"
  on storage.objects for select
  using (bucket_id = 'media');

-- Catatan:
-- INSERT/UPDATE/DELETE tidak diberi policy publik. Upload hanya lewat
-- server action yang memakai SUPABASE_SERVICE_ROLE_KEY (bypass RLS),
-- sehingga browser biasa tidak bisa menulis ke storage. Ini disengaja.
