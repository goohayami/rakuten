<template>
  <h1>This is Jobs Page</h1>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "hayami design", id: 1, details: "lorem" },
        { title: "hayami development", id: 2, details: "lorem" },
        { title: "hayami sports", id: 3, details: "lorem" },
      ],
    };
  },
};
</script>
