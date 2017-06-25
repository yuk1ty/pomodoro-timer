import logger from './log/Logger'

function handleRequestPermission() {
  Notification.requestPermission().then(function(permission) {
    if (permission === 'denied') {
      logger.warn("If you want to use a desktop notification, please set the permission of desktop notification ok.")
    } else if (permission === 'default') {
      logger.warn("The permission request was dismissed.")
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
