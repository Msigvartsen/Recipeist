import fetch from "node-fetch"

export const getSynonym = async searchText => {
  if (!searchText) return { status: 400, error: "invalid searchText" }

  if (searchText.includes(",")) {
    console.log(
      `Removing comma and text after. thesaurus doesn't understand it`
    )
    searchText = searchText.split(",")[0]
  }

  console.log(`Searching for [${searchText}] in thesaurus`)

  const url = `http://thesaurus.altervista.org/thesaurus/v1?key=WKIlXc8Ztubx5a1guAio&word=${searchText}&language=no_NO&output=json
    `
  const response = await fetch(url)
  if (response.status !== 200) {
    const error = `thesaurus: ${response.statusText}`
    console.log(error)
    return { status: response.status, error }
  }

  const data = (await response.json()) || {}

  if (!data.response) {
    const error = `No data found`
    console.log(error)
    return { status: 404, error }
  }

  const synonymLists = data.response.map(x => x.list.synonyms.split("|"))

  const hitCount = synonymLists.reduce((a, b) => a + b.length, 0)
  let message = `Found ${hitCount} synonyms for [${searchText}] in thesaurus`
  if (hitCount > 0) {
    message += `. ex. [${synonymLists[0][0]}]`
  }
  console.log(message)

  return { status: 200, message, synonymLists }
}
