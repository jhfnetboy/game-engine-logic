import React  from "react";
import Typed from 'typed.js';

// interface property {str: string[]}
// const props
const str = [
    '`当你结束了一天疲惫的工作回到独居的家中，`<br/>`打开家门却意外地发现自己的爱犬 *DogName `<br/>`没有像往常一样晃着尾巴出现在门口迎接你。`<br/>`只见地上留了一张质地很古怪的便签：`<br/>很抱歉没办法提前告知，<br/>但哈迪斯大人要求我尽快将*DogName带回冥界。<br/>如您对此有任何意见，欢迎您拜访以下地址与哈迪斯大人当面沟通…… <br/>——塔纳托斯',
  ]
const TypedReactHooksDemo = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings : str,
      typeSpeed: 30,
      backSpeed: 0,
      cursorChar: '_',
    shuffle: true,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="wrap">
      <h1>What the hell?</h1>

      <div className="type-wrap">
        <span style={{ whiteSpace: 'pre' }} ref={el} />
      </div>

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