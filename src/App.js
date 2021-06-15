import React, { useState } from 'react';
import './App.css';

// function App() {
//   const [subscribed, setSubscribed] = useState(false);
//   //const handleClick = (e) => console.log(e.target);
//   console.log("Subscribed status:", subscribed);
//   return (
//     <section>
//       <p>hey plz subscribe!</p>
//     <button onClick={() => setSubscribed(!subscribed)}>{
//     subscribed ? "not yet subscribed" : "Hello lovely world, i will subscribe"}</button>
//     </section>
//   );
// }

function App () {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>beautiful people: {count}</button>
    </div>  
  )
}

// function App() {
//   const [subscribed, setSubscribed] = useState(false);

//   return (
//     <section>
//       <p>Please click to subscribe to my updates!</p>
//       <button onClick={() => setSubscribed(true)}>{subscribed ? "Unsubscribe" : "Subscribe"}</button>
//     </section>
//   );
// }

// function App() {
//   const [subscribed, setSubscribed] = useState(false);
//   const [alerts, setAlerts] = useState(false);

//   return (
//     <section>
//       <p>Please click to subscribe to my updates!</p>
//       <button onClick={() => setSubscribed(!subscribed)}>
//         {subscribed ? "Unsubscribe" : "Subscribe"}
//       </button>
//       <button onClick={() => setAlerts(!alerts)}>
//         {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
//       </button>
//     </section>
//   );
// }

export default App;
