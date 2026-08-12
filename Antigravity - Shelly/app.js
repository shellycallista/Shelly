// INITIAL MOCK DATA POSTS
const initialPosts = [
    {
        id: 'post-1',
        category: 'Informatika',
        title: 'Materi Lengkap Bilangan Biner: Pengertian, Fungsi, Nilai Tempat, & Konversi',
        date: '05 Ags 2026',
        image: 'Gambar Bilangan Biner.jpeg',
        tags: ['Biner', 'Informatika', 'Sistem Bilangan', 'Konversi'],
        summary: 'Penjelasan mengenai sistem bilangan biner berbasis 2 (0 dan 1), fungsi dalam komputer, nilai tempat, serta tata cara konversi desimal ke biner.',
        content: 'PENGERTIAN BILANGAN BINER:\nBilangan biner adalah sistem bilangan yang hanya menggunakan dua angka, yaitu 0 dan 1. Sistem bilangan ini banyak digunakan dalam komputer dan teknologi digital karena komputer bekerja dengan dua keadaan, yaitu nyala dan mati, yang dapat diwakili oleh angka 1 dan 0.\n\nBilangan biner memiliki basis 2, sedangkan bilangan yang biasa kita gunakan sehari-hari adalah bilangan desimal yang memiliki basis 10.\n\nFUNGSI BILANGAN BINER:\nBilangan biner digunakan untuk menyimpan dan mengolah data di dalam komputer. Semua data seperti angka, huruf, gambar, suara, dan video pada dasarnya dapat diubah menjadi bentuk biner agar dapat diproses oleh komputer.\n\nNILAI TEMPAT BILANGAN BINER:\nSetiap posisi angka dalam bilangan biner memiliki nilai berdasarkan pangkat 2.\n\nContohnya: 1011₂\nDari kanan ke kiri, nilai tempatnya adalah:\n- 1 × 2⁰ = 1\n- 1 × 2¹ = 2\n- 0 × 2² = 0\n- 1 × 2³ = 8\n\nKemudian dijumlahkan: 8 + 0 + 2 + 1 = 11\nJadi, 1011₂ = 11₁₀.\n\nKONVERSI DESIMAL KE BINER:\nUntuk mengubah bilangan desimal menjadi biner, bilangan tersebut dapat dibagi dengan 2 secara berulang. Sisa dari setiap pembagian kemudian dibaca dari bawah ke atas.\n\nContoh mengubah 13₁₀ menjadi biner:\n- 13 ÷ 2 = 6 sisa 1\n- 6 ÷ 2 = 3 sisa 0\n- 3 ÷ 2 = 1 sisa 1\n- 1 ÷ 2 = 0 sisa 1\n\nDibaca dari bawah ke atas: 1101₂\nJadi, 13₁₀ = 1101₂.\n\nKESIMPULAN:\nBilangan biner adalah sistem bilangan berbasis 2 yang hanya menggunakan angka 0 dan 1. Bilangan ini sangat penting dalam teknologi komputer karena digunakan untuk merepresentasikan dan memproses berbagai macam data. Dengan memahami bilangan biner, kita dapat mengetahui salah satu dasar cara kerja komputer dalam mengolah informasi.',
        code: `// Algoritma Konversi Desimal ke Biner (JavaScript)\nfunction decimalToBinary(decimal) {\n    if (decimal === 0) return "0";\n    let binary = "";\n    let num = decimal;\n    while (num > 0) {\n        binary = (num % 2) + binary;\n        num = Math.floor(num / 2);\n    }\n    return binary;\n}\n\nconsole.log(decimalToBinary(13)); // Output: "1101"`
    },
    {
        id: 'post-2',
        category: 'Informatika',
        title: 'Materi Lengkap Topologi Jaringan Komputer: Pengertian, Jenis, & Analisis',
        date: '02 Ags 2026',
        image: 'Gambar Topologi.jpeg',
        tags: ['Topologi', 'Jaringan', 'Informatika', 'Network'],
        summary: 'Penjelasan lengkap mengenai topologi jaringan komputer, pola hubungan antarperangkat, serta kelebihan dan kekurangan dari topologi Bus, Star, Ring, Mesh, Tree, dan Hybrid.',
        content: 'PENGERTIAN TOPOLOGI JARINGAN:\nTopologi jaringan adalah pola atau bentuk hubungan antara perangkat-perangkat dalam sebuah jaringan komputer. Topologi menentukan bagaimana komputer, server, dan perangkat jaringan lainnya saling terhubung dan berkomunikasi.\n\nPemilihan topologi dapat memengaruhi kecepatan, keamanan, biaya, serta kemudahan dalam mengelola jaringan.\n\nJENIS-JENIS TOPOLOGI JARINGAN:\n\n1. Topologi Bus\nTopologi bus menggunakan satu kabel utama sebagai jalur komunikasi. Semua komputer terhubung pada kabel tersebut.\n- Kelebihan: Menggunakan kabel yang relatif sedikit, biaya pemasangan lebih murah, dan sederhana untuk jaringan kecil.\n- Kekurangan: Jika kabel utama rusak maka seluruh jaringan terganggu, kecepatan menurun jika banyak perangkat terhubung, dan sulit mengetahui lokasi kerusakan.\n\n2. Topologi Star\nTopologi star menghubungkan setiap komputer ke satu perangkat pusat, biasanya berupa switch atau hub.\n- Kelebihan: Mudah dipasang dan dikelola, jika satu kabel rusak komputer lain tetap bekerja, dan mudah mendeteksi gangguan.\n- Kekurangan: Membutuhkan lebih banyak kabel, jika perangkat pusat rusak seluruh jaringan terganggu, dan biaya pemasangan lebih tinggi.\n\n3. Topologi Ring\nTopologi ring menghubungkan setiap perangkat hingga membentuk lingkaran atau cincin. Data berpindah dari satu perangkat ke perangkat lainnya melalui jalur tersebut.\n- Kelebihan: Aliran data cukup teratur dan tidak membutuhkan perangkat pusat.\n- Kekurangan: Jika salah satu bagian jaringan mengalami kerusakan maka seluruh jaringan terganggu, serta penambahan/pengurangan perangkat cukup sulit.\n\n4. Topologi Mesh\nTopologi mesh menghubungkan perangkat dengan banyak perangkat lainnya, sehingga terdapat beberapa jalur untuk mengirim data.\n- Kelebihan: Tingkat keandalan tinggi, jika satu jalur rusak data dapat menggunakan jalur lain, cocok untuk jaringan dengan keamanan & kestabilan tinggi.\n- Kekurangan: Membutuhkan banyak kabel dan perangkat, biaya mahal, serta pengelolaan lebih rumit.\n\n5. Topologi Tree\nTopologi tree merupakan gabungan dari topologi star dan bus dengan bentuk seperti pohon yang memiliki tingkatan atau cabang.\n- Kelebihan: Mudah dikembangkan menjadi jaringan besar, memudahkan pengelompokan perangkat, dan pengelolaan berdasarkan cabang.\n- Kekurangan: Membutuhkan banyak kabel & perangkat, jika bagian utama bermasalah beberapa cabang ikut terganggu.\n\n6. Topologi Hybrid\nTopologi hybrid merupakan gabungan dari dua atau lebih jenis topologi jaringan yang disesuaikan dengan kebutuhan tertentu.\n- Kelebihan: Sangat fleksibel dan dapat digunakan untuk jaringan besar dan kompleks.\n- Kekurangan: Biaya pemasangan mahal serta perancangan dan pengelolaannya lebih rumit.\n\nKESIMPULAN:\nTopologi jaringan adalah bentuk atau pola hubungan antarperangkat dalam jaringan komputer. Pemilihan jenis topologi (Bus, Star, Ring, Mesh, Tree, atau Hybrid) harus disesuaikan dengan kebutuhan, jumlah perangkat, biaya, dan kondisi jaringan.',
        code: null
    },
    {
        id: 'post-3',
        category: 'Informatika',
        title: 'Materi Lengkap Vibe Coding: Pengertian, Cara Kerja, Kelebihan, & Contoh',
        date: '28 Jul 2026',
        image: 'Gambar Vibe Coding.jpeg',
        tags: ['VibeCoding', 'AI', 'Informatika', 'Programming', 'Prompting'],
        summary: 'Penjelasan lengkap mengenai Vibe Coding, cara membuat aplikasi dengan bantuan AI berdasarkan instruksi bahasa manusia, cara kerja, kelebihan, kekurangan, serta contoh penggunaannya.',
        content: 'PENGERTIAN VIBE CODING:\nVibe coding adalah cara membuat program atau aplikasi dengan memanfaatkan kecerdasan buatan (AI) untuk membantu menulis kode berdasarkan instruksi atau perintah yang diberikan menggunakan bahasa sehari-hari. Dalam metode ini, seseorang tidak harus menulis seluruh kode secara manual, tetapi dapat menjelaskan apa yang ingin dibuat kepada AI.\n\nIstilah vibe coding mulai populer ketika kemampuan AI dalam menghasilkan kode semakin berkembang. AI dapat membantu membuat struktur program, menulis kode, menemukan kesalahan, serta memberikan saran untuk memperbaiki program.\n\nCARA KERJA VIBE CODING:\nVibe coding biasanya dilakukan dengan memberikan prompt atau instruksi kepada AI. Pengguna menjelaskan fitur atau tampilan yang ingin dibuat, kemudian AI menghasilkan kode sesuai instruksi tersebut.\n\nContoh perintah/prompt:\n"Buatkan website sederhana untuk menampilkan daftar tugas sekolah dengan desain modern dan responsif."\n\nAI kemudian dapat menghasilkan kode HTML, CSS, JavaScript, atau bahasa pemrograman lainnya. Pengguna dapat mencoba kode tersebut dan memberikan instruksi tambahan jika ada bagian yang ingin diubah.\n\nKELEBIHAN VIBE CODING:\n- Mempercepat proses pembuatan program dalam waktu singkat.\n- Membantu pemula membuat program tanpa harus menguasai semua sintaks pemrograman.\n- Memudahkan mencari & memperbaiki error pada kode.\n- Meningkatkan kreativitas mencoba berbagai ide dan fitur baru.\n- Menghemat waktu untuk membuat kode sederhana atau berulang.\n\nKEKURANGAN VIBE CODING:\n- Kode yang dihasilkan AI belum tentu selalu benar dan tetap perlu diperiksa.\n- Pengguna dapat menjadi terlalu bergantung pada AI jika tidak memahami dasar pemrograman.\n- Kode yang dibuat AI terkadang kurang efisien atau tidak sesuai kebutuhan.\n- Ada kemungkinan muncul masalah keamanan jika kode tidak diperiksa dengan baik.\n- Pengguna tetap perlu memahami konsep dasar pemrograman untuk melakukan validasi.\n\nCONTOH PENGGUNAAN VIBE CODING:\n- Membuat website & aplikasi sederhana.\n- Membuat permainan (game) sederhana & program pengolah data.\n- Memperbaiki kesalahan (debug) pada kode.\n- Membuat desain antarmuka aplikasi & menambahkan fitur baru.\n\nKESIMPULAN:\nVibe coding merupakan metode pemrograman yang memanfaatkan AI untuk membantu membuat dan mengembangkan kode berdasarkan instruksi pengguna. Metode ini membuat proses pemrograman menjadi lebih cepat dan mudah. Namun, hasil dari AI tetap harus diperiksa dan dipahami agar program yang dibuat aman, benar, dan sesuai kebutuhan. Oleh karena itu, vibe coding sebaiknya digunakan sebagai alat bantu dalam belajar dan membuat program, bukan sebagai pengganti pemahaman dasar tentang pemrograman.',
        code: null
    },
    {
        id: 'post-4',
        category: 'Informatika',
        title: 'Materi Lengkap Hukum ITE: Pengertian, Tujuan, Etika Digital, & Pelanggaran',
        date: '20 Jul 2026',
        image: 'Gambar Hukum ITE.jpeg',
        tags: ['HukumITE', 'Informatika', 'EtikaDigital', 'UUITE', 'KeamananSiber'],
        summary: 'Penjelasan lengkap mengenai Hukum ITE (Informasi dan Transaksi Elektronik) di Indonesia, undang-undang pengatur, tujuan kepastian hukum, etika berinternet, serta pentingnya bagi pelajar.',
        content: 'PENGERTIAN HUKUM ITE:\nHukum ITE adalah aturan yang mengatur informasi, transaksi, dan aktivitas yang dilakukan melalui teknologi elektronik dan internet di Indonesia. ITE merupakan singkatan dari Informasi dan Transaksi Elektronik.\n\nDi Indonesia, aturan ini diatur dalam Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik, yang kemudian mengalami beberapa perubahan, termasuk melalui UU Nomor 1 Tahun 2024.\n\nTUJUAN HUKUM ITE:\n- Memberikan kepastian hukum dalam penggunaan teknologi elektronik.\n- Melindungi masyarakat dalam melakukan transaksi elektronik.\n- Mencegah penyalahgunaan teknologi dan internet.\n- Menjaga keamanan serta ketertiban dalam aktivitas digital.\n- Memberikan perlindungan terhadap data dan informasi elektronik.\n\nCONTOH PERILAKU YANG BERKAITAN DENGAN HUKUM ITE:\nDalam menggunakan internet, kita harus berhati-hati karena beberapa tindakan dapat memiliki konsekuensi hukum, seperti:\n1. Menyebarkan informasi palsu atau menyesatkan dalam kondisi yang diatur oleh hukum.\n2. Melakukan penghinaan atau pencemaran nama baik melalui media elektronik.\n3. Menyebarkan konten yang dilarang oleh peraturan perundang-undangan.\n4. Melakukan akses terhadap sistem elektronik orang lain tanpa izin.\n5. Melakukan penipuan atau tindakan merugikan melalui media elektronik.\n6. Menyebarkan atau menggunakan data pribadi orang lain secara tidak sah.\n\nETIKA DALAM MENGGUNAKAN INTERNET:\nSelain memahami hukum, pengguna internet juga perlu menerapkan etika digital:\n- Memeriksa kebenaran informasi sebelum membagikannya.\n- Menggunakan bahasa yang sopan ketika berkomunikasi.\n- Menghormati privasi orang lain & tidak menyebarkan data pribadi tanpa izin.\n- Menghargai hak cipta dan karya orang lain.\n- Tidak melakukan perundungan atau cyberbullying.\n- Bertanggung jawab atas konten yang dibuat dan dibagikan.\n\nPENTINGNYA HUKUM ITE BAGI PELAJAR:\nHukum ITE penting dipahami oleh pelajar karena media sosial dan teknologi sudah menjadi bagian dari kehidupan sehari-hari. Pelajar perlu mengetahui batasan dalam menggunakan internet agar dapat terhindar dari tindakan yang merugikan diri sendiri maupun orang lain. Dengan memahami Hukum ITE dan menerapkan etika digital, kita dapat menggunakan teknologi secara bijak, aman, bertanggung jawab, dan sesuai dengan aturan yang berlaku.\n\nKESIMPULAN:\nHukum ITE merupakan aturan yang mengatur penggunaan informasi dan teknologi elektronik di Indonesia. Hukum ini bertujuan memberikan kepastian dan perlindungan dalam aktivitas digital serta mencegah penyalahgunaan teknologi. Oleh karena itu, setiap pengguna internet perlu memahami aturan dan menerapkan etika digital agar teknologi dapat digunakan secara positif dan bertanggung jawab.',
        code: null
    },
    {
        id: 'post-5',
        category: 'Bahasa Indonesia',
        title: 'Teks Laporan Hasil Observasi: Perkembangan Teknologi Digital Sekolah',
        date: '04 Ags 2026',
        tags: ['LHO', 'Teks Observasi', 'Bahasa Indonesia'],
        summary: 'Laporan observasi sistemik mengenai pemanfaatan sarana lab komputer dan media pembelajaran digital di lingkungan sekolah.',
        content: 'PERNYATAAN UMUM:\nPerkembangan teknologi informasi memberikan pengaruh besar terhadap dunia pendidikan. Penggunaan teknologi dalam proses pembelajaran tidak hanya membantu guru dalam menyampaikan materi, tetapi juga memberikan kesempatan kepada peserta didik untuk memperoleh pengalaman belajar yang lebih menarik, interaktif, dan sesuai dengan perkembangan zaman.\n\nSalah satu bentuk pemanfaatan teknologi di lingkungan sekolah adalah penggunaan laboratorium komputer dan media pembelajaran digital. Laboratorium komputer dapat digunakan sebagai sarana untuk meningkatkan keterampilan peserta didik dalam mengoperasikan teknologi, mencari informasi, mengolah data, serta menyelesaikan berbagai tugas pembelajaran. Sementara itu, media pembelajaran digital seperti video pembelajaran, presentasi interaktif, aplikasi pendidikan, dan platform pembelajaran daring dapat membantu peserta didik memahami materi secara lebih mudah.\n\nOleh karena itu, observasi sistemik ini dilakukan untuk mengetahui bagaimana sarana laboratorium komputer dan media pembelajaran digital dimanfaatkan dalam kegiatan pendidikan di lingkungan sekolah, termasuk kondisi sarana, pola penggunaannya, manfaat, serta kendala yang dihadapi.\n\nDESKRIPSI BAGIAN:\nFasilitas laboratorium komputer memiliki 36 unit komputer yang terhubung ke jaringan internet broadband. Berdasarkan pengamatan, siswa secara aktif memanfaatkan fasilitas ini untuk pengerjaan tugas coding Informatika, riset esai Bahasa Indonesia, dan presentasi digital.\n\nDESKRIPSI MANFAAT:\nPemanfaatan laboratorium komputer dan media pembelajaran digital terbukti meningkatkan kemandirian, efektivitas, serta keterampilan teknis siswa dalam menyusun karya tulis maupun proyek web.',
        code: null
    },
    {
        id: 'post-6',
        category: 'Bahasa Indonesia',
        title: 'Materi Lengkap Teks Anekdot: Pengertian, Tujuan, Ciri, & Struktur',
        date: '30 Jul 2026',
        tags: ['Anekdot', 'Bahasa Indonesia', 'Sastra', 'Materi'],
        summary: 'Rangkuman lengkap mengenai pengertian, tujuan, ciri-ciri, struktur (Abstraksi - Koda), dan kaidah kebahasaan teks anekdot.',
        content: '1. Pengertian\nTeks anekdot adalah cerita singkat yang lucu atau menghibur, tetapi biasanya mengandung kritik atau sindiran terhadap suatu keadaan atau perilaku.\n\n2. Tujuan\n- Menghibur pembaca.\n- Menyampaikan kritik atau sindiran.\n- Menyampaikan pesan atau pelajaran dengan cara yang menarik.\n\n3. Ciri-Ciri\n- Bersifat lucu atau menghibur.\n- Mengandung sindiran atau kritik.\n- Ceritanya singkat dan menarik.\n- Biasanya berkaitan dengan kejadian dalam kehidupan sehari-hari.\n- Memiliki pesan atau makna tertentu.\n\n4. Struktur Teks Anekdot\n- Abstraksi → gambaran awal tentang isi cerita.\n- Orientasi → pengenalan tokoh, waktu, tempat, dan situasi.\n- Krisis → munculnya masalah atau kejadian unik/lucu.\n- Reaksi → tanggapan atau penyelesaian terhadap masalah.\n- Koda → bagian akhir yang berisi kesimpulan atau pesan.\n\n5. Kaidah Kebahasaan\n- Menggunakan kata kerja.\n- Menggunakan kalimat langsung/dialog.\n- Menggunakan konjungsi (kemudian, lalu, tetapi, karena).\n- Menggunakan keterangan waktu.\n- Menggunakan pertanyaan retoris.\n- Menggunakan bahasa yang bersifat sindiran atau humor.',
        code: null
    },
    {
        id: 'post-7',
        category: 'Bahasa Indonesia',
        title: 'Materi Lengkap Teks Biografi: Pengertian, Ciri, Struktur, & Nilai Keteladanan',
        date: '22 Jul 2026',
        summary: 'Rangkuman lengkap materi Teks Biografi meliputi pengertian, tujuan, ciri-ciri, struktur, kaidah kebahasaan, dan nilai-nilai keteladanan.',
        content: '1. Pengertian\nTeks biografi adalah teks yang berisi kisah hidup seseorang yang ditulis oleh orang lain. Biasanya, tokoh yang diceritakan merupakan seseorang yang memiliki prestasi, jasa, atau pengalaman yang dapat diteladani.\n\n2. Tujuan\n- Mengetahui perjalanan hidup seorang tokoh.\n- Mengetahui prestasi dan perjuangan tokoh.\n- Meneladani sikap dan nilai positif dari tokoh.\n- Memberikan inspirasi kepada pembaca.\n\n3. Ciri-Ciri\n- Menceritakan kehidupan nyata seorang tokoh.\n- Ditulis berdasarkan fakta.\n- Memuat identitas, perjalanan hidup, perjuangan, dan prestasi tokoh.\n- Mengandung nilai atau sikap yang dapat diteladani.\n- Menggunakan urutan waktu atau kronologis.\n\n4. Struktur Teks Biografi\n- Orientasi → berisi pengenalan tokoh, seperti nama, tempat dan tanggal lahir, serta latar belakang.\n- Peristiwa penting → berisi perjalanan hidup, pendidikan, perjuangan, pengalaman, dan prestasi tokoh.\n- Reorientasi → berisi kesimpulan atau pandangan penulis terhadap tokoh. Bagian ini bersifat opsional.\n\n5. Kaidah Kebahasaan\n- Menggunakan kata ganti orang ketiga, seperti ia, dia, beliau, atau mereka.\n- Menggunakan kata kerja tindakan, seperti belajar, bekerja, berjuang, menulis.\n- Menggunakan kata sifat, seperti rajin, gigih, cerdas, disiplin.\n- Menggunakan konjungsi temporal, seperti kemudian, setelah itu, selanjutnya, pada akhirnya.\n- Menggunakan keterangan waktu dan tempat.\n- Menggunakan bahasa yang berdasarkan fakta.\n\n6. Nilai Keteladanan\nTeks biografi biasanya mengandung nilai positif yang dapat ditiru, seperti kerja keras, pantang menyerah, disiplin, tanggung jawab, kejujuran, keberanian, dan kepedulian.',
        code: null
    }
];

