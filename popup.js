import { getActiveTab } from './utils.js'

const div = document.getElementsByTagName('div')[0]
const btn = document.getElementById('btn')

async function addOption() {
  const activeTab = await getActiveTab()

  const option = {
    type: 'ADD',
    location: {
      name: 'House 2',
      address: '2 not street, London, England',
      price: '202',
      from: '20/10/2022',
      to: '20/12/2023',
    },
  }

  chrome.tabs.sendMessage(activeTab.id, option, function (response) {
    const p = document.createElement('p')
    p.textContent = response
    div.append(p)
  })
}

btn.addEventListener('click', addOption)

const destinationForm = document.getElementById('destination')
function addDestination(e) {
  e.preventDefault()
  const destinationInput = document.getElementById('destinationInput')
  destinationInput.value = ''
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
