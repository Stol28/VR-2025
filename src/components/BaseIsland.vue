<script setup>
import PortalTeleporter from './PortalTeleporter.vue';
import '../aframe/simple-grab.js';
import '../aframe/outline.js';
import '../aframe/clickable.js';
import { hasTakenTeleportRing } from '../stores/player.js';


function deleteEntity(evt) {
  hasTakenTeleportRing.value = true;
  document.getElementById('portails').setAttribute('visible', 'true');
  evt.target.parentNode.removeChild(evt.target);
}


</script>

<template>
  <a-entity>
    <a-entity gltf-model="#music-island" position="2.7 9.5 -13.5" scale="50 50 50"></a-entity>
    <a-entity gltf-model="#low-poly-island" position="2.7 9.5 -13.5" rotation="0 45 0" scale="14 14 14"></a-entity>
    <a-entity gltf-model="#skeleton" position="5 9.45 -2.5" scale="8 10 6" look-at="[camera]"></a-entity>
    <a-entity gltf-model="#pannel" position="-5 8.6 -9.5" scale="2 2 2" rotation="0 4 0" ></a-entity>

    <a-box 
    id="bracelet-container"
		position="3.75 11.3 -2.25"
		rotation="45 0 45"
    scale="0.25 0.25 0.25"
		width="1.8"
		height="1.8"
		depth="1.8"
		color="blue"
		opacity="0"
    animation="property: rotation; to: 45 360 45; loop: true;  dur: 1000; easing: linear"
		simple-grab
		clickable
		outline-on-event
		@click="deleteEntity($event)">
    <a-entity 
      gltf-model="#bracelet"
      id="bracelet"
    ></a-entity>
  </a-box>



    <a-entity visible="false" id="portails">
      <PortalTeleporter position="-1.5 11.3 -10.88" label="Hidden Relics Island" material="src: #maze-exit-texture"
        scale="0.5 0.5 0.5" :x="-90" :y="5" :z="0" :rot="0" :cameraEffect="true" :cameraX="-90" :cameraY="7"
        :cameraZ="0" :cameraRot="0" rotation="0 4 0" />
      <PortalTeleporter position="-0.194 11.3 -10.88" label="Music Runes Island" material="src: #maze-exit-texture"
        scale="0.5 0.5 0.5" :x="0" :y="5" :z="-90" :rot="0" :cameraEffect="true" :cameraX="0" :cameraY="7"
        :cameraZ="-90" :cameraRot="0" rotation="0 4 0" />
      <PortalTeleporter position="1 11.3 -10.88" label="Ethereal Maze Island" material="src: #maze-exit-texture"
        scale="0.5 0.5 0.5" :x="95" :y="5" :z="98.8" :rot="0" :cameraEffect="true" :cameraX="95" :cameraY="7"
        :cameraZ="98.8" :cameraRot="0" rotation="0 4 0"  />
    </a-entity>

    <a-entity
    geometry="primitive: plane; height: 12; width: 3.7;"
    position="0.2 10 -5.7"
    rotation="-90 4.9 0"
    data-role="nav-mesh"
    material="color: red"
    visible="false"
  ></a-entity>
  
  </a-entity>
</template>