// LOCAL STORAGE STATE MANAGEMENT
function getPosts() {
    const stored = localStorage.getItem('user_posts_data_v10');
    if (!stored) {
        localStorage.setItem('user_posts_data_v10', JSON.stringify(initialPosts));
        return initialPosts;
    }
    return JSON.parse(stored);
}

function savePosts(posts) {
    localStorage.setItem('user_posts_data_v10', JSON.stringify(posts));
}

// RENDER POSTS TO GRIDS ON APPLICABLE PAGES
function renderAllSections() {
    const posts = getPosts();

    const infPosts = posts.filter(p => p.category === 'Informatika');
    const bihPosts = posts.filter(p => p.category === 'Bahasa Indonesia');

    // Stats Update (if on index.html)
    const statInf = document.getElementById('stat-informatika');
    const statBih = document.getElementById('stat-bahasa');
    const statTotal = document.getElementById('stat-total');

    if (statInf) statInf.innerText = infPosts.length;
    if (statBih) statBih.innerText = bihPosts.length;
    if (statTotal) statTotal.innerText = posts.length;

    // Render Dashboard Recent Posts (Top 4, if on index.html)
    const dashboardContainer = document.getElementById('dashboard-recent-posts');
    if (dashboardContainer) {
        dashboardContainer.innerHTML = posts.slice(0, 4).map(p => createPostCardHTML(p)).join('');
    }

    // Render Informatika Grid (if on informatika.html)
    const infContainer = document.getElementById('grid-informatika');
    if (infContainer) {
        infContainer.innerHTML = infPosts.length ? infPosts.map(p => createPostCardHTML(p)).join('') : createEmptyHTML('Belum ada postingan Informatika.');
    }

    // Render Bahasa Indonesia Grid (if on bahasa.html)
    const bihContainer = document.getElementById('grid-bahasa_indonesia');
    if (bihContainer) {
        bihContainer.innerHTML = bihPosts.length ? bihPosts.map(p => createPostCardHTML(p)).join('') : createEmptyHTML('Belum ada postingan Bahasa Indonesia.');
    }
}

