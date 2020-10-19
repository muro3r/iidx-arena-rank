<template>
  <div id="app">
    <InputForm :iidx-id="iidxId" @input="iidxId = $event" />
    <div class="stats sp">
      <p>SP</p>
      <Stats :iidx-id="iidxId" :list="spList" />
    </div>
    <div class="stats dp">
      <p>DP</p>
      <Stats :iidx-id="iidxId" :list="dpList" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { List } from './utils/arenaClass'
import Stats from './components/Stats.vue'
import spList from './assets/SP.json'
import dpList from './assets/DP.json'
import InputForm, { isValidId } from './components/InputForm.vue'

@Component({
  components: { Stats, InputForm },
})
export default class App extends Vue {
  spList: List[] = spList
  dpList: List[] = dpList

  iidxId = isValidId(location.hash.substring(1))
    ? location.hash.substring(1)
    : ''
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
