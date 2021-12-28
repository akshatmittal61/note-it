import React, { useState } from "react";
function Theme() {
    const [theme, setTheme] = useState("light");
    const body = document.querySelector("body");
    function changeTheme() {
        setTheme((theme === "light") ? "dark" : "light");
    }
    body.setAttribute("class", theme);
    return (
        <button title={`${theme} Mode`} className="theme icon" onClick={changeTheme}>
            <span className="theme-icon material-icons" id={theme}>
                {`${theme}_mode`}
            </span>
        </button>
    )
}
export default Theme;