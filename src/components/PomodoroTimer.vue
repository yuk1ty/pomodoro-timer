<template>
  <div class="timer-body">
    <p>{{ time }}</p>
    <ul>
      <li v-if="normal"><button @click="start()">Start</button></li>
      <li v-else>
        <button @click="resume()" v-if="isPaused">Resume</button>
        <button @click="pause()" v-else>Pause</button>
      </li>
      <li><button @click="stop()">Stop</button></li>
    </ul>
  </div>
</template>

<script>
import { TICKING_INTERVAL, State, getLimitTime, displayDefaultTime, nextState, handleCounting } from '@/js/TimerHandler'
import { handleRequestPermission, pushNotification } from '@/js/NotificationHandler'

export default {
  // TODO must use Vuex
  data () {
    return {
      state: 0,
      loopCounter: 0,
      normal: true,
      isPaused: false,
      time: this.setTimer(),
      timerId: ''
    }
  },
  methods: {
    setTimer: function() {
      this._setup()
      return displayDefaultTime(this.state)
    },
    start: function() {
      const self = this
      let secs = getLimitTime(this.state)
      if (this.state === State.WORKING) {
        this.loopCounter++
      }

      this.normal = false

      self.timerId = window.setInterval(() => {
        secs--
        let m = Math.floor(secs / 60)
        let s = secs % 60

        if (m < 10) {
          m = "0" + m
        }
        if (s < 10) {
          s = "0" + s
        }

        self.time = m + ":" + s

        if (secs === 0) {
          self._clearTimer()
        }
      }, TICKING_INTERVAL)
    },
    stop: function() {
      this._clearTimer()
    },
    pause: function() {
      this.isPaused = true
    },
    resume: function() {
      this.isPaused = false
      this.normal = true
    },
    _setup: function() {
      if (typeof this.state === 'undefined') {
        this.state = State.WORKING
      }
    },
    _clearTimer: function() {
      if (this.state === State.WORKING) {
        pushNotification("Take a Break!")
      } else if (this.state === State.BREAK || this.state === State.LONG_BREAK) {
        pushNotification("Work!")
      }

      this.state = nextState(this.state, this.loopCounter)
      this.time = this.setTimer()
      this.normal = true
      window.clearInterval(this.timerId)
    }
  },
  beforeDestroy() {
    window.clearInterval(this.timerId)
  },
  created: function() {
    handleRequestPermission()
  }
}
</script>

<style scoped>
button {
	display: inline-block;
	width: 200px;
	height: 54px;
	text-align: center;
	text-decoration: none;
	line-height: 54px;
	outline: none;
}

button::before,
button::after {
	position: absolute;
	z-index: -1;
	display: block;
	content: '';
}

button,
button::before,
button::after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-transition: all .3s;
	transition: all .3s;
}

button {
	background-color: transparent;
	border: 1px solid #fff;
  border-radius: 10px;
	color: #fff;
	line-height: 50px;
  cursor: pointer;
}

button:hover {
	background-color: rgba(255, 255, 255, .2);
}

.timer-body {
  width: 960px;
  margin: 0 auto;
  text-align: center;
}

.timer-body p {
  margin-top: 150px;
  font-size: 72px;
  color: #fff;
}

.timer-body ul {
  margin: 0;
  padding: 0;
}

.timer-body ul li {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline;
}
</style>
