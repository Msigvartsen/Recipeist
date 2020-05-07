import fetch from "node-fetch"

export const searchImages = async (searchText) => {
    if (!searchText) return { status: 400, error: "invalid searchText" };

    const searchTextEncoded = encodeURI(searchText);
    console.log(`Searching for [${searchText}] in Unplash (encoded: ${searchTextEncoded})`)

    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchTextEncoded}&client_id=Zn36J-EfSFHRCSGhcmZaBiK-_GGPdF_qdu56yM3ctag`;
    const unsplashResponse = await fetch(url);
    if (unsplashResponse.status !== 200) {
        const error = `Unsplash: ${unsplashResponse.statusText}`;
        console.log(error);
        return { status: unsplashResponse.status, error }
    }

    const unsplashData = await unsplashResponse.json() || {};
    if (!unsplashData.results) {
        const error = `No data found`;
        console.log(error);
        return { status: 404, error }
    }

    const firstImageResult = unsplashData.results[0];
    const imageUrl = firstImageResult.urls.regular;
    const imageAltText = firstImageResult.alt_description || (firstImageResult.tags[0] || {}).title

    console.log(`Found ${unsplashData.total} hits. Returning first image in regular format: ${imageUrl}`)

    return { status: 200, imageUrl, imageAltText, firstImageResult }
}