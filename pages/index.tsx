import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "../src/initSupabase";
import tokenFetcher from "../utils/tokenFetcher";
import refreshToken from "../utils/refreshToken";
import userFetcher from "../utils/userFetcher";
import tracksFetcher from "../utils/musicFetcher";
import Paragraph from "../components/Paragraph";
import Card from "../components/Card";
import LinkedIn from "../components/icons/LinkedIn";
import Github from "../components/icons/Github";
import Profile from "../components/Profile";

// TODO:
// 4. Update LinkedIn

export default function Home({ user, tracks }) {
  return (
    <div className="text-spotify-black">
      <Head>
        <title>
          Sam Ojling | Web Engineer - Experimentation, Data and Insights
        </title>
        <meta
          name="description"
          content="Website put together for job application at Spotify (Web Engineer - Experimentation, Data and Insights)"
        />
        <meta
          property="og:image"
          content="https://www.scdn.co/i/_global/open-graph-default.png"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav className="flex items-center justify-between	bg-white rounded-sm px-12 py-4">
        <div
          className="relative select-none pointer-events-none"
          style={{ height: "70px", width: "140px  " }}
        >
          <Image
            className="select-none pointer-events-none"
            src="/images/logo/Spotify_Logo_RGB_Black.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex items-center">
          <p className="pl-2 pr-2">
            <Github />
          </p>
          <p className="pl-2">
            <LinkedIn />
          </p>
        </div>
      </nav>

      <section className="animated-background p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="row-span-1 col-span-full md:row-span-2 md:col-span-2 lg:row-span-4 lg:col-span-1 bg-blue rounded-sm shadow-sm p-10">
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
              <Paragraph highlight="Me">
                My name is Sam Öjling and I'm currently looking for a good
                reason to move back to Stockholm{" "}
                <span className="px-1">🇸🇪</span> and I think this role might be
                it. I'm currently living in San Francisco
                <span className="px-1">🇺🇸</span>, and have been since 2011.
                Outside work I enjoy spending time in the nature and playing
                board games (Gloomhaven and Terraforming Mars most recently).
              </Paragraph>
              <Paragraph highlight="Experience">
                I'm currently working as a frontend growth developer at{" "}
                <Link href="https://www.gusto.com" passHref>
                  <a target="_blank" rel="noreferrer">
                    Gusto
                  </a>
                </Link>
                . I've been with the company since 2015 first as a product
                designer and for the last two years as a frontend developer.
              </Paragraph>
              <Paragraph highlight="Tech Stack">
                Our current tech stack includes React, TypeScript, custom Flux
                store, GraphQL, React Testing Library, in-house component
                library, this lives on top of a Ruby on Rails monolith. For
                design mockups, we use Figma or Sketch.
              </Paragraph>
              <Paragraph highlight="Experimentation">
                We currently have a custom experiment framework to split our
                visitors, companies, and users into different variations. We are
                looking to migrate over our experiment framework to use
                Optimiziely.
              </Paragraph>

              <em>
                <strong>PS:</strong> I took the opportunity to play around with
                your API and pulled my 10 topmost played songs, this was made
                with Next.js, Supabase (save token) and, Tailwindcss. Here is
                the{" "}
                <Link href="https://github.com/scarsam/sam-spotify" passHref>
                  <a target="_blank" rel="noreferrer">
                    Github repo
                  </a>
                </Link>
                .
              </em>
              <div className="text-center mt-4">
                {user && <Profile user={user} />}
              </div>
            </article>
          </div>
          {tracks &&
            tracks.map((track) => <Card key={track.id} track={track} />)}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  let token;
  try {
    let { data } = await supabase
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
  } catch (error) {
    return { props: { user: null, tracks: [] } };
  }

  return { props: { user: null, tracks: [] } };
}
