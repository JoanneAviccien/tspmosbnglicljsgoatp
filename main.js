 import * as THREE from 'three';
 import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

    const renderer = new THREE.WebGLRenderer();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    const scene = new THREE.Scene();
    let Mesh;
    let light;

    function init() {
        scene.background = new THREE.Color('black');
        camera.position.set(0, 10, 20);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    }

    function setLight() {
        light = new THREE.AmbientLight(0xffffff); // soft white light
        scene.add(light);
    }

    function loadGLTF() {
        let balloonLoader = new GLTFLoader();

        balloonLoader.load('./model/stupidpear.gltf', (gltf) => {
            Mesh = gltf.scene;
            Mesh.scale.set(1,1,1);
            scene.add(Mesh);
            Mesh.position.x = 0;
            Mesh.position.y = 9;
            Mesh.position.z = 15;
        });
    }

    function animate() {
        requestAnimationFrame(animate);
        if (Mesh && Mesh.rotation) {
            Mesh.rotation.y -= 0.015;
        }
        renderer.render(scene, camera);
    }

    init();
    setLight();
    loadGLTF();
    animate();
