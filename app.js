const app = new Vue({
  el: "#root",
  data: {
    newTask: "",

    tasks: [
      {
        text: "Fare la spesa",
        done: true,
      },
      {
        text: "Lavare la macchina",
        done: true,
      },
      {
        text: "Andare in palestra",
        done: false,
      },
      {
        text: "Preparare il pranzo",
        done: false,
      },
    ],
  },
  methods: {
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
    addTask() {
      this.tasks.push({ text: this.newTask, done: false });
    },
    toggleDoneUndone(i) {
      this.tasks[i].done = !this.tasks[i].done
    },
  },
});
