import Link from "next/link";

export default function Profile({ user }) {
  return (
    <Link href={user.external_urls.spotify} passHref>
      <a className="inline-block" target="_blank" rel="noreferrer">
        <img
          className="rounded-full pointer-events-none select-none m-auto h-10 w-10"
          src={user.images[0].url}
          alt="Spotify profile"
        />
      </a>
    </Link>
  );
}
