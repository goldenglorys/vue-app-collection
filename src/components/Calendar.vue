<template>
  <div class="m-auto">
    <h1 class="text-2xl my-2 text-center">Calendly</h1>
    <section class="mx-2 flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
    </section>
    <section class="flex my-2">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in daysInCurrentMonth(currentYear, currentMonthValue)"
        :key="num"
      >
        {{ num }}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonthName: new Date().toLocaleString("default", { month: "long" }),
      currentMonthValue: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },

  methods: {
    daysInCurrentMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
  },
};
</script>

<style>
</style>