<p align="center">
    <img src="./public/assets/island.png" alt="VAV Logo" align="center"/>
</p>
<h1 align="center">The island of challenges</h1>

> A boilerplate for A-Frame 1.7, Vue 3.5 and Vite 5.0

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![A-Frame](https://img.shields.io/badge/A%E2%80%93Frame-1.7-brightgreen?style=for-the-badge&labelColor=%23ef2d5e&color=%23ef2d5e)
![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

### [>> DEMO <<](https://onivers.com/vr/steve/)

## Included in the boilerplate

### Libs and components

- [aframe-extras](https://github.com/c-frame/aframe-extras) (MIT License)
- [aframe-blink-controls](https://github.com/jure/aframe-blink-controls) (MIT License)
- [aframe-multi-camera](https://github.com/diarmidmackenzie/aframe-multi-camera/) (MIT License)
- [simple-navmesh-constraint](https://github.com/AdaRoseCannon/aframe-xr-boilerplate) (MIT Licence)

### Movement modes support

- **Desktop** – Keyboard for move (_WASD_ or Arrows keys) + Mouse for look control (Drag and drop)
- **Mobile** – 1x Finger touch to go forward + 2x Fingers touch to go backward + Gaze cursor for click
- **VR/AR** – walk + Teleport (Grip for grab and laser for click) + Gaze cursor for click in AR

### 3D models

#### Islands

Base Island - [sketchfab](https://sketchfab.com/3d-models/low-poly-island-56735ec9bacb4e56b124504143208404) by Read1dno is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  
Relic Island - [sketchfab](https://sketchfab.com/3d-models/floating-sky-island-b341e77708c54b5386005b41b1fe22fb) by TheFined is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  
Drum Island - [sketchfab](https://sketchfab.com/3d-models/flying-island-low-poly-8780067653804460a0c792c91ed2bbf5) by ChojoThePony is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  

#### Objects
Bracelet - [sketchfab](https://sketchfab.com/3d-models/bracelet-dae01621bc204a0aafa6d8f627d13457) by Mike Rowley is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  
Chest - [sketchfab](https://sketchfab.com/3d-models/low-poly-treasure-chest-ca63751326084866b8df9a6b4c196b3d) by cattleya is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  
Hammer - [sketchfab](https://sketchfab.com/3d-models/stylized-hammer-6cd89cf7db324c908cd002a958577d2e) by Lucy Baranova is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  
Key - [sketchfab](https://sketchfab.com/3d-models/key-aa97db6fac2442d2b935e6746ec4fc53) by TommyPrism is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  

#### Utilities 
Artefact - [sketchfab](https://sketchfab.com/3d-models/jedi-holocron-1d5e04a564464ff9b0675a44309bce9f) by Greggory_Fisher is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  
Coins-money - [sketchfab](https://sketchfab.com/3d-models/coins-and-money-828af77066764effb5ad3eca6ac7c50d) by SundayLazy is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  
Drums - [sketchfab](https://sketchfab.com/3d-models/drum-9860c0037ea049eab5503975da06d9f2) by LaudoStudio is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  
Pannel - [sketchfab](https://sketchfab.com/3d-models/wooden-sign-with-roof-d3c14c892ce54564b7fde91c73896ca3) by KenVeel is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  
Skeleton - [sketchfab](https://sketchfab.com/3d-models/skeleton-character-low-poly-8856e0138f424d68a8e0b40e185951f6) by Stanley Creative is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  
Stone-gate - [sketchfab](https://sketchfab.com/3d-models/low-poly-fantasy-portal-framegate-out-of-stone-fecb75f306e54e22be02f3edca062a43) by EarthCord
 is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  
Table - [sketchfab](https://sketchfab.com/3d-models/low-poly-front-table-b9a463f5695a4daabb4925ebcbdc2879) by lehxra is licensed under [CC Attribution](https://creativecommons.org/licenses/by/4.0/)  

---

## Quickstart

### Create a folder for your project and move to it

### Clone (or fork, or download)

```sh
git clone https://github.com/Stol28/VR-2025
```

### Install dependencies

```sh
npm ci
```

### Dev

```sh
npm run dev
```

### Build

```sh
npm run build
```

## Notes for local dev on VR headset

1. Check that your development device and your VR headset are connected on **the same network**.

2. Expose you local development:

```sh
npm run dev-expose
```

3. In your VR headset, browse to the local development adress `[ip]:[port]`.

> [!NOTE]
> The certificate is self-signed, so you will probably have to confirm access to the resource in your browser.

---

## Answers if you are stuck

### Relic Island 

The trhee relics are hidden:
1. On the left in the log
2. Behind the house on the roof
3. Behind the island, behind a tree

### Drum Island

The secret combination is 3-2-3-1

## License

![MIT License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge&color=%23262626)
