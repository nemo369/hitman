const Player = ({ src }) => {
 
    return (
        <div className="player window">
            <div className="title-bar">
                <div className="title-bar-text">להאזנה לשיר</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" disabled></button>
                    <button aria-label="Close" disabled></button>
                </div>
            </div>
            <div className="window-body">
                    <iframe id="iframe" className="full" src={src}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
            </div>

        </div>
    );
}

export default Player;