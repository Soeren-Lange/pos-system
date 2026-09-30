import ButtonMatrix from "./ButtonMatrix.tsx";


export default function NumpadAndPriceField(){
    return(
        <div className="w-4/12">
        <div className="w-full flex justify-end">
            <text className="mr-3 mb-2 mt-2 text-3xl">text</text>
        </div>
        <div className="flex flex-row">
            <div className="w-3/4 ml-1 mb-1" >
                <ButtonMatrix
                    buttonNames ={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
                    rowSize={3}
                    onClicks={[
                        () => console.log("Button 1 wurde geklickt!"),
                        () => alert("Du hast auf die 2 gedrückt!"),
                        () => alert("Button 3 sagt Hallo!"),
                        () => console.log("Button 4 aktiv"),
                        () => console.log("Button 1 wurde geklickt!"),
                        () => alert("Du hast auf die 2 gedrückt!"),
                        () => alert("Button 3 sagt Hallo!"),
                        () => console.log("Button 4 aktiv"),
                        () => console.log("Button 4 aktiv"),
                    ]}
                />
            </div>

            <div className="w-1/4 ml-1 mb-1" >
                <ButtonMatrix
                    buttonNames={["0","00","Menge"]}
                    rowSize={1}
                    onClicks={[
                        () => console.log("Button 1 wurde geklickt!"),
                        () => alert("Du hast auf die 2 gedrückt!"),
                    ]}
                />
            </div>
        </div>
    </div>
    )
}