import { supabase } from "../src/initSupabase";
import tokenFetcher from "../utils/tokenFetcher";

export default function Login() {
  return (
    <>
      <p>hi</p>
      <a href={process.env.NEXT_PUBLIC_SPOTIFY_LOGIN_URL}>Login</a>
    </>
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
