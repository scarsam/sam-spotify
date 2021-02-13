export default async function refreshToken(code) {
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
      body: `grant_type=refresh_token&refresh_token=${code}`,
    });
    return await token.json();
  } catch (error) {
    return error;
  }
}
