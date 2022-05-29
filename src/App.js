import React, { useState } from "react";
import HeadPart from "./components/HeadPart";
import Counters from "./components/Counters";
import InputForm from "./components/InputForm";
import PreviousNums from "./components/PreviousNums";
import FootPart from "./components/FootPart";

function App() {
   //initialize magic number to start state
   const [thatNumber, setThatNumber] = useState(
      Math.floor(Math.random() * 100 + 1)
   );

   // states
   const [number, setNumber] = useState("");
   const [numberArray, setNumberArray] = useState([]);
   const [countDown, setCountDown] = useState(10);
   const [countUp, setCountUp] = useState(1);
   const [objectState, setObjectState] = useState({
      headerText: "POGODI BROJ",
      countDownText: `Cilj je pogoditi zadani broj iz maksimalno ${countDown} pokušaja.`,
      countUpText: "Unesite broj (prvi pokušaj):",
      footText: "Broj je spreman!",
      hiddenButton: { display: "none" },
      hiddenButtonInput: { display: "" },
      colorApp: { background: "darkseagreen" },
      colorText: { background: "darkseagreen" },
   });

   //states do not work with if stetments and loops
   const substractedNumbers = number - thatNumber;

   let conditionText;
   substractedNumbers > 0
      ? (conditionText = "Nažalost niste pogodili! Pokušajte sa MANJIM brojem!")
      : (conditionText = "Nažalost niste pogodili! Pokušajte sa VEĆIM brojem!");

   const playGame = () => {
      setNumberArray([...numberArray, Number(number)]);
      setCountDown((num) => num - 1);
      setCountUp((num) => num + 1);
      setObjectState({
         ...objectState,
         countDownText: `Preostalo Vam je još ${countDown - 1} pokušaja.`,
         countUpText: `Unesite novi broj! (Pokušaj: ${countUp + 1})`,
         footText: conditionText,
         colorText: { background: "red" },
      });
   };

   const playAgain = (event) => {
      event.preventDefault();
      window.location.reload();
   };

   const gameWin = () => {
      setObjectState({
         ...objectState,
         headerText: "POGODILI STE BROJ",
         countDownText: `Imali ste još ${countDown - 1} pokušaja.`,
         countUpText: `Bravo! Traženi broj je: ${thatNumber}`,
         footText: "ČESTITAMO!!! VI STE GENIJALAC",
         hiddenButton: { display: "" },
         hiddenButtonInput: { display: "none" },
         colorApp: { background: "green" },
         colorText: { background: "green" },
      });
   };

   const gameLose = () => {
      setObjectState({
         ...objectState,
         headerText: "NISTE POGODILI BROJ",
         countDownText: "Iskoristili ste sve pokušaje.",
         countUpText: `Traženi broj je bio: ${thatNumber}`,
         footText: "Nažalost, niste pogodili broj! POKUŠAJTE OPET!",
         hiddenButton: { display: "" },
         hiddenButtonInput: { display: "none" },
         colorApp: { background: "red" },
      });
   };

   const gameOver = () => {
      substractedNumbers === 0 ? gameWin() : gameLose();
   };

   const submitHandler = (event) => {
      event.preventDefault();
      setThatNumber(thatNumber); // condition for the magic number not change

      number > 0 && number <= 100
         ? substractedNumbers !== 0 && countDown > 1
            ? playGame()
            : gameOver()
         : alert("Unesite prirodni broj između 1 i 100");

      setNumber(""); // deleting value and return autoFocus
   };

   return (
      <main style={objectState.colorApp} className="App">
         <HeadPart objectState={objectState} />
         <Counters objectState={objectState} />
         <InputForm
            number={number}
            setNumber={setNumber}
            submitHandler={submitHandler}
            playAgain={playAgain}
            objectState={objectState}
         />
         {/* On the other way PreviousNums (practice) */}
         <PreviousNums numberArray={numberArray} />
         <FootPart objectState={objectState} />
      </main>
   );
}

export default App;
