import GRID_BACKGROUND_FRAGMENT_SHADER from "$lib/shaders/grid_background.frag.glsl?raw";
import GRID_BACKGROUND_VERTEX_SHADER from "$lib/shaders/grid_background.vert.glsl?raw";
import * as THREE from "three";

const CATPPUCCIN_CRUST_MACCHIATO = 0x181926;
const CATPPUCCIN_BASE_MACCHIATO = 0x24273a;
const CATPPUCCIN_CRUST_LATTE = 0xdce0e8;
const CATPPUCCIN_BASE_LATTE = 0x4c4f69;

const GRID_DIVISION = 48;
const GRID_LIMIT = 48;

const MOVEABLE: number[] = [];
const LIGHT = false;

for (let i = 0; i <= GRID_DIVISION; i++) {
    MOVEABLE.push(1, 1, 0, 0);
}

export const useGridBackground = (element: HTMLCanvasElement) => {
    const renderer = new THREE.WebGLRenderer({ canvas: element, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    const camera = new THREE.PerspectiveCamera(40, undefined, 1, 10000);
    camera.position.set(0, 3, 10);
    camera.lookAt(0, 2, 0);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(LIGHT ? CATPPUCCIN_CRUST_LATTE : CATPPUCCIN_CRUST_MACCHIATO);

    const gridHelper = new THREE.GridHelper(
        GRID_LIMIT * 2,
        GRID_DIVISION,
        LIGHT ? CATPPUCCIN_BASE_LATTE : CATPPUCCIN_BASE_MACCHIATO,
        LIGHT ? CATPPUCCIN_BASE_LATTE : CATPPUCCIN_BASE_MACCHIATO,
    );

    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);

        // @ts-expect-error | SAFETY: Completely valid material, TypeScript just can't validate that it is.
        gridHelper.material = new THREE.ShaderMaterial({
            fragmentShader: GRID_BACKGROUND_FRAGMENT_SHADER,
            vertexShader: GRID_BACKGROUND_VERTEX_SHADER,

            uniforms: {
                resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                limits: { value: new THREE.Vector2(-GRID_LIMIT, GRID_LIMIT) },
                light: { value: LIGHT },
                speed: { value: 2 },
                time: { value: 0 },
            },
        });
    };

    window.addEventListener("resize", onWindowResize);
    onWindowResize();

    gridHelper.geometry.setAttribute(
        "moveable",
        new THREE.BufferAttribute(new Uint8Array(MOVEABLE), 1),
    );

    const clock = new THREE.Clock();
    let time = 0;

    const dispose = () => {
        window.removeEventListener("resize", onWindowResize);
        gridHelper.dispose();
        renderer.dispose();
    };

    const render = () => {
        requestAnimationFrame(render);
        time += clock.getDelta();

        // @ts-expect-error | SAFETY: Completely valid field, TypeScript just can't validate that it is.
        gridHelper.material.uniforms.time.value = time;

        renderer.render(scene, camera);
    };

    scene.add(gridHelper);

    return {
        dispose,
        render,
    };
};
