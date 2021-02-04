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
        v-for="num in dayStart()"
        :key="num"
      ></p>
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in daysInCurrentMonth(currentYear, currentMonthValue)"
        :key="num"
        :class="currentDateClass(num)"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4">
      <button class="px-2 border rounded bg-gray-100" @click="prev()">
        Prev
      </button>
      <button class="px-2 border rounded bg-gray-100" @click="next()">
        Next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   currentMonthName: new Date().toLocaleString("default", { month: "long" }),
      currentDate: new Date().getUTCDay(),
      currentMonthValue: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      computedCurrentMonthValue: new Date().getMonth(),
    };
  },

  methods: {
    daysInCurrentMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
    dayStart() {
      return new Date(this.currentYear, this.currentMonthValue - 1, 1).getDay();
    },
    prev() {
      if (this.computedCurrentMonthValue == 0) {
        this.computedCurrentMonthValue = 11;
        this.currentYear--;
      } else {
        this.currentMonthValue--;
        this.computedCurrentMonthValue--;
      }
    },
    next() {
      if (this.computedCurrentMonthValue == 11) {
        this.computedCurrentMonthValue = 0;
        this.currentYear++;
      } else {
        this.currentMonthValue++;
        this.computedCurrentMonthValue++;
      }
    },
    currentDateClass(num) {
      const calendarFulldate = new Date(
        this.currentYear,
        this.computedCurrentMonthValue,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calendarFulldate == currentFullDate
        ? "bg-green-500 rounded-full"
        : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.computedCurrentMonthValue
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>

<style>
</style>