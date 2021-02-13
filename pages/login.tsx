import { supabase } from "../src/initSupabase";
import tokenFetcher from "../utils/tokenFetcher";

export default function Login() {
  return (
    <div className="text-center pt-40">
      <p className="text-xl">Generate Auth Token</p>

      <a
        className="inline-block rounded-full px-5 py-2 mt-4 bg-spotify-black text-white"
        href={process.env.NEXT_PUBLIC_SPOTIFY_LOGIN_URL}
      >
        Login
      </a>
    </div>
  );
}

export async function getServerSideProps(context) {
  const code = context?.query?.code;

  if (code) {
    const token = await tokenFetcher(code);

    if (token?.error) return;

    await supabase.from("token").insert([{ token }]);
    return {
      props: {},
    };
  }

  return {
    props: {},
  };
}
