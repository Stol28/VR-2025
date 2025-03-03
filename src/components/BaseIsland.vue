<script setup>
import { ref } from 'vue';
import PortalTeleporter from './PortalTeleporter.vue';
import '../aframe/simple-grab.js';
import '../aframe/outline.js';
import '../aframe/clickable.js';
import { hasTakenTeleportRing } from '../stores/player.js';
import { hasTakenChest } from '../stores/player.js';
import { hasTakenKey } from '../stores/player.js';

const messages = [
  "Welcome, adventurer. The floating islands await you. You'll have to solve three challenges.",
  "To help you on this journey, I give you the Ether Bracelet. Use it to teleport."
];
const currentMessageIndex = ref(0);
const showBraceletContainer = ref(false);

function deleteEntity(evt) {
  hasTakenTeleportRing.value = true;
  const relicPortail = document.getElementById('relicPortail');
  if (relicPortail) {
    relicPortail.setAttribute('visible', 'true');
  }
  if (evt.target.parentNode) {
    evt.target.parentNode.removeChild(evt.target);
  }

  // Add the new message and reset the index
  messages.push("Adventurer, begin your quest on the Relic Island. Find three blue engraved stones, earn a chest and bring it back here.");
  currentMessageIndex.value = 2;
  showBraceletContainer.value = false;
}

function handleSkeletonClick() {
  if (currentMessageIndex.value < messages.length - 1) {
    currentMessageIndex.value++;
  }
  if (currentMessageIndex.value === 1) {
    showBraceletContainer.value = true;
  }
  if (hasTakenChest.value == true) {
    hasTakenChest.value = false;
    messages.push("Next, head to the Drum Island. Tap the rhythm on the drum to unlock the key. Only then can you proceed.");
    currentMessageIndex.value = messages.length - 1;
    const runesPortail = document.getElementById('runesPortail');
    if (runesPortail) {
      runesPortail.setAttribute('visible', 'true');
    }
    return;
  }
  if (hasTakenKey.value == true) {
    hasTakenKey.value = false;
    messages.push("Final step: explore the Maze. This last item will guide you to the truth.");
    currentMessageIndex.value = messages.length - 1;
    const mazePortail = document.getElementById('mazePortail');
    if (mazePortail) {
      mazePortail.setAttribute('visible', 'true');
    }
  }
}
</script>

<template>
  <a-entity>
    <!-- <a-entity gltf-model="#low-poly-island" position="2.7 9.5 -13.5" rotation="0 45 0" scale="14 14 14"></a-entity> -->
    <a-entity gltf-model="#skeleton" position="4 9.45 -2" scale="8 10 6" look-at="[camera]" clickable outline-on-event
      @click="handleSkeletonClick">
      <!-- Cartoon bubble for the skeleton narrator -->
      <a-entity position="0 3 0" rotation="0 0 0">
        <a-plane width="4" height="0.8" color="#000000" material="opacity: 0.8" scale="0.15 0.15 0.15"
          position="0 -2.6 0.1">
          <a-text :value="messages[currentMessageIndex]" align="center" color="#ffffff" position="0 0 0.1" width="4"
            height="0.8" scale="0.9 0.9 0.9"></a-text>
        </a-plane>
      </a-entity>
    </a-entity>
    <a-entity gltf-model="#pannel" position="-5 8.6 -9.5" scale="2 2 2" rotation="0 4 0"></a-entity>

    <a-box v-if="showBraceletContainer" id="bracelet-container" position="3 11.3 -2" rotation="45 0 45"
      scale="0.25 0.25 0.25" width="1.8" height="1.8" depth="1.8" color="blue" opacity="0"
      animation="property: rotation; to: 45 360 45; loop: true;  dur: 1000; easing: linear" simple-grab clickable
      outline-on-event @click="deleteEntity($event)">
      <a-entity gltf-model="#bracelet" id="bracelet"></a-entity>
    </a-box>

    <a-entity visible="false" id="relicPortail">
      <PortalTeleporter position="-1.5 11.3 -10.88" label="Hidden Relics Island" material="src: #maze-exit-texture"
        scale="0.5 0.5 0.5" :x="-90" :y="5" :z="0" :rot="0" :cameraEffect="true" :cameraX="-90" :cameraY="7"
        :cameraZ="0" :cameraRot="0" rotation="0 4 0" />
    </a-entity>

    <a-entity visible="false" id="runesPortail">
      <PortalTeleporter position="-0.194 11.3 -10.88" label="Music Runes Island" material="src: #maze-exit-texture"
        scale="0.5 0.5 0.5" :x="0" :y="5" :z="-90" :rot="0" :cameraEffect="true" :cameraX="0" :cameraY="7"
        :cameraZ="-90" :cameraRot="0" rotation="0 4 0" />
    </a-entity>

    <a-entity visible="false" id="mazePortail">
      <PortalTeleporter position="1 11.3 -10.88" label="Ethereal Maze Island" material="src: #maze-exit-texture"
        scale="0.5 0.5 0.5" :x="95" :y="5" :z="98.8" :rot="0" :cameraEffect="true" :cameraX="95" :cameraY="7"
        :cameraZ="98.8" :cameraRot="0" rotation="0 4 0" />
    </a-entity>

    <a-entity geometry="primitive: plane; height: 12; width: 3.7;" position="0.2 10 -5.7" rotation="-90 4.9 0"
      data-role="nav-mesh" material="color: red" visible="false"></a-entity>
  </a-entity>
</template>