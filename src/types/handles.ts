export type Cord = [
    number,
    number,
    null | string,
]

export type Cords = Cord[][]

export type Win = {
    isWin : boolean | "tie",
    winner : string | null,
}