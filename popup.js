import { getActiveTabId } from './utils.js'

const btn = document.getElementById('btn')
const div = document.getElementsByTagName('div')[0]

async function btnEvent() {
  const activeTabId = await getActiveTabId()
  chrome.tabs.sendMessage(
    activeTabId,
    {
      val: 'VAL',
    },
    function (response) {
      const p = document.createElement('p')
      p.textContent = response
      div.append(p)
    },
  )
}

btn.addEventListener('click', btnEvent)
