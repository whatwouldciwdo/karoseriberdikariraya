export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  desc: string;
  // Dua gambar berbeda: hero (banner atas) & about (section overview).
  img: string; // dipakai sebagai hero + thumbnail kartu
  heroImg: string;
  aboutImg: string;
  heroAlt: string;
  aboutAlt: string;
  icon: string; // lucide icon name
  // SEO
  metaDescription: string;
  keywords: string[];
  serviceType: string;
  // Konten kaya
  highlights: string[];
  intro: {
    heading: string;
    paragraphs: string[];
  };
  painPointHeading: string;
  painPoints: string[];
  features: string[];
  benefits: { title: string; desc: string }[];
  useCases: string[];
  process: { step: string; title: string; desc: string }[];
};

// Layanan utama yang memiliki halaman detail (data-driven, SEO 5 bintang).
export const services: ServiceDetail[] = [
  {
    slug: "karoseri-box-aluminium",
    title: "Karoseri Box Aluminium",
    shortTitle: "Karoseri Box Aluminium",
    tagline: "Ringan, Kuat, dan Profesional",
    desc: "Karoseri box aluminium ringan, kuat, dan cocok untuk distribusi barang dengan tampilan profesional. Ideal untuk logistik, makanan, dan barang sensitif. Bobot yang lebih ringan membantu efisiensi bahan bakar tanpa mengorbankan kekuatan struktur.",
    img: "/images/services/karoseri-box-aluminium/karoseri-box-aluminium-01.webp",
    heroImg: "/images/services/karoseri-box-aluminium/karoseri-box-aluminium-01.webp",
    aboutImg: "/images/services/karoseri-box-aluminium/karoseri-box-aluminium-02.webp",
    heroAlt: "Karoseri box aluminium buatan Berdikari Raya Service terpasang pada truck distribusi barang di Bekasi",
    aboutAlt: "Detail panel dinding karoseri box aluminium yang ringan, kuat, dan tahan karat",

    icon: "Package",
    metaDescription:
      "Jasa pembuatan karoseri box aluminium untuk truck distribusi di Bekasi & JABODETABEK. Material aluminium grade A yang ringan, kuat, hemat BBM, dan tahan karat. Konsultasi & survey gratis.",
    keywords: [
      "karoseri box aluminium",
      "jasa box aluminium truck",
      "karoseri box aluminium Bekasi",
      "box aluminium distribusi",
      "harga karoseri box aluminium",
      "pembuatan box aluminium JABODETABEK",
    ],
    serviceType: "Aluminium Box Body Manufacturing",
    highlights: [
      "Material Aluminium Grade A",
      "Ringan & Hemat BBM",
      "Rangka Galvanis Anti-Karat",
      "Pintu Swing & Roll-up",
      "Survey & Konsultasi Gratis",
    ],
    intro: {
      heading: "Box Aluminium yang Ringan Namun Tetap Kokoh untuk Distribusi Harian",
      paragraphs: [
        "Box aluminium menjadi pilihan utama perusahaan logistik dan distribusi karena bobotnya yang ringan membantu menekan konsumsi bahan bakar tanpa mengurangi kapasitas muatan. Kombinasi panel aluminium dan rangka galvanis membuat box tetap kuat menghadapi pemakaian harian yang intensif.",
        "Berdikari Raya Service membuat karoseri box aluminium dengan pengerjaan presisi, sambungan rapi, dan finishing yang mudah dibranding. Setiap unit dirancang menyesuaikan dimensi chassis serta kebutuhan operasional bisnis Anda.",
      ],
    },
    painPointHeading: "Cocok untuk Anda yang Membutuhkan",
    painPoints: [
      "Kendaraan distribusi dengan bobot ringan agar konsumsi BBM lebih efisien.",
      "Box yang tahan karat dan tetap rapi meski dipakai setiap hari.",
      "Tampilan armada profesional yang mudah dibranding logo perusahaan.",
      "Konfigurasi pintu swing atau roll-up sesuai pola bongkar muat.",
      "Karoseri yang dibuat presisi mengikuti dimensi chassis kendaraan.",
      "Solusi angkut barang retail, FMCG, hingga barang sensitif.",
    ],
    features: [
      "Material aluminium grade A",
      "Ringan & efisiensi BBM",
      "Pintu swing & roll-up",
      "Rangka galvanis anti-karat",
    ],
    benefits: [
      { title: "Hemat Bahan Bakar", desc: "Bobot ringan mengurangi beban kendaraan sehingga konsumsi BBM lebih efisien." },
      { title: "Tahan Karat", desc: "Panel aluminium dan rangka galvanis tahan terhadap korosi dan cuaca." },
      { title: "Tampilan Profesional", desc: "Permukaan rapi dan mudah dibranding untuk citra bisnis yang solid." },
    ],
    useCases: ["Logistik & distribusi", "Ekspedisi barang", "Retail & FMCG", "Pindahan rumah/kantor"],
    process: [
      { step: "1", title: "Konsultasi Kebutuhan", desc: "Memahami jenis muatan, dimensi, dan pola distribusi kendaraan Anda." },
      { step: "2", title: "Survey & Pengukuran", desc: "Pengukuran chassis untuk menentukan dimensi box yang paling presisi." },
      { step: "3", title: "Penawaran & Desain", desc: "Menyusun desain box, spesifikasi material, dan penawaran harga transparan." },
      { step: "4", title: "Produksi Karoseri", desc: "Pembuatan rangka, pemasangan panel aluminium, dan instalasi pintu." },
      { step: "5", title: "Finishing & Branding", desc: "Finishing rapi serta opsi branding logo perusahaan pada bodi box." },
      { step: "6", title: "Quality Control & Serah Terima", desc: "Pemeriksaan akhir sebelum unit diserahkan siap beroperasi." },
    ],
  },
  {
    slug: "karoseri-box-freezer",
    title: "Karoseri Box Freezer",
    shortTitle: "Karoseri Box Freezer",
    tagline: "Jaga Suhu, Jaga Kualitas",
    desc: "Box freezer untuk menjaga suhu barang tetap stabil dan aman selama pengiriman. Ideal untuk produk makanan, farmasi, dan kebutuhan rantai dingin. Insulasi tebal dan unit pendingin berkualitas memastikan suhu terjaga sepanjang perjalanan.",
    img: "/images/services/karoseri-box-freezer/karoseri-box-freezer-03.webp",
    heroImg: "/images/services/karoseri-box-freezer/karoseri-box-freezer-01.webp",
    aboutImg: "/images/services/karoseri-box-freezer/karoseri-box-freezer-02.webp",
    heroAlt: "Karoseri box freezer buatan Berdikari Raya Service pada truck pengiriman produk rantai dingin",
    aboutAlt: "Detail karoseri box freezer dengan insulasi tebal dan interior food grade",

    icon: "Snowflake",
    metaDescription:
      "Jasa karoseri box freezer & chiller untuk truck rantai dingin di Bekasi & JABODETABEK. Insulasi PU foam tebal, unit pendingin Thermo King / Carrier, suhu stabil -20°C s.d. +5°C.",
    keywords: [
      "karoseri box freezer",
      "box freezer truck",
      "karoseri box pendingin",
      "box chiller truck",
      "karoseri box freezer Bekasi",
      "truck rantai dingin cold chain",
    ],
    serviceType: "Refrigerated Freezer Box Manufacturing",
    highlights: [
      "Insulasi PU Foam Tebal",
      "Pendingin Thermo King / Carrier",
      "Suhu -20°C s.d. +5°C",
      "Interior Food Grade",
      "Survey & Konsultasi Gratis",
    ],
    intro: {
      heading: "Menjaga Rantai Dingin Tetap Stabil dari Gudang hingga Tujuan",
      paragraphs: [
        "Produk beku, segar, maupun farmasi membutuhkan suhu yang terjaga sepanjang perjalanan. Kegagalan menjaga suhu dapat menurunkan kualitas produk, memicu kerugian, bahkan membahayakan konsumen. Karena itu insulasi dan unit pendingin yang tepat menjadi kunci.",
        "Berdikari Raya Service membuat box freezer dengan insulasi PU foam tebal, sambungan rapat, dan interior food grade yang higienis. Kami menyesuaikan kapasitas pendingin dengan jenis muatan agar suhu tetap stabil dan konsumsi daya efisien.",
      ],
    },
    painPointHeading: "Cocok untuk Anda yang Membutuhkan",
    painPoints: [
      "Pengiriman produk beku, segar, atau farmasi dengan suhu terjaga.",
      "Box dengan insulasi maksimal agar suhu tidak mudah bocor.",
      "Interior higienis food grade yang mudah dibersihkan.",
      "Unit pendingin andal seperti Thermo King atau Carrier.",
      "Rentang suhu fleksibel dari freezer hingga chiller.",
      "Solusi rantai dingin untuk distribusi harian yang konsisten.",
    ],
    features: [
      "Insulasi PU foam tebal",
      "Pendingin Thermo King / Carrier",
      "Suhu -20°C s.d. +5°C",
      "Lantai anti-slip food grade",
    ],
    benefits: [
      { title: "Rantai Dingin Terjaga", desc: "Suhu stabil menjaga kesegaran dan keamanan produk hingga tujuan." },
      { title: "Insulasi Maksimal", desc: "PU foam tebal meminimalkan kebocoran suhu dan beban kerja pendingin." },
      { title: "Higienis", desc: "Interior food grade mudah dibersihkan dan aman untuk produk konsumsi." },
    ],
    useCases: ["Makanan beku & seafood", "Produk farmasi & vaksin", "Daging & olahan", "Ice cream & dairy"],
    process: [
      { step: "1", title: "Konsultasi Kebutuhan", desc: "Menentukan jenis produk, target suhu, dan volume pengiriman." },
      { step: "2", title: "Survey & Pengukuran", desc: "Pengukuran chassis dan pemilihan kapasitas unit pendingin yang sesuai." },
      { step: "3", title: "Penawaran & Desain", desc: "Menyusun spesifikasi insulasi, unit pendingin, dan penawaran harga." },
      { step: "4", title: "Produksi & Insulasi", desc: "Pembuatan box, pemasangan insulasi PU foam, dan interior food grade." },
      { step: "5", title: "Instalasi Pendingin", desc: "Pemasangan dan pengaturan unit pendingin sesuai target suhu." },
      { step: "6", title: "Uji Suhu & Serah Terima", desc: "Pengujian kestabilan suhu sebelum unit diserahkan siap beroperasi." },
    ],
  },
  {
    slug: "hydraulic-system-truck",
    title: "Hydraulic System Truck",
    shortTitle: "Hidrolik System Truck",
    tagline: "Performa Angkat yang Andal",
    desc: "Solusi menyeluruh hydraulic system truck: mulai instalasi baru, perawatan berkala, hingga perbaikan untuk memastikan performa pengangkatan yang optimal. Tim ahli kami menangani semua merek dan tipe sistem hidrolik, dari dump truck, wing box, hingga fuel & lube truck.",
    img: "/images/services/hydraulic-system-truck/instalasi-hydraulic-system-truck-01.webp",
    heroImg: "/images/services/hydraulic-system-truck/instalasi-hydraulic-system-truck-01.webp",
    aboutImg: "/images/services/hydraulic-system-truck/service-hydraulic-system-truck-01.webp",
    heroAlt: "Instalasi hydraulic system truck oleh teknisi Berdikari Raya Service di Bekasi",
    aboutAlt: "Teknisi Berdikari Raya Service memeriksa komponen hydraulic pump dan cylinder truck",

    icon: "Settings",
    metaDescription:
      "Layanan hydraulic system truck lengkap: instalasi baru, service, dan perbaikan untuk dump truck, wing box, fuel truck, dan lube truck. Teknisi berpengalaman, semua merek, minim downtime.",
    keywords: [
      "hydraulic system truck",
      "instalasi hidrolik truck",
      "service hydraulic truck",
      "hidrolik dump truck",
      "hydraulic system Bekasi",
      "perbaikan hidrolik truck",
    ],
    serviceType: "Hydraulic System Installation & Service",
    highlights: [
      "Instalasi Sistem Baru",
      "Servis Berkala Terjadwal",
      "Perbaikan & Overhaul",
      "Uji Tekanan & Kalibrasi",
      "Semua Merek & Tipe",
    ],
    intro: {
      heading: "Satu Mitra untuk Seluruh Kebutuhan Hydraulic System Armada Anda",
      paragraphs: [
        "Hydraulic system adalah jantung dari fungsi angkat kendaraan kerja seperti dump truck, wing box, hingga fuel dan lube truck. Ketika sistem hidrolik bermasalah, armada berhenti bekerja dan produktivitas langsung terganggu.",
        "Berdikari Raya Service menyediakan solusi hydraulic system menyeluruh, mulai dari instalasi baru, perawatan terjadwal, hingga perbaikan dan overhaul. Untuk kebutuhan yang lebih spesifik, kami juga melayani instalasi dan service hydraulic khusus fuel, lube, dan water sprayer truck.",
      ],
    },
    painPointHeading: "Kami Siap Membantu Ketika",
    painPoints: [
      "Membutuhkan instalasi hydraulic system baru untuk armada operasional.",
      "Hydraulic pump kehilangan tekanan atau bekerja tidak normal.",
      "Cylinder bocor, lemah, atau kehilangan tenaga angkat.",
      "PTO tidak berfungsi normal saat sistem dioperasikan.",
      "Hose sering pecah atau fitting mengalami kebocoran.",
      "Sistem bekerja lambat dan menghambat operasional armada.",
    ],
    features: [
      "Instalasi sistem hidrolik baru",
      "Servis berkala terjadwal",
      "Penggantian seal & komponen",
      "Uji tekanan & kalibrasi sistem",
    ],
    benefits: [
      { title: "Operasional Lancar", desc: "Sistem hidrolik terawat meminimalkan downtime dan gangguan kerja." },
      { title: "Aman & Presisi", desc: "Kalibrasi dan uji tekanan memastikan pengangkatan aman dan akurat." },
      { title: "Semua Merek", desc: "Teknisi berpengalaman menangani berbagai tipe dan merek hidrolik." },
    ],
    useCases: ["Dump truck", "Wing box", "Fuel & lube truck", "Alat berat & industri"],
    process: [
      { step: "1", title: "Konsultasi Kebutuhan", desc: "Memahami jenis kendaraan, kebutuhan operasional, serta kendala yang dihadapi." },
      { step: "2", title: "Survey & Analisa", desc: "Pemeriksaan unit secara menyeluruh untuk menentukan solusi terbaik." },
      { step: "3", title: "Penawaran Teknis", desc: "Penyusunan proposal teknis beserta penawaran sesuai kebutuhan." },
      { step: "4", title: "Pengerjaan", desc: "Instalasi atau perbaikan dilakukan sesuai standar kualitas." },
      { step: "5", title: "Testing & Kalibrasi", desc: "Uji tekanan dan kalibrasi sistem sebelum unit diserahkan." },
      { step: "6", title: "Unit Siap Beroperasi", desc: "Armada kembali siap digunakan dengan performa optimal." },
    ],
  },
  {
    slug: "karoseri-repair",
    title: "Karoseri Repair",
    shortTitle: "Karoseri Repair",
    tagline: "Perbaikan Karoseri Kembali Prima",
    desc: "Perbaikan karoseri kendaraan niaga sesuai spesifikasi dan kebutuhan operasional Anda. Kami menangani berbagai jenis kerusakan karoseri, mulai dari body penyok, korosi, hingga kerusakan struktur agar unit kembali prima dan siap bekerja.",
    img: "/images/services/karoseri-repair/karoseri-repair-01.webp",
    heroImg: "/images/services/karoseri-repair/karoseri-repair-01.webp",
    aboutImg: "/images/services/karoseri-repair/karoseri-repair-01.webp",
    heroAlt: "Proses repair karoseri kendaraan niaga di workshop Berdikari Raya Service Bekasi",
    aboutAlt: "Teknisi Berdikari Raya Service mengerjakan perbaikan karoseri truck",

    icon: "Wrench",
    metaDescription:
      "Jasa karoseri repair kendaraan niaga di Bekasi & JABODETABEK. Perbaikan body penyok, korosi, repaint, hingga restorasi karoseri. Spare part berkualitas dan bergaransi.",
    keywords: [
      "karoseri repair",
      "repair body truck",
      "perbaikan karoseri kendaraan niaga",
      "repair karoseri Bekasi",
      "repaint body truck",
      "restorasi kendaraan niaga",
    ],
    serviceType: "Commercial Vehicle Body Repair",
    highlights: [
      "Analisa Kerusakan Gratis",
      "Spare Part Berkualitas",
      "Perbaikan Struktur",
      "Repaint & Finishing",
      "Garansi Perbaikan",
    ],
    intro: {
      heading: "Mengembalikan Kondisi Prima Karoseri Kendaraan Niaga Anda",
      paragraphs: [
        "Kendaraan niaga bekerja keras setiap hari, sehingga kerusakan karoseri, body penyok, hingga korosi adalah hal yang wajar terjadi. Membiarkannya terlalu lama dapat menurunkan nilai kendaraan dan mengganggu operasional bisnis.",
        "Berdikari Raya Service menangani perbaikan karoseri kendaraan niaga secara menyeluruh, mulai dari analisa kerusakan, penggantian komponen, perbaikan struktur, hingga repaint. Setiap pengerjaan disertai garansi agar Anda tenang.",
      ],
    },
    painPointHeading: "Cocok untuk Anda yang Mengalami",
    painPoints: [
      "Body kendaraan penyok, retak, atau mengalami kerusakan struktur.",
      "Korosi dan karat yang mulai menyebar pada bodi kendaraan.",
      "Karoseri yang mulai keropos dan perlu diperbaiki.",
      "Tampilan kendaraan kusam dan membutuhkan repaint menyeluruh.",
      "Kendaraan niaga lama yang perlu direstorasi kembali prima.",
      "Butuh spare part berkualitas dengan pengerjaan bergaransi.",
    ],
    features: [
      "Analisa kerusakan gratis",
      "Spare part berkualitas",
      "Perbaikan struktur karoseri",
      "Garansi perbaikan",
    ],
    benefits: [
      { title: "Kembali Prima", desc: "Perbaikan menyeluruh mengembalikan kekuatan dan tampilan karoseri kendaraan." },
      { title: "Pengerjaan Rapi", desc: "Ditangani teknisi berpengalaman dengan hasil rapi dan presisi." },
      { title: "Bergaransi", desc: "Setiap pengerjaan disertai garansi untuk ketenangan Anda." },
    ],
    useCases: ["Body penyok & rusak", "Perbaikan korosi", "Repaint & finishing", "Restorasi kendaraan niaga"],
    process: [
      { step: "1", title: "Analisa Kerusakan", desc: "Pemeriksaan menyeluruh untuk mengidentifikasi kerusakan dan kebutuhan." },
      { step: "2", title: "Rekomendasi & Penawaran", desc: "Menyusun rekomendasi perbaikan beserta estimasi biaya dan waktu." },
      { step: "3", title: "Persiapan Komponen", desc: "Penyiapan spare part berkualitas sesuai kebutuhan pengerjaan." },
      { step: "4", title: "Pengerjaan Karoseri", desc: "Perbaikan struktur dan body karoseri sesuai spesifikasi." },
      { step: "5", title: "Repaint & Finishing", desc: "Pengecatan ulang dan finishing agar tampilan kembali rapi." },
      { step: "6", title: "Quality Control & Garansi", desc: "Pemeriksaan akhir dan penyerahan unit dengan garansi perbaikan." },
    ],
  },
  {
    slug: "body-custom",
    title: "Body Custom",
    shortTitle: "Body Custom",
    tagline: "Kustomisasi Sesuai Kebutuhan Anda",
    desc: "Kustomisasi dan modifikasi body kendaraan niaga sesuai spesifikasi dan kebutuhan operasional Anda. Kami wujudkan desain body fungsional, mulai dari penyesuaian fungsi hingga modifikasi tampilan, agar kendaraan benar-benar sesuai kebutuhan bisnis Anda.",
    img: "/images/services/body-custom/body-custom-kendaraan-niaga-01.webp",
    heroImg: "/images/services/body-custom/body-custom-kendaraan-niaga-01.webp",
    aboutImg: "/images/services/body-custom/body-custom-kendaraan-niaga-02.webp",
    heroAlt: "Body custom kendaraan niaga hasil pengerjaan Berdikari Raya Service di Bekasi",
    aboutAlt: "Detail modifikasi dan kustomisasi body kendaraan niaga oleh Berdikari Raya Service",

    icon: "Wrench",
    metaDescription:
      "Jasa body custom kendaraan niaga di Bekasi & JABODETABEK. Kustomisasi & modifikasi fungsi body truck sesuai kebutuhan operasional bisnis. Pengerjaan rapi, presisi, dan bergaransi.",
    keywords: [
      "body custom",
      "custom body kendaraan niaga",
      "modifikasi body truck",
      "body custom Bekasi",
      "kustomisasi body truck",
      "modifikasi kendaraan niaga JABODETABEK",
    ],
    serviceType: "Commercial Vehicle Body Customization",
    highlights: [
      "Desain Sesuai Kebutuhan",
      "Modifikasi Fungsi",
      "Finishing Rapi & Presisi",
      "Konsultasi Desain",
      "Garansi Pengerjaan",
    ],
    intro: {
      heading: "Mewujudkan Body Kendaraan Niaga Sesuai Kebutuhan Operasional Anda",
      paragraphs: [
        "Setiap bisnis memiliki kebutuhan operasional yang berbeda, dan tidak selalu terpenuhi oleh body kendaraan standar. Kustomisasi body memungkinkan kendaraan disesuaikan agar benar-benar mendukung alur kerja dan produktivitas bisnis Anda.",
        "Berdikari Raya Service mengerjakan kustomisasi dan modifikasi body kendaraan niaga secara menyeluruh, mulai dari konsultasi desain, penyesuaian fungsi, hingga finishing. Kami wujudkan body fungsional yang rapi, presisi, dan sesuai spesifikasi kebutuhan Anda.",
      ],
    },
    painPointHeading: "Cocok untuk Anda yang Membutuhkan",
    painPoints: [
      "Modifikasi fungsi body agar sesuai operasional bisnis.",
      "Penyesuaian desain body untuk kebutuhan spesifik.",
      "Kustomisasi tampilan kendaraan agar lebih profesional.",
      "Penambahan fitur fungsional pada body kendaraan.",
      "Desain body yang belum tersedia pada unit standar.",
      "Pengerjaan modifikasi rapi dan presisi dengan garansi.",
    ],
    features: [
      "Desain sesuai kebutuhan",
      "Modifikasi fungsi",
      "Finishing rapi & presisi",
      "Garansi pengerjaan",
    ],
    benefits: [
      { title: "Sesuai Kebutuhan", desc: "Body dirancang menyesuaikan alur kerja dan kebutuhan operasional bisnis." },
      { title: "Custom Fleksibel", desc: "Modifikasi fungsi dan tampilan sesuai spesifikasi yang Anda inginkan." },
      { title: "Rapi & Presisi", desc: "Finishing rapi dengan pengerjaan presisi dan bergaransi." },
    ],
    useCases: ["Modifikasi fungsi", "Kustomisasi tampilan", "Penambahan fitur body", "Desain body khusus"],
    process: [
      { step: "1", title: "Konsultasi Desain", desc: "Memahami kebutuhan operasional dan menyusun konsep kustomisasi." },
      { step: "2", title: "Rekomendasi & Penawaran", desc: "Menyusun rekomendasi desain beserta estimasi biaya dan waktu." },
      { step: "3", title: "Persiapan Komponen", desc: "Penyiapan material dan komponen sesuai kebutuhan modifikasi." },
      { step: "4", title: "Pengerjaan Custom", desc: "Modifikasi dan kustomisasi body sesuai desain yang disepakati." },
      { step: "5", title: "Finishing", desc: "Finishing dan pengecatan agar tampilan rapi dan presisi." },
      { step: "6", title: "Quality Control & Garansi", desc: "Pemeriksaan akhir dan penyerahan unit dengan garansi pengerjaan." },
    ],
  },
  {
    slug: "karoseri-box-besi",
    title: "Karoseri Box Besi",
    shortTitle: "Karoseri Box Besi",
    tagline: "Kokoh & Tahan Muatan Berat",
    desc: "Karoseri box besi dengan struktur baja plat tebal yang kokoh dan tahan lama, dirancang untuk mengangkut muatan berat dan kebutuhan industri. Pilihan tepat untuk armada yang menuntut ketahanan maksimal dan usia pakai panjang di medan operasional yang menantang.",
    img: "/images/services/karoseri-box-besi/karoseri-box-besi-01.webp",
    heroImg: "/images/services/karoseri-box-besi/karoseri-box-besi-01.webp",
    aboutImg: "/images/services/karoseri-box-besi/karoseri-box-besi-01.webp",
    heroAlt: "Karoseri box besi baja plat tebal buatan Berdikari Raya Service pada truck angkut industri",
    aboutAlt: "Detail rangka baja karoseri box besi yang kokoh dengan finishing cat anti-karat",

    icon: "Box",
    metaDescription:
      "Jasa pembuatan karoseri box besi untuk truck angkut muatan berat di Bekasi & JABODETABEK. Baja plat tebal, cat anti-karat, kapasitas besar, dan konstruksi kokoh. Survey & konsultasi gratis.",
    keywords: [
      "karoseri box besi",
      "jasa box besi truck",
      "karoseri box besi Bekasi",
      "box besi muatan berat",
      "harga karoseri box besi",
      "pembuatan box besi JABODETABEK",
    ],
    serviceType: "Steel Box Body Manufacturing",
    highlights: [
      "Baja Plat Tebal",
      "Cat Anti-Karat",
      "Kapasitas Muatan Besar",
      "Konstruksi Kokoh",
      "Survey & Konsultasi Gratis",
    ],
    intro: {
      heading: "Box Besi yang Dirancang untuk Muatan Berat dan Pemakaian Ekstrem",
      paragraphs: [
        "Tidak semua muatan bisa ditangani box ringan. Untuk material konstruksi, barang industri, dan muatan berat lainnya, dibutuhkan box besi dengan struktur baja yang kuat agar tetap aman dan tahan lama meski dipakai intensif setiap hari.",
        "Berdikari Raya Service membuat karoseri box besi dengan baja plat tebal, rangka yang diperkuat, serta finishing cat anti-karat. Setiap unit dirancang menyesuaikan kapasitas dan dimensi chassis agar kekuatan struktur maksimal tanpa mengorbankan efisiensi ruang muat.",
      ],
    },
    painPointHeading: "Cocok untuk Anda yang Membutuhkan",
    painPoints: [
      "Box dengan struktur kokoh untuk mengangkut muatan berat.",
      "Konstruksi baja tahan lama meski dipakai intensif setiap hari.",
      "Finishing anti-karat agar box awet meski terpapar cuaca.",
      "Kapasitas muatan besar untuk kebutuhan industri dan proyek.",
      "Karoseri presisi mengikuti dimensi chassis kendaraan.",
      "Solusi angkut material konstruksi hingga barang industri.",
    ],
    features: [
      "Baja plat tebal berkualitas",
      "Cat anti-karat tahan cuaca",
      "Rangka diperkuat",
      "Kapasitas muatan besar",
    ],
    benefits: [
      { title: "Kokoh & Tahan Lama", desc: "Struktur baja plat tebal kuat menahan muatan berat dan pemakaian intensif." },
      { title: "Tahan Karat", desc: "Finishing cat anti-karat menjaga box tetap awet meski terpapar cuaca." },
      { title: "Kapasitas Besar", desc: "Dirancang untuk muatan besar sesuai kebutuhan industri dan proyek." },
    ],
    useCases: ["Material konstruksi", "Barang industri berat", "Distribusi umum", "Angkutan proyek"],
    process: [
      { step: "1", title: "Konsultasi Kebutuhan", desc: "Memahami jenis muatan, kapasitas, dan pola operasional kendaraan Anda." },
      { step: "2", title: "Survey & Pengukuran", desc: "Pengukuran chassis untuk menentukan dimensi box yang paling presisi." },
      { step: "3", title: "Penawaran & Desain", desc: "Menyusun desain box, spesifikasi baja, dan penawaran harga transparan." },
      { step: "4", title: "Produksi Karoseri", desc: "Pembuatan rangka baja, pemasangan plat, dan penguatan struktur." },
      { step: "5", title: "Finishing Anti-Karat", desc: "Pengecatan anti-karat dan finishing rapi pada seluruh bodi box." },
      { step: "6", title: "Quality Control & Serah Terima", desc: "Pemeriksaan akhir sebelum unit diserahkan siap beroperasi." },
    ],
  },
  {
    slug: "karoseri-dump-truck",
    title: "Karoseri Dump Truck",
    shortTitle: "Karoseri Dump Truck",
    tagline: "Bongkar Muatan Cepat & Andal",
    desc: "Jasa pembuatan karoseri dump truck untuk kebutuhan proyek, konstruksi, dan pengangkutan material. Dilengkapi sistem hidrolik andal untuk pengosongan muatan yang cepat dan aman, dengan bak baja tebal yang tahan terhadap benturan material keras seperti batu, pasir, dan tanah.",
    img: "/images/services/karoseri-dump-truck/karoseri-dump-truck-01.webp",
    heroImg: "/images/services/karoseri-dump-truck/karoseri-dump-truck-01.webp",
    aboutImg: "/images/services/karoseri-dump-truck/karoseri-dump-truck-01.webp",
    heroAlt: "Karoseri dump truck buatan Berdikari Raya Service untuk membongkar material proyek",
    aboutAlt: "Detail bak baja tebal karoseri dump truck dengan sistem hidrolik pengangkat",

    icon: "Hammer",
    metaDescription:
      "Jasa pembuatan karoseri dump truck untuk proyek & konstruksi di Bekasi & JABODETABEK. Sistem hidrolik andal, bak baja tebal, kapasitas 5–20 ton. Survey & konsultasi gratis.",
    keywords: [
      "karoseri dump truck",
      "jasa dump truck Bekasi",
      "pembuatan bak dump truck",
      "dump truck konstruksi",
      "harga karoseri dump truck",
      "dump truck JABODETABEK",
    ],
    serviceType: "Dump Truck Body Manufacturing",
    highlights: [
      "Sistem Lift Hidrolik",
      "Bak Baja Tebal",
      "Kapasitas 5–20 Ton",
      "Bongkar Muatan Cepat",
      "Survey & Konsultasi Gratis",
    ],
    intro: {
      heading: "Dump Truck yang Menunjang Produktivitas Proyek dan Konstruksi Anda",
      paragraphs: [
        "Di dunia konstruksi dan pertambangan, kecepatan bongkar muat menentukan produktivitas. Dump truck dengan sistem hidrolik yang andal dan bak yang kuat menjadi kunci agar material seperti pasir, batu, dan tanah bisa dipindahkan secara efisien tanpa hambatan.",
        "Berdikari Raya Service membuat karoseri dump truck dengan bak baja tebal, sistem hidrolik presisi, serta konstruksi yang tahan benturan material keras. Kami menyesuaikan kapasitas dan sudut angkat sesuai jenis material dan kebutuhan operasional armada Anda.",
      ],
    },
    painPointHeading: "Cocok untuk Anda yang Membutuhkan",
    painPoints: [
      "Kendaraan angkut material proyek dengan bongkar muat cepat.",
      "Bak baja tebal yang tahan benturan batu, pasir, dan tanah.",
      "Sistem hidrolik andal untuk pengosongan muatan yang aman.",
      "Kapasitas bak sesuai kebutuhan volume material harian.",
      "Konstruksi kuat untuk medan proyek dan tambang yang berat.",
      "Karoseri presisi mengikuti spesifikasi chassis kendaraan.",
    ],
    features: [
      "Sistem lift hidrolik andal",
      "Bak baja tebal tahan benturan",
      "Kapasitas 5–20 ton",
      "Sudut angkat optimal",
    ],
    benefits: [
      { title: "Bongkar Cepat", desc: "Sistem hidrolik memungkinkan pengosongan muatan cepat dan efisien." },
      { title: "Tahan Benturan", desc: "Bak baja tebal kuat menahan benturan material keras setiap hari." },
      { title: "Andal di Medan Berat", desc: "Konstruksi kokoh siap bekerja di area proyek dan tambang." },
    ],
    useCases: ["Proyek konstruksi", "Pertambangan", "Angkutan pasir & batu", "Pengangkutan tanah"],
    process: [
      { step: "1", title: "Konsultasi Kebutuhan", desc: "Memahami jenis material, volume muatan, dan medan operasional Anda." },
      { step: "2", title: "Survey & Pengukuran", desc: "Pengukuran chassis dan penentuan kapasitas bak yang sesuai." },
      { step: "3", title: "Penawaran & Desain", desc: "Menyusun desain bak, spesifikasi hidrolik, dan penawaran harga." },
      { step: "4", title: "Produksi Bak & Rangka", desc: "Pembuatan bak baja tebal dan penguatan rangka dump truck." },
      { step: "5", title: "Instalasi Hidrolik", desc: "Pemasangan sistem hidrolik pengangkat dan pengujian fungsi angkat." },
      { step: "6", title: "Uji Fungsi & Serah Terima", desc: "Pengujian sistem angkat sebelum unit diserahkan siap beroperasi." },
    ],
  },
  {
    slug: "karoseri-fuel-truck",
    title: "Karoseri Fuel Truck",
    shortTitle: "Karoseri Fuel Truck",
    tagline: "Distribusi BBM Aman & Terstandar",
    desc: "Pembuatan karoseri fuel truck untuk distribusi BBM dengan desain aman, kuat, dan sesuai standar keselamatan migas. Kami memastikan setiap unit dilengkapi tangki baja berkualitas, sistem perpipaan yang aman, serta perlengkapan keselamatan untuk menjamin distribusi bahan bakar yang andal.",
    img: "/images/services/karoseri-fuel-truck/karoseri-fuel-truck-01.webp",
    heroImg: "/images/services/karoseri-fuel-truck/karoseri-fuel-truck-01.webp",
    aboutImg: "/images/services/karoseri-fuel-truck/karoseri-fuel-truck-01.webp",
    heroAlt: "Karoseri fuel truck buatan Berdikari Raya Service untuk distribusi BBM dengan tangki baja terstandar",
    aboutAlt: "Detail sistem perpipaan dan tangki karoseri fuel truck sesuai standar keselamatan migas",

    icon: "Fuel",
    metaDescription:
      "Jasa pembuatan karoseri fuel truck untuk distribusi BBM di Bekasi & JABODETABEK. Tangki baja berkualitas, sistem perpipaan aman, sesuai standar migas, bergaransi kebocoran. Konsultasi gratis.",
    keywords: [
      "karoseri fuel truck",
      "jasa fuel truck Bekasi",
      "truck tangki BBM",
      "fuel truck standar migas",
      "pembuatan fuel truck",
      "karoseri fuel truck JABODETABEK",
    ],
    serviceType: "Fuel Truck Body Manufacturing",
    highlights: [
      "Tangki Baja Berkualitas",
      "Sistem Perpipaan Aman",
      "Standar Keselamatan Migas",
      "Garansi Kebocoran",
      "Survey & Konsultasi Gratis",
    ],
    intro: {
      heading: "Fuel Truck yang Mengutamakan Keselamatan dalam Setiap Distribusi BBM",
      paragraphs: [
        "Distribusi bahan bakar menuntut standar keselamatan yang tinggi. Kesalahan konstruksi tangki atau sistem perpipaan dapat menimbulkan risiko kebocoran hingga bahaya kebakaran. Karena itu setiap fuel truck harus dibangun dengan material dan sistem yang benar-benar teruji.",
        "Berdikari Raya Service membuat karoseri fuel truck dengan tangki baja berkualitas, sistem perpipaan yang aman, serta perlengkapan keselamatan sesuai standar migas. Kami memastikan setiap unit andal, kompartemen presisi, dan siap beroperasi untuk distribusi BBM yang aman.",
      ],
    },
    painPointHeading: "Cocok untuk Anda yang Membutuhkan",
    painPoints: [
      "Kendaraan distribusi BBM yang aman dan sesuai standar migas.",
      "Tangki baja berkualitas dengan sistem perpipaan andal.",
      "Perlengkapan keselamatan lengkap untuk mencegah risiko.",
      "Kompartemen tangki presisi sesuai kebutuhan volume BBM.",
      "Konstruksi bergaransi kebocoran untuk operasional tenang.",
      "Unit yang siap mendukung distribusi bahan bakar harian.",
    ],
    features: [
      "Tangki baja berkualitas tinggi",
      "Sistem perpipaan aman",
      "Perlengkapan keselamatan migas",
      "Garansi kebocoran",
    ],
    benefits: [
      { title: "Aman & Terstandar", desc: "Dibangun sesuai standar keselamatan migas untuk distribusi BBM." },
      { title: "Anti Kebocoran", desc: "Konstruksi tangki dan perpipaan presisi bergaransi kebocoran." },
      { title: "Andal Beroperasi", desc: "Material berkualitas menjaga performa unit dalam pemakaian harian." },
    ],
    useCases: ["Distribusi BBM industri", "SPBU mini & mobile", "Suplai bahan bakar tambang", "Operasional armada"],
    process: [
      { step: "1", title: "Konsultasi Kebutuhan", desc: "Memahami jenis BBM, volume distribusi, dan standar yang diperlukan." },
      { step: "2", title: "Survey & Pengukuran", desc: "Pengukuran chassis dan penentuan kapasitas tangki yang sesuai." },
      { step: "3", title: "Penawaran & Desain", desc: "Menyusun desain tangki, sistem perpipaan, dan penawaran harga." },
      { step: "4", title: "Produksi Tangki", desc: "Pembuatan tangki baja dan kompartemen sesuai spesifikasi." },
      { step: "5", title: "Instalasi Perpipaan & Safety", desc: "Pemasangan sistem perpipaan dan perlengkapan keselamatan." },
      { step: "6", title: "Uji Kebocoran & Serah Terima", desc: "Pengujian kebocoran sebelum unit diserahkan siap beroperasi." },
    ],
  },
  {
    slug: "karoseri-lube-truck",
    title: "Karoseri Lube Truck",
    shortTitle: "Karoseri Lube Truck",
    tagline: "Servis Pelumasan di Mana Saja",
    desc: "Jasa pembuatan karoseri lube truck untuk kebutuhan pelumasan dan servis lapangan di area industri dan pertambangan. Dirancang dengan multi-kompartemen pelumas, pompa hidrolik presisi, dan konstruksi tahan medan berat agar servis unit alat berat bisa dilakukan langsung di lokasi kerja.",
    img: "/images/services/karoseri-lube-truck/karoseri-lube-truck-02.webp",
    heroImg: "/images/services/karoseri-lube-truck/karoseri-lube-truck-01.webp",
    aboutImg: "/images/services/karoseri-lube-truck/karoseri-lube-truck-01.webp",
    heroAlt: "Karoseri lube truck buatan Berdikari Raya Service untuk servis pelumasan alat berat di lapangan",
    aboutAlt: "Detail multi-kompartemen pelumas dan pompa hidrolik pada karoseri lube truck",

    icon: "Droplets",
    metaDescription:
      "Jasa pembuatan karoseri lube truck untuk servis pelumasan lapangan di Bekasi & JABODETABEK. Multi-kompartemen pelumas, pompa presisi, tahan medan berat. Konsultasi & survey gratis.",
    keywords: [
      "karoseri lube truck",
      "jasa lube truck Bekasi",
      "lube truck tambang",
      "truck servis pelumasan",
      "pembuatan lube truck",
      "karoseri lube truck JABODETABEK",
    ],
    serviceType: "Lube Truck Body Manufacturing",
    highlights: [
      "Multi-Kompartemen Pelumas",
      "Pompa Hidrolik Presisi",
      "Tahan Medan Berat",
      "Servis Lapangan",
      "Survey & Konsultasi Gratis",
    ],
    intro: {
      heading: "Lube Truck yang Membawa Layanan Servis Langsung ke Lokasi Kerja",
      paragraphs: [
        "Di area tambang dan industri, memindahkan alat berat ke bengkel bukan pilihan yang efisien. Lube truck hadir sebagai solusi mobile untuk membawa berbagai jenis pelumas dan perlengkapan servis langsung ke lokasi kerja, sehingga downtime alat berat bisa ditekan.",
        "Berdikari Raya Service membuat karoseri lube truck dengan multi-kompartemen untuk berbagai jenis oli dan pelumas, pompa hidrolik presisi, serta konstruksi yang tahan menghadapi medan berat. Setiap unit dirancang agar proses servis lapangan berjalan cepat, rapi, dan aman.",
      ],
    },
    painPointHeading: "Cocok untuk Anda yang Membutuhkan",
    painPoints: [
      "Servis pelumasan alat berat langsung di lokasi kerja.",
      "Kendaraan dengan multi-kompartemen untuk beragam pelumas.",
      "Pompa presisi untuk pengisian oli yang cepat dan akurat.",
      "Konstruksi tahan medan berat area tambang dan industri.",
      "Solusi menekan downtime alat berat operasional.",
      "Unit servis lapangan yang rapi dan terorganisir.",
    ],
    features: [
      "Multi-kompartemen pelumas",
      "Pompa hidrolik presisi",
      "Desain tahan medan berat",
      "Perlengkapan servis lengkap",
    ],
    benefits: [
      { title: "Servis Mobile", desc: "Membawa layanan pelumasan langsung ke lokasi kerja alat berat." },
      { title: "Efisien & Rapi", desc: "Multi-kompartemen dan pompa presisi mempercepat proses servis." },
      { title: "Tangguh", desc: "Konstruksi kuat siap menghadapi medan tambang dan industri." },
    ],
    useCases: ["Pertambangan", "Perkebunan", "Kontraktor alat berat", "Servis lapangan industri"],
    process: [
      { step: "1", title: "Konsultasi Kebutuhan", desc: "Memahami jenis pelumas, jumlah kompartemen, dan medan operasional." },
      { step: "2", title: "Survey & Pengukuran", desc: "Pengukuran chassis dan penentuan konfigurasi kompartemen." },
      { step: "3", title: "Penawaran & Desain", desc: "Menyusun desain kompartemen, sistem pompa, dan penawaran harga." },
      { step: "4", title: "Produksi Kompartemen", desc: "Pembuatan tangki multi-kompartemen dan rangka lube truck." },
      { step: "5", title: "Instalasi Pompa & Sistem", desc: "Pemasangan pompa hidrolik dan sistem distribusi pelumas." },
      { step: "6", title: "Uji Fungsi & Serah Terima", desc: "Pengujian sistem pompa sebelum unit diserahkan siap beroperasi." },
    ],
  },
  {
    slug: "karoseri-water-sprayer",
    title: "Karoseri Water Sprayer Truck",
    shortTitle: "Karoseri Water Sprayer",
    tagline: "Penyiraman Merata & Efisien",
    desc: "Solusi water sprayer truck untuk penyiraman jalan, pengendalian debu proyek, dan area operasional industri. Dirancang dengan kapasitas tangki besar, sistem semprotan depan dan belakang, serta pompa tekanan tinggi agar penyiraman merata, efisien, dan menjangkau area kerja yang luas.",
    img: "/images/services/water-sprayer/karoseri-water-sprayer-02.webp",
    heroImg: "/images/services/water-sprayer/karoseri-water-sprayer-01.webp",
    aboutImg: "/images/services/water-sprayer/karoseri-water-sprayer-03.webp",
    heroAlt: "Karoseri water sprayer truck menyemprot air untuk pengendalian debu proyek",
    aboutAlt: "Karoseri water sprayer truck dengan tangki air besar dan sistem semprotan untuk penyiraman jalan dan pengendalian debu proyek",

    icon: "CloudRain",
    metaDescription:
      "Jasa pembuatan karoseri water sprayer truck untuk penyiraman jalan & proyek di Bekasi & JABODETABEK. Kapasitas 5000–12000 liter, semprotan depan-belakang, pompa tekanan tinggi. Konsultasi gratis.",
    keywords: [
      "karoseri water sprayer",
      "water sprayer truck",
      "truck penyiram jalan",
      "water tank truck proyek",
      "pembuatan water sprayer Bekasi",
      "water sprayer truck JABODETABEK",
    ],
    serviceType: "Water Sprayer Truck Body Manufacturing",
    highlights: [
      "Kapasitas 5000–12000 Liter",
      "Semprotan Depan & Belakang",
      "Pompa Tekanan Tinggi",
      "Penyiraman Merata",
      "Survey & Konsultasi Gratis",
    ],
    intro: {
      heading: "Water Sprayer Truck untuk Pengendalian Debu dan Penyiraman Area Luas",
      paragraphs: [
        "Debu di area proyek dan tambang bukan hanya mengganggu kenyamanan, tetapi juga berdampak pada keselamatan dan kesehatan pekerja. Water sprayer truck menjadi solusi efektif untuk mengendalikan debu, menyiram jalan, serta mendukung berbagai kebutuhan operasional lapangan.",
        "Berdikari Raya Service membuat karoseri water sprayer truck dengan tangki berkapasitas besar, sistem semprotan depan dan belakang, serta pompa tekanan tinggi. Setiap unit dirancang agar penyiraman merata dan efisien, menyesuaikan kebutuhan area kerja Anda.",
      ],
    },
    painPointHeading: "Cocok untuk Anda yang Membutuhkan",
    painPoints: [
      "Pengendalian debu di area proyek dan pertambangan.",
      "Penyiraman jalan dan area operasional secara merata.",
      "Kapasitas tangki besar untuk jangkauan penyiraman luas.",
      "Sistem semprotan depan dan belakang yang fleksibel.",
      "Pompa tekanan tinggi untuk hasil semprotan optimal.",
      "Unit tangguh yang siap bekerja di medan lapangan berat.",
    ],
    features: [
      "Kapasitas 5000–12000 liter",
      "Sistem semprotan depan & belakang",
      "Pompa tekanan tinggi",
      "Tangki anti-korosi",
    ],
    benefits: [
      { title: "Penyiraman Merata", desc: "Sistem semprotan depan dan belakang menjangkau area kerja luas." },
      { title: "Kapasitas Besar", desc: "Tangki besar mengurangi frekuensi pengisian ulang saat operasional." },
      { title: "Tekanan Optimal", desc: "Pompa tekanan tinggi menghasilkan semprotan air yang efektif." },
    ],
    useCases: ["Pengendalian debu proyek", "Penyiraman jalan", "Area pertambangan", "Perkebunan & lahan"],
    process: [
      { step: "1", title: "Konsultasi Kebutuhan", desc: "Memahami luas area, kebutuhan penyiraman, dan kapasitas tangki." },
      { step: "2", title: "Survey & Pengukuran", desc: "Pengukuran chassis dan penentuan konfigurasi sistem semprotan." },
      { step: "3", title: "Penawaran & Desain", desc: "Menyusun desain tangki, sistem pompa, dan penawaran harga." },
      { step: "4", title: "Produksi Tangki", desc: "Pembuatan tangki air anti-korosi dan rangka water sprayer." },
      { step: "5", title: "Instalasi Pompa & Nozzle", desc: "Pemasangan pompa tekanan tinggi dan sistem semprotan." },
      { step: "6", title: "Uji Semprot & Serah Terima", desc: "Pengujian sistem semprotan sebelum unit diserahkan siap beroperasi." },
    ],
  },
  {
    slug: "karoseri-wing-box",
    title: "Karoseri Wing Box",
    shortTitle: "Karoseri Wing Box",
    tagline: "Bongkar Muat Cepat dari Dua Sisi",
    desc: "Karoseri wing box dengan bukaan sayap hidrolik kanan dan kiri untuk mempercepat proses bongkar muat barang dalam kegiatan logistik dan distribusi. Akses dari dua sisi memungkinkan penanganan barang yang lebih efisien, cocok untuk gudang, ekspedisi, dan distribusi skala besar.",
    img: "/images/services/karoseri-wing-box/karoseri-wing-box-01.webp",
    heroImg: "/images/services/karoseri-wing-box/karoseri-wing-box-01.webp",
    aboutImg: "/images/services/karoseri-wing-box/karoseri-wing-box-01.webp",
    heroAlt: "Karoseri wing box buatan Berdikari Raya Service dengan bukaan sayap hidrolik pada truck distribusi",
    aboutAlt: "Detail mekanisme hidrolik bukaan sayap karoseri wing box untuk bongkar muat cepat",

    icon: "Truck",
    metaDescription:
      "Jasa pembuatan karoseri wing box untuk logistik & distribusi di Bekasi & JABODETABEK. Bukaan sayap hidrolik kanan-kiri, ruang muat luas, bongkar muat cepat. Survey & konsultasi gratis.",
    keywords: [
      "karoseri wing box",
      "jasa wing box truck",
      "wing box hidrolik",
      "karoseri wing box Bekasi",
      "pembuatan wing box",
      "wing box logistik JABODETABEK",
    ],
    serviceType: "Wing Box Body Manufacturing",
    highlights: [
      "Bukaan Sayap Kanan & Kiri",
      "Hidrolik Otomatis",
      "Ruang Muat Luas",
      "Bongkar Muat Cepat",
      "Survey & Konsultasi Gratis",
    ],
    intro: {
      heading: "Wing Box yang Mempercepat Bongkar Muat dalam Operasional Logistik",
      paragraphs: [
        "Dalam logistik skala besar, waktu bongkar muat sangat menentukan efisiensi. Wing box dengan bukaan sayap hidrolik dari kedua sisi memungkinkan proses loading dan unloading berlangsung jauh lebih cepat dibanding box konvensional, sekaligus memudahkan penggunaan forklift.",
        "Berdikari Raya Service membuat karoseri wing box dengan sistem hidrolik yang andal, ruang muat luas, dan konstruksi yang kokoh. Setiap unit dirancang agar bukaan sayap bekerja mulus dan aman, mendukung produktivitas gudang serta distribusi Anda.",
      ],
    },
    painPointHeading: "Cocok untuk Anda yang Membutuhkan",
    painPoints: [
      "Proses bongkar muat cepat dari kedua sisi kendaraan.",
      "Akses mudah untuk forklift saat loading dan unloading.",
      "Ruang muat luas untuk distribusi skala besar.",
      "Sistem hidrolik bukaan sayap yang andal dan aman.",
      "Konstruksi kokoh untuk pemakaian logistik intensif.",
      "Solusi efisiensi waktu untuk operasional gudang.",
    ],
    features: [
      "Bukaan sayap kanan & kiri",
      "Hidrolik otomatis",
      "Ruang muat luas",
      "Konstruksi kokoh",
    ],
    benefits: [
      { title: "Bongkar Muat Cepat", desc: "Bukaan sayap dua sisi mempercepat proses loading dan unloading." },
      { title: "Akses Forklift", desc: "Bukaan lebar memudahkan penggunaan forklift secara efisien." },
      { title: "Ruang Muat Luas", desc: "Desain optimal memaksimalkan kapasitas ruang muat barang." },
    ],
    useCases: ["Logistik skala besar", "Ekspedisi & distribusi", "Gudang & warehouse", "Distribusi FMCG"],
    process: [
      { step: "1", title: "Konsultasi Kebutuhan", desc: "Memahami jenis barang, volume, dan pola bongkar muat Anda." },
      { step: "2", title: "Survey & Pengukuran", desc: "Pengukuran chassis untuk menentukan dimensi wing box yang presisi." },
      { step: "3", title: "Penawaran & Desain", desc: "Menyusun desain box, sistem hidrolik sayap, dan penawaran harga." },
      { step: "4", title: "Produksi Karoseri", desc: "Pembuatan rangka, panel box, dan mekanisme bukaan sayap." },
      { step: "5", title: "Instalasi Hidrolik", desc: "Pemasangan sistem hidrolik bukaan sayap dan pengujian fungsi." },
      { step: "6", title: "Uji Fungsi & Serah Terima", desc: "Pengujian bukaan sayap sebelum unit diserahkan siap beroperasi." },
    ],
  },
  {
    slug: "karoseri-three-way-truck",
    title: "Karoseri Three Way Truck",
    shortTitle: "Karoseri Three Way Truck",
    tagline: "Bongkar Muatan ke Tiga Arah",
    desc: "Solusi dump truck three way dengan sistem bukaan bak fleksibel ke tiga arah untuk operasional yang lebih efisien. Sangat cocok untuk area kerja sempit dan kebutuhan bongkar muatan yang harus menyesuaikan posisi, memberikan fleksibilitas maksimal dalam pengosongan material.",
    img: "/images/services/karoseri-three-way-truck/karoseri-three-way-truck-01.webp",
    heroImg: "/images/services/karoseri-three-way-truck/karoseri-three-way-truck-01.webp",
    aboutImg: "/images/services/karoseri-three-way-truck/karoseri-three-way-truck-01.webp",
    heroAlt: "Karoseri three way truck buatan Berdikari Raya Service membongkar muatan ke tiga arah",
    aboutAlt: "Detail sistem hidrolik dan engsel bak karoseri three way truck yang fleksibel",

    icon: "Replace",
    metaDescription:
      "Jasa pembuatan karoseri three way truck di Bekasi & JABODETABEK. Sistem bukaan bak 3 arah, kontrol hidrolik akurat, cocok untuk area sempit. Survey & konsultasi gratis.",
    keywords: [
      "karoseri three way truck",
      "dump truck three way",
      "three way tipper",
      "karoseri three way Bekasi",
      "pembuatan three way truck",
      "three way truck JABODETABEK",
    ],
    serviceType: "Three Way Dump Truck Body Manufacturing",
    highlights: [
      "Bukaan Bak 3 Arah",
      "Kontrol Hidrolik Akurat",
      "Cocok Area Sempit",
      "Bongkar Fleksibel",
      "Survey & Konsultasi Gratis",
    ],
    intro: {
      heading: "Three Way Truck untuk Fleksibilitas Bongkar Muatan di Segala Kondisi",
      paragraphs: [
        "Tidak semua lokasi kerja memungkinkan bongkar muatan ke arah belakang. Three way truck hadir dengan kemampuan membuka bak ke tiga arah, sehingga pengosongan material bisa menyesuaikan kondisi lapangan, terutama di area kerja yang sempit atau memerlukan penempatan material yang presisi.",
        "Berdikari Raya Service membuat karoseri three way truck dengan sistem hidrolik yang akurat, engsel bak yang kuat, serta konstruksi yang tahan pemakaian intensif. Setiap unit dirancang agar bukaan tiga arah bekerja aman dan efisien sesuai kebutuhan operasional Anda.",
      ],
    },
    painPointHeading: "Cocok untuk Anda yang Membutuhkan",
    painPoints: [
      "Bongkar muatan fleksibel ke tiga arah sesuai lokasi.",
      "Operasional di area kerja sempit yang terbatas.",
      "Penempatan material yang presisi sesuai kebutuhan.",
      "Sistem hidrolik akurat untuk pengosongan aman.",
      "Konstruksi bak kuat untuk pemakaian intensif.",
      "Efisiensi waktu bongkar muat di berbagai kondisi.",
    ],
    features: [
      "Bukaan bak 3 arah",
      "Kontrol hidrolik akurat",
      "Cocok area sempit",
      "Engsel bak diperkuat",
    ],
    benefits: [
      { title: "Fleksibel", desc: "Bak dapat membuka ke tiga arah menyesuaikan kondisi lapangan." },
      { title: "Efisien di Area Sempit", desc: "Ideal untuk lokasi kerja terbatas yang butuh presisi bongkar." },
      { title: "Kontrol Akurat", desc: "Sistem hidrolik presisi menjaga pengosongan muatan tetap aman." },
    ],
    useCases: ["Proyek area sempit", "Pertanian & perkebunan", "Distribusi material", "Konstruksi perkotaan"],
    process: [
      { step: "1", title: "Konsultasi Kebutuhan", desc: "Memahami jenis material, kondisi lokasi, dan kebutuhan bongkar." },
      { step: "2", title: "Survey & Pengukuran", desc: "Pengukuran chassis dan penentuan kapasitas bak yang sesuai." },
      { step: "3", title: "Penawaran & Desain", desc: "Menyusun desain bak 3 arah, sistem hidrolik, dan penawaran harga." },
      { step: "4", title: "Produksi Bak & Rangka", desc: "Pembuatan bak dengan engsel tiga arah dan penguatan rangka." },
      { step: "5", title: "Instalasi Hidrolik", desc: "Pemasangan sistem hidrolik dan pengujian bukaan tiga arah." },
      { step: "6", title: "Uji Fungsi & Serah Terima", desc: "Pengujian sistem bukaan sebelum unit diserahkan siap beroperasi." },
    ],
  },
];



export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
