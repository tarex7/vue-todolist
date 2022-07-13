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
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask() {
      this.tasks.push({ text: this.newTask, done: false });
    },
    toggleDoneUndone(index) {
      this.tasks[index].done = !this.tasks[index].done
    },
  },
});
