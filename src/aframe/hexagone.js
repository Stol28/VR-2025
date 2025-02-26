AFRAME.registerComponent("hexagone", {
  schema: {
    size: { type: "number", default: 1 },
    color: { type: "color", default: "#ffffff" },
    cellsize: { type: "number", default: 2 },
    height: { type: "number", default: 0.2 },
    bevelEnabled: { type: "boolean", default: false },
    hexScale: { type: "vec3", default: { x: 1, y: 1, z: 1 } }, // Renommé scale en hexScale
    colorVariation: { type: "number", default: 30 }
  },

  init: function () {
    this.createHexagon();
  },

  createHexagon: function () {
    const data = this.data;
    const el = this.el;

    // Create hexagon shape
    const hexShape = new THREE.Shape();
    const angle = Math.PI / 3;
    for (let i = 0; i < 6; i++) {
      const x = Math.cos(i * angle) * data.cellsize;
      const y = Math.sin(i * angle) * data.cellsize;
      if (i === 0) {
        hexShape.moveTo(x, y);
      } else {
        hexShape.lineTo(x, y);
      }
    }
    hexShape.lineTo(Math.cos(0) * data.cellsize, Math.sin(0) * data.cellsize);

    // Extrude the shape to create a 3D geometry
    const extrudeSettings = {
      depth: data.height,
      bevelEnabled: data.bevelEnabled,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 1
    };
    const geometry = new THREE.ExtrudeGeometry(hexShape, extrudeSettings);

    // Create a material
    const material = new THREE.MeshLambertMaterial({ color: new THREE.Color(data.color) });

    // Create a mesh
    const mesh = new THREE.Mesh(geometry, material);

    // Rotate the mesh 90 degrees on the X axis
    mesh.rotation.x = Math.PI / 2;

    // Apply the scale
    mesh.scale.set(data.hexScale.x, data.hexScale.y, data.hexScale.z);

    // Add the mesh to the entity
    el.setObject3D('mesh', mesh);
  },

  update: function () {
    const mesh = this.el.getObject3D('mesh');
    if (mesh) {
      mesh.geometry.dispose();
      mesh.material.dispose();
      this.el.removeObject3D('mesh');
    }
    this.createHexagon();
  }
});

// Register the primitive
AFRAME.registerPrimitive('a-hexagone', {
  defaultComponents: {
    hexagone: {}
  },
  mappings: {
    size: 'hexagone.size',
    color: 'hexagone.color',
    cellsize: 'hexagone.cellsize',
    height: 'hexagone.height',
    'bevel-enabled': 'hexagone.bevelEnabled',
    'hex-scale': 'hexagone.hexScale', // Renommé scale en hexScale
    'color-variation': 'hexagone.colorVariation'
  }
});