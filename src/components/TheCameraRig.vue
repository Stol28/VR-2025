<script setup>
import '../aframe/disable-in-vr.js';
import '../aframe/hide-in-vr.js';
import '../aframe/simple-navmesh-constraint.js';
import '../aframe/blink-controls.js';
import '../aframe/physx-grab.js';
import { hasTakenTeleportRing } from '../stores/player.js';
import { hasTakenChest } from '../stores/player.js';
import { hasTakenKey } from '../stores/player.js';

</script>

<template>
  <a-entity id="camera-rig" movement-controls="camera: #head;" disable-in-vr="component: movement-controls;"
    position="1 10 0">

    <a-entity id="head" look-controls="pointerLockEnabled: true"
      simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.65;"
      disable-in-vr="component: simple-navmesh-constraint;" camera position="0 1.65 0">
      <a-entity geometry="primitive: circle; radius: 0.0003;" material="shader: flat; color: white;" cursor
        raycaster="far: 4; objects: [clickable]; showLine: false;" position="0 0 -0.1"
        disable-in-vr="component: raycaster; disableInAR: false;" hide-in-vr="hideInAR: false"></a-entity>
      <a-entity id="dummy-hand-right" position="0.3 -0.4 -0.5">
      </a-entity>
      <a-entity id="dummy-hand-left" position="-0.3 -0.4 -0.5"></a-entity>
    </a-entity>

    <a-entity id="hand-left" hand-controls="hand: left" blink-controls="
          cameraRig: #camera-rig;
          teleportOrigin: #head;
          collisionEntities: [data-role='nav-mesh'];
          snapTurn: false;
        " position="0 1.5 0" physx-grab>


        <a-gltf-model v-if="hasTakenTeleportRing" id="bracelet-teleportation" src="#bracelet" scale="0.04 0.04 0.04" position="0.005 0.097 -0.01" rotation="0 45 -8"
          physx-body="type: kinematic; emitCollisionEvents: true" physx-grab></a-gltf-model>

      <a-sphere id="hand-left-collider" radius="0.02" visible="false"
        physx-body="type: kinematic; emitCollisionEvents: true">
      </a-sphere>

    </a-entity>

    <a-entity id="hand-right" hand-controls="hand: right" laser-controls="hand: right"
      raycaster="far: 4; objects: [clickable]; showLine: true;" position="0 1.5 0" physx-grab>

      <a-gltf-model 
          v-if="hasTakenChest"
          id="treasure-chest-dummy"
          src="#treasure-chest" scale="0.003 0.003 0.003" position="0 0 0" rotation="0 0 90"
        ></a-gltf-model>
        <a-gltf-model 
          v-if="hasTakenKey"
          id="key-dummy"
          src="#key" scale="0.3 0.3 0.3" position="-0.025 -0.175 -0.045"
        ></a-gltf-model>  
      <a-sphere id="hand-right-collider" radius="0.02" visible="false"
        physx-body="type: kinematic; emitCollisionEvents: true">
      </a-sphere>
    </a-entity>

  </a-entity>
</template>