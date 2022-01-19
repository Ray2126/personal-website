<template>
  <div style="width: 100%;">
    <div class="mb-6 d-flex justify-center">
      <span class="text-h5 text-sm-h4 text-md-h3">{{ selectedBlogPost.title }}</span>
    </div>
    <div class="d-flex">
      <a
        role="button"
        tabindex="0"
        @click="$router.push('/blog')"
      >
        &#8592; Back
      </a>
      <div
        class="text-subtitle-1 mb-4"
        style="margin-left: auto;"
      >
        <b>{{ selectedBlogPost.createdAt }}</b>
      </div>
    </div>
    <component :is="selectedBlogPost.content" />
  </div>
</template>

<script>

import postsList from '../blogPosts/postsList';

export default {
  computed: {
    selectedBlogPost() {
      return postsList.find(p => p.id === this.$route.params.postNumber);
    }
  }
};
</script>