import React from "react";

const HeadPart = ({ objectState }) => {
   return (
      <section>
         <h1>{objectState.headerText}</h1>
         <p>Ovo je igrica pogađanja prirodnog broja između 1 i 100.</p>
      </section>
   );
};

export default HeadPart;
