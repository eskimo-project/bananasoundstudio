const capabilities = [
  "Creative direction",
  "Original music composition",
  "Film, TV and commercial soundtracks",
  "Sound mixing and mastering",
  "Sound design",
  "Dialogue, music, SFX editing and Foley",
  "Immersive audio / Dolby Atmos",
  "Voice over casting and recording",
  "Audio branding, logo and jingle",
  "Licensing and supervision",
];

const projects = [
  {
    title: "Death Whisperer 2",
    year: "2024",
    type: "Feature Film",
    description:
      "A dark, forceful theatrical score for a story driven by relentless supernatural tension.",
  },
  {
    title: "Don't Come Home",
    year: "2024",
    type: "Netflix Series",
    description:
      "Atmospheric music and sound for a mystery where family trauma and the paranormal fold into one another.",
  },
  {
    title: "Bangkok Breaking: Heaven and Hell",
    year: "2024",
    type: "Netflix Film",
    description:
      "High-pressure action textures for rescue, pursuit, and the raw movement of Bangkok at night.",
  },
  {
    title: "Khun Pan 3",
    year: "2023",
    type: "Feature Film",
    description:
      "Large-scale cinematic music for folklore, crime, magic, and a hero confronting his own beliefs.",
  },
  {
    title: "Man Suang",
    year: "2023",
    type: "Feature Film",
    description:
      "Period-inspired musical identity for intrigue, elegance, and secrets inside Siam's entertainment world.",
  },
  {
    title: "Terror Tuesday: Extreme",
    year: "2024",
    type: "Series",
    description:
      "Horror-forward soundscapes shaped from Thailand's beloved radio ghost-story culture.",
  },
];

const rooms = [
  {
    code: "B1",
    name: "Batman Eat Banana",
    size: "6.70 x 6.50 x 2.4 m",
    format: "7.1 Surround Sound",
    image:
      "https://www.bananasoundstudio.com/assets/studio/b1_1-48f87d00957a9ea55162d675f3b536771ede1f83b62568c88663b57ae1dae824.webp",
  },
  {
    code: "B2",
    name: "Hans William",
    size: "4.20 x 4.45 x 4 m",
    format: "5.1 Surround Sound",
    image:
      "https://www.bananasoundstudio.com/assets/studio/b2_1-fba501f3d0b7a2dbb1cba5563f2684722a9ee5eb763b7cdd0c89ee6e4b50eb38.webp",
  },
  {
    code: "B3",
    name: "John Zimmer",
    size: "3.60 x 3.70 x 2.50 m",
    format: "5.1 Surround Sound",
    image:
      "https://www.bananasoundstudio.com/assets/studio/b3_1-f61a49fa86586233904b859da7cbbe8bb9eeb5405d186db6319118a7f0787723.webp",
  },
  {
    code: "B4",
    name: "Golden Banana",
    size: "4.20 x 4.45 x 4 m",
    format: "5.1 Surround Sound",
    image:
      "https://www.bananasoundstudio.com/assets/studio/b4_1-b8c50c4dbc5e8b89e674ff004a201097a243a4ce7f80043aa59e454e45eb8a0d.webp",
  },
  {
    code: "B5",
    name: "Silver Banana",
    size: "3.60 x 3.70 x 2.50 m",
    format: "Stereo",
    image:
      "https://www.bananasoundstudio.com/assets/studio/b5_1-f1f96dc2b687e355572c7d823d69dcae4f46bd8e0fc1aeaed2375f700d280272.webp",
  },
  {
    code: "B6",
    name: "Monkey Room",
    size: "3.60 x 3.70 x 2.50 m",
    format: "Stereo",
    image:
      "https://www.bananasoundstudio.com/assets/studio/b6_1-b464bf50a0abe9ded89af8b91c9aab3cfde7abaf17b944e34912074e2927b063.webp",
  },
];

const teamGroups = [
  {
    label: "Composer & Engineer",
    people: ["Toy", "Meen", "One", "Most", "Nu", "Jedi", "Job", "Pro", "Gio", "Ball"],
  },
  {
    label: "Producer & Creative",
    people: ["Es", "Joo"],
  },
  {
    label: "Office & Studio",
    people: ["Lek", "Tan", "Patt", "Supa", "M", "Elsa", "Prem"],
  },
];

const clientNames = [
  "Netflix",
  "Prime Video",
  "Disney",
  "HBO GO",
  "iQIYI",
  "Viu",
  "WeTV",
  "GMM Grammy",
  "One31",
  "Mono",
];

