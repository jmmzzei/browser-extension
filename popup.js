import { getActiveTabId } from './utils.js'

const div = document.getElementsByTagName('div')[0]
const btn = document.getElementById('btn')
async function addOption() {
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
btn.addEventListener('click', addOption)

const destinationForm = document.getElementById('destination')
function addDestination(e) {
  e.preventDefault()
  const p = document.createElement('p')
  p.textContent = 'destination added'
  div.append(p)
}
destinationForm.addEventListener('submit', addDestination)

const showDestinationContainer = document.getElementById(
  'showDestinationContainer',
)
function showAddDestinationForm() {
  const destinationContainer = document.getElementsByClassName(
    'destinationContainer',
  )[0]
  destinationContainer.classList.add('active')
}
showDestinationContainer.addEventListener('click', showAddDestinationForm)

const hideDestinationContainer = document.getElementById(
  'hideDestinationContainer',
)
function closeAddDestinationForm() {
  const destinationContainer = document.getElementsByClassName(
    'destinationContainer',
  )[0]
  destinationContainer.classList.remove('active')
}
hideDestinationContainer.addEventListener('click', closeAddDestinationForm)
