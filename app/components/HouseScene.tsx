"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

type Variant = "glass" | "stone" | "cabin";

const PALETTE = {
  ink: 0x0e2a21,
  inkDeep: 0x081b15,
  brass: 0xb0904f,
  brassBright: 0xd4b06a,
  paper: 0xf4eee0,
  glass: 0x9fc4b8,
  stone: 0xcbbfa4,
  wood: 0x6b4a34,
  roofDark: 0x3a2a20,
  ground: 0xe9e0cd,
};

/** A symmetric gable/A-frame prism: two roof planes meeting at a ridge. */
function gableGeometry(width: number, height: number, depth: number) {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, 0);
  shape.lineTo(0, height);
  shape.lineTo(width / 2, 0);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: false,
    curveSegments: 1,
  });
  geometry.translate(0, 0, -depth / 2);
  return geometry;
}

function buildHouse(variant: Variant): THREE.Group {
  const group = new THREE.Group();

  const groundMat = new THREE.MeshStandardMaterial({
    color: PALETTE.ground,
    roughness: 1,
    metalness: 0,
  });
  const ground = new THREE.Mesh(new THREE.CircleGeometry(2.6, 48), groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.01;
  group.add(ground);

  if (variant === "glass") {
    const wallMat = new THREE.MeshPhysicalMaterial({
      color: PALETTE.glass,
      transparent: true,
      opacity: 0.4,
      roughness: 0.05,
      metalness: 0,
      transmission: 0.4,
      thickness: 0.3,
    });
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.9, 1.1), wallMat);
    body.position.y = 0.45;
    group.add(body);

    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(body.geometry),
      new THREE.LineBasicMaterial({ color: PALETTE.brass })
    );
    edges.position.copy(body.position);
    group.add(edges);

    const roofMat = new THREE.MeshStandardMaterial({
      color: PALETTE.inkDeep,
      roughness: 0.6,
    });
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.06, 1.35), roofMat);
    roof.position.y = 0.93;
    group.add(roof);

    const poolMat = new THREE.MeshStandardMaterial({
      color: PALETTE.ink,
      roughness: 0.15,
      metalness: 0.1,
    });
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1), poolMat);
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(0, 0.005, 1.15);
    group.add(pool);
  }

  if (variant === "stone") {
    const wallMat = new THREE.MeshStandardMaterial({
      color: PALETTE.stone,
      roughness: 0.95,
    });
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.85, 1.2), wallMat);
    body.position.y = 0.425;
    group.add(body);

    const roofMat = new THREE.MeshStandardMaterial({
      color: PALETTE.roofDark,
      roughness: 0.85,
    });
    const roof = new THREE.Mesh(gableGeometry(2.05, 0.75, 1.35), roofMat);
    roof.rotation.y = Math.PI / 2;
    roof.position.y = 0.85;
    group.add(roof);

    const chimneyMat = new THREE.MeshStandardMaterial({
      color: PALETTE.roofDark,
      roughness: 0.9,
    });
    const chimney = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.55, 0.18), chimneyMat);
    chimney.position.set(0.55, 1.35, 0.2);
    group.add(chimney);

    const dockMat = new THREE.MeshStandardMaterial({
      color: PALETTE.wood,
      roughness: 0.8,
    });
    const dock = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.05, 1.6), dockMat);
    dock.position.set(0, 0.025, 1.5);
    group.add(dock);
  }

  if (variant === "cabin") {
    const frameMat = new THREE.MeshStandardMaterial({
      color: PALETTE.wood,
      roughness: 0.8,
    });
    const frame = new THREE.Mesh(gableGeometry(1.9, 1.5, 1.3), frameMat);
    frame.rotation.y = Math.PI / 2;
    frame.position.y = 0;
    group.add(frame);

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: PALETTE.glass,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      transmission: 0.3,
    });
    const window_ = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.75), glassMat);
    window_.position.set(0, 0.55, 0.651);
    group.add(window_);

    const deckMat = new THREE.MeshStandardMaterial({
      color: PALETTE.wood,
      roughness: 0.85,
    });
    const deck = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.05, 0.8), deckMat);
    deck.position.set(0, 0.025, 1.05);
    group.add(deck);
  }

  return group;
}

export function HouseScene({ variant }: { variant: Variant }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
    camera.position.set(2.6, 1.8, 3.1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x1a2b22, 0.9));
    const sun = new THREE.DirectionalLight(0xfff2df, 1.1);
    sun.position.set(3, 4, 2);
    scene.add(sun);

    const house = buildHouse(variant);
    scene.add(house);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.4, 0);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.35;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.autoRotate = !prefersReducedMotion;
    controls.autoRotateSpeed = 1.6;
    controls.update();

    function resize() {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    }
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    let frame = 0;
    let running = false;
    function tick() {
      controls.update();
      renderer.render(scene, camera);
      if (running) frame = requestAnimationFrame(tick);
    }
    function start() {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(frame);
    }

    // Only spend GPU/CPU cycles while the model is actually on screen.
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => (entry.isIntersecting ? start() : stop()));
      },
      { threshold: 0.1 }
    );
    visibilityObserver.observe(container);

    controls.addEventListener("change", () => {
      if (!running) renderer.render(scene, camera);
    });

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      controls.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments) {
          obj.geometry.dispose();
          const material = obj.material;
          if (Array.isArray(material)) material.forEach((m) => m.dispose());
          else material.dispose();
        }
      });
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Modelo tridimensional da residência, com rotação por arraste"
      style={{ width: "100%", height: "100%", touchAction: "pan-y" }}
    />
  );
}
