<template>
  <v-container fluid>
    <v-row
      class="text-h5 text-sm-h4 text-md-h3 d-flex justify-center mb-5"
      style="text-align:center;"
    >
      Interested to get in touch? <br>
      Here are ways you can contact me!
    </v-row>
    <v-row class="d-flex justify-center mb-15">
      <v-col class="d-flex justify-center">
        <a
          id="send-email-button"
          href="mailto:raymondyang@outlook.co.nz"
          target="_blank"
        >
          <v-icon
            x-large
            color="teal"
          >
            mdi-email
          </v-icon>
        </a>
      </v-col>
      <v-col class="d-flex justify-center">
        <a
          id="linked-in-button"
          href="https://www.linkedin.com/in/raymond-yang-96365419a/"
          target="_blank"
        >
          <v-icon
            x-large
            color="blue darken-2"
          >
            mdi-linkedin
          </v-icon>
        </a>
      </v-col>
      <v-col class="d-flex justify-center">
        <a
          id="github-button"
          href="https://github.com/Ray2126"
          target="_blank"
        >
          <v-icon
            x-large
          >
            mdi-github
          </v-icon>
        </a>
      </v-col>
    </v-row>
    <v-row
      class="text-h5 text-sm-h4 text-md-h3 d-flex justify-center mb-5"
      style="text-align:center;"
    >
      And here is my CV!
    </v-row>
    <v-row class="d-flex justify-center mb-15">
      <v-btn 
        class="ma-2" 
        outlined 
        href="Raymond_Yang_CV.pdf"
        target="blank"
      >
        View
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

#send-email-button:link,
#linked-in-button:link,
#github-button:link {
    text-decoration: inherit;
    color: inherit;
}

#send-email-button:visited,
#linked-in-button:visited,
#github-button:visited {
    text-decoration: inherit;
    color: inherit;
}
</style>