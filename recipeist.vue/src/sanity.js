import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'zykf8mvo',
  dataset: 'production',
  token: 'skuIkKjoaIGfEASuw36pb4YEXHRHhGAcFqRikmGXv95MyVtnuH7XYjAfvRbiormGOR7myGDli0DoS9NqUhSkQy9YKUG6KjPZNuqNoK21JmfQOv1itT53AJ2w4uBV11xiRa9HrfTFp48twhHBJyUAgw05OuccevT6O3GRJpQmUHVWiGt9FNjv', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);
export const sanityImage = (image) => builder.image(image);
