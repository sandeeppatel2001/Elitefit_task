<script setup>
import About from "./About.vue";
import SemiCircleText from "./Curve.vue";
</script>

<template>
  <div class="out">
    <div class="image-container" :style="{ zIndex: index }">
      <div class="image-wrapper">
        <img
          width="100%"
          src="https://s3-alpha-sig.figma.com/img/8705/5508/e2d29a865fd283be3aae11fd54889a24?Expires=1699228800&Signature=bKZ~e2bJO-lKwsFQwyzBxNhY-qssFX8EZdV23F2GEhHes~cWUgC-Ays98E0D9oNovyavwRFqcLJMQA~w7msVkOPplNQQmIDoATGO7DmQx~FciWka4QcjZHzcNc7NszlV8sW75uNZhUoWCwMhtQVjaVXQzfdDeh3lLe~xyZDYoJaYPS3RRFZ~zxRbXTl-WMuctwIwbOADQjqMiVgRJFx4~9wHtnk3HJ-9eVAAJoYqME5W1pg9eQ1QEAPqPVqZnS~jYopiGfNG6InloQM9p5r9peDi1tDBXNiT4kT3ZLx4eKd404BinnHscuyhktxEm0XemGl8r04Ixlc0~m~wesr~jA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <div class="image-text" style="bottom: -9%;">
          <h1 style="opacity: 0; margin-bottom: 37%;">
            this is made fro you nsjdfns vdfv
          </h1>
          <p style="padding-left: 10%; font-size: 300%; margin-top: -100%">
            <svg viewBox="0 0 800 180">
              <path
                fill="transparent"
                id="curve"
                d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              />
              <text  width="500">
                <textPath  xlink:href="#curve">
                  MADE FOR YOU
                </textPath>
              </text>
            </svg>
            <h1 style="margin-top: -15%; display: flex;justify-content: center;margin-left: -20%;">PISTONS</h1>
          </p>
          <!-- <b style="transform: rotate(89.514deg)">P</b> -->
        </div>
      </div>
      <div class="image-wrapper">
        <img
          width="200%"
          src="https://s3-alpha-sig.figma.com/img/6738/8f8b/886dcee081c302bd53b9b66d1abc8fb9?Expires=1699228800&Signature=MBkv8vmvqGXkMnfPsY-VGyHOM342dNhG~Tjjb4tZWbbNuHk6ALKwZIwz1DvgfrvqdM-eyPwfQkb2MFcEqzqN2WZg3U-tvoZh24COj2tMvyyZ-lPpKClrqEutmoGpAkaNaGbr3cfcVAq0bS5ziHior2QNnMA6-rPL6usjMqJoeeTLBX~Tbp~ufWYkgNyvO8bbKo58IUu5rV2QAySXwaZIAADtL671goQq01oRdWik~D3VT0oob9hecJeDkS5GvOKbffVFPDtWAKQd50y3tp2Z5~S5PiuW3asoyBrBJo8NWdl~V9O-d~lMipwDXt~1AFpmVvfvSshz1ZcIFvsQKYX78A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <div class="image-text">
          <h3 style="width: 150%">YOU WERE MADE TOMAKE AN IMPACT.</h3>

          <button>SHOP PENS</button>
        </div>
      </div>
    </div>
    <div class="image-container" :style="{ zIndex: index }">
      <div class="image-wrapper">
        <img
          width="200%"
          src="https://s3-alpha-sig.figma.com/img/7797/1bad/b147095e269ada4131aaf5b0bc00bc73?Expires=1699228800&Signature=khi1lt1yucT3CEDKmM27~mUD6HV7nbpTVADwNEuv5hWDVQIiCW0fGtdEyb2qDn8RQn9AHR7-K46XkXI4amn2rJoeZSCdURKtU11HG~YibUI04FYi-ipyhUY1crJr-mr-m7b16Oi-zwh3u9SSxYkWvfGASSLayzoEOKb4mGRgqHIbT3v0HOyXpBdQ2ZWyhx3pEZl~Z9RkvLBTIDFfouSsQbSTjx7l2d35XB4uY7FdR0Ziehep9KxsmwRufGGqDZoOSv9z7DNG2RJziBaoqh2LBjzsOEUUBvFgnrMuXj8AAZgFEOQtAi0qvN~3cKefZTgwrrCqKjTPgsX5ZpsWWE-tlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <div class="image-text">
          <h1>MADE FOR THE BEST CHANGE MAKERS</h1>

          <button
            class="blackbtn"
            style="background: 2px solid black !important"
          >
            SHOP BRAND
          </button>
        </div>
      </div>
      <div class="image-wrapper">
        <img
          width="100%"
          src="https://s3-alpha-sig.figma.com/img/398d/5ae8/c24d0ff35c3528f873f120cd9d2ffba3?Expires=1699228800&Signature=NKSvJwMUsqkpQc~IDU7JxCXJfjvUOlyHPLbNJMkeldwO7iC4I1s4q7cp8SjiZASZwpGXXTTs0YRuwpeic3wP42Uuv3nU80NCcb5duVHbqLyvri57b3SxyRXhRpaZpad5iMzNwBzrF9nICTn4pUXAbC4IFm9a8caOaIHl4SAmCStIigO7RAr9fboic69DIYCIG73dSkQDeN1FdARAZ8AmVrJMZsiFB8-PzrQpTBS7FmnMX5xWxy93kvIKyiHFcSVkXIaF-UFd2wkG0EH7nnD2i3ssCmOuibF8WB2bvKm60QHYGmE3rmfmiF0Auh2Nx3udQ~ff5V9GLKcHeNHyyz6faA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <div class="image-text">
          <!-- <h1>this hard coded</h1> -->

          <!-- <p>hmm haed</p> -->
        </div>
      </div>
    </div>
    <div class="image-container" :style="{ zIndex: index }">
      <div class="image-wrapper">
        <img
          width="100%"
          src="https://s3-alpha-sig.figma.com/img/889e/005d/d3ec05f04e8c572a344aa7eec63a8007?Expires=1699228800&Signature=WSzGTG9EToXap1BskGzTx-TjZMetQm5oWcKXBsytNdev~QcgAFOemroaUxJhACXk5S8vDicV~5W7-vqQeRkvzSfPwFnJ3GgrOR-WqYqhaHYtqAw-YGR~A~teL~OIhrV3P9sS8H9Frz5rvKJsD2yP9F7laBcw3tNLjayNRKVqt6OJqa~rcT6wQBIogYl20TvD~jrSleS3mAZ2mW6Y0iOYV-VKiDBEWiEM1Pb5PSuRs6oJeXUd8UvCXBiqqlx9~iZ56O3J6BJFJmg-QZr38oLvgB8FxiT~0QCiIcLQPnR4cvuuwzxtqqP6p7VP2z~KmC4zMBwUm-YxBYMvwN-qrZbhGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <div class="image-text">
          <!-- <h1>SAVOUR THE PRESENT.</h1>

          <p>hmm haed</p> -->
        </div>
      </div>
      <div class="image-wrapper">
        <img
          width="100%"
          src="https://s3-alpha-sig.figma.com/img/4319/3187/1fef7d5682a5acee705caf1655b0ad57?Expires=1699228800&Signature=BlWXy6L1HLTKln9h67F9Q39~BRbqtxYd4EJkMmF90Qw-JxjVMsGiattBaZ0KvwdqnC9MMtO07pE6wACjLul~6tWGE1UxsGlOYletUM370w58O6zz2YZbVnB630TiHLuTDCeI8h2x9pdjUfGBQA3U4yXAaR7D92GmYWdyRS7jrykIe-pmLC7aXvR9wAl0G-bqjoMFADH75l~6QOslyQnZq6Jf8u~pUR0YviAD5A7SncSj3C5an99evUPU5xkS5wpALGKNyIwpcOjTvk5dkbWEYaMN2zd1zGyItv6AJoVpSQz3gVSAcaVYLW1gr7MnAhwsvwQc67X8ku068GioFZlOJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <div class="image-text">
          <h1>SAVOUR THE PRESENT.</h1>

          <button>SHOP MONT BLANK</button>
        </div>
      </div>
    </div>
    <div  class="image-container largeimg">
      <img 
        src="https://s3-alpha-sig.figma.com/img/a879/bbf2/fefd239d879e75409eceffb3c7f1dc3b?Expires=1699228800&Signature=UAiuPtd6zrTBVfLXL-j8MNc9htn7ncfwCzpXwuppkIfhID7sS91K57VXfsd~zQRSs7Ec6iGbWUJkxWu3w3vG4du3qVodui5WqYXUyT2wHocXGRejFVZ-CW3SfpxO45mdBTJgJClFXMewhxp-aIcd9KOjJEbcpDG0-tE9W1z5hdFlC6WHuUfV7b2rwaN0rDHkoBQi-53vuobvcCHq5G07WxPgjmWPDT9MmY9A-B85F4oBwl7fGFGP221vpl2vw9YLJkDf4VQ6b2XOKecJv-DtwnLzaHGZs2j-GcvMO2qXNeoYF0zT6hpng8nXIyTkXQyQw78LOX0Iwd17nDSIL7-3Sg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        style="z-index: 7; width: 100%; filter: grayscale(10%);
  -webkit-filter: grayscale(10%); background-size: cover;"
      />
      <div class="image-text" style="bottom: -9%;margin-left: 30%;backface-visibility: hidden;">
          <h1 style=" margin-bottom: 110%;color: white;">
            WHERE QUALITY MEETS CLASS.
          </h1>
          <p style="padding-left: 10%; font-size: 300%; margin-top: -100%">
            <svg viewBox="0 0 800 180">
              <path
                fill="transparent"
                
                id="curve"
                d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              />
              <text width="500">
                <textPath  xlink:href="#curve">
                  MADE FOR YOU
                </textPath>
              </text>
            </svg>
          </p>
          <h1 style="margin-top: -15%; display: flex;padding-left: 25%;">PISTONS</h1>
          <!-- <b style="transform: rotate(89.514deg)">P</b> -->
        </div>
    </div>
    <div  class="image-container hideimg">
      <!-- <img 
        src="https://s3-alpha-sig.figma.com/img/a879/bbf2/fefd239d879e75409eceffb3c7f1dc3b?Expires=1699228800&Signature=UAiuPtd6zrTBVfLXL-j8MNc9htn7ncfwCzpXwuppkIfhID7sS91K57VXfsd~zQRSs7Ec6iGbWUJkxWu3w3vG4du3qVodui5WqYXUyT2wHocXGRejFVZ-CW3SfpxO45mdBTJgJClFXMewhxp-aIcd9KOjJEbcpDG0-tE9W1z5hdFlC6WHuUfV7b2rwaN0rDHkoBQi-53vuobvcCHq5G07WxPgjmWPDT9MmY9A-B85F4oBwl7fGFGP221vpl2vw9YLJkDf4VQ6b2XOKecJv-DtwnLzaHGZs2j-GcvMO2qXNeoYF0zT6hpng8nXIyTkXQyQw78LOX0Iwd17nDSIL7-3Sg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        style="z-index: 7; width: 100%; background-image: none;background-color: ;"
      /> -->
      
      <div class="image-text hideimg" style="bottom: -9%;margin-left: 30%;backface-visibility: hidden;">
          <h1 style=" margin-bottom: 110%;color: white;">
            WHERE QUALITY MEETS CLASS.
          </h1>
          <p style="padding-left: 10%; font-size: 300%; margin-top: -100%">
            <svg viewBox="0 0 800 180">
              <path
                fill="transparent"
                
                id="curve"
                d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
              />
              <text width="500">
                <textPath  xlink:href="#curve">
                  MADE FOR YOU
                </textPath>
              </text>
            </svg>
          </p>
          <h1 class="t"  style="margin-top: -15%; display: flex;padding-left: 25%;">PISTONS</h1>
          <!-- <b style="transform: rotate(89.514deg)">P</b> -->
        </div>
    </div>
    <About style="z-index: 5" />
  </div>
