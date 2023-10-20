import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        半庄（LBan）工具箱
      </div>
      <div>
        <Link href="/tools/json-read">JSON 阅读器</Link>

      </div>
    </main>
  )
}
