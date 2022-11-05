// 1 Komponent ma wyswietlic cyfre 0
// 2 Komponent ma wyświetlic cyfrę 0 ale źródłem tej cyfry ma byc stan
// 3 Komponent ma wyśwuetlić button oprócz cyfry
// 4 gdy klinkniemy button cyfra w stanie ma zwiekszyc sie o 1
// a) zdefiniuj funkcję która zmienia stan
// b) gdy kliknę na button, alert "działa"
// c) wypełniam założenia pkt. 4

import React, { useState } from "react";
const ClickCounter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  return <button onClick={increaseCount}>You clicked me {count} times</button>;
};
export default ClickCounter;
