/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <main>
      <h1>Enviar tu pelicula favorita</h1>
      <form method="POST" action="/api/movie">
        <input
          type="text"
          name="favorite-movie"
          required
          placeholder="Cual es tu pelicula favorita"
        />
        <input type="submit" />
      </form>
    </main>
  );
}