// CREATE POST CARD COMPONENT HTML
function createPostCardHTML(post) {
    const isInf = post.category === 'Informatika';
    const categoryBadgeClass = isInf ? 'bg-sky-100 text-sky-700' : 'bg-purple-100 text-purple-700';
    const borderHoverClass = isInf ? 'hover:border-sky-400 hover:shadow-sky-glow' : 'hover:border-purple-400 hover:shadow-purple-glow';

    const tagsHTML = (post.tags || []).map(t =>
        `<span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">#${t}</span>`
    ).join(' ');

    const imageHTML = post.image
        ? `<div class="h-44 w-full rounded-2xl overflow-hidden border border-slate-100 shadow-sm mb-1"><img src="${encodeURI(post.image)}" alt="${escapeHTML(post.title)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></div>`
        : '';

    return `
    <div class="glass-panel p-6 rounded-3xl border border-slate-200/90 transition-all duration-300 flex flex-col justify-between space-y-4 ${borderHoverClass} group">
        <div class="space-y-3">
            ${imageHTML}
            <div class="flex items-center justify-between text-xs">
                <span class="px-3 py-1 rounded-full font-bold ${categoryBadgeClass}">${post.category}</span>
                <span class="text-slate-400 font-mono"><i class="fa-solid fa-calendar-day"></i> ${post.date}</span>
            </div>

            <h3 class="font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug">
                ${escapeHTML(post.title)}
            </h3>

            <p class="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                ${escapeHTML(post.summary)}
            </p>
        </div>

        <div class="pt-2 border-t border-slate-100 space-y-3">
            <div class="flex flex-wrap gap-1">
                ${tagsHTML}
            </div>

            <button onclick="openPostDetailModal('${post.id}')" class="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-sky-50 hover:text-sky-600 font-semibold text-xs text-slate-700 transition-all flex items-center justify-center gap-2">
                <span>Baca Selengkapnya</span>
                <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
            </button>
        </div>
    </div>
    `;
}

