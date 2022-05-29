import React from "react";

const PreviousNums = ({ numberArray }) => {
   const previousNumbers = [...numberArray].join(", ");
   const previousCounter = numberArray.length;

   return (
      <section>
         <p>
            {previousNumbers
               ? `Prethodni pokušaji su (${previousCounter}) : ${previousNumbers}`
               : "Birajte pažljivo :)"}
         </p>
      </section>
   );
};

export default PreviousNums;
