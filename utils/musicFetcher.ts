export default async function userFetcher(token) {
  try {
    const tracks = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=8&offset=1",
      {
        method: "GET",
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`,
          "Content-Type": "application/json",
        },
      },
    );
    return await tracks.json();
  } catch (error) {
    return error;
  }
}
