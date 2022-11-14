interface Planet {
  name: string;
}

interface Props {
  loadingPromise: Promise<Planet>
}

export async function PlanetDisplay({loadingPromise}: Props) {
  const planet = await loadingPromise;

  return (
    <p>
      Looking at planet {planet.name}
    </p>
  );
}