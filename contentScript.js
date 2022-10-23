function getDataFromPage() {
  const name = getElementContent('name')
  const address = getElementContent('address')
  const price = getElementContent('price')
  const from = getElementContent('from')
  const to = getElementContent('to')

  return {
    name,
    address,
    from,
    to,
    price,
  }
}

const address = document.querySelector(
  '#showMap2 > span.hp_address_subtitle.js-hp_address_subtitle.jq_tooltip',
)

chrome.runtime.onMessage.addListener(async (obj, sender, response) => {
  const { type } = obj

  let location = getDataFromPage()

  const p = document.createElement('p')
  p.textContent = JSON.stringify(location)
  address.insertAdjacentElement('afterend', p)

  if (type === 'ADD') {
    await saveLocation(location)
  }

  const storage = await getAllLocations()

  response('success')
})
