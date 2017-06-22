<template>
  <div class="timer-body">
    <p>{{ time }}</p>
    <ul>
      <li><button @click="start()" :disabled="enableToStart">Start</button></li>
      <li><button @click="stop()">Stop</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: '00:00',
      timerId: '',
      isBreak: false,
      enableToStart: false
    }
  },
  methods: {
    start: function() {
      const self = this

      self.enableToStart = true

      let secs = self.isBreak ? 5 * 60 : 25 * 60
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
      }, 1000)
    },
    stop: function() {
      this.enableToStart = false
      this._clearTimer()
    },
    _clearTimer: function() {
      this.time = "00:00"
      this.isBreak = this._reverse(this.isBreak)
      window.clearInterval(this.timerId)
    },
    _reverse: function(bool) {
      return bool ? false : true
    }
  },
  beforeDestroy() {
    this._clearTimer()
  }
}
</script>

<style scoped>
.timer-body {
  width: 960px;
  margin: 0 auto;
  text-align: center;
}

.timer-body p {
  margin-top: 150px;
  font-size: 48px;
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
