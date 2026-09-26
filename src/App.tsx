
import './App.css'
import "./components/ButtonMatrix.tsx"
import ButtonMatrix from "./components/ButtonMatrix.tsx";


function App() {

  return (
    <>

    <div className="p-6">
        <ButtonMatrix
            numpadKeys={[1, 2, 3, 4]}
            rowSize={2}
            onClicks={[
                () => console.log("Button 1 wurde geklickt!"),
                () => alert("Du hast auf die 2 gedrückt!"),
                () => alert("Button 3 sagt Hallo!"),
                () => console.log("Button 4 aktiv"),
            ]}
        />
    </div>


    </>




  )

}

export default App;