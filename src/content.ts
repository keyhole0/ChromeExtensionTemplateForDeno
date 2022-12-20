chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  alert('Hello Chrome Extension!');
  console.log('message', message);
  console.log('sender', sender);
  sendResponse();
  return true;
});
