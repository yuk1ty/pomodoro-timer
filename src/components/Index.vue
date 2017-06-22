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
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  display: flex;
}

header h1 {
  margin: 0;
  padding: 30px;
  font-size: 18px;
  color: #fff;
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
  color: #fff;
}
</style>
