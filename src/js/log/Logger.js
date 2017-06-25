const DEBUG_MODE = true
const Level = {
  INFO: 0,
  WARN: 1,
  ERROR: 2,
  DEBUG: 3,
}

function _log(message, level) {
  if (!DEBUG_MODE) {
    return
  }

  switch(level) {
    case Level.INFO:
      console.info(message)
      break
    case Level.WARN:
      console.warn(message)
      break
    case Level.ERROR:
      console.error(message)
      break
    case Level.DEBUG:
      console.log(message)
      break
    default:
      return
  }
}

export default {
  info: function(message) {
    _log(message, Level.INFO)
  },

  warn: function(message) {
    _log(message, Level.WARN)
  },

  error: function(message) {
    _log(message, Level.ERROR)
  },

  getValueAndLogging: function(value, message) {
    _log(message + value, Level.DEBUG)
    return value
  }
}
