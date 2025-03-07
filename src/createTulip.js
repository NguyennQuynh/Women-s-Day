import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';

// Create a scene
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
exporter.parse(scene, function (gltf) {
  const output = JSON.stringify(gltf, null, 2);
  const blob = new Blob([output], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'tulip_flower.glb';
  link.click();
  
  URL.revokeObjectURL(url);
}, { binary: true }); 