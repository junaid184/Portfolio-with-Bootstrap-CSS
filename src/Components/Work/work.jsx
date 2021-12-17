import '../style.css';
import Quiz from '../img/QuizApp.jpg';
import TicTacToe from '../img/Tictactoe.jpg';
import Countdown from '../img/Countdown.jpg';
import StopWatch from '../img/Stop Watch.jpg';
import SocialMediaCard from '../img/Social Media Card Thumbnail.png';
import WeatherApp from '../img/weather.png';
const Work = () => {
    return (
        <>
            <header className="tm-site-header-box tm-bg-dark">
                <h1 className="tm-site-title">JUNAID SHAKEEL AHMED</h1>
                <p className="mb-0 tm-site-subtitle">A web developer.</p>
            </header>
            <section >
                <h1 className="tm-site-title">HTML, CSS/Bootstrap &#38; JavaScript Projects</h1>
                <div className="projects">
                    <div class="card">
                        <img src={Quiz} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Quiz Application</h5>
                            <p class="card-text">Created Quiz Application based on timer each question have it's own timing user will tick the answer and time will stop and the user can see he ticked the correct answer or not and then user will move forward. In the end of the Quiz user can see his total score</p>
                            <a href="https://quiz-application-e51aa.web.app/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={TicTacToe} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Tic Tac Toe</h5>
                            <p class="card-text">Created Tic Tac Toe using HTML, CSS, JavaScript, at the end of the game this application shows who is the winner or draw.</p>
                            <a href="https://tic-tac-toe-9daec.web.app/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Countdown} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Timer/Countdown</h5>
                            <p class="card-text">Created Timer/Countdown using HTML, CSS, JavaScript, user will set the second and the countdown will start.</p>
                            <a href="https://timer-225f4.web.app/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={StopWatch} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Stop Watch</h5>
                            <p class="card-text">Created Tic Tac Toe using HTML, CSS, JavaScript, user can start, stop or reset it.</p>
                            <a href="https://stopwatch-69458.web.app/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>
                <h1 className="tm-site-title">ReactJS &#38;  CSS/Bootstrap Projects</h1>
                <div className="projects">
                    <div class="card">
                        <img src={SocialMediaCard} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Social Media Card</h5>
                            <p class="card-text">Created Social Media Card with the help of ReactJS, CSS &#83; Bootstrap, this social media card have both Dark theme and Light theme </p>
                            <a href="https://firstreactproject-4502f.web.app/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={WeatherApp} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Weather App</h5>
                            <p class="card-text">Created Weather Application using ReactJS &#83; it will get user location and then show the weather according to the user's location and user can also search weather by the city name.</p>
                            <a href="https://weather-application-8ffc0.web.app/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                    <h1 className="tm-site-title">MERN Projects</h1>

                    <div class="card">
                        <img src={WeatherApp} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Weather App</h5>
                            <p class="card-text">Created Weather Application using ReactJS &#83; it will get user location and then show the weather according to the user's location and user can also search weather by the city name.</p>
                            <a href="https://weather-application-8ffc0.web.app/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Work;