const Floor = () => {
  return (
    <mesh rotation={[0, 0, 0]} position={[0, 0, 0]}>
      <planeBufferGeometry args={[100, 100, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Floor