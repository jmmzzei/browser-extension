function getDataFromPage() {
  return SELECTED_PROPERTIES.reduce(
    (acc, curr) => ({ ...acc, [curr]: getElementContent(curr) }),
    {},
  )
}

chrome.runtime.onMessage.addListener(async (obj, sender, response) => {
  const { type } = obj

  let location = getDataFromPage()

  debug(location)

  if (type === 'ADD') {
    await saveLocation(location)
  }

  const storage = await getAllLocations()

  response('success')
})

function debug(location) {
  const address = document.querySelector(
    '#showMap2 > span.hp_address_subtitle.js-hp_address_subtitle.jq_tooltip',
  )
  const p = document.createElement('p')
  p.textContent = JSON.stringify(location)
  address.insertAdjacentElement('afterend', p)
}
