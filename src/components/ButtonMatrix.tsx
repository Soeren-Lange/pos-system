import { Button } from "./ui/button.tsx";


export default function ButtonMatrix({
                                         buttonNames,
                                         rowSize,
                                         onClicks
                                     }: {
    buttonNames: string[];
    rowSize: number;
    onClicks: (() => void)[];
}) {
    return (
        <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `repeat(${rowSize}, minmax(0, 1fr))` }}
        >
            {buttonNames.map((value, index) => (
                <Button key={value} size="tapButton" onClick={onClicks[index]}>
                    {value}
                </Button>
            ))}
        </div>
    );
}