export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  img: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mengenal-karoseri-dan-perannya-dalam-industri",
    title: "Mengenal Apa Itu Karoseri dan Peran Vitalnya dalam Industri Logistik",
    excerpt: "Panduan lengkap untuk memahami apa itu karoseri, sejarah perkembangannya, dan mengapa industri modern sangat bergantung pada layanan karoseri yang berkualitas.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
    category: "Panduan",
    date: "12 Mei 2026",
    readTime: "5 menit",
    featured: true,
    content: `
      <h2>Apa Itu Karoseri?</h2>
      <p>Secara bahasa, kata <strong>karoseri</strong> berasal dari bahasa Belanda "<em>carrosserie</em>" yang merujuk pada rumah-rumahan atau badan dari sebuah kendaraan. Di Indonesia, karoseri merujuk pada industri atau bengkel yang membangun badan kendaraan (body building) di atas sasis atau rangka kendaraan bermotor, khusus untuk kendaraan niaga seperti bus dan truk.</p>
      
      <p>Banyak yang masih menyamakan pabrikan otomotif dengan pabrikan karoseri. Padahal, pabrik otomotif (seperti Hino, Mitsubishi, Isuzu) biasanya hanya memproduksi <em>chassis</em> (rangka) dan <em>cabin</em> (kepala truk). Untuk bagian belakangnya (bak, box, tangki, dll), diserahkan kepada industri karoseri.</p>

      <h2>Peran Vital Karoseri dalam Ekosistem Logistik</h2>
      <p>Industri logistik dan distribusi adalah urat nadi perekonomian. Namun, barang-barang yang berbeda membutuhkan perlakuan yang berbeda pula. Di sinilah karoseri mengambil peran krusial:</p>
      
      <ul>
        <li><strong>Kustomisasi sesuai Kebutuhan:</strong> Perusahaan farmasi membutuhkan <em>box freezer</em> dengan suhu minus, sementara perusahaan tambang membutuhkan <em>dump truck</em> baja tebal. Karoseri mewujudkan spesifikasi presisi ini.</li>
        <li><strong>Efisiensi Kapasitas:</strong> Desain karoseri yang tepat dapat memaksimalkan payload (kapasitas muatan) tanpa melanggar regulasi ODOL (Over Dimension Overload).</li>
        <li><strong>Keselamatan Jalan Raya:</strong> Konstruksi yang kuat dan perhitungan titik berat (center of gravity) yang benar mencegah risiko kecelakaan dan terguling.</li>
      </ul>

      <blockquote>"Karoseri bukan sekadar membuat kotak di belakang truk. Ini adalah ilmu rekayasa teknik (engineering) untuk memastikan keamanan barang, pengemudi, dan pengguna jalan lainnya."</blockquote>

      <h2>Mengapa Memilih Bengkel Karoseri Berpengalaman?</h2>
      <p>Membangun bodi truk tidak boleh asal-asalan. Dibutuhkan Surat Keputusan Rancang Bangun (SKRB) dari kementerian terkait. Berdikari Raya Service telah berpengalaman lebih dari 10 tahun memproduksi karoseri berstandar tinggi yang lolos uji KIR dan tahan banting di medan berat.</p>
    `,
  },
  {
    slug: "panduan-memilih-karoseri-truck-bisnis",
    title: "Panduan Memilih Jenis Karoseri Truck Sesuai Kebutuhan Bisnis Anda",
    excerpt: "Setiap bisnis punya kebutuhan logistik yang unik. Pelajari berbagai tipe karoseri truck dan temukan mana yang paling efisien untuk operasional perusahaan Anda.",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&q=80",
    category: "Industri",
    date: "10 Mei 2026",
    readTime: "6 menit",
    content: `
      <h2>Menyesuaikan Armada dengan Karakteristik Bisnis</h2>
      <p>Investasi armada truk bukanlah hal yang murah. Memilih sasis yang tepat adalah langkah pertama, namun memilih jenis <strong>karoseri truck</strong> yang akan menempel di atasnya adalah langkah krusial yang menentukan ROI (Return on Investment) bisnis Anda.</p>
      
      <p>Berikut adalah beberapa jenis karoseri truk paling umum dan peruntukannya:</p>

      <h3>1. Karoseri Bak Terbuka (Drop Side / Fixed Side)</h3>
      <p>Cocok untuk mengangkut material curah, hasil pertanian, atau barang material bangunan. Kelebihannya adalah kemudahan akses bongkar muat dari atas menggunakan crane atau dari samping (untuk drop side). Namun, barang rentan terhadap cuaca.</p>

      <h3>2. Karoseri Box Tertutup</h3>
      <p>Sangat krusial untuk barang FMCG (Fast Moving Consumer Goods), elektronik, dan paket kurir. Box melindungi muatan dari hujan, panas matahari, dan risiko pencurian. Terdapat berbagai bahan seperti besi, aluminium, dan fiberglass.</p>

      <h3>3. Karoseri Dump Truck</h3>
      <p>Raja di area tambang dan konstruksi. Menggunakan sistem hidrolik (hydraulic system) untuk memiringkan bak dan menumpahkan muatan (tanah, pasir, batu) dengan cepat. Membutuhkan baja mutu tinggi agar tahan terhadap benturan keras.</p>

      <h3>4. Karoseri Tangki (Tanker)</h3>
      <p>Dikhususkan untuk muatan cair seperti air (water sprayer), BBM (fuel truck), CPO, hingga bahan kimia. Desainnya sangat kompleks karena harus memperhitungkan sekat (baffle) di dalam tangki untuk mencegah efek gelombang cairan (sloshing) saat truk mengerem mendadak.</p>

      <h2>Tips Memilih Karoseri untuk Truk Anda</h2>
      <ul>
        <li><strong>Hitung Berat Kosong:</strong> Semakin berat bodi karoseri, semakin sedikit muatan yang bisa Anda bawa. Pilihlah material yang kuat namun ringan (seperti aluminium) jika Anda mengejar payload maksimal.</li>
        <li><strong>Perhatikan Regulasi Pemerintah:</strong> Jangan tergoda membuat dimensi berlebih (Over Dimension). Truk Anda akan kesulitan saat perpanjangan KIR atau dicegat petugas di jalan.</li>
        <li><strong>Layanan Purna Jual:</strong> Pastikan pembuat karoseri Anda memiliki layanan perbaikan (repair body) karena truk komersial pasti akan mengalami keausan seiring penggunaan.</li>
      </ul>
    `,
  },
  {
    slug: "keunggulan-karoseri-wingbox-logistik",
    title: "Mengapa Karoseri Wingbox Menjadi Primadona Industri Logistik Modern?",
    excerpt: "Waktu adalah uang. Ketahui bagaimana karoseri wingbox merevolusi proses bongkar muat barang menjadi berkali-kali lipat lebih cepat dan efisien.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80",
    category: "Tips & Trik",
    date: "05 Mei 2026",
    readTime: "4 menit",
    content: `
      <h2>Revolusi Kecepatan Distribusi</h2>
      <p>Dalam industri logistik dan <em>supply chain</em> modern, kecepatan bukanlah sekadar keunggulan kompetitif, melainkan syarat wajib untuk bertahan. Masalah terbesar pada truk box konvensional adalah <strong>bottleneck saat bongkar muat</strong>. Barang harus dikeluarkan satu per satu dari pintu belakang.</p>
      
      <p>Masalah tersebut terpecahkan secara elegan dengan hadirnya <strong>Karoseri Wingbox</strong>.</p>

      <h2>Apa itu Karoseri Wingbox?</h2>
      <p>Sesuai namanya, Wingbox adalah karoseri box tertutup yang kedua sisi sampingnya (kiri dan kanan) bisa dibuka layaknya sayap burung. Bukaan ini digerakkan oleh sistem hidrolik terkomputerisasi atau manual yang mengangkat panel samping dan atap sekaligus.</p>

      <h2>Keuntungan Utama Wingbox</h2>
      
      <h3>1. Waktu Bongkar Muat Super Cepat</h3>
      <p>Dengan sisi samping yang terbuka penuh, proses <em>loading/unloading</em> bisa dilakukan menggunakan beberapa <em>forklift</em> sekaligus dari sisi kiri dan kanan. Pekerjaan yang tadinya memakan waktu 2-3 jam kini bisa diselesaikan hanya dalam 30 menit.</p>

      <h3>2. Kemudahan Akses Barang Berseri (LIFO/FIFO)</h3>
      <p>Pada truk box biasa, barang yang masuk pertama (paling dalam) hanya bisa diambil terakhir (LIFO). Pada Wingbox, Anda bisa mengambil palet mana saja tanpa harus membongkar barang di depannya terlebih dahulu.</p>

      <h3>3. Perlindungan Muatan Maksimal</h3>
      <p>Saat sayap ditutup dan dikunci rapat, Wingbox menawarkan perlindungan yang sama baiknya dengan box konvensional terhadap hujan, debu, dan pencurian. Berdikari Raya Service melengkapi Wingbox dengan <em>seal</em> karet khusus anti-bocor.</p>

      <h2>Ideal Untuk Industri Apa Saja?</h2>
      <p>Wingbox paling ideal digunakan untuk angkutan palet (palletized cargo), industri FMCG, komponen otomotif, minuman kemasan, dan ekspedisi antar pulau/provinsi. Walau biaya investasinya sedikit lebih tinggi karena komponen hidroliknya, ROI-nya terbukti sangat cepat karena utilitas truk (jumlah ritase) meningkat tajam.</p>
    `,
  },
  {
    slug: "karoseri-box-aluminium-vs-besi",
    title: "Karoseri Aluminium vs Besi: Mana yang Terbaik untuk Truk Distribusi Anda?",
    excerpt: "Perbandingan mendalam antara karoseri box berbahan aluminium ringan dan besi solid. Ketahui mana yang lebih hemat bahan bakar dan mana yang lebih tahan banting.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    category: "Panduan",
    date: "28 April 2026",
    readTime: "5 menit",
    content: `
      <h2>Dilema Material: Berat vs Tahan Banting</h2>
      <p>Bagi pengusaha ekspedisi dan distribusi ritel, memilih material box untuk truk mereka (biasanya CDE - Colt Diesel Engkel, atau CDD - Colt Diesel Double) seringkali menjadi dilema. Dua pilihan utama di pasaran adalah <strong>Karoseri Box Aluminium</strong> dan <strong>Box Besi (Steel)</strong>. Mana yang lebih baik?</p>

      <h2>Mengenal Karoseri Box Aluminium</h2>
      <p>Box aluminium terbuat dari rangka besi ringan yang dilapisi oleh lembaran plat aluminium di sisi luar. Box jenis ini memiliki ciri khas bentuk lembaran aluminiumnya yang bergelombang (corrugated) untuk menambah kekuatan strukturnya.</p>
      
      <ul>
        <li><strong>Keunggulan:</strong> Bobotnya sangat ringan! Ini berarti truk Anda akan <strong>jauh lebih irit BBM</strong> dan keausan ban berkurang drastis saat melaju kosong. Selain itu, payload barang yang bisa dibawa menjadi lebih besar. Aluminium juga tahan karat seumur hidup.</li>
        <li><strong>Kekurangan:</strong> Rentan penyok jika tertabrak atau memuat barang keras bersudut tajam. Perbaikan plat aluminium yang robek juga relatif lebih sulit dibanding melas besi.</li>
        <li><strong>Ideal untuk:</strong> Paket kurir e-commerce, makanan kering, garmen, plastik, dan barang ringan lainnya.</li>
      </ul>

      <h2>Mengenal Karoseri Box Besi</h2>
      <p>Terbuat dari rangka besi solid dan plat baja tebal. Tampilannya lebih kaku dan polos dibandingkan aluminium.</p>

      <ul>
        <li><strong>Keunggulan:</strong> Sangat kokoh dan tahan banting. Tidak mudah penyok meski terbentur beban berat dari dalam maupun dari luar. Sangat aman dari risiko pembobolan atau pencurian. Perbaikannya pun mudah, cukup dilas dan dicat ulang.</li>
        <li><strong>Kekurangan:</strong> Bobot kosongnya (tare weight) sangat berat. Truk akan lebih boros BBM dan tarikan mesin terasa lebih berat. Risiko karat (korosi) mengintai jika cat tergores dan tidak segera ditangani.</li>
        <li><strong>Ideal untuk:</strong> Barang material keras (besi, keramik), suku cadang berat, mesin industri, dan operasional dengan risiko benturan tinggi.</li>
      </ul>

      <h2>Kesimpulan dari Berdikari Raya Service</h2>
      <p>Tidak ada yang menang atau kalah mutlak. Jika rute truk Anda dominan di jalan tol, mengangkut barang consumer goods (ringan), dan Anda mengejar efisiensi biaya bahan bakar, maka <strong>Box Aluminium adalah pilihan yang jauh lebih cerdas</strong>. Namun jika Anda bergerak di sektor industri berat, selalu pilih Box Besi untuk keawetan jangka panjang.</p>
    `,
  }
];
