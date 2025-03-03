<script setup>
import { ref } from 'vue';
import PortalTeleporter from './PortalTeleporter.vue';
import '../aframe/clickable.js';
import '../aframe/outline.js';
import { hasTakenKey } from '../stores/player.js';

const correctSequence = ['drum3', 'drum2']; // Séquence correcte des tambours
const currentSequence = ref([]);
const puzzleSolved = ref(false);

function handleDrumCollision(drumId) {
  if (puzzleSolved.value) return;

  currentSequence.value.push(drumId);

  // Jouer le son du tambour correspondant  
  const drumSound = document.querySelector(`#${drumId}-sound`);
  console.log(drumSound);
  if (drumSound) {
    drumSound.components.sound.playSound();
  }

  // Check if the current sequence matches the correct sequence so far
  for (let i = 0; i < currentSequence.value.length; i++) {
    if (currentSequence.value[i] !== correctSequence[i]) {
      document.getElementById('failure-sound').components.sound.playSound();
      currentSequence.value = [];
      return;
    }
  }

  // If the sequence is complete and correct
  if (currentSequence.value.length === correctSequence.length) {
    document.getElementById('success-sound').components.sound.playSound();
    puzzleSolved.value = true;
    removeHammer();
  }
}

function removeHammer() {
  const hammer = document.querySelector('#hammer-element');
  if (!hammer) return;
  const scene = document.querySelector('a-scene');
  const hand = hammer.components['simple-grab']?.grabbedBy;
  if (hand) {
    scene.systems['simple-grab'].removeCurrentGrab(hand, hammer);
  }
  hammer.parentNode?.removeChild(hammer);
}

function rotateHammer(event) {
  const hammer = document.querySelector('#hammer-element');
  hammer.setAttribute('rotation', '-90 0 0');
  hammer.setAttribute('position', '0.005 0 -0.02');
}

function keyTaken(evt) {
  hasTakenKey.value = true;
}
</script>

<template>
  <a-entity>
    <a-entity gltf-model="#music-island" position="5 4 -101" rotation="0 180 0" scale="0.9 0.9 0.9"></a-entity>
    <!-- Drums displayed side by side with boxes and obb-collider -->
    <a-entity position="5 5 -101" rotation="0 0 0">
      <a-box id="drum1-box" position="-1.1 1 -3.6" scale="1 1 1" height="1.4" opacity="0" obb-collider @obbcollisionended="handleDrumCollision('drum1')">
        <a-entity id="drum1" gltf-model="#drum" position="0 -0.7 0" scale="3 3 3"></a-entity>
      </a-box>
      <a-box id="drum2-box" position="0.2 1 -4" scale="1 1 1" height="1.4" opacity="0" obb-collider @obbcollisionended="handleDrumCollision('drum2')">
        <a-entity id="drum2" gltf-model="#drum" position="0 -0.7 0" scale="3 3 3"></a-entity>
      </a-box>
      <a-box id="drum3-box" position="1.3 1 -3.2" scale="1 1 1" height="1.4" opacity="0" obb-collider @obbcollisionended="handleDrumCollision('drum3')">
        <a-entity id="drum3" gltf-model="#drum" position="0 -0.7 0" scale="3 3 3"></a-entity>
      </a-box>
    </a-entity>

    <a-sound id="drum1-sound" src="#first-drum-sound" autoplay="false" volume="75"></a-sound>
    <a-sound id="drum2-sound" src="#second-drum-sound" autoplay="false" volume="75"></a-sound>
    <a-sound id="drum3-sound" src="#third-drum-sound" autoplay="false" volume="75"></a-sound>

    <a-box position="6 6 -102" scale="15 15 15" width="0.02" height="0.05"
      depth="0.015" color="blue" opacity="0" id="hammer-container" simple-grab clickable outline-on-event @grab="rotateHammer">
      <a-box position="0 0 0" width="0.02" height="0.05" depth="0.015" id="hammer-element" obb-collider color="blue" opacity="0">
        <a-entity gltf-model="#hammer" rotation="12 12 0" position="-0.010 -0.025 -0.003"></a-entity>
      </a-box>
    </a-box>

    <a-entity v-if="puzzleSolved">
      <PortalTeleporter label="Exit Island" geometry="primitive: plane" material="src: #portail-texture"
        position="4.58 6.59 -100.74" scale="1.76 3.29 1" rotation="0 172 0" :x="0" :y="10" :z="0" :rot="0"
        :cameraEffect="false" />
      <!-- a ajouter du son quand le portail apparait  -->
    </a-entity>

    <a-entity v-if="puzzleSolved" gltf-model="#key" clickable outline-on-event position="2.82 5.2 -102"
      @click="keyTaken($event)" :visible="hasTakenKey ? 'false' : 'true'"></a-entity>

    <a-entity gltf-model="#table" position="2.76  5.25 -101.8" rotation="0 -8 0" scale="0.3 0.3 0.3"></a-entity>
    <a-entity geometry="primitive: plane; height: 5; width: 5;" position="5 5.36 -103.6" rotation="-90 -8 0"
      data-role="nav-mesh" material="color: red" visible="false"></a-entity>
  </a-entity>
</template>