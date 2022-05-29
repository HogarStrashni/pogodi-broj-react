import React from "react";

const FootPart = ({ objectState }) => {
   return (
      <section style={objectState.colorText}>
         <p>{objectState.footText}</p>
      </section>
   );
};

export default FootPart;
