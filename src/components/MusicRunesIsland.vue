<script setup>
import { ref } from 'vue';
import PortalTeleporter from './PortalTeleporter.vue';
import '../aframe/clickable.js';
import '../aframe/outline.js';

const correctSequence = ['drum2', 'drum3', 'drum1', 'drum3']; // Séquence correcte des tambours
const currentSequence = ref([]);
const puzzleSolved = ref(false);

function handleDrumClick(drumId) {
  if (puzzleSolved.value) return;

  currentSequence.value.push(drumId);

  // Check if the current sequence matches the correct sequence so far
  for (let i = 0; i < currentSequence.value.length; i++) {
    if (currentSequence.value[i] !== correctSequence[i]) {
      document.getElementById('failure-sound').play();
      currentSequence.value = [];
      return;
    }
  }

  // If the sequence is complete and correct
  if (currentSequence.value.length === correctSequence.length) {
    document.getElementById('success-sound').play();
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

// obb colider 

function rotateHammer(event) {
  const hammer = document.querySelector('#hammer-element');
  hammer.setAttribute('rotation', '-90 0 0');
  hammer.setAttribute('position', '0 0 0');
}

</script>

<template>
  <a-entity>

    <!-- Drums displayed side by side -->
    <a-entity position="5 5 -101" rotation="0 0 0">
      <a-entity gltf-model="#drum" clickable outline-on-event position="-1.5 0 1" scale="3 3 3" @click="handleDrumClick('drum1'); document.getElementById('first-drum-sound').play()"></a-entity>
      <a-entity gltf-model="#drum" clickable outline-on-event position="0 0 0" scale="3 3 3" @click="handleDrumClick('drum2'); document.getElementById('second-drum-sound').play()"></a-entity>
      <a-entity gltf-model="#drum" clickable outline-on-event position="1.5 0 1" scale="3 3 3" @click="handleDrumClick('drum3'); document.getElementById('third-drum-sound').play()"></a-entity>
    </a-entity>
    <a-sound
      ref="drum1Sound"
      src="#first-drum-sound"
      autoplay="false"
      volume="75"
    ></a-sound>
    <a-sound
      ref="drum2Sound"
      src="#second-drum-sound"
      autoplay="false"
      volume="75"
    ></a-sound>
    <a-sound
      ref="drum3Sound"
      src="#third-drum-sound"
      autoplay="false"
      volume="75"
    ></a-sound>

    <a-box 
    id="hamer-container"
		position="6 6 -99"
		rotation="0 0 0"
    scale="15 15 15"
		width="0.02"
		height="0.05"
		depth="0.015"
		color="blue"
		opacity="0"
		simple-grab
		clickable
		outline-on-event
		@grab="rotateHammer">
    <a-entity 
      gltf-model="#hammer" 
      rotation="12 12 0"  
      id="hammer-element"
      position="-0.010 -0.025 -0.003"  
    ></a-entity>
  </a-box>

    <!-- Portal that opens upon solving the puzzle -->
    <a-entity v-if="puzzleSolved">
      <PortalTeleporter
        label="Exit Island"
        material="src: #portail-texture"
        position="0 7.6 -98"
        scale="0.9 0.9 0.9"
        rotation="0 0 0"
        :x="0"
        :y="10"
        :z="0"
      />
    </a-entity>

    <a-entity
      geometry="primitive: plane; height: 40; width: 40;"
      position="5 5 -101"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: green"
      visible="true"
    ></a-entity>
  </a-entity>
</template>