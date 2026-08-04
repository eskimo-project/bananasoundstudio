import assetManifest from "../public/banana-assets/manifest.json";
import { FeaturedCarousel } from "./FeaturedCarousel";

type Asset = {
  category: string;
  src: string | null;
  title?: string;
  original: string;
};

const displayAssets = (assetManifest as Asset[]).filter(
  (asset): asset is Asset & { src: string } => Boolean(asset.src),
);

const assetsByCategory = (category: string) =>
  displayAssets.filter((asset) => asset.category === category);

const brandLogo = assetsByCategory("brand")[0]?.src ?? "/favicon.svg";
const heroOrchestraImage = "/banana-assets/orchestra-session.jpg";
const clientAssets = assetsByCategory("clients");
const roomAssets = assetsByCategory("rooms");
const peopleAssets: Asset[] = [
  ...assetsByCategory("people"),
  {
    category: "people",
    src: "/people/william.webp",
    original: "/people/william.webp",
    title: "WILLIAM",
  },
  {
    category: "people",
    src: "/people/sandy.webp",
    original: "/people/sandy.webp",
    title: "SANDY",
  },
  {
    category: "people",
    src: "/people/pang.webp",
    original: "/people/pang.webp",
    title: "PANG",
  },
  {
    category: "people",
    src: "/people/bear.webp",
    original: "/people/bear.webp",
    title: "BEAR",
  },
  {
    category: "people",
    src: "/people/bao.webp",
    original: "/people/bao.webp",
    title: "BAO",
  },
  {
    category: "people",
    src: "/people/jaoneel.webp",
    original: "/people/jaoneel.webp",
    title: "JAONEEL",
  },
  {
    category: "people",
    src: "/people/prank.webp",
    original: "/people/prank.webp",
    title: "PRANK",
  },
];
const workAssets = assetsByCategory("work");
const studioGallery = workAssets.slice(0, 6);
const workspaceGallery = [
  ...studioGallery.map((asset, index) => ({
    src: asset.src,
    alt: `Banana Sound Studio workspace image ${index + 1}`,
  })),
  {
    src: "/workspace/workspace-open-office.webp",
    alt: "Open office workspace at Banana Sound Studio",
  },
  {
    src: "/workspace/workspace-coffee-bar.webp",
    alt: "Coffee bar workspace at Banana Sound Studio",
  },
  {
    src: "/workspace/workspace-lounge.webp",
    alt: "Lounge workspace at Banana Sound Studio",
  },
];

const capabilities = [
  "Creative direction",
  "Original music composition",
  "Soundtracks",
  "Sound mixing & mastering",
  "Sound design",
  "Dialogue, music, SFX editor / Foley",
  "Immersive audio / Dolby Atmos",
  "Voice over / casting & recording",
  "Audio branding",
  "Audio logo / jingle",
  "Musical identity",
  "Licensing & supervision",
];

