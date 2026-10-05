import {ButtonMatrixSingleLambda} from "./ButtonMatrix.tsx";


export default function NumpadAndPriceField(){
    return(
        <div className="w-4/12">
            <div className="w-full flex justify-end">
                <span className="mr-5 mb-2 mt-2 text-3xl">test</span>
            </div>
            <div className="flex flex-row justify-center">
                <div className="ml-1 mb-1" >
                    <ButtonMatrixSingleLambda
                    buttonNames ={["1", "2", "3", "<-" ,"4", "5", "6","Del", "7", "8", "9", "Menge"]}
                    rowSize={4}
                    onClick={(event) => console.log(event.currentTarget.value)}
                    />
                </div>
            </div>

    </div>
    )
}