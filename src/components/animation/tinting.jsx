// import React, { useState, useEffect } from 'react';
// import { Stage, Sprite } from '@inlet/react-pixi';
// import * as PIXI from 'pixi.js';

// const PixiComponent = () => {
//   const [sprite, setSprite] = useState(null);

//   useEffect(() => {
//     if (sprite) {
//       const animation = new PIXI.Timeline();
//       animation.add({
//         time: 0,
//         values: {
//           tint: 0xff0000,
//         },
//       });
//       animation.add({
//         time: 1000,
//         values: {
//           tint: 0x00ff00,
//         },
//       });
//       animation.loop = true;
//       animation.play();
//     }
//   }, [sprite]);

//   return (
//     <Sprite
//       image="https://picsum.photos/200/300"
//       x={100}
//       y={100}
//       ref={(sprite) => setSprite(sprite)}
//     />
//   );
// };

// const App = () => {
//   return (
//     <Stage width={800} height={600}>
//       <PixiComponent />
//     </Stage>
//   );
// };
import { useState, useRef } from 'react';
import { Sprite, useTick } from 'react-pixi-fiber';

function MySprite() {
  const [color, setColor] = useState(0xffffff);
  const spriteRef = useRef(null);

  useTick(delta => {
    const newColor = (color + delta * 0x0000ff) % 0xffffff;
    setColor(newColor);
    if (spriteRef.current) {
      spriteRef.current.tint = newColor;
    }
  });

  return (
    <Sprite
      ref={spriteRef}
      image="./images/dog.jpg"
      x={100}
      y={100}
    />
  );
}