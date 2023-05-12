import React, { FC } from "react";
import { FallbackProps } from "react-error-boundary";

const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20%",
}

const ErrorFallback: FC<FallbackProps> = ({ error })  => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div role="alert" style={containerStyles as React.CSSProperties}>
            <h1>Ошибка:</h1>
            <h2>{error?.message}</h2>
            <button onClick={reloadPage}>Обновить страницу</button>
        </div>
    );
};

export default ErrorFallback;