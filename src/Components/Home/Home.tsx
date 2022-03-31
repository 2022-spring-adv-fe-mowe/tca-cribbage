import { useNavigate } from "react-router-dom";

const cardsIcon = () => {
    return (
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 463.644 463.644">
<path id="XMLID_1_" d="M463.164,146.031l-77.369,288.746c-1.677,6.26-7.362,10.4-13.556,10.401c-1.198,0-2.414-0.155-3.625-0.479
	l-189.261-50.712c-7.472-2.003-11.922-9.711-9.919-17.183l2.041-7.616c1.287-4.801,6.222-7.647,11.023-6.363
	c4.801,1.287,7.65,6.222,6.363,11.023l-1.013,3.78l181.587,48.656l75.314-281.076l-77.031-20.64
	c-4.801-1.287-7.651-6.222-6.364-11.023s6.225-7.648,11.022-6.364l80.869,21.668C460.718,130.853,465.167,138.56,463.164,146.031z
	 M166.128,56.029c-4.971,0-9,4.029-9,9v8.565c0,4.971,4.029,9,9,9s9-4.029,9-9v-8.565C175.128,60.058,171.099,56.029,166.128,56.029
	z M280.889,176.762c2.202,3.114,2.202,7.278,0,10.393l-41.716,58.996c-1.687,2.385-4.427,3.804-7.349,3.804
	c-2.921,0-5.662-1.418-7.348-3.804l-41.718-58.996c-2.202-3.114-2.202-7.278,0-10.393l41.718-58.996
	c1.687-2.385,4.427-3.804,7.348-3.804c2.922,0,5.662,1.418,7.349,3.804L280.889,176.762z M262.518,181.958l-30.694-43.408
	l-30.694,43.408l30.694,43.407L262.518,181.958z M343.016,380.764l-2.216,8.273c-1.286,4.801,1.563,9.736,6.365,11.022
	c0.78,0.209,1.563,0.309,2.334,0.309c3.974,0,7.611-2.653,8.688-6.674l2.216-8.273c1.286-4.801-1.563-9.736-6.365-11.022
	C349.237,373.111,344.302,375.963,343.016,380.764z M112.375,215.913c2.577-0.69,5.056-1.089,7.454-1.195V32.492
	c0-7.736,6.293-14.029,14.028-14.029h195.935c7.736,0,14.03,6.293,14.03,14.029v182.225c2.396,0.106,4.875,0.505,7.45,1.195
	c16.511,4.424,26.346,21.457,21.922,37.968c-4.28,15.974-17.951,28.108-29.372,36.404v41.139c0,7.736-6.294,14.03-14.03,14.03
	H133.857c-7.735,0-14.028-6.294-14.028-14.03v-41.137c-11.422-8.295-25.093-20.428-29.376-36.405
	c-2.143-7.996-1.042-16.35,3.1-23.523C97.695,223.186,104.38,218.055,112.375,215.913z M343.821,267.05
	c6.531-6.172,10.424-12,11.985-17.828c1.855-6.924-2.27-14.067-9.194-15.923c-1.047-0.281-1.97-0.451-2.791-0.538V267.05z
	 M137.829,327.454h187.992v-41.7c-0.001-0.08-0.001-0.161,0-0.241v-59.907c-0.003-0.13-0.003-0.261,0-0.391V36.463H137.829v188.755
	c0.003,0.13,0.003,0.261,0,0.392v59.898c0.001,0.084,0.001,0.168,0,0.252V327.454z M107.84,249.222
	c1.563,5.83,5.457,11.66,11.989,17.832v-34.292c-0.822,0.086-1.746,0.256-2.794,0.537c-3.353,0.898-6.156,3.051-7.894,6.061
	C107.404,242.369,106.942,245.871,107.84,249.222z M173.576,405.019l-79.363,21.265L18.897,145.209l77.031-20.641
	c4.801-1.287,7.651-6.222,6.364-11.023c-1.287-4.801-6.225-7.65-11.022-6.364L10.402,128.85c-3.614,0.968-6.637,3.29-8.512,6.538
	c-1.876,3.249-2.376,7.029-1.407,10.644l77.37,288.743c0.968,3.616,3.29,6.641,6.54,8.518c2.166,1.25,4.567,1.89,7,1.89
	c1.216,0,2.439-0.16,3.644-0.482l83.199-22.293c4.801-1.287,7.651-6.222,6.364-11.022
	C183.312,406.581,178.377,403.734,173.576,405.019z M51.298,156.782c-4.801,1.287-7.65,6.222-6.364,11.023l2.217,8.274
	c1.078,4.021,4.714,6.673,8.688,6.673c0.771,0,1.555-0.1,2.335-0.309c4.801-1.287,7.65-6.222,6.364-11.023l-2.217-8.274
	C61.034,158.344,56.101,155.496,51.298,156.782z M297.52,281.322c-4.971,0-9,4.029-9,9v8.565c0,4.971,4.029,9,9,9s9-4.029,9-9
	v-8.565C306.52,285.352,302.491,281.322,297.52,281.322z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

    )
}

