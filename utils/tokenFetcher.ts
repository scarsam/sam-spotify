export default async function tokenFetcher(code) {
  const buffer = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
  );
  const base64String = buffer.toString("base64");

  try {
    const token = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${base64String}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=authorization_code&code=${code}&scope=user-top-read&redirect_uri=http://localhost:3000/login`,
    });
    return await token.json();
  } catch (error) {
    return error;
  }
}
