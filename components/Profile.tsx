import Link from "next/link";
import Image from "next/image";

export default function Profile({ user }) {
  return (
    <>
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
    </>
  );
}
