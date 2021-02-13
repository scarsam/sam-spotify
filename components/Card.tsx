import Image from "next/image";
import Link from "next/link";

export default function Card({ track }) {
  return (
    <div className="flex p-4 pb-3 bg-white rounded-sm transition-shadow hover:shadow-md shadow-sm items-center">
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
  );
}
