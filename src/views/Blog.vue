<template>
  <div>
    <div class="mb-12 d-flex justify-center">
      <span class="text-h5 text-sm-h4 text-md-h3">Posts</span>
    </div>
    <div
      v-for="(post,index) in posts"
      :key="index"
    >
      <blog-post-card
        class="mb-10"
        :title="post.title"
        :subtitle="post.subtitle"
        :created-at="post.createdAt"
        @read-more="routeToPost(index + 1)"
      />
    </div>
  </div>
</template>

<script>

import BlogPostCard from '../components/BlogPostCard.vue';

export default {

  components: {
    BlogPostCard,
  },

  data() {
    return {
      posts: [
        {
          title: 'You are unit testing wrong in Vue!',
          subtitle: 'Different types of testing in Vue and the pros and cons of each approach.',
          createdAt: 'Tue Jan 11 2022',
        }
      ]
    };
  },

  methods: {
    routeToPost(postNumber) {
      this.$router.push(`/blog/post/${postNumber}`);
    }
  }
};

</script>