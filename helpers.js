const selectors = {
  address:
    '#showMap2 > span.hp_address_subtitle.js-hp_address_subtitle.jq_tooltip',
  name: '#hp_hotel_name > div > div > h2',
  price:
    '#hprt-table > tbody > tr.js-rt-block-row.e2e-hprt-table-row.hprt-table-cheapest-block.hprt-table-cheapest-block-fix.js-hprt-table-cheapest-block > td.hp-price-left-align.hprt-table-cell.hprt-table-cell-price > div > div.prco-wrapper.bui-price-display.prco-sr-default-assembly-wrapper > div:nth-child(1) > div:nth-child(2) > div > span.prco-valign-middle-helper',
  from: '#hp_availability_style_changes > div.sb-searchbox__outer > form > div > div.xp__dates.xp__group > div.xp__dates-inner > div:nth-child(2) > div > div > div > div > div.sb-date-field__display',
  to: '#hp_availability_style_changes > div.sb-searchbox__outer > form > div > div.xp__dates.xp__group > div.xp__dates-inner > div:nth-child(3) > div > div > div > div > div.sb-date-field__display',
}

function getSelector(key) {
  return selectors[key]
}

function getElementContent(key) {
  return document.querySelector(getSelector(key)).textContent
}
