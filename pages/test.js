export default function Text({queryParam}) {
  let name = queryParam

  return (
  <h1>Hello {name}!</h1>
  )
}

export function getServerSideProps({query}) {
  let queryParam = query.name
  return {
    props: {
      queryParam,
    }
  }
}