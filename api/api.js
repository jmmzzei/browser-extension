async function saveLocation(location) {
  return await chrome.storage.local.set({
    [location.name]: location,
  })
}

async function updateLocation(key, location) {
  return await chrome.storage.local.set({
    [key]: location,
  })
}

async function getLocation(key) {
  return await chrome.storage.local.get(key)
}

async function getAllLocations() {
  return await chrome.storage.local.get()
}

async function deleteLocation(key) {
  return await chrome.storage.local.remove(key)
}
