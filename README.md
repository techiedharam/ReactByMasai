# ReactByMasai
<!-- Bilore Plate  -->
<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Intro</title>
    <style>
        button {
            width: 100px;
            height: 50px;
            background-color: red;
        }
    </style>
</head>

<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@18.2.0/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel"> // Step 2 : Script type should be text/babel; 
    // const stateArray = 
    
    const App = () => {
        const [count, setCount] = React.useState(0);
        const increment = () => {
             setCount(count + 1);
        }
        const decrement = () => {
             setCount(count - 1);
        }
        console.log(count)
        return (
                <div>
                    <h1>{count}</h1>
                    <button onClick = {increment}>Increament</button>
                    <button onClick = {decrement}>decrement</button>
                    <h1>React State Example</h1>
                </div>
            );
        };
        const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
        reactRoot.render(<App />);
    </script>
</body>

</html> -->