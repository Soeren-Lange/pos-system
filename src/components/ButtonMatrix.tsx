import { Button } from "./ui/button.tsx";

export default function ButtonMatrix({
                                         numpadKeys,
                                         rowSize,
                                         onClicks
                                     }: {
    numpadKeys: number[];
    rowSize: number;
    onClicks: (() => void)[];
}) {
    return (
        <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `repeat(${rowSize}, minmax(0, 1fr))` }}
        >
            {numpadKeys.map((value, index) => (
                <Button key={value} size="lg" onClick={onClicks[index]}>
                    {value}
                </Button>
            ))}
        </div>
    );
}