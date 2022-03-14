import "./App.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Components/Theme/useDarkMode"
import { GlobalStyles } from "./Components/Theme/GlobalStyles"
import { lightTheme, darkTheme } from "./Components/Theme/Themes"
import Toggle from "./Components/Theme/Toggler"
import { Home } from "./Components/Home/Home";
import { PlayGame } from "./Components/PlayGame/PlayGame";
import { SetupGame } from "./Components/SetupGame/SetupGame";
import { Stats } from "./Components/Stats/Stats";

export interface Player {
    name: string;
    order: number;
}

export interface CurrentGame {
    players: Player[];
    start: string;
}

export interface gameResult {
    start: string;
    end: string;
    winner: string;
    opponents: Player[];
    skunk?: boolean;
    dblSkunk?: boolean;
    skunked?: boolean;
    dblSkunked?: boolean;
    highHand: number;
    highPegg: number;
}

const game1: gameResult = {
    start: "2022-02-14T15:14:30",
    end: "2022-02-14T15:20:00",
    winner: "Me",
    opponents: [{ name: "Dad", order: 2 }],
    skunk: true
    , highHand: 16
    , highPegg: 12
}

const game2: gameResult = {
    start: "2022-02-14T21:00:30"
    , end: "2022-02-14T21:30:30"
    , winner: "Dad"
    , opponents: [{ name: "William", order: 1 }]
    , dblSkunked: true
    , highHand: 6
    , highPegg: 4
}

const game3: gameResult = {
    start: "2022-02-14T22:00:30"
    , end: "2022-02-14T22:30:30"
    , winner: "Me"
    , opponents: [{ name: "Michael", order: 1 }]
    , dblSkunk: true
    , highHand: 24
    , highPegg: 5
}

const game4: gameResult = {
    start: "2022-02-15T22:00:30"
    , end: "2022-02-15T22:30:30"
    , winner: "Me"
    , opponents: [{ name: "Dad", order: 1 }]
    , highHand: 16
    , highPegg: 3
}

const game5: gameResult = {
    start: "2022-02-15T22:00:30"
    , end: "2022-02-15T22:30:30"
    , winner: "Mary"
    , opponents: [{ name: "Mary", order: 1 }]
    , highHand: 16
    , skunked: true
    , highPegg: 12
}

let gameResults = [
    game1
    , game2
    , game3
    , game4
    , game5
]

const getUniquePlayers = (results: gameResult[]) => (
    [... new Set(results.flatMap(x => x.opponents.map(y => y.name)))]
)



const App = () => {
    const [currentGame, setCurrentGame] = useState<CurrentGame>({
        players: []
        , start: ""
    })
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <div className="toggle__btn-container">
                <Toggle theme={theme} toggleTheme={themeToggler} />
            </div>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="setup" element={
                        <SetupGame
                            getUniquePlayers={getUniquePlayers(gameResults)}
                            setCurrentGame={setCurrentGame}
                        />
                    } />
                    <Route path="play" element={<PlayGame
                            currentGame={currentGame}
                     />} />
                    <Route path="stats" element={
                        <Stats
                            gameResults={gameResults}
                        />
                    } />
                </Routes>
            </main>
        </ThemeProvider>
    );
}

export default App;
