import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "../src/initSupabase";
import tokenFetcher from "../utils/tokenFetcher";
import refreshToken from "../utils/refreshToken";
import userFetcher from "../utils/userFetcher";
import tracksFetcher from "../utils/musicFetcher";

// TODO:
// 1. Readme
// 2. Components
// 3. Proof read
// 4. Update LinkedIn
// 5. SEO tags

export default function Home({ user, tracks }) {
  return (
    <div className="text-spotify-black">
      <Head>
        <title>
          Spotify | Web Engineer - Experimentation, Data and Insights
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex items-center justify-between	bg-white rounded-sm px-12 py-4">
        <div
          className="relative select-none pointer-events-none"
          style={{ height: "70px", width: "140px  " }}
        >
          <Image
            className="select-none pointer-events-none"
            src="/images/logo/Spotify_Logo_RGB_Green.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex items-center">
          <p className="pl-2 pr-2">
            <Link href="https://github.com/scarsam" passHref>
              <a target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </Link>
          </p>
          <p className="pl-2">
            <Link href="https://www.linkedin.com/in/samojling" passHref>
              <a target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </Link>
          </p>
        </div>
      </nav>

      <section className="animated-background p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="row-span-4 bg-blue rounded-sm shadow-sm p-10">
            <h1 className="text-3xl text-center mb-12">
              <Link
                href="https://www.linkedin.com/jobs/view/2307885871/?refId=674511c8-710e-4cb5-8a59-aa7f549e4039"
                passHref
              >
                <a target="_blank" rel="noreferrer">
                  Web Engineer
                  <span className="block">
                    Experimentation, Data and Insights
                  </span>
                </a>
              </Link>
            </h1>

            <article className="prose max-w-2xl m-auto">
              <p>
                <span className="pr-1">👋</span> Hello there,
              </p>
              <p>
                <strong>Me: </strong>
                My name is Sam Öjling and I'm currently looking for a good
                reason to move back to Stockholm, Sweden 🇸🇪 from San Francisco,
                U.S 🇺🇸. I first moved here 2011 to study and have stayed ever
                since.
              </p>
              <p>
                <strong>Experience: </strong>
                I'm currently working as a frontend growth developer at a
                company called{" "}
                <Link href="https://www.gusto.com" passHref>
                  <a target="_blank" rel="noreferrer">
                    Gusto
                  </a>
                </Link>
                . I've been with Gusto since 2015 both as a product designer and
                for the last two years as a frontend developer
              </p>
              <p>
                <strong>Tech Stack: </strong>
                Our current techs tack consince of React, TypeScript (recently),
                custom Flux store, GraphQL, React Testing Library, in-house
                component library and then the backend is in Ruby on Rails. I do
                also have experience using Figma and Sketch for creating
                mockups.
              </p>
              <p>
                <strong>Experimenatation: </strong>
                We currently have a custom experiment framework to split our
                visitors, companies and user roles into different variations.
                But we are currently looking to start using Optimizely as our
                experiment framework
              </p>

              <em>
                <strong>PS:</strong> I took the opportunity to play around with
                your API and pulled my top most 10 songs, this was made with
                Next.js, Tailwindcss. Here is the{" "}
                <Link href="https://github.com/scarsam/sam-spotify" passHref>
                  <a target="_blank" rel="noreferrer">
                    Github repo
                  </a>
                </Link>
                .
              </em>
              <div className="text-center mt-4">
                <div
                  className="relative m-auto"
                  style={{ height: "40px", width: "40px" }}
                >
                  <Image
                    className="rounded-full pointer-events-none select-none"
                    src={user.images[0].url}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p>
                  <Link href={user.external_urls.spotify} passHref>
                    <a target="_blank" rel="noreferrer">
                      Sam Öjling
                    </a>
                  </Link>
                </p>
              </div>
            </article>
          </div>
          {tracks &&
            tracks.map((track) => (
              <div
                key={track.id}
                className="flex p-4 pb-3 bg-white rounded-sm transition-shadow hover:shadow-md shadow-sm items-center"
              >
                <div className="pr-5">
                  <Image
                    className="pointer-events-none select-none"
                    src={track.image.url}
                    alt={track.name}
                    height={150}
                    width={150}
                  />
                </div>
                <div>
                  <p className="text-2xl">{track.name}</p>
                  <p className="text-md">{track.artist.name}</p>
                  <p className="text-md">{track.album}</p>
                  <Link href={track.url} passHref>
                    <a
                      className="inline-block rounded-full px-5 py-2 mt-4 bg-spotify-black text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Play on Spotify
                    </a>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps(context) {
  let token;
  let { data, error } = await supabase
    .from("token")
    .select("token")
    .order("id", { ascending: false })
    .limit(1);

  token = await tokenFetcher(data[0].token.access_token);
  if (token.error === "invalid_grant") {
    token = await refreshToken(data[0].token.refresh_token);
  }
  const user = await userFetcher(token);
  const { items } = await tracksFetcher(token);

  const tracks = items.map((track) => ({
    id: track.id,
    name: track.name,
    album: track.album.name,
    artist: track.artists.map((artist) => ({ name: artist.name }))[0],
    image: track.album.images.find((image) => image.width === 300),
    url: track.external_urls.spotify,
  }));

  return { props: { user, tracks } };
}
