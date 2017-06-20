<template>
  <div id="pomodoro-timer">
    <header>
      <h1>Pomodoro Timer</h1>
      <nav>
        <ul>
          <li>FAQ</li>
        </ul>
      </nav>
    </header>
    <pomodoro-timer></pomodoro-timer>
  </div>
</template>

<script>
import PomodoroTimer from '@/components/PomodoroTimer'

export default {
  components: {
    'pomodoro-timer': PomodoroTimer
  }
}
</script>
