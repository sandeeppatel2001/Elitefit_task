<script setup>
import Footer from "./Foot.vue";
import Testimonial from "./Testimonial.vue";
import axios from "axios";
</script>
<template>
  <div class="out">
    <div class="image-container">
      <div
        class="image-wrapper aboutimg"
        style="
          display: flex;
          overflow-x: scroll;

          min-height: 400px;
          height: 400px;
          width: 400px;
        "
      >
        <img
          style="z-index: 13"
          src="https://s3-alpha-sig.figma.com/img/84be/58c8/a9935b92d53b27552c9edd1725e25e07?Expires=1699228800&Signature=B33otm1Sa3JqO3hEd17YiGN-TyV1ZlGvlgmqIZ3UKf6SW4V5IeyHpzsI8E9fDbPxjUecYCY7yYAEQ4CuRFjPi~~niQav8EgOZmg9iufIWCxnJxy7IPEUtK3kJC7oWau23VS~yQttP21kYCyi~RVOZvC8JanTDGRjwlCumCTTsjZ~ngQ75JukaMhxI2qMOVbGaKjUuN5zHbQk4RZHFpErHbBpEVM9NFzs2qPByVlAL~dx4qIs~f7oFuHgdIwdyjhSjx7GjaHAKwu~8sFkRmUiwOSBjxtUVGt7ziZSpPmgSSbL55eNyTXZCf~BaeZUmhCWpFLY5wi6JE-KdED3q82vQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Image 1"
        />
        <img
          style="z-index: 13"
          src="https://s3-alpha-sig.figma.com/img/c384/58bd/9b01aed341670d08e165e6f55f53e243?Expires=1699228800&Signature=iI1mEIqC0qtrM6PIa9RmLTxH8-dtznBgNFqlWKyENyTF1ZMtxW4JO791VOgDkaCMN4FxpCFzlCJKY~cqRNw1PrHYL9yfY3hDnIXaYgMSJ228pnFbWVf1-HIw~zw-hB5aCRuUDe21NFDf7mr3zirwPWBNFMJxdNT8hcaRMgqw~9BGC0nE0bxDHYFawUJ6RvysWgelIWyGdvSfOBtrYlJR30Du~q5CHXcmtqdwkizpzWIUyjKmGjFBOCI-3q2ezF0obTHhO-~mz8hrUyAFPQEWbNYg6aCQWjuh3EI9-BBqkaITrOAAawves-x1Xi8BL156bNmYPSmZ6t4FX5rxiUmY8g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Image 1"
        />
        <img
          style="z-index: 13"
          src="https://s3-alpha-sig.figma.com/img/79d0/b2fe/6a1daadeff3f861b50e17245575b034c?Expires=1699228800&Signature=VvFZeI00i25YZr7Upq-SI0NXuCWUHHGcQlyKqTdFf8KoGsMjGChy7fasv5rJoIMv3u9VvLxhkPB68nn7e3f4~1UsWVTNYKQzioE5UGUZlQ-r1km6nP2N0vLtKTkXOTokHHr7Kl3EvgfeVnDNsSnZ28KMawz1HxmgY51hCSCIpRnP-itqtvPuiTiWS~RFPgO7w-x4PakeTsHTueLKr-miMRnMuhUZoJrkWzoBOi9cj9q4GMgKU5HzZcRJksCeyV4UvNGvgpEQ0~I0qgtGz5QcBBt16qTO-gCFcCT1K2N0SnpCLnyYoPY~v8Mhd0qOCt4H9werbnn9jbpYnmk8fg-UEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Image 1"
        />
        <img
          style="z-index: 13"
          src="https://s3-alpha-sig.figma.com/img/ac91/57f1/0db4a21a7bba82902ce1e2444ad9b7ca?Expires=1699228800&Signature=kC0aP6xogpr2MGx3KxQNl7kLudD1mkktIJwA~jLf9RxtV0JKGb2TbwfSs~Ej~uubi2JGVmrPF3myO64k3t1UVEalG75bhSWb41A8yL~y9yd217AGijUWP2YrpMydZIZBxNWPA55xOdB5m6y~ivES7jVW2LC1JD50icTN4Fde9hYhP0EJro3cLZHG2Nd2PPUKElkm9PArqyf5b9D-HdYDT1ZS9pL8vmpxYzTiPn2jr4Quzwm0cahiUW13FzMuATQDEhvrqRjumlEqkuwJHmXr~O13mj4AcPxRyjgXt0ac3vHE-aJ7ZasMQxb7A-TXjDVX5r-o9JUEQ9h9SHV9EDo9Mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Image 1"
        />
      </div>
      <div class="about">
        <div
          style="
            display: flex;
            justify-content: center;

            width: 100%;
            height: 100%;
          "
        >
          <div class="aboutcont" style="background-color: white; padding: 15%">
            <h1>About PISTONS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              inventore Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Voluptas unde maxime quibusdam ipsum laudantium ad beatae ab
              odio doloremque, veritatis cumque voluptatem voluptatum dolorum
              natus error blanditiis est corporis temporibus? possimus eligendi,
              sequi quia ducimus vitae nihil recusandae tenetur laboriosam
              praesentium quam necessitatibus ut natus, iusto quibusdam officia
              nostrum consequuntur.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div style="z-index: 10">
    <!-- <div class="testimonials">
      <h1>TESTIMONIALShhh</h1>
    </div>
    <div class="test">
      <Testimonial />
      <Testimonial />
      <Testimonial />
      <Testimonial />
    </div> -->
    <div class="testimonials">
      <hr />
      <h1 class="tesi" style="display: flex; justify-content: center">
        TESTIMONIALS
      </h1>

      <div class="test">
        <Testimonial
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
    <hr />
    <Footer></Footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testimonials: [],
    };
  },
  created() {
    // Fetch testimonials from the API
    fetch("/V2")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Corrected to response.json() to parse the data
      })
      .then((data) => {
        this.testimonials = data.testimonials;
        console.log("Fetched testimonials:", data.testimonials);
      })
      .catch((error) => {
        if (error) {
          console.log("xxxxxxxxxxxxxxxx", error);
          this.testimonials = [
            {
              name: "Api Sever Down ",
              message: error + "Fetching error ",
              // image: "https://i.ibb.co/vmYY6tY/img1.png",
            },
            {
              name: "Emily S.",
              message:
                "The checkout process was seamless, and the responsive design worked flawlessly on my mobile device. I'll definitely be coming back!",
              image: "https://i.ibb.co/k29V4KN/img2.png",
            },
            {
              name: "David R.",
              message:
                "Their site's intuitive navigation made finding the perfect pen a joy. Five stars for both their products and web design!",
              image: "https://i.ibb.co/Mcz1SWT/img3.png",
            },
            {
              name: "Lisa M.",
              message:
                "I appreciate the attention to detail in both their pens and website. A visually stunning and user-focused online shop.",
              image: "https://i.ibb.co/94fW8xZ/img4.png",
            },
          ];
        }
        console.error("Error fetching testimonials:", error);
      });
  },

  components: {
    Testimonial,
  },
};
</script>
<style>
@media only screen and (max-width: 700px) {
  .aboutimg {
    min-width: 100%;
  }
  .tesi {
    margin-top: 40%;
  }
  .out {
    height: 1500px !important;
  }
  .test {
    flex-direction: column !important;
    justify-content: center;
    padding-left: 15%;
  }
  .about {
    /* margin: 100px; */
    width: 100% !important;
  }
  .aboutcont {
    padding: 0px;
    width: 200%;
  }
  .testimonials {
    margin-top: 33%;
  }
}
.about {
  display: flex;
  align-items: center;
  width: 50%;
}
.image-container {
  display: flex;
  justify-content: space-between;
  top: 12%;
  position: relative;
  height: 500px;
  z-index: 5;
}
.test {
  display: flex;
  flex-direction: row;
}
.testimonials {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.image-wrapper {
  flex: 1;
  max-width: 50%;
  padding: 0px;
}

img {
  max-width: 100%;
  height: 90%;
}
.out {
  height: 3000px;
  /* overflow-y: scroll; */
  overflow-y: visible;
}
</style>
