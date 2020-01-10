<template>
  <v-content>
    <div class="muzieknootjes">
      <div class="noot-1">&#9835; &#9833;</div>
      <div class="noot-2">&#9833;</div>
      <div class="noot-3">&#9839; &#9834;</div>
      <div class="noot-4">&#9834;</div>
    </div>
    <v-row justify="center" class="text-center">
      <v-col cols="11" md="7">
        <h1 style = "color:white" :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-2': $vuetify.breakpoint. mdAndUp}"  >Welcome To Lyrics App</h1>
      </v-col>
      <v-col cols="11">
         <v-parallax
            src="img/2.jpg"
            height="350"
            class="rounded-img"
          ></v-parallax>
      </v-col>
      <v-col cols="11" md="7">
        <h1 style = "color:white" :class="{'subheading': $vuetify.breakpoint. smAndDown, 'display-1': $vuetify.breakpoint. mdAndUp}" >Search for your favorite song:</h1>
      </v-col>
      <v-col cols="11" md="7">
        <v-text-field dark outlined label="Search"></v-text-field>
      </v-col>
    </v-row>
  </v-content>
  
</template>
 
<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>

<style>
template {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: black;
  color: white;
}

.muzieknootjes {
  display: block;
  margin: auto;
  position: relative;
  width: 100%;
  min-width: 300px;
  height: 120px;
  border: 0px solid #000;
}

.rounded-img{
    border-radius:50px;
}

.noot-1,
.noot-2,
.noot-3,
.noot-4 {
  position: absolute;
  animation: notes 2s infinite linear;
  font-size: 35px;
  opacity: 0;
  color: aqua;
}

.noot-1 {
  top: 60px;
  left: 0;
  animation-delay: 0.5s;
}

.noot-2 {
  top: 30px;
  left: 30%;
  animation-delay: 1s;
}

.noot-3 {
  top: 90px;
  left: 60%;
  animation-delay: 1.5s;
}

.noot-4 {
  top: 40px;
  left: 90%;
  animation-delay: 2s;
}

@keyframes notes {
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: scale(1.5) translate(50%, -50%);
  }
  80% {
    opacity: 0;
    transform: scale(1.5) translate(100%, -100%);
  }
  100% {
    transform: scale(1.5) translate(100%, -100%);
    opacity: 0;
  }
}
</style>