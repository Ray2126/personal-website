<template>
  <div>
    About me
    <v-btn
      @click="$router.push('/')"
      color="primary"
    >
      <span>To Landing</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>
