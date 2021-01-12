import './About.css';

const About = () => {
    return (
        <div className="About">
            <div className="infobox">
                <div className="how-to">
                    <h2>How to Play</h2>
                    <p>
                        This application puts your memory to the test. You are presented with multiple artifact cards.
                        The cards get shuffled every time they are clicked.
                        You CAN NOT click on any card more than once or else your score resets to zero.
                        The main objective is to get the highest possible score.
                    </p>
                </div>
                <div className="copyright">
                    <h2>Copyright</h2>
                    <p>
                        Data are taken from MHA API by 
                        <span>
                            <a 
                                href="https://github.com/renant/myheroacademiaapi"
                                className="author"
                            >
                                Renant
                            </a>
                        </span>
                        <p><a className="link-to-api" href="https://myheroacademiaapi.com/">Link to API</a></p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;