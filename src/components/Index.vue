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

<style scoped>
header {
  width: 100%;
  display: flex;
  background: #2c3e50;
}

header h1 {
  margin: 0;
  padding: 30px;
  font-size: 18px;
  color: #ecf0f1;
  font-weight: normal;
}

header nav {
  margin-left: auto;
  padding: 30px;
}

header ul {
  margin: 0;
  padding: 0;
}

header li {
  list-style: none;
  color: #ecf0f1;
}
</style>
