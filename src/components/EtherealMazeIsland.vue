<script setup>
import { generate } from '../utils/maze';
import PortalTeleporter from './PortalTeleporter.vue';

const maze = generate(12, 12);

function createMazeEntities(maze) {
    const entities = [];
    const wallHeight = 3;
    const wallWidth = 0.1;
    const cellSize = 2; // Double the cell size
    const wallExtension = 0.1; // Increase wall length by 0.1

    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            const cell = maze[row][col];

            if (!cell[0]) { // North wall
                entities.push({
                    position: `${col * cellSize} ${wallHeight / 2} ${row * cellSize - cellSize / 2}`,
                    width: cellSize + wallExtension,
                    height: wallHeight,
                    depth: wallWidth,
                    color: '#00ff00'
                });
            }
            if (!cell[1]) { // East wall
                entities.push({
                    position: `${col * cellSize + cellSize / 2} ${wallHeight / 2} ${row * cellSize}`,
                    width: wallWidth,
                    height: wallHeight,
                    depth: cellSize + wallExtension,
                    color: '#00ff00'
                });
            }
            if (!cell[2]) { // South wall
                entities.push({
                    position: `${col * cellSize} ${wallHeight / 2} ${row * cellSize + cellSize / 2}`,
                    width: cellSize + wallExtension,
                    height: wallHeight,
                    depth: wallWidth,
                    color: '#00ff00'
                });
            }
            if (!cell[3]) { // West wall
                entities.push({
                    position: `${col * cellSize - cellSize / 2} ${wallHeight / 2} ${row * cellSize}`,
                    width: wallWidth,
                    height: wallHeight,
                    depth: cellSize + wallExtension,
                    color: '#00ff00'
                });
            }
        }
    }

    return entities;
}

const mazeEntities = createMazeEntities(maze);
</script>

<template>
    <!-- import of the floating-island -->
    <a-entity gltf-model="#floating-island" position="95 -4.5 102.5" scale="10 5 10"></a-entity>

    <a-entity position="83 5 86.8">
        <template v-for="(entity, index) in mazeEntities" :key="index">
            <a-box :position="entity.position" :width="entity.width" :height="entity.height" :depth="entity.depth"
                :color="entity.color"></a-box>
        </template>


        <!-- Point de téléportation -->
        <PortalTeleporter
            label="Exit Island"
            material="src: #portail-texture"
            position="22 1.65 -0.9" 
            scale="0.9 0.9 0.9" 
            rotation="0 0 0"
            :x="0"
            :y="10"
            :z="0"
            sound = "src: #teleport-sound; position: 22 1.65 -0.9; autoplay: true; loop: true; rolloffFactor: 10; volume: 10"
        /> 
    </a-entity>

    <a-entity
    geometry="primitive: plane; height: 24; width: 24;"
    position="94 5.1 97.8"
    rotation="-90 0 0"
    data-role="nav-mesh"
    material="color: red"
    visible="true"
  ></a-entity>
</template>