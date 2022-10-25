function App() {
    return (
        <div>
            <h1> Hello World! </h1>
        </div>
    )    
}

const domContainer = document.querySelector("#app_container");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));