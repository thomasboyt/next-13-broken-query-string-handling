import { Suspense } from "react";
import { NavBar } from "../../../components/NavBar";
import { PlanetDisplay } from "../../../components/PlanetDisplay";

interface Props {
  params: {
    planetId: string;
  }
}

export default async function Planet({ params }: Props) {
  const id = params.planetId;

  const loadingPromise = fetch(`https://swapi.dev/api/planets/${id}/`, {headers: {'Content-Type': 'application/json'}}).then((resp) => resp.json())

  return (
    <>

      <NavBar loadingPromise={loadingPromise} root="planet-single-suspense" />
      <Suspense fallback={<p>Loading...</p>}>
        <PlanetDisplay loadingPromise={loadingPromise} />
      </Suspense>
    </>
  )
}