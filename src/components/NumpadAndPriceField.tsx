import {ButtonMatrixSingleLambda} from "./ButtonMatrix.tsx";
import {Button} from "./ui/button.tsx";
import {type Dispatch, type SetStateAction, useState} from "react";

export default function NumpadAndPriceField(){
    return(
        <div style={{width: 373.5}}>
            <div className="flex-row flex justify-end m-1">
                <span className="text-3xl justify-end">{input}</span>
            </div>
            <div className="flex flex-row">
                <div>
                    <ButtonMatrixSingleLambda
                    buttonNames ={["1", "2", "3", "<-" ,"4", "5", "6","Del"]}
                    rowSize={4}
                    onClick={(event) => inputEventHandle(event.currentTarget.value,setInput)}
                    />
                </div>
            </div>
            <div className="flex flex-row mt-1">
                <div>
                    <ButtonMatrixSingleLambda
                        buttonNames ={["7", "8", "9", "00", "0", "Menge"]}
                        rowSize={3}
                        onClick={(event) => inputEventHandle(event.currentTarget.value,setInput)}
                    />
                </div>
                <div className="ml-1">
                    <Button size="inputButton">Eingabe</Button>
                </div>
            </div>
        </div>
    )
}