<script setup>
import { ref } from 'vue';

defineProps({
  loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
  showOnboarding.value = false;
  if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
    document.querySelector('a-scene').enterVR();
  }
  document.querySelector('a-scene').emit('enter-scene');
}
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>The island of challenges</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
        <section>
          <h3>You are an adventurer chosen by the <span style="color: #FFD700;">Guardian of Trials</span> to find the
            hidden treasure. Travel between <span style="color: #1E90FF;">mystical islands</span> protected by puzzles
            and magical challenges. Use the <span style="color: #32CD32;">Ether Bracelet</span>, teleport from one
            island to another and solve puzzles.</h3>
          <h3>Your goal: to face the ultimate challenge on the <span style="color: #FF4500;">Celestials Islands</span>
            and prove yourself as the greatest treasure hunter. Will you be up to the task?</h3>
          <h4>Movement modes support</h4>
          <ul>
            <li>
              Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
              control (Drag and drop)
            </li>
            <li>
              Mobile – 1x Finger touch to go forward + 2x Fingers touch to go
              backward + Gaze cursor for click
            </li>
            <li>
              VR/AR – walk + Teleport (Grip for grab and laser for
              click) + Gaze cursor for click
            </li>
          </ul>
        </section>
        <section>
          <h4>Source code</h4>
          <blockquote><a href="https://github.com/Stol28/VR-2025">Github repo</a></blockquote>
        </section>
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and
              animation-mixer</a>
          </dt>
          <dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt>
          <dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/" target="_blank">aframe-multi-camera</a>
          </dt>
          <dd>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/blob/main/LICENSE" target="_blank">MIT
              License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
              target="_blank">simple-navmesh-constraint</a>
          </dt>
          <dd>
            By Ada Rose Cannon under MIT License
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/low-poly-island-56735ec9bacb4e56b124504143208404"
              target="_blank">Base Island</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/Read1dno" target="_blank">Read1dno</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/floating-sky-island-b341e77708c54b5386005b41b1fe22fb"
              target="_blank">Relic Island</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/TheFined" target="_blank">TheFined</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/flying-island-low-poly-8780067653804460a0c792c91ed2bbf5"
              target="_blank">Drum Island</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/ChojoThePony" target="_blank">ChojoThePony</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/bracelet-dae01621bc204a0aafa6d8f627d13457"
              target="_blank">Bracelet</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/MikeRowley" target="_blank">Mike Rowley</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/low-poly-treasure-chest-ca63751326084866b8df9a6b4c196b3d"
              target="_blank">Chest</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/cattleya" target="_blank">cattleya</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/stylized-hammer-6cd89cf7db324c908cd002a958577d2e"
              target="_blank">Hammer</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/LucyBaranova" target="_blank">Lucy Baranova</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/key-aa97db6fac2442d2b935e6746ec4fc53" target="_blank">Key</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/TommyPrism" target="_blank">TommyPrism</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/jedi-holocron-1d5e04a564464ff9b0675a44309bce9f"
              target="_blank">Artefact</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/Greggory_Fisher" target="_blank">Greggory_Fisher</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/coins-and-money-828af77066764effb5ad3eca6ac7c50d"
              target="_blank">Coins-money</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/SundayLazy" target="_blank">SundayLazy</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/drum-9860c0037ea049eab5503975da06d9f2" target="_blank">Drums</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/LaudoStudio" target="_blank">LaudoStudio</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/wooden-sign-with-roof-d3c14c892ce54564b7fde91c73896ca3"
              target="_blank">Pannel</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/KenVeel" target="_blank">KenVeel</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/skeleton-character-low-poly-8856e0138f424d68a8e0b40e185951f6"
              target="_blank">Skeleton</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/StanleyCreative" target="_blank">Stanley Creative</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/low-poly-fantasy-portal-framegate-out-of-stone-fecb75f306e54e22be02f3edca062a43"
              target="_blank">Stone-gate</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/EarthCord" target="_blank">EarthCord</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/low-poly-front-table-b9a463f5695a4daabb4925ebcbdc2879"
              target="_blank">Table</a>
          </dt>
          <dd>
            by <a href="https://sketchfab.com/lehxra" target="_blank">lehxra</a>
            under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>




        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem
}

a {
  color: #eee;
  text-decoration: none;
}

.licences {
  margin: 2rem 0;
  padding-bottom: 1rem;
  font-size: 1rem;
  text-align: left;
}

.licences dt {
  padding-top: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;
}

.licences dd {
  margin-left: 0;
  font-size: 0.8rem;
}

#onboarding {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333;
  color: #ccc;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  font-family: monospace;
  z-index: 10000;
  overflow: auto;
}

#onboarding>* {
  margin: 0 auto;
  max-width: 50rem;
  width: calc(100vw - 10rem);
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: 1.3rem;
}

#onboarding button {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
}
</style>#onboarding li {
#onboarding li {
font-size: 1rem;
text-align: left;
}
