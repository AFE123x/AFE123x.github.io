window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume); // Output: this.volume in the method: 8
    this.volume = volume;
    console.log("this.volume after update:", this.volume); // Output: this.volume after update: 5

    // Regular Nested Function
    (function () {
      console.log("this.volume in nested function:", this.volume); // Output: this.volume in nested function: 20
    })();

    // Arrow Function
    (() => {
      console.log("this.volume in nested arrow function:", this.volume); // Output: this.volume in nested arrow function: 5
    })();
  },
};

console.log(greenPack.newVolume(5));
