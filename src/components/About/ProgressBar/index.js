import "./index.css"

const ProgressBar = ({ progress, className }) => {
    const progressBarStyles = {
        width: `${progress}%`,
    };

    return (
        <div className={`progress-bar ${className}`}>
            <div className="progress" style={progressBarStyles}></div>
        </div>
    );
};

export default ProgressBar;