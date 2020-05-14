const { Translate } = require("@google-cloud/translate").v2
const isDev = () => process.env.NODE_ENV === "development"
process.env.GOOGLE_APPLICATION_CREDENTIALS = isDev() ? "../google.json" : "./google.json" // user-appdata-local-temp-mappa i Windows

const translateClient = new Translate()

export const translateText = async (text, targetLang = null, sourceLang = null) => {
  console.log(`Translating [${text}] from [${sourceLang ? sourceLang : "?"}] to [${targetLang}]`)

  if (!text) {
    const error = [`Invalid text '${text}'`]
    console.log(error)
    return text
  }

  let options = { to: targetLang || "en" }
  if (sourceLang) options.from = sourceLang

  try {
    const translations = await translateClient.translate(text, options)
    const translation = translations[0]

    console.log(`Translation finished [${translation}]`)

    return translation
  } catch (error) {
    console.log(`Translation failed [${error}]`)
    return text
  }
}
