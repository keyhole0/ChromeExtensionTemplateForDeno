chrome.runtime.onMessage.addListener((_message, _sender, sendResponse) => {
  alert(`Hello Chrome Extension!\nThis page title : ${document.title}`);
  sendResponse();
  return true;
});
