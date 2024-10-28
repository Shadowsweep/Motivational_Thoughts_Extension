document.getElementById('save').addEventListener('click', () => {
    const interval = document.getElementById('interval').value;
    chrome.storage.sync.set({ interval: parseInt(interval) }, () => {
      chrome.runtime.sendMessage({ type: 'updateAlarm', interval: parseInt(interval) });
      window.close();
    });
  });
  // Load saved settings
chrome.storage.sync.get(['interval'], (result) => {
    if (result.interval) {
      document.getElementById('interval').value = result.interval;
    }
  });
  
  // background.js
  