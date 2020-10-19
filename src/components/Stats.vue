<template>
  <div class="stats">
    <template v-if="myData">
      <p>アリーナクラス: {{ myData.arena_class.toUpperCase() }}</p>
      <p>A1連続維持回数: {{ myData.contine }}</p>
      <p>順位: {{ myData.rank }}</p>
      <p>所属エリア: {{ myData.area }} - {{ myData.prefRank }}位</p>
    </template>
    <template v-else>
      <p>データが見つかりませんでした。</p>
    </template>
  </div>
</template>

<script lang="ts">
import { findMyRank, List } from '@/utils/arenaClass'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Stats extends Vue {
  @Prop() readonly list!: List[]
  @Prop() readonly iidxId: string | undefined
  get myData(): List | undefined {
    return findMyRank(this.list, this.iidxId)
  }
}
</script>
