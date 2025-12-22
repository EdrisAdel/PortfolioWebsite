import React, { useMemo } from "react";
import "./IconRotator.css";

/*
  Props:
   - techs: array of { icon: ReactElement, ... }
   - size: pixel size for each icon cell
   - speed: seconds for one full cycle
   - visible: how many icons visible in column viewport
*/
const IconRotator = ({ techs = [], size = 96, speed = 8, visible = 4 }) => {
    const icons = useMemo(() => techs.map(t => t.icon), [techs]);

    if (!icons.length) return null;

    return (
        <div
            className="icon-shower-single"
            style={{
                "--cell-size": `${size}px`,
                "--speed": `${speed}s`,
                "--visible": String(visible),
            }}
            aria-hidden="true"
        >
            <div className="shower-track-single" style={{ animationDuration: `${speed}s` }}>
                {icons.map((IconEl, i) => (
                    <div className="shower-cell" key={i}>
                        <div className="icon-svg">{IconEl}</div>
                    </div>
                ))}
                {icons.map((IconEl, i) => (
                    <div className="shower-cell" key={`dup-${i}`}>
                        <div className="icon-svg">{IconEl}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconRotator;