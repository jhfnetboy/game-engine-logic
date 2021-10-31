import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import useNetwork from '../hooks/useNetwork.ts';
import packageD from '../game-data/packageD.json';
import craft from '../game-data/craft.json';

// interface property {str: string[]}
// const props
const str = [
    '`当你结束了一天疲惫的工作回到独居的家中，`<br/>`打开家门却意外地发现自己的爱犬 *DogName `<br/>`没有像往常一样晃着尾巴出现在门口迎接你。`<br/>`只见地上留了一张质地很古怪的便签：`<br/>很抱歉没办法提前告知，<br/>但哈迪斯大人要求我尽快将*DogName带回冥界。<br/>如您对此有任何意见，欢迎您拜访以下地址与哈迪斯大人当面沟通…… <br/>——塔纳托斯^2000',
    'a. 我有一种不祥的预感，不然就算了？<br/>b. 我有计划了。赶紧准备一下就前往冥界。<br/>c. 什么鬼？立刻出发！'
  ]

const TypedReactHooksDemo = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);
    // const [fetchWalkerName] = useWalker({ web3 })
    const [lastPressedKey, setLastPressedKey] = useState()
    const [currentStr, setCurrentStr] = useState(str)

    const handleFetch = async () => {
        // fetchWalkerName(walkerID).then(setWalker).catch(showAppMsg)
      }
  React.useEffect(() => {
    const options = {
    // strings : getCurrentStr(),
    strings : str,
    typeSpeed: 30,
    backSpeed: 0,
    cursorChar: '_',
    fadeOut: true,
    shuffle: true,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      typed.current.destroy();
    }
  }, [])

  const HandleCurrentStr = ()=>{
    setCurrentStr()
  }

  function freshStr(newStr){
    const options = {
        // strings : getCurrentStr(),
        strings : newStr,
        typeSpeed: 30,
        backSpeed: 0,
        cursorChar: '_',
        fadeOut: true,
        shuffle: true,
        };
        
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        return typed.current
  }

  const handleKeyPress = (event) => {
    setLastPressedKey(event.key);
    switch ((event.key).toString()) {
        case "a":
            console.log("i am a touched")
            typed.current.destroy()
            typed.current = freshStr(["你选择了a","狗狗来了"])
            typed.current.reset()
            break;
        case "b":
            console.log("i am b touched")
            break;
        case "c":
            console.log("i am c touched")
            break;
        default :
            console.log("")                                      
    }  
  };
  
  function nextStr(){
      console.log(packageD.event_count)
      console.log(craft[0])
  }

  return (
    <div className="wrap">
      <h1>What the hell?</h1>

      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>
      {/* <button onClick={nextStr()}>get data</button><br /> */}
      <button onClick={() => typed.current.toggle()}>Toggle</button>
      <button onClick={() => typed.current.start()}>Start</button>
      <button onClick={() => typed.current.stop()}>Stop</button>
      <button onClick={() => typed.current.reset()}>Reset</button>
      <button onClick={() => typed.current.destroy()}>Destroy</button>
    </div>
  );
}
export default TypedReactHooksDemo;
// ReactDOM.render(
// 	<TypedReactHooksDemo />,
//   document.getElementById('react-root')
// );