</template>
<script>

export default {
  components: {
    
  },
  data() {
    return {
      images: [
        // Your image data here
      ],
    };
  },
  // Other methods and styles...
};
</script>

<style>
h1{
  font-size: 90%;
}
.t{
  margin-left: 10% !important;
  padding-left: 7% !important;
  margin-bottom: 40% !important
}
@media only screen and (max-width: 700px) {
  .hideimg{
    opacity: 1 !important;
    background-color: black;
  }
      .image-container {
      width: 100%;
      display: flex;
      flex-direction:column;
      /* justify-content: space-between; */
      /* top: 12% !important  ; */
      /* position: sticky;
      overflow-y: scroll !important; */
      height: 800px !important;
     
    }
   
    /* img{
      
      position: sticky !important;
      display: flex;

  
    } */
    .largeimg{
      height: 500px !important;
    }
    .image-wrapper{
      position: sticky;
      width: 100%;
      display: flex;
      justify-content: space-between;
      height: 400px !important;
    }
    
}
.hideimg{
    opacity: 0;
  }
.blackbtn {
  background-color: black;
  color: aliceblue;
}
button {
  border-radius: 13px;
  padding: 1.2%;
  border: 2px white;
}
.image-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 12%;
  position: sticky;
  height: 500px;
}
.image-text {
  position: absolute;
  bottom: 1%; /* Adjust the distance from the bottom as needed */
  left: 2%; /* Adjust the distance from the left as needed */
  /* background-color: rgba(0, 0, 0, 0.7); Background color and opacity */
  color: white; /* Text color */
  padding: 1%; /* Padding around the text */
  font-size: 120%; /* Font size */
  font-weight: 100;
  z-index: 10; /* Ensure it's above the image */
  margin: 13%;
}
.image-wrapper {
  flex: 1;
  max-width: 100%;
  padding: 0px;
  position: relative;
}

img {
  max-width: 100%;
  height: 100%;
}

.out {
  margin-bottom: 0px;
  
  /* height: 500px; */
  /* overflow-y: visible; */
}
</style>
