import { StaticImageData } from "next/image"
import feraThumbnail from "@/public/projects/fera/fera-thumb.png"
import kurzThumbnail from "@/public/projects/kurz/kurz-thumb.png"
import linrThumbnail from "@/public/projects/linr/linr-thumb.png"
import ngobrThumbnail from "@/public/projects/ngobr/ngobr-thumb.png"
import spktThumbnail from "@/public/projects/spkt/spkt-thumb.png"
import ykanThumbnail from "@/public/projects/ykan/ykan-thumb.png"

type Props = {
  name: string
  tech: string[]
  description: string
  thumbnail: StaticImageData
}

const projects: Props[] = [
  {
    name: "RTGL - Geospatial Styler Dashboard",
    description:
      "Project website yang digunakan oleh Yayasan Konservasi Alam Nasional untuk pemanfaatan pengumpulan dan penyajian data Geospasial pada tingkat Kampung / Desa di wilayah Kabupaten Berau",
    tech: ["Next.js", "TypeScript", "Maplibre", "GraphQL"],
    thumbnail: ykanThumbnail,
  },
  {
    name: "SPKT - Sistem Pendataan Kebudayaan Terpadu",
    description:
      "Sistem informasi pendataan dan pemberdayaan data yang berbasis data warehouse untuk kebudayaan di Indonesia, yang dikelola oleh Dirjen Kebudayaan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Indonesia ",
    tech: ["Next.js", "TypeScript", "Mantine"],
    thumbnail: spktThumbnail,
  },
  {
    name: "Linr - One Liner Snippet for JavaScript",
    description:
      "Situs penyimpan dan berbagi kode satu line untuk JavaScript yang bertujuan agar para developer saling membangikan kode yang berguna untuk pengembangan aplikasi",
    tech: ["React", "Redux", "GraphQL", "Tailwind"],
    thumbnail: linrThumbnail,
  },
  {
    name: "Ngobr - Cari dan Kasih saran Topik Obrolan",
    description:
      "Situs berbasis anonimous yang dimana pengguna dapat mencari dan memberikan saran topik obrolan yang dapat digunakan untuk mengobrol dengan teman, keluarga, atau pasangan",
    tech: ["Next", "Supabase", "Tailwind"],
    thumbnail: ngobrThumbnail,
  },
  {
    name: "Kurz - Shortlink Generator",
    description:
      "Membuat shortlink yang dapat digunakan untuk mempersingkat link yang panjang dan sulit diingat, dengan fitur scan QR Code",
    tech: ["React", "Supabase", "Express"],
    thumbnail: kurzThumbnail,
  },
  {
    name: "Fera - Botanical Service Landing Page",
    description:
      "Landing page untuk layanan jasa pembuatan website yang dikelola oleh Fera, yang berfokus pada pembuatan website untuk bisnis yang bergerak di bidang pertanian dan perkebunan",
    tech: ["React", "Tailwind"],
    thumbnail: feraThumbnail,
  },
]

export default projects
