export const State = {
  WORKING: 0,
  BREAK: 1,
  LONG_BREAK: 2,
  PAUSE: 3,
  RESUME: 4
}

const WORKING_TIMES = { workingTime: 25 * 60, breakTime: 5 * 60, longTermBreakTime: 15 * 60 }

function getLimitTime(state) {
  switch(state) {
    case State.WORKING:
      return WORKING_TIMES.workingTime
    case State.BREAK:
      return WORKING_TIMES.breakTime
    case State.LONG_BREAK:
      return WORKING_TIMES.longTermBreakTime
    default:
      return 0
  }
}

function displayDefaultTime(state) {
  switch(state) {
    case State.WORKING:
      return '25:00'
    case State.BREAK:
      return '05:00'
    case State.LONG_BREAK:
      return '15:00'
    default:
      return '00:00'
  }
}

function nextState(state, loopCounter) {
  const isLongBreak = loopCounter % 4 === 0
  console.log("counter = " + loopCounter + ", isLongBreak = " + isLongBreak)
  if (state === State.WORKING) {
    return isLongBreak ? State.LONG_BREAK : State.BREAK
  } else if (state === State.BREAK || state === State.LONG_BREAK) {
    return State.WORKING
  } else {
    console.log("Illegal Argument (state): " + state)
    return State.WORKING
  }
}

export {
  getLimitTime,
  displayDefaultTime,
  nextState
}
