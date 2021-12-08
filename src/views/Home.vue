<template>
  <v-container fluid>
    <v-row class="mb-5">
      <v-col class="d-flex justify-center text-h3">
        Hello, I'm Raymond. I'm a full-stack software engineer living in Auckland, NZ.
      </v-col>
    </v-row>
    <v-row class="mx-auto d-flex justify-center mb-5">
      <img
        src="../assets/portrait.png"
        alt="My Photo"
        class="rounded-pill"
      >
    </v-row>
    <v-row class="text-h5">
      <b>About:</b>
    </v-row>
    <v-row class="text-body-1 mb-10">
      I am currently working as a full-stack engineer at Centrapay, building an awesome digital payment service. Outside of work I enjoy going to the gym, playing the guitar and video games. I am also working on a side project called Protein Hub; a web application to share high-protein recipes. I'd love to get to know you over coffee, so please don't hesitate to get in touch.
    </v-row>
    <v-row class="text-h4 d-flex justify-center mb-5">
      Interested to get in touch?
    </v-row>
    <v-row class="d-flex justify-center mb-5">
      <v-btn
        elevation="2"
        color="primary"
      >
        <a
          id="send-email-button"
          href="mailto:raymondyang@outlook.co.nz"
        >Email Me &#8594;</a>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<style scoped>
a#send-email-button:link {
    text-decoration: inherit;
    color: inherit;
}

a#send-email-button:visited {
    text-decoration: inherit;
    color: inherit;
}
</style>