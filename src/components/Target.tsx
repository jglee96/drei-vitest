import { useState } from "react";

export default function Target() {
  const [hovered, hover] = useState(false);
  return (
    <mesh onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
