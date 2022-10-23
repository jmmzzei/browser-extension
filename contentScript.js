function getDataFromPage() {
  const address = document.querySelector(
    '#showMap2 > span.hp_address_subtitle.js-hp_address_subtitle.jq_tooltip',
  ).textContent

  const name = document.querySelector(
    '#hp_hotel_name > div > div > h2',
  ).textContent

  const price = document.querySelector(
    '#hprt-table > tbody > tr.js-rt-block-row.e2e-hprt-table-row.hprt-table-cheapest-block.hprt-table-cheapest-block-fix.js-hprt-table-cheapest-block > td.hp-price-left-align.hprt-table-cell.hprt-table-cell-price > div > div.prco-wrapper.bui-price-display.prco-sr-default-assembly-wrapper > div:nth-child(1) > div:nth-child(2) > div > span.prco-valign-middle-helper',
  ).textContent

  const from = document.querySelector(
    '#hp_availability_style_changes > div.sb-searchbox__outer > form > div > div.xp__dates.xp__group > div.xp__dates-inner > div:nth-child(2) > div > div > div > div > div.sb-date-field__display',
  ).textContent

  const to = document.querySelector(
    '#hp_availability_style_changes > div.sb-searchbox__outer > form > div > div.xp__dates.xp__group > div.xp__dates-inner > div:nth-child(3) > div > div > div > div > div.sb-date-field__display',
  ).textContent

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