function createEmptyHTML(msg) {
    return `
    <div class="col-span-full text-center py-12 glass-panel rounded-3xl">
        <i class="fa-solid fa-folder-open text-4xl text-slate-300 mb-3"></i>
        <p class="text-slate-500 font-medium text-sm">${msg}</p>
    </div>
    `;
}

// FILTER SEARCH POSTS
function filterPosts(type) {
    const posts = getPosts();
    if (type === 'informatika') {
        const searchElem = document.getElementById('search-informatika');
        const gridElem = document.getElementById('grid-informatika');
        if (!searchElem || !gridElem) return;
        const query = searchElem.value.toLowerCase();
        const filtered = posts.filter(p => p.category === 'Informatika' && (p.title.toLowerCase().includes(query) || p.summary.toLowerCase().includes(query)));
        gridElem.innerHTML = filtered.length ? filtered.map(p => createPostCardHTML(p)).join('') : createEmptyHTML('Hasil pencarian tidak ditemukan.');
    } else if (type === 'bahasa_indonesia') {
        const searchElem = document.getElementById('search-bahasa');
        const gridElem = document.getElementById('grid-bahasa_indonesia');
        if (!searchElem || !gridElem) return;
        const query = searchElem.value.toLowerCase();
        const filtered = posts.filter(p => p.category === 'Bahasa Indonesia' && (p.title.toLowerCase().includes(query) || p.summary.toLowerCase().includes(query)));
        gridElem.innerHTML = filtered.length ? filtered.map(p => createPostCardHTML(p)).join('') : createEmptyHTML('Hasil pencarian tidak ditemukan.');
    }
}

