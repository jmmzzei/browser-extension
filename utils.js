export async function getActiveTabId() {
  const tabs = await chrome.tabs.query({
    currentWindow: true,
    active: true,
  })

  return tabs[0]?.id
}
