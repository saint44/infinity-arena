import '../globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-brand-ink/80 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between text-white">
          <Link href="/" className="font-semibold tracking-wide hover:opacity-80">Arena</Link>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/(dashboard)" className="hover:opacity-80">Dashboard</Link>
            <Link href="/pricing" className="hover:opacity-80">Pricing</Link>
          </div>
        </div>
      </nav>
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </>
  )
}

