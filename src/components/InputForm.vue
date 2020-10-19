<template>
  <div class="input-form">
    <strong v-if="hasError">無効な IIDX ID です。 </strong>
    <label for="iidx-id">IIDX ID</label>
    <br />

    <input
      id="iidx-id"
      v-model="localIidxId"
      type="text"
      placeholder="####-####"
    />
    <button @click="onClick">OK</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export const isValidId = (iidxId?: string): boolean => {
  if (!iidxId) return false
  return new RegExp(/^\d{4}-\d{4}$/).test(iidxId)
}

@Component
export default class InputForm extends Vue {
  @Prop() readonly iidxId?: string
  localIidxId!: string

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      localIidxId: this.iidxId,
    }
  }

  hasError = false

  onClick(): void {
    if (!isValidId(this.localIidxId)) {
      this.hasError = true
      return
    }

    this.hasError = false
    this.$emit('input', this.localIidxId)

    location.hash = this.localIidxId
  }
}
</script>
