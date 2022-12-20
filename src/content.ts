/// <reference types="https://unpkg.com/chrome-types@0.1.153/index.d.ts" />
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  alert('Hello Chrome Extension!');
  console.log('message', message);
  console.log('sender', sender);
  sendResponse();
  return true;
});
