AFRAME.registerComponent("hexagone-pavage-fonctionnel", {
  schema: {
    width: { type: "number", default: 10 },
    depth: { type: "number", default: 10 },
  },
  init: function () {
    const { width, depth } = this.data;
    const hexWidth = 1;
    const hexHeight = (Math.sqrt(3) / 2) * hexWidth;

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < depth; j++) {
        let hexagon = document.createElement("a-entity");
        hexagon.setAttribute("geometry", {
          primitive: "cylinder",
          radius: hexWidth / 2,
          height: 0.2,
          segmentsRadial: 6,
        });

        const lightnessVariation = Math.floor(Math.random() * 30) + 70; // Generate small lightness variation
        hexagon.setAttribute("color", `hsl(120, 100%, ${lightnessVariation}%)`); // Set color with HSL lightness variation

        hexagon.setAttribute("position", {
          x: (i + (j % 2) * 0.5) * hexWidth * 1.02 - (width / 2) * hexWidth * 1.02,
          y: -0.1,
          z: j * hexHeight * 1.02 - (depth / 2) * hexHeight * 1.02,
        });
        
        this.el.appendChild(hexagon);
      }
    }
  },
  update: function () {},
  tick: function () {},
});