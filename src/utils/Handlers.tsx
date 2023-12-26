"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Cord, Cords, Win } from "@/types/handles";






const Handlers = ({ children }: { children: React.ReactNode }) => {

    let turn = useRef("x");

    const win = useRef<Win>({
        winner: null,
        isWin: false
    });

    const [points, setPoints] = useState({ player1: 0, player2: 0 })

    let cords: Cords = [
        [
            [1, 1, null], [1, 2, null], [1, 3, null]
        ],
        [
            [2, 1, null], [2, 2, null], [2, 3, null]
        ],
        [
            [3, 1, null], [3, 2, null], [3, 3, null]
        ],
    ]


    const handleBoxClick = (e: any, i: number) => {
        console.log("first")
        if (e.target.innerText == "" && !win.current.isWin) {

            e.target.innerText = turn.current;
            if (i < 3) {
                cords[0][i][2] = turn.current;
            }
            else if (i < 6) {
                cords[1][i - 3][2] = turn.current;
            }
            else if (i < 9) {
                cords[2][i - 6][2] = turn.current;
            }

            handleWinCheck();

            if (!win.current.isWin) {
                turn.current = turn.current == "x" ? "o" : "x"
            }
        }
    }

    const handleWinCheck = () => {

        for (let i = 0; i < 3; i++) {


            // for horizontal/col check
            if ((cords[i][0][2] == cords[i][1][2]) && (cords[i][1][2] == cords[i][2][2]) && (cords[i][2][2] !== null)) {
                win.current = ({ isWin: true, winner: turn.current })
                handleGlow(cords[i][0], cords[i][1], cords[i][2])
            }
            // for vertical/row check
            else if ((cords[0][i][2] == cords[1][i][2]) && (cords[1][i][2] == cords[2][i][2]) && (cords[2][i][2] !== null)) {
                win.current = ({ isWin: true, winner: turn.current })
                handleGlow(cords[0][i], cords[1][i], cords[2][i])
            }
            // for diagonal 1:
            else if ((cords[0][0][2] == cords[1][1][2]) && (cords[1][1][2] == cords[2][2][2]) && (cords[2][2][2] !== null)) {
                win.current = ({ isWin: true, winner: turn.current })
                handleGlow(cords[0][0], cords[1][1], cords[2][2])
            }
            // for diagonal 2:
            else if ((cords[0][2][2] == cords[1][1][2]) && (cords[1][1][2] == cords[2][0][2]) && (cords[2][0][2] !== null)) {
                win.current = ({ isWin: true, winner: turn.current })
                handleGlow(cords[0][2], cords[1][1], cords[2][0])
            }
            else if (!cords.flat(Infinity).includes(null) && win.current.isWin != true) {
                win.current = ({ isWin: "tie", winner: null })
            }

        }

        // displaying winner
        const msgBox = document.getElementById("msg-box");

        if (win.current.isWin == true) {
            msgBox && (msgBox.innerText = `Player "${String(win.current.winner).toUpperCase()}" has won the match !!`);
            msgBox && (msgBox.style.display = "block");

            const playersPoints = Array.from(document.getElementsByClassName("player-points"));


            playersPoints[win.current.winner == "x" ? 0 : 1].innerHTML = String(Number(playersPoints[win.current.winner == "x" ? 0 : 1].innerHTML) + 1);

        }
        else if (win.current.isWin == "tie") {
            msgBox && (msgBox.innerText = `Well Played!! the Match has gone TIE !!`);
            msgBox && (msgBox.style.display = "block");
        }
        if (win.current.isWin !== false) {
            const refBtn = document.getElementById("ref-btn");
            refBtn && (refBtn.style.display = "block")
        }

    }

    const getBoxByCord = (cord: Cord) => {
        const rows = Array.from(document.getElementsByClassName("row"));
        const elem = rows[cord[0] - 1].children[cord[1] - 1];
        return elem
    }

    const handleGlow = (first: Cord, second: Cord, third: Cord) => {
        const rows = Array.from(document.getElementsByClassName("row"));
        const firstElem = getBoxByCord(first);
        const secondElem = getBoxByCord(second);
        const thirdElem = getBoxByCord(third);
        firstElem.classList.add("glow");
        secondElem.classList.add("glow");
        thirdElem.classList.add("glow");
    }

    const handleReset = () => {
        cords = [
            [
                [1, 1, null], [1, 2, null], [1, 3, null]
            ],
            [
                [2, 1, null], [2, 2, null], [2, 3, null]
            ],
            [
                [3, 1, null], [3, 2, null], [3, 3, null]
            ],
        ];
        const boxes = document.getElementsByClassName("box");
        const glowingElems = Array.from(document.getElementsByClassName("glow"));
        const msgBox = document.getElementById("msg-box");
        const refBtn = document.getElementById("ref-btn");
        win.current.isWin = false;
        win.current.winner = null;
        Array.from(boxes).forEach((box) => {
            box.innerHTML = ""
        })
        glowingElems.forEach((elem) => {
            elem.classList.remove("glow")
        })
        msgBox && (msgBox.style.display = "none");
        refBtn && (refBtn.style.display = "none");

    }

    // init
    useEffect(() => {
        const boxes = document.getElementsByClassName("box");
        const refBtn = document.getElementById("ref-btn");
        Array.from(boxes).forEach((box, i) => {
            if (win.current.isWin) {
                box.removeEventListener("click", (e) => {
                    handleBoxClick(e, i);
                });
            } else {
                box.addEventListener("click", (e) => {
                    handleBoxClick(e, i);
                });
            }

        });
        refBtn && (refBtn.addEventListener("click", handleReset))
    }, [])






    return (
        <>
            {
                children
            }
        </>
    )
}





export default Handlers
