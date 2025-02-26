AFRAME.registerComponent("hexagone-pavage", {
  schema: {
    width: { type: "number", default: 10 },
    depth: { type: "number", default: 10 },
    color: { type: "color", default: "#ffffff" },
    cellsize: { type: "number", default: 2 },
    height: { type: "number", default: 0.2 },
    bevelEnabled: { type: "boolean", default: false },
    colorVariation: { type: "number", default: 30 }
  },

  init: function () {
    this.createPavage();
  },

  createPavage: function () {
    const data = this.data;
    const gap = 0.1; // Gap between hexagons
    const hexWidth = data.cellsize * 2 + gap; // Width of the hexagon plus gap
    const hexHeight = Math.sqrt(3) * data.cellsize + gap; // Height of the hexagon plus gap
    this.tiles = []; // Store tiles and their color variations

    const group = new THREE.Group();
    let hexagonsLoaded = 0;
    const totalHexagons = data.width * data.depth;

    for (let i = 0; i < data.width; i++) {
      for (let j = 0; j < data.depth; j++) {
        let hexagon = document.createElement("a-hexagone");
        hexagon.setAttribute("cellsize", data.cellsize);
        hexagon.setAttribute("height", data.height);
        hexagon.setAttribute("bevel-enabled", data.bevelEnabled);

        // Calculate position based on hexagon size and gap
        const posX = i * hexWidth * 0.75; // 0.75 to account for overlapping columns
        const posZ = j * hexHeight + (i % 2) * (hexHeight / 2); // Offset every other column

        hexagon.setAttribute("position", { x: posX, y: 0, z: posZ });

        // Generate a random lightness value between 50% and 90%
        const lightnessVariation = Math.floor(Math.random() * data.colorVariation) + (100 - data.colorVariation);
        const color = `hsl(120, 100%, ${lightnessVariation}%)`; // Set color with HSL lightness variation
        hexagon.setAttribute("color", color);

        // Store the tile and its color variation
        this.tiles.push({ element: hexagon, lightnessVariation });

        // Ensure the hexagon is added to the group
        hexagon.addEventListener('loaded', () => {
          if (hexagon.object3D) {
            group.add(hexagon.object3D);
            hexagonsLoaded++;

            // Add the group to the entity once all hexagons are loaded
            if (hexagonsLoaded === totalHexagons) {
              this.el.setObject3D("mesh", group);
            }
          } else {
            console.warn("Hexagon object3D is not defined");
          }
        });

        // Append the hexagon to the scene to trigger the 'loaded' event
        this.el.appendChild(hexagon);
      }
    }
  },

  update: function () {
    const mesh = this.el.getObject3D('mesh');
    if (mesh) {
      mesh.children.forEach(child => {
        if (child.geometry) {
          child.geometry.dispose();
        }
        if (child.material) {
          child.material.dispose();
        }
      });
      this.el.removeObject3D('mesh');
    }
    this.createPavage();
  }
});