import React, { FC } from "react";

const containerStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20%",
}

const NotFound: FC = () => {
    return (
        <div style={containerStyles}>
            <h1>Ошибка 404</h1>
            <h2>Страница не найдена</h2>
        </div>
    )
}

export default NotFound;