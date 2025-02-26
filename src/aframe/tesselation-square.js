AFRAME.registerComponent("tesselation-square", {
  schema: {
    width: { type: "number", default: 10 },
    depth: { type: "number", default: 10 },
  },
  init: function () {
    const { width, depth } = this.data;

    // Add base
    let base = document.createElement("a-box");
    base.setAttribute("position", { x: 0, y: -0.1, z: 0 }); // Adjusted y position to align with squares
    base.setAttribute("width", width * 1 + (width - 1) * 0.2); // Adjusted base width
    base.setAttribute("depth", depth * 1 + (depth - 1) * 0.2); // Adjusted base depth
    base.setAttribute("height", 0.1);
    base.setAttribute("color", "gray");
    this.el.appendChild(base);

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < depth; j++) {
        let box = document.createElement("a-box");
        box.setAttribute("width", 1);
        box.setAttribute("height", 0.2);
        box.setAttribute("depth", 1);
        box.setAttribute("position", { x: i * (1 + 0.1) - (width * (1 + 0.1)) / 2 + 0.5, y: -0.1, z: j * (1 + 0.1) - (depth * (1 + 0.1)) / 2 + 0.5 }); // Adjusted positions to make gap smaller
        const lightnessVariation = Math.floor(Math.random() * 30) + 70; // Generate small lightness variation
        box.setAttribute("color", `hsl(40, 100%, ${lightnessVariation}%)`); // Set color with HSL lightness variation
        this.el.appendChild(box);
      }
    }
  },
  update: function () {},
  tick: function () {},
});