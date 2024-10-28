chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(['interval'], (result) => {
      const interval = result.interval || 50;
      createAlarm(interval);
    });
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'updateAlarm') {
      createAlarm(message.interval);
    }
  });
  
  chrome.alarms.onAlarm.addListener(() => {
    chrome.windows.create({
      url: 'break.html',
      type: 'popup',
      width: 800,
      height: 600
    });
  });
  
  function createAlarm(interval) {
    chrome.alarms.clear('motivationalBreak');
    chrome.alarms.create('motivationalBreak', {
      periodInMinutes: interval
    });
  }
  