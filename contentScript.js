const article = document.querySelector('article')

// `document.querySelector` may return null if the selector doesn't match anything.
function insertElement(type) {
  if (article) {
    const text = article.textContent
    const wordMatchRegExp = /[^\s]+/g // Regular expression
    const words = text.matchAll(wordMatchRegExp)
    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length
    const readingTime = Math.round(wordCount / 200)
    const badge = document.createElement('p')
    // Use the same styling as the publish information in an article's header
    badge.classList.add('color-secondary-text', 'type--caption')
    badge.textContent = `⏱️ ${readingTime} min read ${type}`

    // Support for API reference docs
    const heading = article.querySelector('h1')
    // Support for article docs with date
    const date = article.querySelector('time')?.parentNode

    ;(date ?? heading).insertAdjacentElement('afterend', badge)
  }
}

chrome.runtime.onMessage.addListener(async (obj, sender, response) => {
  const { type, location } = obj

  if (type === 'ADD') {
    await saveLocation(location)
  }

  const storage = await getAllLocations()

  insertElement(JSON.stringify(storage))

  response('success')
})
