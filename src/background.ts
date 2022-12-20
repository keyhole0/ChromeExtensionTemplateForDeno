chrome.action.onClicked.addListener(async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const response = await chrome.tabs.sendMessage(tabs[0]?.id || 0, {
    message: 'dummy',
  });
  console.log('response', response);
  return true;
});