const filmography = [
  "Dorm (2006)",
  "The Letters of Death (2006)",
  "Secret (2007)",
  "Body #19 (2007)",
  "4 BIA (2008)",
  "Hormones (2008)",
  "The Last Moment (2008)",
  "Coming Soon (2008)",
  "Summer Course (2008)",
  "Ong Bak 2 (2008)",
  "Best of Times (2009)",
  "5 BIA (2009)",
  "Cool Gel Attacks (2010)",
  "Bangkok Knockout (2010)",
  "Ong Bak 3 (2010)",
  "The Billionaire (2011)",
  "The Kick (2011)",
  "Black & White 2 (2012)",
  "Super Salaryman (2012)",
  "My Name is Love (2012)",
  "3 AM (2012)",
  "Tom-Yum-Goong 2 (2013)",
  "From A Pimple To Nirvana (2013)",
  "King Naresuan (2013)",
  "App Love (2014)",
  "The One Ticket (2014)",
  "Love H2O (2015)",
  "Back to the 90s (2015)",
  "The Black Death (2015)",
  "Panthai Norasing (2015)",
  "Cat a Wabb (2015)",
  "Phi ha Ayothaya (2015)",
  "King Naresuan (2015)",
  "Khun Phan 1 (2016)",
  "Take Me Home (2016)",
  "Terd (2016)",
  "Look Tung Signature (2016)",
  "Summer's Desire (2016)",
  "Song from Phatthalung (2017)",
  "Xia tian 19 sui de Xiao xiang (2017)",
  "Black & White: The Dawn of Justice (2017)",
  "Khun Phan 2 (2018)",
  "Norah (2018)",
  "In Family We Trust (2018)",
  "Aftershock (2018)",
  "Secrets in the Hot Spring (2018)",
  "Sisters (2019)",
  "Love Battle (2019)",
  "Luckily in Love (2020)",
  "Seeda (2020)",
  "Classic Again (2020)",
  "Om! Crush on Me (2021)",
  "Morning Glory Love Story (2021)",
  "4 Kings (2021)",
  "Go Away Mr. Tumor (2021)",
  "Fearless Love (2022)",
  "Monrak Wourchon (2022)",
  "Haunted Universities 2 (2022)",
  "Dark World (2022)",
  "God Bless The Trainees Too! (2022)",
  "Oops!.. There's Dad 5 (2022)",
  "Sarasin Bridge of Love 2216 (2023)",
  "Khun Phan 3 (2023)",
  "Man Suang (2023)",
  "Postman (2023)",
  "Death Whisperer (2023)",
  "The X-Treme Riders (2023)",
  "The Elite of Devils (2024)",
  "The Cursed (2024)",
  "Moei: The Promised (2024)",
  "The Cursed Land (2024)",
  "Love You To Debt (2024)",
  "Achilles Curse (2024)",
  "Haunted Universities 3 (2024)",
  "Terror Tuesday: Extreme (2024)",
  "Bangkok Breaking (2024)",
  "Death Whisperer 2 (2024)",
  "Don't Come Home (2024)",
  "Endpresso (2024)",
  "Police Modify (2024)",
  "Rider Movie (2024)",
  "Start It Up (2024)",
  "Isan Nikah (2024)",
  "The Guardian (2025)",
  "Will You Marry Monk? (2025)",
  "Attack 13 (2025)",
  "Nak Love Mak (2025)",
  "Death Whisperer 3 (2025)",
  "4 Tigers (2025)",
  "Tha Rae: The Exorcist (2025)",
  "Ghost Board (2026)",
  "Kingkaew (2026)",
  "Sarplihuan (2026)",
  "The Stain (2026)",
  "Elae Airy in Busan (2026)",
  "Haunted Universities 4 (2026)",
];

const labelHighlights = [
  {
    title: "JOKE iSCREAM",
    subtitle: "Viral content creator & artist",
    image: "/banana-assets/artist-joke-iscream.jpg",
    imagePosition: "center 24%",
    body:
      "Creative collaboration that blends humor, social energy, and polished production for songs built to travel online.",
  },
  {
    title: "QViNT",
    subtitle: "New generation T-POP",
    image: "/banana-assets/artist-qvint.jpg",
    imagePosition: "center center",
    body:
      "Full-scale idol production, from music composition and vocal direction through final mix for a fresh pop identity.",
  },
  {
    title: "Yoo Ha Jung",
    subtitle: "Singer & influencer",
    image: "/banana-assets/artist-yoo-ha-jung.jpg",
    imagePosition: "center 24%",
    body:
      "Yoo Hajung (유하정) is a South Korean singer and influencer in Thailand.",
  },
];

const dubbingServices = [
  "Localization",
  "Subtitling",
  "Dubbing and voice over",
  "Video editing",
  "Censorship",
  "Dub directing",
  "Quality control",
  "Mixing",
  "Over 10 Asian languages",
];

const projects = [
  {
    title: "4 Tigers",
    year: "2025",
    type: "Feature Film",
    trailerId: "5eZW7w928Zk",
    description:
      "A large-scale action fantasy built around legendary outlaws, mythic stakes, and high-impact cinematic sound.",
  },
  {
    title: "Haunted Universities 4",
    year: "2026",
    type: "Feature Film",
    trailerId: "Vjj39G4E2qA",
    description:
      "The fourth chapter of the campus horror anthology, shaped around regional ghost stories and escalating dread.",
  },
  {
    title: "The Stain",
    year: "2026",
    type: "Feature Film",
    trailerId: "2PcdIYB32AI",
    description:
      "A polished Thai horror drama where glamour, secrets, and supernatural pressure leave a mark.",
  },
  {
    title: "รินรดา THE INFLUENCER",
    year: "2026",
    type: "Feature Film",
    trailerId: "ONLXgOJR9v4",
    description:
      "A cyber-supernatural thriller about online judgment, a second chance after death, and a 28-day countdown.",
  },
  {
    title: "Death Whisperer 3",
    year: "2025",
    type: "Feature Film",
    trailerId: "DXV3x2Htbyg",
    description:
      "A brutal supernatural return into cursed territory, family fear, and the next chapter of the Tee Yod saga.",
  },
];

