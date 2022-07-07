import Home from "./components/Home";

function App() {

    const AppStyles = {
        width:'100%',
        height:'100vh',
    }

    return (
            <div className="App" style={AppStyles}>
                <Home />
            </div>
    );
}

export default App;
