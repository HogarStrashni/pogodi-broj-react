import React from "react";

const InputForm = ({
   number,
   setNumber,
   submitHandler,
   playAgain,
   objectState,
}) => {
   return (
      <section>
         <form style={objectState.hiddenButtonInput} onSubmit={submitHandler}>
            <label htmlFor="input-form">Unesite broj:</label>
            <input
               autoFocus
               type="text"
               id="input-form"
               placeholder="Broj je..."
               required
               value={number}
               onChange={(event) => {
                  setNumber(event.target.value);
               }}
            />
            <button id="btn-one" type="submit">
               PROVERI
            </button>
         </form>
         <form onSubmit={playAgain}>
            <button style={objectState.hiddenButton} id="btn-two" type="submit">
               IGRAJMO SE OPET
            </button>
         </form>
      </section>
   );
};

export default InputForm;
