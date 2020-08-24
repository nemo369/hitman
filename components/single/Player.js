const Player = ({ src }) => {
    return (
        <div className="player window">
            <div className="title-bar">
                <div className="title-bar-text">להאזנה לאלבום</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" disabled></button>
                    <button aria-label="Close" disabled></button>
                </div>
            </div>
            <div className="window-body">
                <div className="btns flex end">
                    <div className="field-row" >
                        <input type="range" min="1" max="11" value="5" readOnly />
                        <label >:Volume</label>
                    </div>
                    <button className="stop"></button>
                    <button className="play-pause" ><span className="pause"></span > / <span className="play"></span ></button>

                </div>
                    <iframe id="iframe" className="full" src={src}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
            </div>

        </div>
    );
}

export default Player;