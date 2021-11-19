<template>
  <div>
    Raymond Yang
    <v-btn
      @click="$router.push('/about')"
      color="primary"
    >
      <span>To About</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>
