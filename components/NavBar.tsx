import Link from "next/link"

interface Planet {
  name: string;
}

interface Props {
  loadingPromise: Promise<Planet>;
  root: string;
}

export async function NavBar({loadingPromise, root}: Props) {
  const currentPlanet = await loadingPromise;

  const getStyle = (name: string) => currentPlanet.name === name ? {fontWeight: 'bold'} : undefined;

  return (
    <ul>
      <li><Link href={`/${root}/1`} style={getStyle('Tatooine')}>Tatooine</Link></li>
      <li><Link href={`/${root}/6`} style={getStyle('Bespin')}>Bespin</Link></li>
    </ul>
  );
}