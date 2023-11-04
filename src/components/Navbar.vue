<template>
  <div className="stick top d-flex justify-content-center align-items-center">
    FREE SHIPPING ON ALL ORDERS
  </div>
  <div class="mainnav">
    <nav class="navbar">
      <div class="container">
        <!-- <div class="navbar-brand">
          <router-link to="/" class="navbar-item"> My App </router-link>
        </div> -->
        <div class="navbar-menu">
          <div class="navbar-end">
            <b>PISTON</b>
            <div class="tab">
              <router-link to="/new" class="navbar-item">NEW</router-link>
              <router-link to="/brands" class="navbar-item">BRANDS</router-link>
              <router-link to="/collections" class="navbar-item"
                >COLLECTIONS</router-link
              >
              <router-link to="/accessories" class="navbar-item"
                >ACCESSORIES</router-link
              >
              <router-link
                to="/about"
                class="navbar-item"
                @click="scrollToAbout"
                >ABOUT</router-link
              >
            </div>
            <div class="thirdpart">
              <div class="icon">
                <img
                  name="cart-icon"
                  id="image"
                  src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                />
              </div>
              <div class="icon">
                <img
                  @click="toggleSearchBar"
                  style="padding-left: 5%; margin-left: 10px"
                  name="search-icon"
                  id="image"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAZlBMVEX///8AAADq6uo6OjpUVFTm5ubj4+Pu7u42Njbf39/5+fnLy8ucnJwtLS3z8/PW1tZ4eHiysrJPT08gICBjY2NeXl6/v78LCwsoKCirq6ujo6ODg4NwcHBqampFRUVKSkoXFxeRkZHawpUlAAAEvElEQVR4nO1b65qiMAzlKnItCHIREXn/l9yhKaisaNPGYff7PH+HktienKQhYxhffPHF/4bE81nI2M4Lft20FZ5S27zh6gwN+y03knCwK/MJ8qLxP249YA+/fImrc3I/aj87vLAukH5sG4Lm+miqii+941zsfOFCEX7EfnNnp3LajN3In+zK6Ly/c+FIvwu+M7897krrCeM9djrM5LxGxDFxms07mbf+GBvmbbpQboI1//wze/NokNXTsycy+yWO4NkUqEVCY7+ZNlWW3EkkVtgkxzCIt2FoxS6CiwQepOJV7w5/AeF2pS0Jwv4RfZwhjQfih6QKUc1qpa17hAj/QWmxD9pYv9CNdyh17BuGG4N0Kdu39Oz/qDN4kKqud/SW/2AHypyprQYCHLWySsjTU26prPWBxJpyCqJYqCyFA9AKohEgJCV+IWSASNe+kXAi2uiNDDh9LgRlRamWm2EDSIq7fnzTHrsFV90IvMGvFA4z4xtAVFW147ti1GkGvP4/09gXW4BSI0YTghPOnNCYFaleElmCYQ80sTUU/Bl6JA15NRNr5PEleFAf5GnI66COzr7h8jOQT0m2onyvo0adqTWGTaWUQtcwoHSNU8AhvV2GKBLwSqSltG+4Y27LZbsnKXEQjrAxyoZ6WBIdhtc8ZghVYMSAkKJkfLYi7nA0CF55XAdp7UNdJKltPjp3SSBEpDeeu3piBzAvxTiLc0ByW9nHHJDcAYyz0sBs647fJIgdKBE3NB6G+ScckKxyA66ERD2+CREmwfFLyY7WAZ7gGsmHHfKCSLxT9qaHSRySCGJMYd5QXosA/nise9kMy4VA+mkpZKg6G3oDpBVJhzvVYnycrt1viBpH/ifBRYbQPhfiXF5aOGUqwjNoUdcCQ0Steod0iaTCKgu/GeRkZSE0nDAr4DJJdTWAfguu4cSluyZyABp1uIaTT7kFPaIWmMGlAN/ffAa1liN88qHISBAC+Hb1ESleq0gVGDCCixFBbQoMVLnsQ6dfV43EdyOV1BpclMizwFEjnCAU9WjAk4Byww0+GtUaLWs4RvXapoD1yoMx4ru7+ilCy1a5Zyrs6+gpxKIZK10SxBSBXrsNWv1mrrCL4ru7Wet1POHLo1lhRdk9mhNsvUtWKKaXUlRiKmPzBltvvEvMAZixfEmVTNvf1losFvCmIZ5eUhGaaZ4pMyyIo6tm53v6QVX73oWg7KedHzV0Bx7sNS/b2TQgVb2ZZEqaed6ug33fxRRMNKxiplTfrHIqbG+TjrP8WBUFD354fTfIWA/h0onAz7o74rd35iwxZ6frQXK6H9jL7W5oypAxFpZllDrx/axh8UgVIh6MI1r30b2Kv+cZiXhgjLNyl3fmnw68efA3kp6DH63Plebpmlh5RDzgCKwsPSznSE27i9gLtRY8UMurz5xwWRm1ndNfeqc4t03ov/ttuz0VD1Qx8YD0eyQKVkzIAyVQ80DBAzI9UIUYj7M35IGYctzOAxGN9WeH8F/B31wP3GpzHoCMqw0ZkmB7HmyfF1yonzRvLDoQeqB5b9SBC3lBeqyEHiIzbcmDfHMe5P8ID6inRRAQPPj8f6itwq23rdFAD2g/EqPxtp7/4osvfhF/AFiELjOq4t87AAAAAElFTkSuQmCC"
                />
              </div>
              <div style="margin-right: 20%" class="icon tohide">
                <div @click="showbar">
                  <svg
                    @click="showbar"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div style="display: flex; flex-direction: row-reverse">
      <div class="search-bar" v-if="showSearchBar">
        <div
          @click="hideSearchBar"
          style="display: flex; flex-direction: row-reverse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.41 12L19.71 5.71C19.8983 5.5217 20.0041 5.2663 20.0041 5C20.0041 4.7337 19.8983 4.47831 19.71 4.29C19.5217 4.1017 19.2663 3.99591 19 3.99591C18.7337 3.99591 18.4783 4.1017 18.29 4.29L12 10.59L5.71 4.29C5.5217 4.1017 5.2663 3.99591 5 3.99591C4.7337 3.99591 4.4783 4.1017 4.29 4.29C4.1017 4.47831 3.99591 4.7337 3.99591 5C3.99591 5.2663 4.1017 5.5217 4.29 5.71L10.59 12L4.29 18.29C4.19627 18.383 4.12188 18.4936 4.07111 18.6154C4.02034 18.7373 3.9942 18.868 3.9942 19C3.9942 19.132 4.02034 19.2627 4.07111 19.3846C4.12188 19.5064 4.19627 19.617 4.29 19.71C4.38296 19.8037 4.49356 19.8781 4.61542 19.9289C4.73728 19.9797 4.86799 20.0058 5 20.0058C5.13201 20.0058 5.26272 19.9797 5.38458 19.9289C5.50644 19.8781 5.61704 19.8037 5.71 19.71L12 13.41L18.29 19.71C18.383 19.8037 18.4936 19.8781 18.6154 19.9289C18.7373 19.9797 18.868 20.0058 19 20.0058C19.132 20.0058 19.2627 19.9797 19.3846 19.9289C19.5064 19.8781 19.617 19.8037 19.71 19.71C19.8037 19.617 19.8781 19.5064 19.9289 19.3846C19.9797 19.2627 20.0058 19.132 20.0058 19C20.0058 18.868 19.9797 18.7373 19.9289 18.6154C19.8781 18.4936 19.8037 18.383 19.71 18.29L13.41 12Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="inp" style="display: flex; flex-direction: row">
          <input
            style="
              border: 1px solid rgb(7, 7, 7);
              border-radius: 7px;
              height: 110%;
            "
            type="text"
            placeholder="Search..."
          />
          <button style="background-color: black; color: aliceblue">
            SUBMIT
          </button>
        </div>
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          margin-right: 10%;
          background-color: white;
          padding: 10%;
          margin-right: 15%;
        "
        v-if="tohide"
      >
        <div
          @click="hidetocart"
          style="display: flex; flex-direction: row-reverse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.41 12L19.71 5.71C19.8983 5.5217 20.0041 5.2663 20.0041 5C20.0041 4.7337 19.8983 4.47831 19.71 4.29C19.5217 4.1017 19.2663 3.99591 19 3.99591C18.7337 3.99591 18.4783 4.1017 18.29 4.29L12 10.59L5.71 4.29C5.5217 4.1017 5.2663 3.99591 5 3.99591C4.7337 3.99591 4.4783 4.1017 4.29 4.29C4.1017 4.47831 3.99591 4.7337 3.99591 5C3.99591 5.2663 4.1017 5.5217 4.29 5.71L10.59 12L4.29 18.29C4.19627 18.383 4.12188 18.4936 4.07111 18.6154C4.02034 18.7373 3.9942 18.868 3.9942 19C3.9942 19.132 4.02034 19.2627 4.07111 19.3846C4.12188 19.5064 4.19627 19.617 4.29 19.71C4.38296 19.8037 4.49356 19.8781 4.61542 19.9289C4.73728 19.9797 4.86799 20.0058 5 20.0058C5.13201 20.0058 5.26272 19.9797 5.38458 19.9289C5.50644 19.8781 5.61704 19.8037 5.71 19.71L12 13.41L18.29 19.71C18.383 19.8037 18.4936 19.8781 18.6154 19.9289C18.7373 19.9797 18.868 20.0058 19 20.0058C19.132 20.0058 19.2627 19.9797 19.3846 19.9289C19.5064 19.8781 19.617 19.8037 19.71 19.71C19.8037 19.617 19.8781 19.5064 19.9289 19.3846C19.9797 19.2627 20.0058 19.132 20.0058 19C20.0058 18.868 19.9797 18.7373 19.9289 18.6154C19.8781 18.4936 19.8037 18.383 19.71 18.29L13.41 12Z"
              fill="black"
            />
          </svg>
        </div>
        <p style="color: black">NEW</p>
        <p style="color: black">BRANDS</p>
        <p style="color: black">COLLECTIONS</p>
        <p style="color: black">ACCESSORIES</p>
        <p style="color: black">ABOUT</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    // Add a scroll event listener when the component is mounted
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Remove the scroll event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      tohide: false,
      showSearchBar: false,
      scrollDirection: "down",
      lastScrollPosition: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 2300 && scrollPosition <= 2910) {
        if (this.scrollDirection === "down") {
          this.scrolledToDesiredHeight();
        }
      }
      if (scrollPosition >= 3600 && scrollPosition <= 4100) {
        if (this.scrollDirection === "up") {
          this.rscrolledToDesiredHeight();
        }
      }
      // Determine the scroll direction
      this.scrollDirection =
        scrollPosition > this.lastScrollPosition ? "down" : "up";
      this.lastScrollPosition = scrollPosition;
    },
    scrolledToDesiredHeight() {
      // Perform your action when the user scrolls to the desired height
      // You can update data properties or call other functions here
      window.scrollTo({
        top: 3900,
        behavior: "auto",
      });
    },
    rscrolledToDesiredHeight() {
      // Perform your action when the user scrolls to the desired height
      // You can update data properties or call other functions here
      window.scrollTo({
        top: 2500,
        behavior: "auto",
      });
    },
    toggleSearchBar() {
      this.showSearchBar = true;
    },
    hideSearchBar() {
      this.showSearchBar = false;
    },
    showbar() {
      this.tohide = true;
    },
    hidetocart() {
      this.tohide = false;
    },
    scrollToAbout() {
      // Find the target section by its id
      const aboutSection = document.getElementById("about-section");

      // Scroll to the target section using smooth behavior
      aboutSection.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
.top {
  color: #9a9a9a;
  font-family: "Oxygen";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  background-color: #e3e3e3;
  display: flex;
  width: 100%;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
.stick {
  position: sticky;
  top: 0;
}

@media only screen and (max-width: 768px) {
  .top {
    font-size: 10px;
    height: 24px;
  }
}
.tohide {
  /* opacity: 0; */
  display: none !important;
}
@media only screen and (max-width: 700px) {
  input {
    width: 50%;
    padding-left: 50px;
    border-radius: 13px !important;
  }
  .tohide {
    /* opacity: 1; */
    display: inline !important;
  }
  .mainnav {
    width: 80px;
    height: 5%;
    position: sticky;
  }
  .thirdpart {
    margin-left: 30% !important;
  }
  .tab {
    display: none;
  }
  .icon {
    /* display: flex; */
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: end;
    width: 5px;
  }
  .navbar {
    /* height: 0.001% !important; */
    width: 50%;
    /* margin-bottom: -10%; */
    /* max-height: 5px; */
  }
}
.search-bar {
  display: flex;
  flex-direction: column;
  margin-right: 5%;
  background-color: #fff;
  padding: 1%;
}
.navbar-end {
  display: flex;
  justify-content: space-between;
}
.icon {
  /* display: flex; */
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 30px;
  padding-right: 10px;
}
.tab {
  /* font-size: larger; */
  font-weight: 800;
  margin-right: 10%;
  margin-top: 2%;
  margin-bottom: 2%;
}
.thirdpart {
  padding: 10px;
  margin-right: 1%;
  margin-left: 1%;
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: row;
}
/* Add your CSS styles here */
.navbar {
  background-color: white;
  color: #333; /* Text color */
}
#image {
  width: 100%;
  /* margin-left: 10%; */
}

b {
  font-size: xx-large;
  margin-left: 1.5%;
  margin-right: 11%;
  margin-top: 2%;
  margin-bottom: 2%;
}
.navbar-brand {
  color: #333; /* Text color */
}

.navbar-item {
  color: #333; /* Text color */
  margin: 1.5%; /* Add spacing between items */
  text-decoration: none;
  text-align: center;
}

.navbar-item:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