// MODAL POST DETAIL HANDLERS
function openPostDetailModal(postId) {
    const posts = getPosts();
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const catBadge = document.getElementById('modal-category-badge');
    const tagsContainer = document.getElementById('modal-tags');
    const contentContainer = document.getElementById('modal-content');
    const modalElem = document.getElementById('post-detail-modal');

    if (!modalElem) return;

    if (modalTitle) modalTitle.innerText = post.title;
    if (modalDate) modalDate.innerHTML = `<i class="fa-solid fa-clock"></i> ${post.date}`;

    if (catBadge) {
        catBadge.innerText = post.category;
        catBadge.className = post.category === 'Informatika'
            ? 'px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-700'
            : 'px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700';
    }

    if (tagsContainer) {
        tagsContainer.innerHTML = (post.tags || []).map(t =>
            `<span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">#${t}</span>`
        ).join('');
    }

    if (contentContainer) {
        let htmlContent = '';
        if (post.image) {
            htmlContent += `<div class="my-4 overflow-hidden rounded-2xl border border-slate-200 shadow-md"><img src="${encodeURI(post.image)}" alt="${escapeHTML(post.title)}" class="w-full max-h-80 object-cover"></div>`;
        }
        htmlContent += post.content.split('\n\n').map(para => `<p>${escapeHTML(para).replace(/\n/g, '<br>')}</p>`).join('');
        contentContainer.innerHTML = htmlContent;
    }

    const codeContainer = document.getElementById('modal-code-container');
    const codeSnippet = document.getElementById('modal-code-snippet');
    if (codeContainer && codeSnippet) {
        if (post.code && post.code.trim() !== '') {
            codeSnippet.innerText = post.code;
            codeContainer.classList.remove('hidden');
        } else {
            codeContainer.classList.add('hidden');
        }
    }

    modalElem.classList.remove('hidden');
}

