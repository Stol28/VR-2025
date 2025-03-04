<script setup>
import { ref } from 'vue';
import PortalTeleporter from './PortalTeleporter.vue';
import '../aframe/clickable.js';
import '../aframe/outline.js';
import { hasTakenChest } from '../stores/player.js';

const artifacts = ref([
  { id: 1, position: '-186.64 8.96 15.26', collected: false },
  { id: 2, position: '-161.92 6.73 2.15', collected: false },
  { id: 3, position: '-189.44 6.4 6.19', collected: false }
]);

const collectedArtifacts = ref(0);
const totalArtifacts = artifacts.value.length;
const puzzleSolved = ref(false);

function collectArtifact(artifact) {
  artifact.collected = true;
  collectedArtifacts.value++;
  if (collectedArtifacts.value === totalArtifacts) {
    puzzleSolved.value = true;
    document.getElementById('pickup-item-final').play();
  }
}

function treasureTaken(evt) {
  hasTakenChest.value = true;
}

</script>

<template>
  <a-entity>
    <a-entity gltf-model="#artefact-island" position="-167.6 -39.8 -37" scale="0.2 0.2 0.2"></a-entity>
    <a-entity gltf-model="#navMesh-rune-island" position="-167.6 -39.8 -37" scale="0.2 0.2 0.2" data-role="nav-mesh" visible="false"></a-entity>
    <a-entity gltf-model="#stone-gate" position="-190 3.6 -12" scale="1 1 1"></a-entity>
    <a-entity v-if="puzzleSolved" gltf-model="#treasure-chest" clickable outline-on-event position="-191.63 4.07 -11.57" scale="0.01 0.01 0.01" @click="treasureTaken($event)" :visible="hasTakenChest ? 'false' : 'true'"></a-entity>

    <template v-for="artifact in artifacts" :key="artifact.id">
      <a-entity
      v-if="!artifact.collected"
      :position="artifact.position"
      gltf-model="#artefact"
      scale="4 4 4"
      animation="property: rotation; to: 0 360 0; loop: true;  dur: 1000; easing: linear"
      clickable
      outline-on-event
      @click="collectArtifact(artifact); $refs.pickupSound.components.sound.playSound()"
      ></a-entity>
    </template>
    <a-sound
      ref="pickupSound"
      src="#pickup-item"
      autoplay="false"
    ></a-sound>

    <a-entity v-if="puzzleSolved">
      <PortalTeleporter
        label="Exit Island"
        material="src: #portail-texture"
        position="-190 5.8 -12.1"
        scale="1.4 2.4 1"
        rotation="0 0 0"
        :x="1"
        :y="10"
        :z="0"
        :rot="0"
        :cameraEffect="false"
      /> 
      <!-- a ajouter du son quand le portail apparait  -->
    </a-entity>

    <a-entity
      geometry="primitive: plane; height: 50; width: 50;"
      position="-180 4.6 5"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="color: red" 
      visible="false"
    ></a-entity>
  </a-entity>
</template>