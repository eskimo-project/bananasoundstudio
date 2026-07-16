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
const clientAssets = assetsByCategory("clients");
const roomAssets = assetsByCategory("rooms");
const peopleAssets = assetsByCategory("people");
const workAssets = assetsByCategory("work");
const studioGallery = workAssets.slice(0, 6);
const posterAssets = workAssets.slice(6);

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
    title: "Death Whisperer 2",
    year: "2024",
    type: "Feature Film",
    image: posterAssets[11]?.src,
    description:
      "A dark, forceful theatrical score for a story driven by relentless supernatural tension.",
  },
  {
    title: "Don't Come Home",
    year: "2024",
    type: "Netflix Series",
    image: posterAssets[10]?.src,
    description:
      "Atmospheric music and sound for a mystery where family trauma and the paranormal fold into one another.",
  },
  {
    title: "Khun Pan 3",
    year: "2023",
    type: "Feature Film",
    image: posterAssets[0]?.src,
    description:
      "Large-scale cinematic music for folklore, crime, magic, and a hero confronting his own beliefs.",
  },
  {
    title: "Man Suang",
    year: "2023",
    type: "Feature Film",
    image: posterAssets[3]?.src,
    description:
      "Period-inspired musical identity for intrigue, elegance, and secrets inside Siam's entertainment world.",
  },
  {
    title: "Terror Tuesday: Extreme",
    year: "2024",
    type: "Series",
    image: posterAssets[44]?.src ?? posterAssets[5]?.src,
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
    people: ["TOY", "MEAN", "NUENG", "MOST", "JADI", "JOB", "PRO", "NU", "JO", "BALL"],
  },
  {
    label: "Producer & Creative",
    accent: "JOO",
    people: ["ES", "JOO"],
  },
  {
    label: "Office & Studio",
    accent: "TARN",
    people: ["LEK", "TARN", "PATT", "SUPA", "M2", "PREM"],
  },
];

const navLinks = [
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
          <img
            className="hero-image"
            src={roomAssets[0]?.src}
            alt="Banana Sound Studio mixing room"
          />
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

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Show Reel 2025</p>
          <h2>Feature film and TV series work with emotional range.</h2>
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
                <a href={youtubeTrailerUrl(title)} target="_blank" rel="noreferrer">
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
          {studioGallery.map((asset, index) => (
            <img
              key={asset.src}
              src={asset.src}
              alt={`Banana Sound Studio gallery image ${index + 1}`}
            />
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

                  return (
                    <article className="person-portrait" key={person.src}>
                      <img src={person.src} alt={`${displayName(person)} portrait`} />
                      <span>{displayName(person)}</span>
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
