import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Link href="/planet?id=1">Planet 1</Link><br/>
        <Link href="/planet?id=2">Planet 2</Link><br/>
        <Link href="/planet?id=3">Planet 3</Link><br/>
        <Link href="/ship?id=2">Starship 2</Link><br/>
        <Link href="/ship?id=3">Starship 3</Link><br/>

        {children}
      </body>
    </html>
  )
}
