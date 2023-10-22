import React, { useState } from 'react';
import './BoxA.css';
import logo2 from './logo2.png';

const BoxA = ({ size, children }) => {
  const [isPurple, setIsPurple] = useState(false);
  const [isTransformed, setTransformed] = useState(false);

  const handleButtonClick = () => {
    setTransformed(!isTransformed);
    setIsPurple(true);
  };

  return (
    <div>
      <div
        className={`box duration-1 ${isTransformed ? 'transformed-state' : ''} ${isPurple ? 'primary' : ''}`}
        style={{ width: size }}
      >
        <img src={logo2} alt="logo2" />
         Familjen Svensson Wåffleri 🍯 🥞 
   
      <button className="change" onClick={handleButtonClick}>
        {children}
      </button>
      </div>
    </div>
  );
};

export default BoxA;













// import React, { useState } from 'react';
// import './BoxA.css';

// const BoxA = ({ size, children }) => {
//   const [isPurple, setIsPurple] = useState(false);

//   const handleButtonClick = () => {
//     setIsPurple(true);
//   };

//   return (
//     <div>
//       <div className={`box ${isPurple ? 'primary' : ''}`} style={{ width: size }}>
//         {children}
//       </div>
//       <button id="change" onClick={handleButtonClick}>
//         Change
//       </button>
//     </div>
//   );
// };

// export default BoxA;














// import React, { useState } from 'react';
// import './BoxA.css';

// const BoxA = ({ size, children }) => {
//   const [isPurple, setIsPurple] = useState(false);

//   const handleButtonClick = () => {
//     setIsPurple(true);
//   };

//   return (
//     <div>
//       <div className={`box ${isPurple ? 'primary' : ''}`} style={{ width: size }}>
//         {children}
//       </div>
//       <button id="change" onClick={handleButtonClick}>
//         Change
//       </button>
//     </div>
//   );
// };

// export default BoxA;
 











// // import React, { useState } from 'react';
// // import "./BoxA.css";

// // const BoxA = ({ size, color, children }) => {
// //   const [isTransformed, setTransformed] = useState(false);

// //   const handleButtonClick = () => {
// //     setTransformed(!isTransformed);
// //   };

// //   return (
// //     <div>
// //       <div
// //         className={`box duration-1 ${isTransformed ? 'transformed-state' : ''}`}
// //         style={{ width: size, backgroundColor: color }}
// //       >
// //         0.5 seconds
// //       </div>
// //       <button id="change" onClick={handleButtonClick}>
// //         {children}
// //       </button>
// //     </div>
// //   );
// // };

// // export default BoxA;


