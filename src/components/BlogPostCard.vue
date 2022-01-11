<template>
  <div>
    <div class="text-h6 text-sm-h5 mb-4">
      <b>{{ title }}</b>
    </div>
    <div class="text-subtitle-1 mb-4">
      <span>{{ subtitle }}</span>
      <a
        role="button"
        tabindex="0"
        @click="$emit('read-more')"
      >
        Read More &#8594;
      </a>
    </div>
    <div class="text-caption">
      <b>{{ createdAt }}</b>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    createdAt: { type: String, required: true },
  }
};
</script>