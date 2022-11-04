import Link from 'next/link'

interface Props {
  searchParams: {
    id: string | undefined
  }
}

export default function Home({searchParams}: Props) {
  return <p>Select a thing</p>
}