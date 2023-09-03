import { useRef, useEffect } from "react";

const useOutsideClick = (callback: () => void) => {
   const ref = useRef<HTMLElement>(null);

   useEffect(() => {
      const handleClick = (event: MouseEvent) => {
         if (
            event.target instanceof HTMLElement &&
            ref.current &&
            !ref.current.contains(event?.target)
         ) {
            callback();
         }
      };

      document.addEventListener('click', handleClick);

      return () => {
         document.removeEventListener('click', handleClick);
      };
   }, [callback, ref]);

   return ref;
};

export default useOutsideClick;