import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'zykf8mvo',
  dataset: 'production',
  token: 'skel8lxSxJIYASDBaqGwCcypQ6FBTAURy3lYAzxEYBazAZcZCK0seMexlujYt57OnkWF3v77DeJ6aS69tkr5kSXqRCBTn32mdHmhWbWST8aCZLVJKNbadAZ2URzxg7I4e7TMgdXJca79TYfWXBuKVVNcyeha3NUeD6zYTw042Llu5zgJ1vbh', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
});