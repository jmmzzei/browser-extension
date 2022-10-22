chrome.storage.onChanged.addListener(function (changes, namespace) {
  console.log({ changes })
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`,
    )
  }
})