export default function Home() {
  return (
    <main>
      <header className="site-nav" aria-label="Main navigation">
        <a className="brand-lockup" href="#top" aria-label="Banana Sound Studio home">
          <img
            src="https://www.bananasoundstudio.com/assets/new_logo-ffc0b94742647793bcc7a50f8c031a0dc2ea6cd3b3a32835b9d088a71e715552.png"
            alt=""
          />
          <span>Banana Sound Studio</span>
        </a>
        <nav>
          <a href="#studio">Studio</a>
          <a href="#work">Work</a>
          <a href="#rooms">Rooms</a>
          <a href="#people">People</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Bangkok sound studio & music label</p>
          <h1>Music and sound that move stories forward.</h1>
          <p className="hero-text">
            Banana Sound Studio creates film scores, TV soundtracks, commercial music,
            sound design, voice recording, Foley, mixing, mastering, and immersive audio
            for storytellers, platforms, agencies, and brands.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:hello@bananasoundstudio.com">
              Start a project
            </a>
            <a className="button secondary" href="#work">
              View work
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Studio highlights">
          <div className="hero-image" />
          <div className="studio-stats">
            <div>
              <strong>2003</strong>
              <span>Founded by film score composer Terdsak Janpan</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>Years across film, television, series, brands and commercials</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Production rooms for recording, editing, mixing and rental</span>
            </div>
          </div>
        </div>
      </section>

      <section className="intro band" id="studio">
        <div>
          <p className="eyebrow">Sound Studio & Music Label</p>
          <h2>Igniting the audio experience through outstanding music.</h2>
        </div>
        <div className="copy-stack">
          <p>
            Based in Bangkok, Banana Sound Studio brings composition, production,
            sound editing, mixing, and audio post-production together under one roof.
            The team helps producers, directors, content creators, and brands deliver
            memorable experiences through high-quality music and sound design.
          </p>
          <p>
            The studio combines a focused creative team with technical rooms built for
            stereo, 5.1, 7.1, and immersive workflows, plus a warm workspace for clients,
            collaborators, and visiting crews.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>From first creative direction to final master.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <div className="capability-card" key={capability}>
              {capability}
            </div>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Show Reel 2025</p>
          <h2>Feature film and TV series work with emotional range.</h2>
        </div>
        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.title}>
              <div>
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section clients">
        <div className="section-heading">
          <p className="eyebrow">Trusted since 2003</p>
          <h2>Proud to work with production houses, streamers and entertainment brands.</h2>
        </div>
        <div className="client-strip" aria-label="Selected clients">
          {clientNames.map((client) => (
            <span key={client}>{client}</span>
          ))}
        </div>
      </section>

      <section className="section rooms" id="rooms">
        <div className="section-heading">
          <p className="eyebrow">Studio room rentals</p>
          <h2>Six rooms for recording, editing and mixing.</h2>
        </div>
        <div className="room-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.code}>
              <img src={room.image} alt={`${room.code} ${room.name} studio room`} />
              <div>
                <span>{room.code}</span>
                <h3>{room.name}</h3>
                <p>{room.size}</p>
                <p>{room.format}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section people" id="people">
        <div className="section-heading">
          <p className="eyebrow">People</p>
          <h2>A multidisciplinary team for music, engineering, production and studio care.</h2>
        </div>
        <div className="people-grid">
          {teamGroups.map((group) => (
            <article className="people-card" key={group.label}>
              <h3>{group.label}</h3>
              <div>
                {group.people.map((person) => (
                  <span key={person}>{person}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Create all sound as a piece of cake</p>
          <h2>Tell us what you are making. We will shape the sound around it.</h2>
        </div>
        <div className="contact-grid">
          <article>
            <h3>General</h3>
            <a href="mailto:hello@bananasoundstudio.com">hello@bananasoundstudio.com</a>
            <p>Banana Record Limited Partnership</p>
            <p>625 14FL. Tasniya Building, Wang Thonglang, Bangkok, Thailand 10310</p>
          </article>
          <article>
            <h3>Feature Film & TV Series</h3>
            <a href="tel:+66949596256">(+66) 094-959-6256</a>
            <a href="mailto:pimmata@bananasoundstudio.com">pimmata@bananasoundstudio.com</a>
            <p>Tan</p>
          </article>
          <article>
            <h3>Commercial & Music</h3>
            <a href="tel:+66945727899">(+66) 094-572-7899</a>
            <a href="mailto:jeerapat@bananasoundstudio.com">jeerapat@bananasoundstudio.com</a>
            <p>Joy</p>
          </article>
          <article>
            <h3>Accounting</h3>
            <a href="tel:+66948894448">(+66) 094-889-4448</a>
            <a href="mailto:account@bananasoundstudio.com">account@bananasoundstudio.com</a>
          </article>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href="https://www.linkedin.com/company/banana-sound-studio/">LinkedIn</a>
          <a href="https://www.instagram.com/bananasoundstudio.official/">Instagram</a>
          <a href="https://www.facebook.com/BananaSoundStudio/">Facebook</a>
          <a href="https://www.youtube.com/channel/UCM2PWH71yq0m6kjNdi1XwRA">YouTube</a>
          <a href="https://www.imdb.com/name/nm3651726">IMDb</a>
        </div>
      </section>
    </main>
  );
}
