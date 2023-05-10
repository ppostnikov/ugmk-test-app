import { FC } from "react";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback: FC<FallbackProps> = ({ error })  => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div role="alert">
            <p>Ошибка:</p>
            <pre>{error?.message}</pre>
            <button onClick={reloadPage}>Обновить страницу</button>
        </div>
    );
};

export default ErrorFallback;