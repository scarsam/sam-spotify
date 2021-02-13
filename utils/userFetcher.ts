export default async function userFetcher(token) {
  try {
    const user = await fetch("https://api.spotify.com/v1/me", {
      method: "GET",
      headers: {
        Authorization: `${token.token_type} ${token.access_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return await user.json();
  } catch (error) {
    return error;
  }
}