function closePostDetailModal() {
    const modalElem = document.getElementById('post-detail-modal');
    if (modalElem) modalElem.classList.add('hidden');
}

// MODAL CREATE POST HANDLERS
function openCreatePostModal(presetCategory = 'Informatika') {
    const catInput = document.getElementById('input-category');
    const createModal = document.getElementById('create-post-modal');
    if (catInput) catInput.value = presetCategory;
    if (createModal) createModal.classList.remove('hidden');
}

function closeCreatePostModal() {
    const createModal = document.getElementById('create-post-modal');
    const form = document.getElementById('form-create-post');
    if (createModal) createModal.classList.add('hidden');
    if (form) form.reset();
}

function handleCreatePost(e) {
    e.preventDefault();

    const category = document.getElementById('input-category').value;
    const title = document.getElementById('input-title').value.trim();
    const tagsRaw = document.getElementById('input-tags').value.trim();
    const summary = document.getElementById('input-summary').value.trim();
    const content = document.getElementById('input-content').value.trim();
    const code = document.getElementById('input-code').value.trim();

    const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()) : ['Tugas'];

    const today = new Date();
    const dateStr = today.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

    const newPost = {
        id: 'post-' + Date.now(),
        category: category,
        title: title,
        date: dateStr,
        tags: tags,
        summary: summary,
        content: content,
        code: code || null
    };

    const posts = getPosts();
    posts.unshift(newPost);
    savePosts(posts);

    closeCreatePostModal();
    showToast('Postingan tugas baru berhasil dipublikasikan!', 'success');

    // Redirect or render depending on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const targetPage = category === 'Informatika' ? 'informatika.html' : 'bahasa.html';

    if (currentPage === targetPage || (currentPage === '' && targetPage === 'index.html')) {
        renderAllSections();
    } else {
        setTimeout(() => {
            window.location.href = targetPage;
        }, 500);
    }
}

