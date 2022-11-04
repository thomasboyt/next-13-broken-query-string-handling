interface Props {
  searchParams: {
    id: string | undefined
  }
}

export default async function Planet({searchParams}: Props) {
  const id = searchParams.id;

  const resp = await fetch(`https://swapi.dev/api/planets/${id}/`, {headers: {'Content-Type': 'applicaton/json'}})
  const planet = await resp.json()

  return (
    <p>Looking at planet {id}: {planet.name}</p>
  )
}