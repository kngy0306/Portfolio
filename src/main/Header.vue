<template>
  <div class="top">
    <h1 id="glitch">Kona's Portfolio</h1>
  </div>
</template>

<script>
let rand = 1000;
const timer = () => {
  rand = Math.floor(Math.random() * (4000 - 500) + 500);
  document.getElementById("glitch").classList.toggle("is-active");

  setTimeout(timer, rand);
};

export default {
  mounted() {
    timer();
  }
};
</script>

<style lang="scss" scoped>
.top {
  height: 100vh;
  // background-color: #7e1083;
  text-align: center;

  h1 {
    //font-family: "Balsamiq Sans", cursive;
    font-family: "Noto Serif JP", serif;
    padding-top: 10%;
    //color: #5bbee5;
    color: #eee;
    font-size: 6em;
    letter-spacing: 2px;

    @media (max-width: 930px) {
      font-size: 2em;
    }
  }

  .is-active {
    animation: glitch 0.3s 0.3s steps(100);
  }
}
@-webkit-keyframes glitch {
  0% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  1% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  2% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  3% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  4% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  5% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  6% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  7% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  8% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  9% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  10% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  11% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  12% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  13% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  14% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  15% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  16% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  17% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  18% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  19% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  20% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  21% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  22% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  23% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  24% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  25% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  26% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  27% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  28% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  29% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  30% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  31% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  32% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  33% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  34% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  35% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  36% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  37% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  38% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  39% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  40% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  41% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  42% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  43% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  44% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  45% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  46% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  47% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  48% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  49% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  50% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  51% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  52% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  53% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  54% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  55% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  56% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  57% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  58% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  59% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  60% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  61% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  62% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  63% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  64% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  65% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  66% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  67% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  68% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  69% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  70% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  71% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  72% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  73% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  74% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  75% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  76% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  77% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  78% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  79% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  80% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  81% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  82% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  83% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  84% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  85% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  86% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  87% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  88% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  89% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  90% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  91% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  92% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  93% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  94% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  95% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  96% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  97% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  98% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  99% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  100% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
}

@keyframes glitch {
  0% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  1% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  2% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  3% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  4% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  5% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  6% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  7% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  8% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  9% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  10% {
    text-shadow: 3px 0 0 #00f, -3px 0 0 #f0f;
  }
  11% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  12% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  13% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  14% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  15% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  16% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  17% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  18% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  19% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  20% {
    text-shadow: -4px 0 0 #f00, 5px 0 0 #00f;
  }
  21% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  22% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  23% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  24% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  25% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  26% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  27% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  28% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  29% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  30% {
    text-shadow: -5px 1 0 #0f0, -5px 0 0 #00f;
  }
  31% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  32% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  33% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  34% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  35% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  36% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  37% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  38% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  39% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  40% {
    text-shadow: -30px 2 0 #f0f, 30px 2 0 #0f0;
  }
  41% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  42% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  43% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  44% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  45% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  46% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  47% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  48% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  49% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  50% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f00;
  }
  51% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  52% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  53% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  54% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  55% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  56% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  57% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  58% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  59% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  60% {
    text-shadow: 5px 0 0 #00f, -5px 0 0 #0ff;
  }
  61% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  62% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  63% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  64% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  65% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  66% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  67% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  68% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  69% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  70% {
    text-shadow: -3px 4 0 #f00, 3px 3 0 #00f;
  }
  71% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  72% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  73% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  74% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  75% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  76% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  77% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  78% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  79% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  80% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f00;
  }
  81% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  82% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  83% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  84% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  85% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  86% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  87% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  88% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  89% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  90% {
    text-shadow: -30px 0 0 #ff0, 30px 0 0 #f0f;
  }
  91% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  92% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  93% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  94% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  95% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  96% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  97% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  98% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  99% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
  100% {
    text-shadow: 3px 3 0 #f0f, -3px 2 0 #ff0;
  }
}
</style>
