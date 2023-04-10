export default function Movie({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  return (
    <main>
      <h2>Tu pelicula favorita es: {searchParams?.favorite}</h2>
    </main>
  );
}
