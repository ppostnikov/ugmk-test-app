import React, { FC } from "react";

interface Props {

}

const headerStyles = {
    width: "80%",
    border: "1px solid black",
    borderRadius: "12px",
    padding: "16px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "16px",
}

const Header: FC<Props> = (props) => {
    return (
        <div style={headerStyles as React.CSSProperties}>
            <div>Фильтр по типу продукции</div>
            <select/>
        </div>
    )
}
export default Header;