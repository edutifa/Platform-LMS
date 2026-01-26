export type CourseInstructor = {
  name: string;
  role: string;
  bio?: string;
};

export type CourseChapter = {
  id: number;
  title: string;
  summary?: string;
  lessons: string[];
};

export type CoursePrice = {
  current: string;
  original?: string;
  discountLabel?: string;
  note?: string;
};

export type CourseDetail = {
  id: number;
  title: string;
  shortDescription: string;
  bannerImage: string;
  about: string;
  benefits: string[];
  instructors: CourseInstructor[];
  syllabus: CourseChapter[];
  price: CoursePrice;
};

export const courseDetails: CourseDetail[] = [
  {
    id: 1,
    title: "Full Stack Next JS : Realtime Point Of Sale Apps",
    shortDescription:
      "Bangun aplikasi Point of Sale realtime dengan Next.js, TypeScript, dan teknologi modern yang siap production.",
    bannerImage: "/assets/images/sample-banner-course-1.png",
    about:
      "Di kelas ini kamu akan belajar membangun aplikasi Point of Sale (POS) berbasis web menggunakan Next.js 14, TypeScript, dan Prisma. Mulai dari autentikasi, pengelolaan produk, transaksi, hingga laporan realtime.",
    benefits: [
      "Belajar stack modern: Next.js 14, TypeScript, Prisma, dan Tailwind CSS",
      "Membangun aplikasi full stack dari nol hingga siap deploy",
      "Best practice struktur folder dan arsitektur aplikasi",
      "Akses source code lengkap dan update materi",
    ],
    instructors: [
      {
        name: "Nanda Pratama",
        role: "Senior Full Stack Engineer",
        bio: "Berpengalaman lebih dari 6 tahun membangun aplikasi web skala enterprise di berbagai sektor industri.",
      },
    ],
    syllabus: [
      {
        id: 1,
        title: "Pengenalan & Setup Environment",
        summary:
          "Mempersiapkan tools dan memahami gambaran besar aplikasi POS yang akan dibangun.",
        lessons: [
          "Overview project dan fitur utama",
          "Setup Next.js 14 & TypeScript",
          "Konfigurasi Tailwind CSS",
        ],
      },
      {
        id: 2,
        title: "Fundamental Next.js untuk Full Stack",
        lessons: [
          "Struktur folder App Router",
          "Server Components vs Client Components",
          "Routing, Layout, dan Dynamic Routes",
        ],
      },
      {
        id: 3,
        title: "Membangun Fitur POS",
        lessons: [
          "Desain UI dashboard dan kasir",
          "Manajemen produk dan stok",
          "Pencatatan transaksi dan laporan sederhana",
        ],
      },
    ],
    price: {
      current: "Rp 345.000",
      original: "Rp 1.500.000",
      discountLabel: "77% Off",
      note: "Akses seumur hidup, termasuk semua update materi.",
    },
  },
  {
    id: 2,
    title: "Mastering React & TypeScript untuk Production",
    shortDescription:
      "Dalami React dan TypeScript hingga siap membangun aplikasi production-grade.",
    bannerImage: "/assets/images/sample-banner-course-1.png",
    about:
      "Kelas ini fokus pada implementasi React dan TypeScript di proyek nyata, termasuk pattern, testing, dan performance.",
    benefits: [
      "Memahami pattern arsitektur di React (container/presenter, hooks, dll)",
      "Menulis komponen yang strongly-typed dengan TypeScript",
      "Best practice state management dan data fetching",
    ],
    instructors: [
      {
        name: "Dago Rahman",
        role: "Frontend Engineer",
        bio: "Aktif mengerjakan produk SaaS dengan stack React & TypeScript.",
      },
    ],
    syllabus: [
      {
        id: 1,
        title: "Fundamental React & TypeScript",
        lessons: [
          "Review konsep React modern",
          "TypeScript untuk React components",
        ],
      },
      {
        id: 2,
        title: "Architecture & Pattern",
        lessons: ["State management", "Folder structure untuk aplikasi besar"],
      },
    ],
    price: {
      current: "Rp 279.000",
      original: "Rp 1.200.000",
      discountLabel: "76% Off",
    },
  },
  {
    id: 3,
    title: "Fundamental Tailwind CSS untuk Frontend Developer",
    shortDescription:
      "Pelajari Tailwind CSS dari dasar hingga siap digunakan di project production.",
    bannerImage: "/assets/images/sample-banner-course-1.png",
    about:
      "Kelas ini membahas utility-first CSS, best practice styling, dan integrasi dengan framework modern.",
    benefits: [
      "Memahami konsep utility-first styling",
      "Mampu membangun UI responsif dengan cepat",
      "Tips dan trik membuat design system dengan Tailwind",
    ],
    instructors: [
      {
        name: "Putri Anisa",
        role: "UI Engineer",
      },
    ],
    syllabus: [
      {
        id: 1,
        title: "Dasar Tailwind CSS",
        lessons: [
          "Instalasi",
          "Konfigurasi",
          "Utility paling sering digunakan",
        ],
      },
      {
        id: 2,
        title: "Layout & Responsive Design",
        lessons: ["Grid & Flex", "Breakpoint & responsive utilities"],
      },
    ],
    price: {
      current: "Rp 199.000",
      original: "Rp 850.000",
      discountLabel: "77% Off",
    },
  },
];

export function getCourseDetailById(id: number): CourseDetail | undefined {
  return courseDetails.find((course) => course.id === id);
}
