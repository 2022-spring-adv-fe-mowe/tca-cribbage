import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../App";

export const PlayGame = ({ 
    addGameResult,
    currentGame
}) => {

    const nav = useNavigate();
    // Error message state handler
    const [message, setMessage] = useState({ type: "", msg: "", show: false });

    const { players, start } = currentGame;
    const [cut, setCut] = useState(false);
    const [isCrib, setIsCrib] = useState(false);
    const [opponents, setOpponents] = useState({ name: "", order: 0 });

    const [pegged, setPegged] = useState(0);
    const [hand, setHand] = useState(0);
    const [crib, setCrib] = useState(0);
    const [highPegg, setHighPegg] = useState(0);
    const [highHand, setHighHand] = useState(0);
    const [highCrib, setHighCrib] = useState(0);
    const [score, setScore] = useState(0);

    const [endGame, setEndGame] = useState(false);
    const [winner, setWinner] = useState("");
    const [skunk, setSkunk] = useState(false);
    const [dblSkunk, setDblSkunk] = useState(false);
    const [skunked, setSkunked] = useState(false);
    const [dblSkunked, setDblSkunked] = useState(false);
    const [won, setWon] = useState(false);
    const [over, setOver] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [pegging, setPegging] = useState(true);

    let [pegs, setPegs] = useState(0);

    const increment = () => {
        pegs += 1;
        setPegs(pegs);
    }

    const decrement = () => {
        pegs -= 1;
        setPegs(pegs);
    }

    const orderPlayers = (player: string) => {
        setCut(true);
        player === User ? setIsCrib(true) : setIsCrib(false);
        const opponent = players.find(x => x.name !== User);
        setOpponents(opponent);
    }

    const hideMsg = () => {
        setTimeout(() => {
            setMessage({ type: "", msg: "", show: false });
        }, 2500)
    };

    const scoreIsValid = (type, num) => {
        if (num === 19 || num >= 30 || num < 0) {
            setMessage({ type: "danger", msg: "Invalid score entered.", show: true });
            hideMsg();
        } else {
            switch(type) {
                case "crib":
                    setCrib(num);
                    break;
                default:
                    setHand(num)
                    break;
            }
        }
    }

    const countHand = () => {
        setPegged(pegs);
        setPegging(false);
    }

    const nextTurn = () => {
        if (isCrib) {
            const s = score + pegged + hand + crib;
            setScore(s);
            if (pegged > highPegg) setHighPegg(pegged)
            if (hand > highHand) setHighHand(hand);
            if (crib > highCrib) setHighCrib(crib);

            // Reset state values
            setPegs(0);
            setPegged(0)
            setHand(0);
            setCrib(0);
            setIsCrib(false);
            setPegging(true);

        } else {
            const s = score + pegged + hand;
            setScore(s);
            if (pegged > highPegg) setHighPegg(pegged)
            if (hand > highHand) setHighHand(hand);

            // Reset state values
            setPegs(0);
            setPegged(0)
            setHand(0);
            setIsCrib(true);
            setPegging(true);
        }
    }

    const lastTurn = () => {
        setPegged(pegs);
        if (isCrib) {
            const s = score + pegged + hand + crib;
            setScore(s);
            if (pegged > highPegg) setHighPegg(pegged)
            if (hand > highHand) setHighHand(hand);
            if (crib > highCrib) setHighCrib(crib);
            setEndGame(true);
        } else {
            const s = score + pegged + hand;
            setScore(s);
            if (pegged > highPegg) setHighPegg(pegged)
            if (hand > highHand) setHighHand(hand);
            setEndGame(true);
        }
    };

    const selectWinner = (player: string) => {
        setWinner(player);
        player === User ? setWon(true) : setWon(false);
        setOver(true);
    }

    const finishGame = (name: string) => {

        addGameResult({
            start: start,
            end: (new Date()).toISOString(),
            winner: name,
            players: players,
            skunk: skunk,
            dblSkunk: dblSkunk,
            skunked: skunked,
            dblSkunked: dblSkunked,
            highPegg: highPegg,
            highHand: highHand,
            highCrib: highCrib
        })

        nav(-2);
    }

    return (
        <>
            <div className={`players-container-overlay ${!cut ? "open" : ""}`}></div>
            <div className={`players-container ${!cut ? "open" : ""}`}>
                <h2 className="text-center my-2">Who Won the Cut?</h2>
                {
                    players.map(x => (
                        <button
                            key={x.name} id={x.name}
                            className="btn btn-success mb-2"
                            onClick={() => orderPlayers(x.name)}
                        >
                            {x.name}
                        </button>
                    ))
                }
            </div>
            {message.show && (<div className={`alert alert-${message.type}`}>{message.msg}</div>)}
            <div className="container container-play">
                <h1 className="text-center my-2">Play Game</h1>
                <p className="text-center">Opponent: {opponents.name}</p>
                <p className="text-center">Score: {score}</p>
                {/* <p className="text-center">High Hand: {highHand}</p>
                <p className="text-center">High Crib: {highCrib}</p>
                <p className="text-center">Winner: {winner}</p>
                <p className="text-center">skunk: {skunk}</p> */}
                
                {!endGame && (
                    <>
                        {
                            pegging && (
                                <>
                                    <div className="container-points">
                                        <div className="form-control number">
                                            <span className="minus" onClick={() => decrement()}><i className="fa-solid fa-minus"></i></span>
                                            <input type="number" value={pegs} placeholder="Peg Points" onChange={e => setPegged(+e.target.value)} />
                                            <span className="plus" onClick={() => increment()}><i className="fa-solid fa-plus"></i></span>
                                        </div>
                                    </div>
                                    <button className="btn btn-info mt-2" onClick={countHand}>
                                        Count Hand/Crib
                                    </button>
                                </>
                            )
                        }
                        {
                            !pegging && (
                                <>
                                    <div className="container-points">
                                        <div className="form-control">
                                            <input id="points-hand" type="number" value={hand} required onChange={e => scoreIsValid("hand", +e.target.value)} />
                                            <label><span>Hand Points</span></label>
                                        </div>

                                        {isCrib && (
                                            <div id="crib" className="form-control">
                                                <input id="points-crib" type="number" value={crib} required onChange={e => scoreIsValid("crib", +e.target.value)} />
                                                <label><span>Crib Points</span></label>
                                            </div>
                                        )}
                                    </div>
                                    <button className="btn btn-info mt-2" onClick={nextTurn}>
                                        Next Turn <i className="fa-solid fa-circle-chevron-right"></i>
                                    </button>
                                </>
                            )
                        }
                        <button className="btn btn-success mt-2" onClick={lastTurn}>
                            End Game <i className="fa-solid fa-circle-stop"></i>
                        </button>
                    </>
                )}

                {endGame && (
                    <>
                        <h2 className="text-center mb-2">Who Won?</h2>
                        {
                            players.map(x => (
                                <button
                                    key={x.name} id={x.name}
                                    className="btn btn-info mb-2"
                                    onClick={() => selectWinner(x.name)}
                                >
                                    {x.name}
                                </button>
                            ))
                        }

                        {over && (
                            <>
                                {won && (
                                    <>
                                        <h2 className="text-center">YOU WON! 🏆</h2>
                                        <p className="text-center my-2">Did you skunk your opponent?</p>
                                        <ul className="form-check-control">
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="skunk"
                                                        onChange={() => {
                                                            skunk || dblSkunk ? setSkunk(false) : setSkunk(false);
                                                            setGameOver(true);
                                                        }}
                                                    />
                                                    No
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="skunk"
                                                        onChange={() => {
                                                            !skunk ? setSkunk(true) : setSkunk(false);
                                                            setGameOver(true);
                                                        }}
                                                    />
                                                    Skunk
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="skunk"
                                                        onChange={() => {
                                                            !dblSkunk ? setDblSkunk(true) : setDblSkunk(false);
                                                            setGameOver(true);
                                                        }}
                                                    />
                                                    Double Skunk
                                                </label>
                                            </li>
                                        </ul>
                                    </>
                                )}

                                {!won && (
                                    <>
                                        <h2 className="text-center">You lost. 😢</h2>
                                        <p className="text-center my-2">Were you skunked?</p>
                                        <ul className="form-check-control">
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="skunked"
                                                        onChange={() => {
                                                            skunked || dblSkunked ? setSkunked(false) : setSkunked(false);
                                                            setGameOver(true);
                                                        }}
                                                    />
                                                    No
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="skunked"
                                                        onChange={() => {
                                                            !skunked ? setSkunked(true) : setSkunked(false);
                                                            setGameOver(true);
                                                        }}
                                                    />
                                                    Skunked
                                                </label>
                                            </li>
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="skunked"
                                                        onChange={() => {
                                                            !dblSkunked ? setDblSkunked(true) : setDblSkunked(true);
                                                            setGameOver(true);
                                                        }}
                                                    />
                                                    Double Skunked
                                                </label>
                                            </li>
                                        </ul>
                                    </>
                                )}
                            </>
                        )}

                        {
                            gameOver && (
                                <button className="btn btn-success mt-2" onClick={() => finishGame(winner)}>
                                    Done <i className="fa-solid fa-circle-stop"></i>
                                </button>
                            )
                        }

                    </>
                )}
            </div>
        </>
    );
};
