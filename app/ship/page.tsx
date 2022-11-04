interface Props {
  searchParams: {
    id: string | undefined
  }
}

export default async function Ship({searchParams}: Props) {
  const id = searchParams.id;

  const resp = await fetch(`https://swapi.dev/api/starships/${id}/`, {headers: {'Content-Type': 'applicaton/json'}})
  const ship = await resp.json()

  return (
    <p>Looking at ship {id}: {ship.name}</p>
  )
}