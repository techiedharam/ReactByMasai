import React from 'react'
// Your task is to explain why the console.log shows the older value of count
// The console.log displays the older value of count because setCount 
// in React is asynchronous, and the state update is not immediately reflected. 
// When console.log is called, it logs the current state value, not the updated one.
//  To log the updated value, use the useEffect hook with [count] as a dependency, ensuring 
//  it runs after the component re-renders with the new state value.
// function App() {
//   const [count, setCount] = React.useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//     console.log(count);
//   };

//   return (
//     <div>
//       <p>Button is clicked {count} times</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App

// Your task is to explain why count value is not updated to 3 as expected
// The count value is not updated to 3 as expected because setCount in 
// React is asynchronous. When you call setCount multiple times in succession, 
// React batches the state updates but doesn't immediately apply them. 
// Therefore, the console.log(count) statement logs the current state value (0) 
// without waiting for the previous state updates to take effect. To see the updated value, 
// you should use the useEffect hook or place the console.log after the state updates are expected to be applied.
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
		console.log(count);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App

