import {ButtonMatrixSingleLambda} from "./ButtonMatrix.tsx";
import {Button} from "./ui/button.tsx";
import {type Dispatch, type SetStateAction, useState} from "react";

export default function NumpadAndPriceField(){
    const [input, setInput] = useState("0")

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

function inputEventHandle(newChar:string, setInput:Dispatch<SetStateAction<string>>) {
    switch (newChar){
        case "00":
            addchar(setInput,newChar)
            break;
        case "Menge":
            console.log(newChar)
            //handler für product window
            break;

        case "<-":
            setInput(prevState => {
                if(prevState != "0"){
                    return prevState.slice(0, -1)
                }
                return "0";
            })

            break;

        case "Del":
            setInput("0")
            break;
        default:
            if(/^[0-9]$/.test(newChar)){
                addchar(setInput,newChar)
            }
            else {
                console.warn("Unknown input: ",newChar)
            }
            break;
    }

}

function addChar(setInput:Dispatch<SetStateAction<string>>, newChar:string){

    setInput(prevState => {
        if(prevState == "0"){
            return newChar;
        }
        else {
            return prevState + newChar;
        }
    })
}