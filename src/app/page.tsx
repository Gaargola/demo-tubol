"use client";

import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <body>
      <header>
        <a href="#">Leader board</a>
        <a href="#">Request Demo</a>
        <a href="#">Try Free</a>
      </header>
      <NavBar />
      <main>
        <section>
          <h1 className="text-3xl font-bold">
            <span>Create</span> with confidence in the age of video.
          </h1>
        </section>
        <section>
          <article>
            <h2>Digital video deserves a modern standard.</h2>
            <p>
              With the explosive audience shift away from TV, digital video
              needs a modern measurement standard - just like TV. Tubol is the
              worlds most comprehensive database and taxonomy that organizes and
              standardizes the social video universe for you.
            </p>
          </article>
        </section>
        <section>
          <article>
            <h2>See the entire video ecosystem as one.</h2>
            <p>
              Go beyond what you know - replacing information silos with a
              holistic view of the video ecosystem, including competitors. Tubol
              delivers ratings and context, creating a unified cross-platform
              standard.
            </p>
            <button>Learn more</button>
          </article>
        </section>
      </main>
      <footer>
        <p>2024 Tubol - Demo con ❤ por Mauro Borda</p>
      </footer>
    </body>
  );
}
