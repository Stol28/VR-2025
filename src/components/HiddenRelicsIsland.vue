<script setup>
import { ref } from 'vue';
import PortalTeleporter from './PortalTeleporter.vue';
import '../aframe/clickable.js';
import '../aframe/outline.js';

const artifacts = ref([
  { id: 1, position: '-95 6 4', collected: false },
  { id: 2, position: '-94 6 6', collected: false },
  { id: 3, position: '-93 6 5', collected: false }
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
</script>

<template>
  <a-entity>
    <a-entity gltf-model="#floating-island" position="-101 -4.5 5" scale="10 5 10"></a-entity>
    <a-entity gltf-model="#stone-gate" position="-90 5 -12" scale="1 1 1"></a-entity>

    <template v-for="artifact in artifacts" :key="artifact.id">
      <a-entity
      v-if="!artifact.collected"
      :position="artifact.position"
      gltf-model="#artefact"
      scale="2 2 2"
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
        position="-90 7.2 -12.1"
        scale="1.4 2.4 1"
        rotation="0 0 0"
        :x="0"
        :y="10"
        :z="0"
        :rot="0"
        :cameraEffect="false"
      /> 
      <!-- a ajouter du son quand le portail apparait  -->
    </a-entity>

    <a-entity
      geometry="primitive: plane; height: 40; width: 40;"
      position="-101 5 5"
      rotation="-90 0 0"
      data-role="nav-mesh"
      material="src: #portail-texture"
      visible="false"
    ></a-entity>
  </a-entity>
</template>