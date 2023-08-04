// import React, { useRef, useEffect, MutableRefObject, MouseEventHandler, useCallback } from "react";

// /**
//  * Hook that alerts clicks outside of the passed ref
//  */
// export default function useOutsideAlerter(ref: MutableRefObject<null>, onClick: () => void) {
//   /**
//  * Alert if clicked on outside of element
//  */
//   // function handleClickOutside(event: MouseEvent) {
//   //   console.log('event', event)
//   //   if (ref.current) {
//   //     console.log('event', event)
//   //     onClick();
//   //   }
//   // }

//   const handleClickOutside1 = 

//   useEffect(() => {
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [handleClickOutside]);

//   return {
//     handleClickOutside
//   }
// }
