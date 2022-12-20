chrome.action.onClicked.addListener(async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  await chrome.tabs.sendMessage(tabs[0]?.id || 0, {
    message: 'dummy',
  });
  return true;
});