export const Home = ({ gameResults }) => {
    const nav = useNavigate();

    const calcPercentage = (results, who: string): number => {
        const percentage: number = results.filter(x => x.winner === who).length / results.length;
        return percentage < 1 ? +percentage.toFixed(2) * 100 : percentage * 100;
    };

    const calculateTotalWins = (results, who: string): number => (results.filter(x => x.winner === who).length);

    const calcSkunks = (results, what: string): number => {
        let count = 0;
        results.map(x => x[what] ? count++ : count)
        return count;
    }

    const countHighHand = (results, what: number) => {
        let count = 0;
        results.map(x => x["highHand"] === what ? count++ : count);
        return count;
    }

    const highPoints = (results, what: string): number => {
        const highPoint = results.map(x => x[what]);
        return Math.max(...highPoint);
    }

    const calculateShortestGame = (results) => (
        Math.min(...results.map(x => Date.parse(x.end) - Date.parse(x.start)))
    )

    const calculateLongestGame = (results) => (
        Math.max(...results.map(x => Date.parse(x.end) - Date.parse(x.start)))
    )

    return (
        <>
                <div className="container container-home">
                    <h1 className="text-center my-2">Cribbage {cardsIcon()}</h1>
                    <button className="btn btn-success mt-2" onClick={() => nav("/setup")}>
                        New Game <i className="fa-solid fa-circle-play"></i>
                    </button>
                    {/* <button className="btn btn-info mt-2" onClick={() => setDisplayStats(true)}>
                        Stats <i className="fa-solid fa-chart-line"></i>
                    </button> */}
                </div>

                <div className="container">
                    <h2 className="text-center my-2">Game Stats <i className="fa-solid fa-chart-line"></i></h2>
                    {/* <h2>Total Game Stats</h2> */}
                    <div className="container-stats">
                        <div className="stat">
                            <span>{gameResults.length}</span>
                            Games Played
                        </div>
                        <div className="stat">
                            <span>
                                {calcPercentage(gameResults, "Me")}%
                            </span>
                            Win Percentage
                        </div>
                        <div className="stat">
                            <span>{calculateTotalWins(gameResults, "Me")}</span>
                            Wins
                        </div>
                        <div className="stat">
                            <span>{gameResults.length - calculateTotalWins(gameResults, "Me")}</span>
                            Losses
                        </div>
                        <div className="stat">
                            <span>{calcSkunks(gameResults, "skunk")}</span>
                            Skunks
                        </div>
                        <div className="stat">
                            <span>{calcSkunks(gameResults, "dblSkunk")}</span>
                            Dbl Skunks
                        </div>
                        <div className="stat">
                            <span>{calcSkunks(gameResults, "skunked")}</span>
                            Skunked
                        </div>
                        <div className="stat">
                            <span>{calcSkunks(gameResults, "dblSkunked")}</span>
                            Dbl Skunked
                        </div>
                        <div className="stat">
                            <span>{highPoints(gameResults, "highHand")}</span>
                            Highest Hand
                        </div>
                        <div className="stat">
                            <span>{highPoints(gameResults, "highCrib")}</span>
                            Highest Crib
                        </div>
                        <div className="stat">
                            <span>{countHighHand(gameResults, 28)}</span>
                            28 Hands
                        </div>
                        <div className="stat">
                            <span>{countHighHand(gameResults, 29)}</span>
                            29 Hands
                        </div>
                        <div className="stat">
                            <span>{calculateLongestGame(gameResults) / 1000 / 60}m</span>
                            Longest Game
                        </div>
                        <div className="stat">
                            <span>{calculateShortestGame(gameResults) / 1000 / 60}m</span>
                            Shortest Game
                        </div>
                    </div>
                    {/* <button className="btn btn-success mt-2" onClick={() => setDisplayStats(false)}>
                        Home <i className="fa-solid fa-house"></i>
                    </button> */}
                </div>
        </>
    );
};
