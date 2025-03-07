const fs = require('fs');
const path = require('path');
const THREE = require('three');
const { GLTFExporter } = require('three/examples/jsm/exporters/GLTFExporter');

// Create scene
const scene = new THREE.Scene();

// Create stem
const stemGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 8);
const stemMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const stem = new THREE.Mesh(stemGeometry, stemMaterial);
stem.position.y = 1;
scene.add(stem);

// Create flower head
const petalGeometry = new THREE.ConeGeometry(0.5, 1, 32);
const petalMaterial = new THREE.MeshStandardMaterial({ color: 0xff69b4 });

// Create petals
for (let i = 0; i < 6; i++) {
  const petal = new THREE.Mesh(petalGeometry, petalMaterial);
  petal.position.y = 2;
  petal.rotation.z = (Math.PI / 3) * i;
  petal.rotation.x = Math.PI / 4;
  scene.add(petal);
}

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Export to GLB
const exporter = new GLTFExporter();
exporter.parse(
  scene,
  function (gltf) {
    const outputPath = path.join(__dirname, '../public/tulip_flower.glb');
    fs.writeFileSync(outputPath, Buffer.from(gltf));
    console.log('GLB file saved to:', outputPath);
  },
  {
    binary: true,
    animations: [],
  }
); 