import React from "react";
import "./Profile.css"
// import Typewriter from "typewriter-effect";
import {Typewriter} from 'react-simple-typewriter';



const handleType = (count) => {
    // access word count number
    console.log(count);
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  }

const TypewritterAnimation = () => {
   
  return (
    // using type-writer packege
    // <div>
    //   <Typewriter
    //     options={{
    //       strings: [`<span id="type-writter">Software Engineer !</span>`],
    //       deleteChars: 18,
    //       autoStart: true,
    //       loop: true,
    //     }}
    //   />
    // </div>


    //OR:
    //using a simple type-writer packege
    <div className='App'>
      <p id="type-writter" style={{ textAlign:"left" }}>
        a {' '}
        <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Software Engineer !']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
            
          />
        </span>
      </p>
    </div>
  );
};

export default TypewritterAnimation;
