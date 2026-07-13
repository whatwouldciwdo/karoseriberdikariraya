export interface PortfolioImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface PortfolioProject {
  slug: string;
  /** Judul singkat untuk kartu & navbar */
  shortTitle: string;
  /** Judul lengkap SEO (H1) */
  title: string;
  client: string;
  category: string;
  location: string;
  year: string;
  /** Ringkasan untuk kartu daftar */
  excerpt: string;
  /** Gambar utama / hero */
  heroImage: string;
  /** Semua gambar yang ditampilkan di dalam artikel */
  images: PortfolioImage[];
  /** SEO metadata */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Poin ringkas spesifikasi/lingkup pekerjaan */
  highlights: string[];
  /** Konten artikel HTML (SEO humanize) */
  content: string;
}

/**
 * RISET KEYWORD (ringkasan)
 * ------------------------------------------------------------------
 * Primary keyword cluster (volume tinggi, niat komersial):
 *   - "karoseri truck", "jasa karoseri", "karoseri Bekasi", "bengkel karoseri"
 * Secondary (long-tail, konversi tinggi):
 *   - "karoseri box aluminium", "karoseri box freezer", "repair body truck",
 *     "repair box besi", "repair wing box", "jasa karoseri untuk perusahaan",
 *     "karoseri truck instansi pemerintah"
 * Branded / entity:
 *   - "Berdikari Raya Service", "karoseriberdikariraya"
 * Local intent:
 *   - "karoseri JABODETABEK", "karoseri Bekasi", "karoseri truk terdekat"
 * Setiap artikel di bawah menargetkan 1 primary + 2-4 long-tail keyword,
 * ditulis natural (humanize) agar tidak keyword stuffing.
 * ------------------------------------------------------------------
 */

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "karoseri-truck-bpkp",
    shortTitle: "Karoseri Truck BPKP",
    title:
      "Pembuatan Karoseri Truck untuk Badan Pengawasan Keuangan dan Pembangunan (BPKP)",
    client: "Badan Pengawasan Keuangan dan Pembangunan (BPKP)",
    category: "Karoseri Truck",
    location: "JABODETABEK",
    year: "2025",
    excerpt:
      "Berdikari Raya Service dipercaya mengerjakan karoseri truck operasional untuk BPKP dengan standar mutu instansi pemerintah, pengerjaan presisi, dan finishing rapi.",
    heroImage: "/images/portfolio/karoseri-truck-bpkp-01.webp",
    images: [
      {
        src: "/images/portfolio/karoseri-truck-bpkp-01.webp",
        alt: "Karoseri truck BPKP hasil pengerjaan Berdikari Raya Service tampak samping",
        caption:
          "Unit karoseri truck BPKP dengan konstruksi kokoh dan finishing standar instansi pemerintah.",
      },
      {
        src: "/images/portfolio/karoseri-truck-bpkp-02.webp",
        alt: "Detail body karoseri truck BPKP dengan finishing cat rapi",
        caption:
          "Detail body dan finishing cat yang rapi sesuai spesifikasi yang diminta klien.",
      },
    ],
    metaTitle:
      "Karoseri Truck BPKP | Portofolio Berdikari Raya Service Bekasi",
    metaDescription:
      "Studi kasus pembuatan karoseri truck untuk Badan Pengawasan Keuangan dan Pembangunan (BPKP). Jasa karoseri truck untuk instansi pemerintah oleh Berdikari Raya Service, Bekasi & JABODETABEK.",
    keywords: [
      "karoseri truck BPKP",
      "karoseri truck instansi pemerintah",
      "jasa karoseri truck",
      "karoseri truck Bekasi",
      "Berdikari Raya Service",
    ],
    highlights: [
      "Klien: Instansi pemerintah (BPKP)",
      "Lingkup: Pembuatan body karoseri truck operasional",
      "Standar mutu dan finishing sesuai kebutuhan instansi",
    ],
    content: `
      <h2>Kepercayaan dari Instansi Pemerintah</h2>
      <p>Mengerjakan armada untuk instansi pemerintah bukan pekerjaan biasa. Ada standar administrasi, mutu, dan ketepatan waktu yang harus dipenuhi. Karena itu kami bangga ketika <strong>Badan Pengawasan Keuangan dan Pembangunan (BPKP)</strong> mempercayakan pembuatan <strong>karoseri truck</strong> operasionalnya kepada Berdikari Raya Service.</p>
      <p>Proyek ini menegaskan satu hal: pengalaman kami dalam <strong>jasa karoseri truck</strong> tidak hanya melayani perusahaan swasta, tetapi juga memenuhi ekspektasi lembaga pemerintah yang menuntut ketelitian tinggi.</p>

      <h2>Lingkup dan Proses Pengerjaan</h2>
      <p>Kami memulai dari diskusi kebutuhan operasional unit, penentuan material, hingga perancangan konstruksi body. Setiap tahap dikerjakan dengan kontrol kualitas agar hasil akhir kuat, fungsional, dan tampil rapi.</p>
      <p>Pemilihan material berkualitas dan proses pengelasan yang presisi menjadi kunci agar unit tahan digunakan untuk kegiatan operasional harian dalam jangka panjang.</p>

      <h2>Hasil Akhir</h2>
      <p>Unit diserahkan dengan finishing cat yang halus dan konstruksi yang siap bekerja. Proyek karoseri truck BPKP ini menjadi salah satu bukti komitmen kami menghadirkan hasil pengerjaan yang bisa dipertanggungjawabkan, baik untuk instansi pemerintah maupun perusahaan.</p>
      <p>Butuh <strong>karoseri truck untuk kebutuhan instansi atau perusahaan</strong> Anda? Tim Berdikari Raya Service siap membantu dari konsultasi hingga serah terima unit.</p>
    `,
  },
  {
    slug: "karoseri-truck-pt-great-giant-pineapple",
    shortTitle: "PT Great Giant Pineapple",
    title: "Karoseri Truck untuk PT Great Giant Pineapple",
    client: "PT Great Giant Pineapple",
    category: "Karoseri Truck",
    location: "JABODETABEK",
    year: "2025",
    excerpt:
      "Pengerjaan karoseri truck untuk menunjang operasional dan distribusi PT Great Giant Pineapple, perusahaan agribisnis terkemuka di Indonesia.",
    heroImage:
      "/images/portfolio/karoseri-truck-pt-great-giant-pineapple.webp",
    images: [
      {
        src: "/images/portfolio/karoseri-truck-pt-great-giant-pineapple.webp",
        alt: "Karoseri truck PT Great Giant Pineapple buatan Berdikari Raya Service",
        caption:
          "Karoseri truck yang dikerjakan untuk mendukung distribusi PT Great Giant Pineapple.",
      },
    ],
    metaTitle:
      "Karoseri Truck PT Great Giant Pineapple | Berdikari Raya Service",
    metaDescription:
      "Portofolio pembuatan karoseri truck untuk PT Great Giant Pineapple. Jasa karoseri truck untuk sektor agribisnis dan distribusi oleh Berdikari Raya Service Bekasi.",
    keywords: [
      "karoseri truck agribisnis",
      "karoseri truck distribusi",
      "jasa karoseri truck perusahaan",
      "karoseri truck PT Great Giant Pineapple",
      "karoseri Bekasi",
    ],
    highlights: [
      "Klien: PT Great Giant Pineapple (agribisnis)",
      "Lingkup: Karoseri truck operasional & distribusi",
      "Konstruksi tangguh untuk pemakaian intensif",
    ],
    content: `
      <h2>Mendukung Operasional Sektor Agribisnis</h2>
      <p>Sektor agribisnis punya ritme distribusi yang padat dan menuntut armada yang andal setiap hari. <strong>PT Great Giant Pineapple</strong>, salah satu pemain agribisnis terbesar di Indonesia, mempercayakan pembuatan <strong>karoseri truck</strong> untuk menunjang kegiatan operasional dan distribusinya kepada Berdikari Raya Service.</p>

      <h2>Fokus pada Ketangguhan dan Fungsi</h2>
      <p>Untuk kebutuhan seperti ini, kami memprioritaskan konstruksi yang kuat dan spesifikasi yang benar-benar sesuai pola kerja perusahaan. Unit dirancang agar mampu bekerja intensif tanpa mengorbankan efisiensi.</p>
      <p>Pemilihan material dan detail pengerjaan kami sesuaikan dengan jenis muatan serta rute operasional, sehingga armada siap bekerja optimal sejak hari pertama.</p>

      <h2>Hasil yang Siap Bekerja</h2>
      <p>Unit karoseri truck diserahkan dalam kondisi prima dan siap mendukung distribusi perusahaan. Proyek ini menjadi bukti pengalaman kami menangani <strong>jasa karoseri truck untuk perusahaan besar</strong> dengan standar kualitas yang konsisten.</p>
    `,
  },
  {
    slug: "karoseri-truck-pt-delta-garda-persada",
    shortTitle: "PT Delta Garda Persada",
    title: "Karoseri Truck untuk PT Delta Garda Persada",
    client: "PT Delta Garda Persada",
    category: "Karoseri Truck",
    location: "JABODETABEK",
    year: "2025",
    excerpt:
      "Berdikari Raya Service menyelesaikan pengerjaan karoseri truck untuk kebutuhan operasional PT Delta Garda Persada dengan hasil presisi dan berkualitas.",
    heroImage:
      "/images/portfolio/karoseri-truck-pt-delta-garda-persada.webp",
    images: [
      {
        src: "/images/portfolio/karoseri-truck-pt-delta-garda-persada.webp",
        alt: "Karoseri truck PT Delta Garda Persada oleh Berdikari Raya Service",
        caption:
          "Unit karoseri truck PT Delta Garda Persada dengan pengerjaan presisi.",
      },
    ],
    metaTitle:
      "Karoseri Truck PT Delta Garda Persada | Berdikari Raya Service",
    metaDescription:
      "Studi kasus karoseri truck untuk PT Delta Garda Persada. Jasa pembuatan karoseri truck operasional perusahaan oleh Berdikari Raya Service Bekasi & JABODETABEK.",
    keywords: [
      "karoseri truck PT Delta Garda Persada",
      "jasa karoseri truck perusahaan",
      "karoseri truck operasional",
      "bengkel karoseri Bekasi",
      "Berdikari Raya Service",
    ],
    highlights: [
      "Klien: PT Delta Garda Persada",
      "Lingkup: Karoseri truck operasional",
      "Pengerjaan sesuai kebutuhan klien dari desain hingga finishing",
    ],
    content: `
      <h2>Solusi Karoseri yang Disesuaikan</h2>
      <p>Tidak ada dua bisnis dengan kebutuhan armada yang benar-benar sama. Itulah mengapa saat <strong>PT Delta Garda Persada</strong> mempercayakan pembuatan <strong>karoseri truck</strong>-nya kepada kami, langkah pertama adalah memahami betul pola operasional mereka.</p>

      <h2>Dari Perancangan hingga Finishing</h2>
      <p>Setiap detail kami kerjakan mengikuti kebutuhan klien, mulai dari perancangan konstruksi, pemilihan material, hingga finishing akhir. Kontrol kualitas di tiap tahap memastikan hasil yang kokoh sekaligus rapi.</p>

      <h2>Unit Siap Operasional</h2>
      <p>Hasil pengerjaan menghadirkan unit yang fungsional dan siap mendukung kegiatan operasional perusahaan. Proyek ini menambah daftar pengalaman kami dalam menyediakan <strong>jasa karoseri truck untuk perusahaan</strong> di wilayah JABODETABEK.</p>
    `,
  },
  {
    slug: "karoseri-truck-pt-energy-sarana-sejahtera",
    shortTitle: "PT Energy Sarana Sejahtera",
    title: "Karoseri Truck untuk PT Energy Sarana Sejahtera",
    client: "PT Energy Sarana Sejahtera",
    category: "Karoseri Truck",
    location: "JABODETABEK",
    year: "2025",
    excerpt:
      "Pembuatan karoseri truck untuk PT Energy Sarana Sejahtera guna menunjang kebutuhan armada operasional di sektor energi.",
    heroImage:
      "/images/portfolio/karoseri-truck-pt-energy-sarana-sejahtera.webp",
    images: [
      {
        src: "/images/portfolio/karoseri-truck-pt-energy-sarana-sejahtera.webp",
        alt: "Karoseri truck PT Energy Sarana Sejahtera oleh Berdikari Raya Service",
        caption:
          "Karoseri truck untuk PT Energy Sarana Sejahtera dengan konstruksi tangguh.",
      },
    ],
    metaTitle:
      "Karoseri Truck PT Energy Sarana Sejahtera | Berdikari Raya Service",
    metaDescription:
      "Portofolio karoseri truck untuk PT Energy Sarana Sejahtera. Jasa karoseri truck tangguh untuk sektor energi oleh Berdikari Raya Service Bekasi.",
    keywords: [
      "karoseri truck sektor energi",
      "karoseri truck PT Energy Sarana Sejahtera",
      "jasa karoseri truck tangguh",
      "karoseri truck operasional berat",
      "karoseri Bekasi",
    ],
    highlights: [
      "Klien: PT Energy Sarana Sejahtera (sektor energi)",
      "Lingkup: Karoseri truck operasional",
      "Konstruksi kuat untuk beban dan medan berat",
    ],
    content: `
      <h2>Armada Andal untuk Sektor Energi</h2>
      <p>Operasional di sektor energi kerap menghadapi medan dan beban kerja yang berat. Untuk itu, ketika <strong>PT Energy Sarana Sejahtera</strong> membutuhkan <strong>karoseri truck</strong> yang tangguh, Berdikari Raya Service menjawabnya dengan konstruksi yang dirancang untuk daya tahan.</p>

      <h2>Material dan Konstruksi Pilihan</h2>
      <p>Unit dikerjakan menggunakan material berkualitas dengan standar pengerjaan yang menjaga kekuatan struktur. Fokus kami adalah memastikan unit mampu bekerja stabil meski dipakai dalam kondisi operasional yang menuntut.</p>

      <h2>Siap untuk Pemakaian Jangka Panjang</h2>
      <p>Hasil akhirnya adalah karoseri truck yang kokoh dan siap menemani operasional perusahaan dalam jangka panjang. Ini menegaskan kapabilitas kami dalam <strong>jasa karoseri truck untuk kebutuhan industri berat</strong>.</p>
    `,
  },
  {
    slug: "karoseri-truck-rumah-sakit-ibnu-sina",
    shortTitle: "Yayasan Ibnu Sina",
    title: "Karoseri Truck untuk Yayasan Ibnu Sina",
    client: "Yayasan Ibnu Sina",
    category: "Karoseri Truck",
    location: "JABODETABEK",
    year: "2025",
    excerpt:
      "Berdikari Raya Service mengerjakan karoseri truck untuk menunjang kebutuhan operasional Yayasan Ibnu Sina dengan pengerjaan rapi dan fungsional.",
    heroImage:
      "/images/portfolio/karoseri-truck-rumah-sakit-ibnu-sina.webp",
    images: [
      {
        src: "/images/portfolio/karoseri-truck-rumah-sakit-ibnu-sina.webp",
        alt: "Karoseri truck Yayasan Ibnu Sina oleh Berdikari Raya Service",
        caption:
          "Karoseri truck untuk mendukung kebutuhan operasional Yayasan Ibnu Sina.",
      },
    ],
    metaTitle:
      "Karoseri Truck Yayasan Ibnu Sina | Berdikari Raya Service",
    metaDescription:
      "Portofolio karoseri truck untuk Yayasan Ibnu Sina. Jasa karoseri truck untuk kebutuhan layanan kesehatan oleh Berdikari Raya Service Bekasi & JABODETABEK.",
    keywords: [
      "karoseri truck rumah sakit",
      "karoseri truck layanan kesehatan",
      "karoseri truck Yayasan Ibnu Sina",
      "jasa karoseri truck",
      "karoseri Bekasi",
    ],
    highlights: [
      "Klien: Yayasan Ibnu Sina",
      "Lingkup: Karoseri truck operasional",
      "Mengutamakan fungsi dan kerapian pengerjaan",
    ],
    content: `
      <h2>Dukungan untuk Layanan Kesehatan</h2>
      <p>Fasilitas kesehatan membutuhkan armada pendukung yang bersih, fungsional, dan dapat diandalkan. Berdikari Raya Service dipercaya mengerjakan <strong>karoseri truck</strong> untuk menunjang kebutuhan operasional <strong>Yayasan Ibnu Sina</strong>.</p>

      <h2>Pengerjaan yang Mengutamakan Fungsi</h2>
      <p>Unit dirancang dengan fokus pada fungsi dan kerapian. Kami memastikan setiap detail dikerjakan agar unit mudah digunakan dan tampil profesional sesuai citra institusi.</p>

      <h2>Unit Siap Digunakan</h2>
      <p>Hasil akhir berupa karoseri truck yang siap menunjang beragam kebutuhan operasional yayasan. Proyek ini memperluas pengalaman kami melayani <strong>jasa karoseri truck</strong> untuk berbagai sektor, termasuk layanan kesehatan.</p>
    `,
  },
  {
    slug: "karoseri-box-aluminium-perorangan",
    shortTitle: "Box Aluminium Perorangan",
    title: "Pembuatan Karoseri Box Aluminium untuk Pelanggan Perorangan",
    client: "Pelanggan Perorangan",
    category: "Karoseri Box",
    location: "JABODETABEK",
    year: "2025",
    excerpt:
      "Pembuatan karoseri box aluminium yang ringan, kuat, dan hemat bahan bakar untuk kebutuhan distribusi pelanggan perorangan.",
    heroImage: "/images/portfolio/karoseri-box-aluminium-perorangan.webp",
    images: [
      {
        src: "/images/portfolio/karoseri-box-aluminium-perorangan.webp",
        alt: "Karoseri box aluminium perorangan buatan Berdikari Raya Service",
        caption:
          "Karoseri box aluminium ringan dan tahan karat untuk kebutuhan distribusi pribadi.",
      },
    ],
    metaTitle:
      "Karoseri Box Aluminium Perorangan | Berdikari Raya Service Bekasi",
    metaDescription:
      "Jasa pembuatan karoseri box aluminium untuk pelanggan perorangan. Box aluminium ringan, hemat BBM, dan tahan karat dari Berdikari Raya Service Bekasi.",
    keywords: [
      "karoseri box aluminium",
      "jasa karoseri box aluminium",
      "box aluminium truk",
      "karoseri box perorangan",
      "karoseri box aluminium Bekasi",
    ],
    highlights: [
      "Klien: Pelanggan perorangan",
      "Produk: Karoseri box aluminium",
      "Keunggulan: Ringan, hemat BBM, tahan karat",
    ],
    content: `
      <h2>Box Aluminium untuk Kebutuhan Pribadi</h2>
      <p>Layanan kami tidak hanya untuk perusahaan besar. Pelanggan perorangan pun kami layani dengan standar yang sama. Salah satu contohnya adalah pembuatan <strong>karoseri box aluminium</strong> untuk kebutuhan distribusi barang pribadi.</p>

      <h2>Kenapa Memilih Box Aluminium?</h2>
      <p>Box aluminium jadi favorit karena bobotnya ringan. Artinya, kendaraan <strong>lebih hemat bahan bakar</strong> dan bisa membawa muatan lebih banyak. Materialnya juga tahan karat, sehingga awet untuk pemakaian jangka panjang.</p>
      <p>Kombinasi ini membuat box aluminium ideal untuk barang ringan seperti paket, garmen, hingga makanan kering.</p>

      <h2>Pengerjaan Rapi dan Presisi</h2>
      <p>Kami mengerjakan rangka dan pemasangan plat aluminium dengan presisi agar hasilnya rapat, rapi, dan kuat. Hasil akhirnya adalah unit box yang siap digunakan dan enak dipandang.</p>
      <p>Tertarik membuat <strong>karoseri box aluminium</strong> untuk kebutuhan Anda? Konsultasikan spesifikasinya bersama tim kami.</p>
    `,
  },
  {
    slug: "karoseri-box-freezer-perorangan",
    shortTitle: "Box Freezer Perorangan",
    title: "Pembuatan Karoseri Box Freezer untuk Pelanggan Perorangan",
    client: "Pelanggan Perorangan",
    category: "Karoseri Box",
    location: "JABODETABEK",
    year: "2025",
    excerpt:
      "Pembuatan karoseri box freezer dengan insulasi tebal untuk menjaga suhu muatan tetap stabil, cocok untuk produk beku dan segar.",
    heroImage:
      "/images/portfolio/karoseri-box-freezer-perorangan-01.webp",
    images: [
      {
        src: "/images/portfolio/karoseri-box-freezer-perorangan-01.webp",
        alt: "Karoseri box freezer perorangan buatan Berdikari Raya Service",
        caption:
          "Karoseri box freezer dengan kemampuan menjaga suhu muatan tetap stabil.",
      },
      {
        src: "/images/portfolio/karoseri-box-freezer-perorangan-02.webp",
        alt: "Interior karoseri box freezer dengan insulasi tebal dan higienis",
        caption:
          "Interior box freezer dengan insulasi tebal dan permukaan higienis.",
      },
    ],
    metaTitle:
      "Karoseri Box Freezer Perorangan | Berdikari Raya Service Bekasi",
    metaDescription:
      "Jasa pembuatan karoseri box freezer untuk pelanggan perorangan. Insulasi tebal, interior higienis, dan suhu stabil untuk produk beku dan segar. Berdikari Raya Service Bekasi.",
    keywords: [
      "karoseri box freezer",
      "jasa karoseri box freezer",
      "box freezer truk",
      "karoseri box pendingin",
      "karoseri box freezer Bekasi",
    ],
    highlights: [
      "Klien: Pelanggan perorangan",
      "Produk: Karoseri box freezer",
      "Keunggulan: Insulasi tebal, suhu stabil, interior higienis",
    ],
    content: `
      <h2>Menjaga Rantai Dingin untuk Kebutuhan Pribadi</h2>
      <p>Mengangkut produk beku atau segar butuh unit yang mampu menjaga suhu tetap stabil dari titik muat hingga tujuan. Berdikari Raya Service mengerjakan <strong>karoseri box freezer</strong> untuk pelanggan perorangan yang membutuhkan kemampuan tersebut.</p>

      <h2>Insulasi Tebal dan Interior Higienis</h2>
      <p>Kunci performa box freezer ada pada kualitas insulasinya. Kami membuat box dengan <strong>insulasi tebal</strong> yang efektif menahan panas dari luar, dipadukan dengan interior yang higienis dan mudah dibersihkan.</p>
      <p>Dengan begitu, kualitas produk beku maupun segar tetap terjaga selama pengiriman.</p>

      <h2>Hasil yang Siap Menjaga Kualitas Muatan</h2>
      <p>Unit box freezer diserahkan dalam kondisi rapat dan rapi, siap digunakan untuk kebutuhan distribusi rantai dingin. Butuh <strong>karoseri box freezer</strong> yang andal? Kami siap membantu dari perencanaan hingga selesai.</p>
    `,
  },
  {
    slug: "repair-body-pt-yanakarti-kwasa",
    shortTitle: "PT Yanakarti Kwasa",
    title: "Repair Body Truck untuk PT Yanakarti Kwasa (Box Besi & Wing Box)",
    client: "PT Yanakarti Kwasa",
    category: "Repair & Custom Body",
    location: "JABODETABEK",
    year: "2025",
    excerpt:
      "Berdikari Raya Service menangani repair box besi Mitsubishi Fuso dan repair wing box Hino untuk PT Yanakarti Kwasa agar unit kembali prima.",
    heroImage:
      "/images/portfolio/repair-box-besi-mitsubishi-fuso-pt-yanakarti-kwasa.webp",
    images: [
      {
        src: "/images/portfolio/repair-box-besi-mitsubishi-fuso-pt-yanakarti-kwasa.webp",
        alt: "Repair box besi Mitsubishi Fuso PT Yanakarti Kwasa oleh Berdikari Raya Service",
        caption:
          "Repair box besi Mitsubishi Fuso untuk mengembalikan kekuatan dan fungsi unit.",
      },
      {
        src: "/images/portfolio/repair-wing-box-hino-pt-yanakarti-kwasa.webp",
        alt: "Repair wing box Hino PT Yanakarti Kwasa oleh Berdikari Raya Service",
        caption:
          "Repair wing box Hino agar sistem bukaan samping kembali berfungsi optimal.",
      },
    ],
    metaTitle:
      "Repair Body Truck PT Yanakarti Kwasa | Berdikari Raya Service",
    metaDescription:
      "Studi kasus repair box besi Mitsubishi Fuso dan repair wing box Hino untuk PT Yanakarti Kwasa. Jasa repair body truck oleh Berdikari Raya Service Bekasi.",
    keywords: [
      "repair body truck",
      "repair box besi",
      "repair wing box",
      "jasa perbaikan karoseri truck",
      "repair body truck Bekasi",
    ],
    highlights: [
      "Klien: PT Yanakarti Kwasa",
      "Lingkup: Repair box besi Mitsubishi Fuso & wing box Hino",
      "Tujuan: Mengembalikan fungsi dan kekuatan unit",
    ],
    content: `
      <h2>Perbaikan Body Kendaraan Niaga</h2>
      <p>Truk komersial yang bekerja setiap hari pasti mengalami keausan. Di sinilah layanan <strong>repair body truck</strong> berperan penting untuk menjaga armada tetap produktif. <strong>PT Yanakarti Kwasa</strong> mempercayakan perbaikan beberapa unitnya kepada Berdikari Raya Service.</p>

      <h2>Repair Box Besi Mitsubishi Fuso</h2>
      <p>Pekerjaan pertama adalah <strong>repair box besi</strong> pada unit Mitsubishi Fuso. Kami memperbaiki bagian yang aus dan memperkuat kembali konstruksi agar box siap kembali menahan beban operasional.</p>

      <h2>Repair Wing Box Hino</h2>
      <p>Berikutnya, kami menangani <strong>repair wing box Hino</strong>. Selain aspek struktur, perbaikan wing box menuntut ketelitian pada sistem bukaan samping agar kembali berfungsi lancar dan rapat saat ditutup.</p>

      <h2>Unit Kembali Prima</h2>
      <p>Kedua unit kami kembalikan dalam kondisi siap beroperasi. Proyek ini menunjukkan pengalaman kami tidak hanya membuat unit baru, tetapi juga menyediakan <strong>jasa repair dan custom body truck</strong> yang menyeluruh.</p>
    `,
  },
  {
    slug: "repair-body-suku-dinas-sumber-daya-air",
    shortTitle: "Suku Dinas Sumber Daya Air",
    title: "Repair Body Kendaraan untuk Suku Dinas Sumber Daya Air",
    client: "Suku Dinas Sumber Daya Air",
    category: "Repair & Custom Body",
    location: "JABODETABEK",
    year: "2025",
    excerpt:
      "Proses repair body kendaraan operasional Suku Dinas Sumber Daya Air dari kondisi awal, pengerjaan, hingga hasil akhir yang rapi dan prima.",
    heroImage: "/images/portfolio/repair-suku-dinas-sumber-daya-air.webp",
    images: [
      {
        src: "/images/portfolio/repair-before-suku-dinas-sumber-daya-air.webp",
        alt: "Kondisi kendaraan sebelum repair - Suku Dinas Sumber Daya Air",
        caption: "Kondisi awal kendaraan sebelum proses perbaikan dimulai.",
      },
      {
        src: "/images/portfolio/proses-repair-suku-dinas-sumber-daya-air.webp",
        alt: "Proses repair body kendaraan Suku Dinas Sumber Daya Air",
        caption: "Proses pengerjaan repair body oleh tim Berdikari Raya Service.",
      },
      {
        src: "/images/portfolio/repair-suku-dinas-sumber-daya-air.webp",
        alt: "Hasil akhir repair body kendaraan Suku Dinas Sumber Daya Air",
        caption: "Hasil akhir setelah perbaikan: unit kembali rapi dan prima.",
      },
    ],
    metaTitle:
      "Repair Body Kendaraan Suku Dinas Sumber Daya Air | Berdikari Raya",
    metaDescription:
      "Dokumentasi repair body kendaraan operasional Suku Dinas Sumber Daya Air dari kondisi awal hingga selesai. Jasa repair body kendaraan oleh Berdikari Raya Service Bekasi.",
    keywords: [
      "repair body kendaraan",
      "repair body truck instansi",
      "jasa repair body kendaraan operasional",
      "repair body Suku Dinas Sumber Daya Air",
      "repair body Bekasi",
    ],
    highlights: [
      "Klien: Suku Dinas Sumber Daya Air",
      "Lingkup: Repair body kendaraan operasional",
      "Dokumentasi: Sebelum, proses, dan hasil akhir",
    ],
    content: `
      <h2>Dari Kondisi Awal Hingga Selesai</h2>
      <p>Salah satu cara terbaik menilai kualitas <strong>repair body kendaraan</strong> adalah melihat perbandingan sebelum dan sesudahnya. Pada proyek untuk <strong>Suku Dinas Sumber Daya Air</strong> ini, kami mendokumentasikan seluruh proses agar hasilnya bisa dilihat dengan jelas.</p>

      <h2>Kondisi Sebelum Repair</h2>
      <p>Kendaraan operasional datang dengan sejumlah bagian yang perlu diperbaiki. Kami memulai dengan pemeriksaan menyeluruh untuk menentukan lingkup pekerjaan yang tepat.</p>

      <h2>Proses Pengerjaan</h2>
      <p>Tim kami mengerjakan perbaikan secara bertahap, dari perbaikan struktur hingga pengecatan. Setiap langkah dilakukan dengan teliti agar hasilnya tahan lama, bukan sekadar tampak baik di permukaan.</p>

      <h2>Hasil Akhir</h2>
      <p>Hasilnya, kendaraan kembali prima, rapi, dan siap digunakan untuk mendukung kegiatan operasional. Proyek ini menegaskan komitmen kami menghadirkan <strong>jasa repair body kendaraan</strong> yang menyeluruh untuk instansi maupun perusahaan.</p>
    `,
  },
];

export function getPortfolioProject(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}
