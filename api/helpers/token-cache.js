let tokenCache = new Map();

export async function getToken() {
    const now = Date.now();
    const priorToken = tokenCache.get("petfinder");

    if (priorToken && now < priorToken.expires_at) {
        return priorToken.access_token;
    }

    const params = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.PETFINDER_API_KEY,
        client_secret: process.env.PETFINDER_API_SECRET,
    });
    const response = await fetch(
        `${process.env.PETFINDER_BASE_URL}/oauth2/token`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params,
        },
    );

    if (!response.ok) {
        throw new Error("Petfinder API token fetch failed.");
    }

    const data = await response.json();
    const expiresAt = now + (data.expires_in - 60) * 1000;
    tokenCache.set("petfinder", {
        access_token: data.access_token,
        expires_at: expiresAt,
    });

    return data.access_token;
}
