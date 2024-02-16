import GRID_BACKGROUND_FRAGMENT_SHADER from "$lib/shaders/grid_background.frag.glsl?raw";
import GRID_BACKGROUND_VERTEX_SHADER from "$lib/shaders/grid_background.vert.glsl?raw";
import * as THREE from "three";

const CATPPUCCIN_CRUST = 0x181926;
const CATPPUCCIN_BASE = 0x24273a;
const GRID_DIVISION = 48;
const GRID_LIMIT = 48;

export const useGridBackground = (element: HTMLCanvasElement) => {
    const renderer = new THREE.WebGLRenderer({ canvas: element });
    renderer.setPixelRatio(window.devicePixelRatio);

    const camera = new THREE.PerspectiveCamera(40, undefined, 1, 10000);
    camera.position.set(0, 3, 10);
    camera.lookAt(0, 2, 0);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(CATPPUCCIN_CRUST);

    const grid_helper = new THREE.GridHelper(
        GRID_LIMIT * 2,
        GRID_DIVISION,
        CATPPUCCIN_BASE,
        CATPPUCCIN_BASE,
    );

    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

        // @ts-expect-error | SAFETY: Completely valid material, TypeScript just can't validate that it is.
        grid_helper.material = new THREE.ShaderMaterial({
            fragmentShader: GRID_BACKGROUND_FRAGMENT_SHADER,
            vertexShader: GRID_BACKGROUND_VERTEX_SHADER,

            uniforms: {
                resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                limits: { value: new THREE.Vector2(-GRID_LIMIT, GRID_LIMIT) },
                speed: { value: 2 },
                time: { value: 0 },
            },
        });
    };

    onWindowResize();

    const moveable = [];

    for (let i = 0; i <= GRID_DIVISION; i++) moveable.push(1, 1, 0, 0);

    grid_helper.geometry.setAttribute(
        "moveable",
        new THREE.BufferAttribute(new Uint8Array(moveable), 1),
    );

    const addListeners = () => {
        window.addEventListener("resize", onWindowResize);
    };

    const removeListeners = () => {
        window.removeEventListener("resize", onWindowResize);
    };

    const clock = new THREE.Clock();
    let time = 0;

    const render = () => {
        requestAnimationFrame(render);
        time += clock.getDelta();

        // @ts-expect-error | SAFETY: Completely valid field, TypeScript just can't validate that it is.
        grid_helper.material.uniforms.time.value = time;

        renderer.render(scene, camera);
    };

    scene.add(grid_helper);

    return {
        beginRendering: render,
        removeListeners,
        addListeners,
    };
};
