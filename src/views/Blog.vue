<template>
  <div>
    <div class="mb-12 d-flex justify-center">
      <span class="text-h5 text-sm-h4 text-md-h3">Posts</span>
    </div>
    <div v-if="posts.length">
      <div
        v-for="(post,index) in posts"
        :key="index"
      >
        <blog-post-card
          class="mb-10"
          :title="post.title"
          :subtitle="post.subtitle"
          :created-at="post.createdAt"
          @read-more="routeToPost(post.id)"
        />
      </div>
    </div>
    <div
      v-else
      class="text-center"
    >
      <span class="text-subtitle-1">No posts at the moment! Check back soon!</span>
    </div>
  </div>
</template>

<script>

import BlogPostCard from '../components/BlogPostCard.vue';
import postsList from '../blogPosts/postsList';

export default {

  components: {
    BlogPostCard,
  },

  data() {
    return {
      posts: postsList
    };
  },

  methods: {
    routeToPost(postNumber) {
      this.$router.push(`/blog/post/${postNumber}`);
    }
  }
};

</script>