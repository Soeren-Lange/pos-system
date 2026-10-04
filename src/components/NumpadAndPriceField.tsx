import {ButtonMatrixSingleLambda} from "./ButtonMatrix.tsx";


export default function NumpadAndPriceField(){
    return(
        <div className="w-4/12">
        <div className="w-full flex justify-end">
            <span className="mr-3 mb-2 mt-2 text-3xl">"</span>
        </div>
        <div className="flex flex-row">
            <div className="w-3/4 ml-1 mb-1" >
                <ButtonMatrixSingleLambda
                    buttonNames ={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
                    rowSize={3}
                    onClick={() => console.log("hallo")}
                />
            </div>

            <div className="w-1/4 ml-1 mb-1" >
                <ButtonMatrixSingleLambda
                    buttonNames={["0","00","Menge"]}
                    rowSize={1}
                    onClick={() => console.log("Button 1 wurde geklickt!")}
                />
            </div>
        </div>
    </div>
    )
}