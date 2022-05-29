import React from "react";

const Counters = ({ objectState }) => {
   return (
      <section>
         <p>{objectState.countDownText}</p>
         <p>{objectState.countUpText}</p>
      </section>
   );
};

export default Counters;
