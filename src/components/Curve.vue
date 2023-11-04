<template>
  <div>
    <div class="settings">
      <label for="text">Text:</label>
      <input v-model="text" id="text" class="text" placeholder="CURVED TEXT" />
      <label for="radius">Radius:</label>
      <input
        v-model="radius"
        id="radius"
        class="radius"
        type="range"
        min="100"
        max="1000"
      />
    </div>
    <div class="curved-text" ref="curvedText">{{ text }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "CURVED TEXT",
      radius: 500,
    };
  },
  watch: {
    text: "settingsChanged",
    radius: "settingsChanged",
  },
  mounted() {
    this.updateCurvedText();
  },
  methods: {
    updateCurvedText() {
      const $curvedText = this.$refs.curvedText;
      $curvedText.style.minWidth = "initial";
      $curvedText.style.minHeight = "initial";
      const w = $curvedText.clientWidth;
      const h = $curvedText.clientHeight;
      $curvedText.style.minWidth = w + "px";
      $curvedText.style.minHeight = h + "px";
      const text = $curvedText.textContent;
      let html = "";

      Array.from(text).forEach((letter) => {
        html += `<span>${letter}</span>`;
      });
      $curvedText.innerHTML = html;

      const $letters = $curvedText.querySelectorAll("span");
      $letters.forEach((el) => {
        el.style.position = "absolute";
        el.style.height = `${this.radius}px`;
        el.style.transformOrigin = "bottom center";
      });

      const circleLength = 2 * Math.PI * this.radius;
      const angleRad = w / (2 * this.radius);
      const angle = (2 * angleRad * 180) / Math.PI / text.length;

      $letters.forEach((el, idx) => {
        el.style.transform = `translate(${w / 2}px, 0px) rotate(${
          idx * angle - (text.length * angle) / 2
        }deg)`;
      });
    },
    settingsChanged() {
      this.updateCurvedText();
    },
  },
};
</script>

<style scoped>
:root {
  background: black;
  color: white;
  font-family: monospace;
  overflow: hidden;
}
footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  padding: 10px;
}
a {
  font-weight: bold;
  color: orange;
}

.settings {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.settings label {
  font-weight: bold;
}

.curved-text {
  position: relative;
  display: inline-block;
  margin: 0 auto;
  font-size: 100px;
  min-width: 200px; /* Adjust as needed */
  text-align: center;
  line-height: 1;
}

.curved-text span {
  min-width: 0.5em;
  text-align: center;
  padding: 0;
  margin: 0;
}
/* @media only screen and (max-width: 768px) {
  .girl {
    height: 280px !important;
  }
  .curved-text span {
  min-width: 0.5em;
  text-align: center;
  padding: 0;
  margin: 0;
}
} */
</style>
