import React from "react";

const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20%",
}

const NotFound: React.FC = () => {
    return (
        <div style={containerStyles as React.CSSProperties}>
            <h1>Ошибка 404</h1>
            <h2>Страница не найдена</h2>
        </div>
    )
}

export default NotFound;