const rooms = [
  {
    code: "B1",
    name: "Batman Eat Banana",
    size: "6.70 x 6.50 x 2.4 m",
    format: "7.1 Surround Sound",
    image: roomAssets[0]?.src,
  },
  {
    code: "B2",
    name: "Hans William",
    size: "4.20 x 4.45 x 4 m",
    format: "5.1 Surround Sound",
    image: roomAssets[1]?.src,
  },
  {
    code: "B3",
    name: "John Zimmer",
    size: "3.60 x 3.70 x 2.50 m",
    format: "5.1 Surround Sound",
    image: roomAssets[2]?.src,
  },
  {
    code: "B4",
    name: "Golden Banana",
    size: "4.20 x 4.45 x 4 m",
    format: "5.1 Surround Sound",
    image: roomAssets[3]?.src,
  },
  {
    code: "B5",
    name: "Silver Banana",
    size: "3.60 x 3.70 x 2.50 m",
    format: "Stereo",
    image: roomAssets[4]?.src,
  },
  {
    code: "B6",
    name: "Monkey Room",
    size: "3.60 x 3.70 x 2.50 m",
    format: "Stereo",
    image: roomAssets[5]?.src,
  },
];

const assetLabel = (asset: Asset) =>
  (asset.title ?? "Banana Sound Studio image")
    .replace(/[-_][a-f0-9]{12,}.*/i, "")
    .replace(/_/g, " ")
    .trim();

const displayName = (asset: Asset) => {
  const label = assetLabel(asset).toUpperCase();
  const names: Record<string, string> = {
    JADI: "JEDI",
    JO: "GIO",
    M2: "M",
    MEAN: "MEEN",
    NUENG: "ONE",
    TARN: "TAN",
  };

  return names[label] ?? label;
};

const personByKey = (key: string) =>
  peopleAssets.find((person) => assetLabel(person).toUpperCase() === key);

const peopleCategories = [
  {
    label: "Composer & Engineer",
    accent: "MOST",
    people: [
      "TOY",
      "MEAN",
      "NUENG",
      "MOST",
      "JADI",
      "JOB",
      "PRO",
      "NU",
      "JO",
      "BALL",
      "WILLIAM",
      "SANDY",
    ],
  },
  {
    label: "Producer & Creative",
    accent: "JOO",
    people: ["ES", "JOO"],
  },
  {
    label: "Office & Studio",
    accent: "TARN",
    people: [
      "LEK",
      "TARN",
      "PATT",
      "M2",
      "PREM",
      "PANG",
      "BEAR",
      "BAO",
      "JAONEEL",
      "PRANK",
    ],
  },
  {
    label: "Business Development",
    accent: "SUPA",
    people: ["SUPA"],
  },
];

const navLinks = [
  { href: "/musicforbrand/", label: "Music for Brand" },
  { href: "#studio", label: "Studio" },
  { href: "#films", label: "Films" },
  { href: "#label", label: "Label" },
  { href: "#dubbing", label: "Dubbing" },
  { href: "#work", label: "Work" },
  { href: "#rooms", label: "Rooms" },
  { href: "#people", label: "People" },
  { href: "#contact", label: "Contact" },
];

const youtubeTrailerUrl = (title: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} trailer`)}`;

const filmographyUrl = (title: string) =>
  title === "The Guardian (2025)"
    ? "https://www.facebook.com/KasroThaiMaster/videos/1657796461598038"
    : youtubeTrailerUrl(title);

