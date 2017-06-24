function handleRequestPermission() {
  Notification.requestPermission().then(function(permission) {
    if (permission === 'denied') {
      console.log("If you want to use a desktop notification, please set the permission of desktop notification ok.")
    } else if (permission === 'default') {
      console.log("The permission request was dismissed.")
    }
  })
}

function pushNotification(message) {
  new Notification(message)
}

export {
  handleRequestPermission,
  pushNotification,
}
