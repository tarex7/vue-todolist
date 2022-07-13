const app = new Vue({
  el: "#root",
  data: {
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
});