// UTILITY FUNCTIONS
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

function copyCodeSnippet() {
    const codeText = document.getElementById('modal-code-snippet').innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        showToast('Kode berhasil disalin ke clipboard!', 'info');
    });
}

function copyCurrentURL() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Tautan website berhasil disalin!', 'info');
    });
}

function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-5 right-5 z-50 space-y-2 pointer-events-none';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const bgClass = type === 'success' ? 'bg-emerald-900 text-emerald-100 border-emerald-700' : 'bg-slate-900 text-slate-100 border-slate-700';
    const icon = type === 'success' ? '<i class="fa-solid fa-circle-check text-emerald-400"></i>' : '<i class="fa-solid fa-circle-info text-sky-400"></i>';

    toast.className = `flex items-center gap-3 px-5 py-3 rounded-2xl border shadow-xl text-xs font-semibold backdrop-blur-md transition-all duration-300 transform translate-y-2 opacity-0 pointer-events-auto ${bgClass}`;
    toast.innerHTML = `${icon} <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g,
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// MUSIC PLAYER LOGIC FOR PROFIL PAGE
const musicPlaylist = [
    {
        title: "Meant To Be",
        artist: "Bebe Rexha ft. Florida Georgia Line",
        genre: "Pop / Country",
        url: "Meant To Be.mp4",
        badgeColor: "bg-sky-100 text-sky-700"
    },
    {
        title: "Notice Me",
        artist: "Grynpyret",
        genre: "Pop / Chill",
        url: "Notice Me.mp4",
        badgeColor: "bg-purple-100 text-purple-700"
    },
    {
        title: "Send My Love (To Your New Lover)",
        artist: "Adele",
        genre: "Pop / Acoustic",
        url: "Send My Love.mp4",
        badgeColor: "bg-rose-100 text-rose-700"
    }
];

let currentTrackIndex = 0;
let isAudioPlaying = false;
let audioPlayer = null;

function initMusicPlayer() {
    const playlistContainer = document.getElementById('playlist-container');
    if (!playlistContainer) return;

    audioPlayer = new Audio();
    audioPlayer.src = musicPlaylist[0].url;
    audioPlayer.volume = 0.8;

    renderPlaylist();
    loadTrackInfo(0);

    // Audio Event Listeners
    audioPlayer.addEventListener('timeupdate', updateMusicProgress);
    audioPlayer.addEventListener('ended', nextTrack);
    audioPlayer.addEventListener('loadedmetadata', () => {
        const durationEl = document.getElementById('player-duration');
        if (durationEl && !isNaN(audioPlayer.duration)) {
            durationEl.innerText = formatTime(audioPlayer.duration);
        }
    });

    // Progress scrub input
    const progressSlider = document.getElementById('player-progress');
    if (progressSlider) {
        progressSlider.addEventListener('input', (e) => {
            if (audioPlayer.duration) {
                const seekTime = (e.target.value / 100) * audioPlayer.duration;
                audioPlayer.currentTime = seekTime;
            }
        });
    }
}

function renderPlaylist() {
    const container = document.getElementById('playlist-container');
    if (!container) return;

    container.innerHTML = musicPlaylist.map((track, idx) => {
        const isActive = idx === currentTrackIndex;
        const activeClasses = isActive
            ? 'bg-sky-50 border-sky-300 text-sky-900 font-bold shadow-sm'
            : 'bg-white/60 border-slate-200 text-slate-700 hover:bg-slate-100';

        return `
            <button onclick="selectAndPlayTrack(${idx})" class="w-full text-left p-3 rounded-xl border ${activeClasses} flex items-center justify-between transition-all group">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-200 text-slate-600 group-hover:bg-sky-500 group-hover:text-white'} flex items-center justify-center text-xs transition-colors">
                        <i class="fa-solid ${isActive && isAudioPlaying ? 'fa-volume-high animate-pulse' : 'fa-music'}"></i>
                    </div>
                    <div>
                        <h5 class="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors">${escapeHTML(track.title)}</h5>
                        <p class="text-[11px] text-slate-500 font-medium">${escapeHTML(track.artist)}</p>
                    </div>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${track.badgeColor}">${escapeHTML(track.genre)}</span>
            </button>
        `;
    }).join('');
}

function loadTrackInfo(index) {
    currentTrackIndex = index;
    const track = musicPlaylist[index];
    if (!track) return;

    audioPlayer.src = track.url;
    
    const titleEl = document.getElementById('player-track-title');
    const artistEl = document.getElementById('player-artist-name');
    const genreEl = document.getElementById('player-genre-badge');

    if (titleEl) titleEl.innerText = track.title;
    if (artistEl) artistEl.innerText = `${track.artist} • Track 0${index + 1}`;
    if (genreEl) {
        genreEl.innerText = track.genre;
        genreEl.className = `px-2.5 py-0.5 rounded-md text-xs font-bold font-mono ${track.badgeColor}`;
    }

    renderPlaylist();
}

function selectAndPlayTrack(index) {
    loadTrackInfo(index);
    playAudio();
}

function togglePlayPause() {
    if (!audioPlayer) return;
    if (isAudioPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function playAudio() {
    if (!audioPlayer) return;
    audioPlayer.play().then(() => {
        isAudioPlaying = true;
        updatePlayerUIState();
    }).catch(err => {
        console.log('Audio playback error:', err);
        showToast('Gagal memutar audio. Silakan coba lagi.', 'info');
    });
}

function pauseAudio() {
    if (!audioPlayer) return;
    audioPlayer.pause();
    isAudioPlaying = false;
    updatePlayerUIState();
}

function prevTrack() {
    let newIndex = currentTrackIndex - 1;
    if (newIndex < 0) newIndex = musicPlaylist.length - 1;
    selectAndPlayTrack(newIndex);
}

function nextTrack() {
    let newIndex = currentTrackIndex + 1;
    if (newIndex >= musicPlaylist.length) newIndex = 0;
    selectAndPlayTrack(newIndex);
}

function updatePlayerUIState() {
    const playIcon = document.getElementById('player-play-icon');
    const vinylDisc = document.getElementById('music-vinyl-disc');
    const visualizer = document.getElementById('music-visualizer');

    if (playIcon) {
        playIcon.className = isAudioPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
    }

    if (vinylDisc) {
        if (isAudioPlaying) {
            vinylDisc.classList.add('animate-spin-slow');
        } else {
            vinylDisc.classList.remove('animate-spin-slow');
        }
    }

    if (visualizer) {
        visualizer.style.opacity = isAudioPlaying ? '1' : '0.4';
    }

    renderPlaylist();
}

function updateMusicProgress() {
    if (!audioPlayer) return;

    const currentTimeEl = document.getElementById('player-current-time');
    const durationEl = document.getElementById('player-duration');
    const sliderEl = document.getElementById('player-progress');

    if (currentTimeEl) currentTimeEl.innerText = formatTime(audioPlayer.currentTime);
    if (durationEl && !isNaN(audioPlayer.duration)) durationEl.innerText = formatTime(audioPlayer.duration);

    if (sliderEl && audioPlayer.duration) {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        sliderEl.value = percent;
    }
}

function changeVolume(val) {
    if (!audioPlayer) return;
    audioPlayer.volume = val / 100;

    const volumeIcon = document.getElementById('player-volume-icon');
    if (volumeIcon) {
        if (val == 0) {
            volumeIcon.className = 'fa-solid fa-volume-xmark text-rose-500';
        } else if (val < 50) {
            volumeIcon.className = 'fa-solid fa-volume-low text-purple-500';
        } else {
            volumeIcon.className = 'fa-solid fa-volume-high text-purple-500';
        }
    }
}

function toggleMute() {
    if (!audioPlayer) return;
    const volInput = document.getElementById('player-volume');
    if (audioPlayer.volume > 0) {
        audioPlayer.volume = 0;
        if (volInput) volInput.value = 0;
        changeVolume(0);
    } else {
        audioPlayer.volume = 0.8;
        if (volInput) volInput.value = 80;
        changeVolume(80);
    }
}

function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// INITIALIZE ON LOAD
document.addEventListener('DOMContentLoaded', () => {
    renderAllSections();
    initMusicPlayer();
});

