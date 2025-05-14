import React, { useState } from 'react';

function MouseEventComponent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: '300px', width: '300px', border: '1px solid black' }} onMouseMove={handleMouseMove}>
      <p>マウスの座標: x={position.x}, y={position.y}</p>
    </div>
  );
}

export default MouseEventComponent;