export default function Home() {
  return (
    <main>
      <header className="site-nav" aria-label="Main navigation">
        <a className="brand-lockup" href="#top" aria-label="Banana Sound Studio home">
          <img src={brandLogo} alt="" />
          <span>Banana Sound Studio</span>
        </a>
        <nav className="desktop-nav" aria-label="Desktop menu">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile menu">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </header>

      <section className="hero" id="top" aria-label="Banana Sound Studio orchestra recording session">
        <img
          className="hero-image"
          src={heroOrchestraImage}
          alt="Orchestra recording session at Banana Sound Studio"
        />
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
        <div className="studio-stats" aria-label="Studio highlights">
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
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Featured releases 2025-2026</p>
          <h2>New film work with trailer motion and cinematic energy.</h2>
        </div>
        <FeaturedCarousel projects={projects} />
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

      <section className="capabilities-section section">
        <p className="capabilities-outline">Sound Studio & Music</p>
        <h2>Igniting the audio experience through outstanding music</h2>
        <div className="capabilities-layout">
          <div className="capabilities-list">
            <h3>Our capabilities:</h3>
            <ul>
              {capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </div>
          <div className="capabilities-copy">
            <p>
              Founded by film score composer Terdsak Janpan in 2003. Over 20 years,
              Banana Sound Studio extends its expertise in music production, covering a
              spectrum of services not only to feature films industry but also to
              television programs, TV series & dramas, as well as brand and commercial
              projects. We have helped film producers, storytellers, and content creators
              delivering memorable experience contents through high-quality music and
              sound design.
            </p>
            <p>
              At Banana Sound Studio, we offers multidisciplinary audio production
              service, including music composition and sound mixing, all under one roof.
              Our studio provide inspired workspace, welcoming ambience, and coffee
              corner. Our team combines creativity with technical expertise to consult
              and deliver tailored audio experiences. From composing original scores to
              crafting immersive soundscapes, we are dedicated to enhancing the emotional
              impact of every project we work on.
            </p>
          </div>
        </div>
      </section>

      <section className="section catalog-section" id="films">
        <div className="section-heading">
          <p className="eyebrow">Complete filmography</p>
          <h2>More than 90 film and series credits from 2006 to 2026.</h2>
        </div>
        <div className="filmography-panel">
          <div className="catalog-lead">
            <strong>{filmography.length}</strong>
            <span>titles from the Banana company profile</span>
          </div>
          <ol className="filmography-list">
            {filmography.map((title) => (
              <li key={title}>
                <a href={filmographyUrl(title)} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section label-section" id="label">
        <div className="section-heading">
          <p className="eyebrow">Music label & artists</p>
          <h2>Commercial music and artist development from concept to final master.</h2>
        </div>
        <div className="label-grid">
          {labelHighlights.map((item) => (
            <article className="label-card" key={item.title}>
              <img
                src={item.image}
                alt={`${item.title} artist visual`}
                style={{ objectPosition: item.imagePosition }}
              />
              <div>
                <span>{item.subtitle}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dubbing-section" id="dubbing">
        <div className="dubbing-copy">
          <p className="eyebrow">Dubbing by Studio K</p>
          <h2>Voice localization for films, series, animation and games.</h2>
          <p>
            Studio K provides dubbing, voice over, translation, directing, engineering,
            and post-production for content that needs to travel across languages with
            natural emotion and cultural precision.
          </p>
        </div>
        <div className="dubbing-card">
          <div className="dubbing-number">10+</div>
          <p>Asian languages supported through a team of voice actors, translators, directors, engineers and QC specialists.</p>
          <div className="service-tags">
            {dubbingServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section visual-section">
        <div className="section-heading">
          <p className="eyebrow">Studio gallery</p>
          <h2>Rooms, workspaces and atmosphere from the original site.</h2>
        </div>
        <div className="studio-gallery">
          {workspaceGallery.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      </section>

      <section className="section clients">
        <div className="section-heading">
          <p className="eyebrow">Trusted since 2003</p>
          <h2>Proud to work with production houses, streamers and entertainment brands.</h2>
        </div>
        <div className="client-strip" aria-label="Selected clients">
          {clientAssets.map((client) => (
            <span key={client.src}>
              <img src={client.src} alt={assetLabel(client)} />
            </span>
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

      <section className="people-section" id="people">
        <div className="people-shell">
          <div className="people-intro">
            <p>People</p>
            <h2>Meet the team behind the sound.</h2>
          </div>
          {peopleCategories.map((category) => (
            <section
              className="people-category"
              data-bg={`${category.label} / Banana Sound Studio`}
              key={category.label}
            >
              <h3>{category.label}</h3>
              <div className="people-roster">
                {category.people.map((personKey) => {
                  const person = personByKey(personKey);
                  if (!person) return null;
                  const name = displayName(person);

                  return (
                    <article className="person-portrait" data-person={personKey} key={person.src}>
                      <img src={person.src} alt={`${name} portrait`} />
                      <span>{name}</span>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Create all sound as a piece of cake</p>
          <h2>Tell us what you are making. We will shape the sound around it.</h2>
        </div>
        <div className="contact-details">
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
              <a href="mailto:bananasoundstudio@gmail.com">bananasoundstudio@gmail.com</a>
              <p>Prank</p>
            </article>
            <article>
              <h3>Accounting</h3>
              <a href="tel:+66948894448">(+66) 094-889-4448</a>
              <a href="mailto:account@bananasoundstudio.com">account@bananasoundstudio.com</a>
            </article>
          </div>
          <figure className="contact-map">
            <img src="/contact-map-eng.png" alt="Map to Banana Sound Studio at Tasniya Building" />
          </figure>
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
