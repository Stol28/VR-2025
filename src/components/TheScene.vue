<script setup>
import { ref } from 'vue';
import BaseIsland from './BaseIsland.vue';
import MusicRunesIsland from './MusicRunesIsland.vue';
import EtherealMazeIsland from './EtherealMazeIsland.vue';
import HiddenRelicsIsland from './HiddenRelicsIsland.vue';
import TheCameraRig from './TheCameraRig.vue';

import '../aframe/tesselation-square.js';
import '../aframe/emit-when-near.js';
import '../aframe/event-set.js';
import '../aframe/listen-to.js';
import '../aframe/simple-grab.js';
import '../aframe/clickable.js';
import '../aframe/outline.js';
import '../aframe/hexagone-pavage-fonctionnel.js';
import '../aframe/hexagone-pavage.js';
import '../aframe/hexagone.js';


const allAssetsLoaded = ref(false);

function collision(event) {
  console.log('collision', event.detail);
}
</script>

<template>
  <a-scene 
  stats 
  fog="type: linear; color: #a3d0ed; near: 40; far: 50" 
  outline
  simple-grab
  obb-collider="showColliders: true"
  background="color: #a3d0ed;">

    <a-assets @loaded="allAssetsLoaded = true">
      <a-asset-item id="floating-island" src="./assets/models/Floating-island.glb"></a-asset-item>
      <a-asset-item id="base-island" src="./assets/models/Base-island.glb"></a-asset-item>
      <a-asset-item id="music-island" src="./assets/models/Music-island.glb"></a-asset-item>
      <a-asset-item id="drum" src="./assets/models/Drum.glb"></a-asset-item>
      <a-asset-item id="skeleton" src="./assets/models/skeleton.glb"></a-asset-item>
      <a-asset-item id="hammer" src="./assets/models/Hammer.glb"></a-asset-item>
      <a-asset-item id="bracelet" src="./assets/models/Bracelet.glb"></a-asset-item>
      <a-asset-item id="pannel" src="./assets/models/Pannel.glb"></a-asset-item>
      <a-asset-item id="artefact" src="./assets/models/Artefact.glb"></a-asset-item>
      <a-asset-item id="stone-gate" src="./assets/models/Stone-gate.glb"></a-asset-item>
      <a-asset-item id="Musical-rune" src="./assets/models/Musical-rune.glb"></a-asset-item>
      <a-asset-item id="low-poly-island" src="./assets/models/Low-poly-island.glb"></a-asset-item>

      <img id="portail-texture" src="./assets/models/portail-texture.jpg"></img>

      <audio id="teleport-sound" src="./assets/audio/teleport-sound.mp3"></audio>
      <audio id="pickup-item" src="./assets/audio/pickup-item.mp3"></audio>
      <audio id="pickup-item-final" src="./assets/audio/pickup-item-final.mp3"></audio>
      <audio id="success-sound" src="./assets/audio/success-sound.mp3"></audio>
      <audio id="failure-sound" src="./assets/audio/failure-sound.mp3"></audio>
      <audio id="first-drum-sound" src="./assets/audio/first-drum-sound.mp3"></audio>
      <audio id="second-drum-sound" src="./assets/audio/second-drum-sound.mp3"></audio>
      <audio id="third-drum-sound" src="./assets/audio/third-drum-sound.mp3"></audio>
    </a-assets>

    <template v-if="allAssetsLoaded">

      <!-- Ajout de l'île de base -->
      <BaseIsland />

      <!-- Ajout de l'île du labyrinthe -->
      <EtherealMazeIsland />

      <!-- Ajout de l'île des relics -->
      <HiddenRelicsIsland />

      <!-- Ajout de l'île des runes -->
      <MusicRunesIsland />


    </template>

    <TheCameraRig />

  </a-scene>
</template>