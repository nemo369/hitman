const Loader = () => {
    return (
        <div className="loader">
            <div className="window">
                <div className="title-bar">
                    <div className="title-bar-text">טוען...</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" disabled></button>
                        <button aria-label="Close" disabled></button>
                    </div>
                </div>
                <div className="window-body">
                   <div className="progress relative"><div className="progress__bars"></div></div>
                </div>

            </div>
        </div>
    );
}

export default Loader;