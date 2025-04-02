import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load font and create text
const loader = new FontLoader();
loader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", function (font) {
    const textGeometry = new TextGeometry("Fireworks!", {
        font: font,
        size: 2,
        height: 0.5,
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(-5, 0, 0);
    scene.add(textMesh);
});

// Create a firework particle system
const particles = new THREE.BufferGeometry();
const particleCount = 300;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10; // Spread the particles
}

particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
const particleMaterial = new THREE.PointsMaterial({ color: 0xff0000, size: 0.2 });
const firework = new THREE.Points(particles, particleMaterial);
scene.add(firework);

camera.position.z = 10;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Firework explosion effect
    let positions = firework.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (Math.random() - 0.5) * 0.1;
        positions[i + 1] += (Math.random() - 0.5) * 0.1;
        positions[i + 2] += (Math.random() - 0.5) * 0.1;
    }
    firework.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
}

animate();
