<template>
  <div id="app">
    <RmrTable></RmrTable>
  </div>
</template>

<script>
import RmrTable from './components/RmrTable'

export default {
  name: 'App',
  components: {
    'RmrTable': RmrTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
