import React, { ChangeEvent, FC } from "react";

import { ProductType } from "../../types/ProductType";
import { ProductOption } from "../../types/ProductOption";

interface Props {
    options: ProductOption[],
    onChangeFilter: (value: ProductType) => void,
}

const headerStyles = {
    width: "auto",
    minWidth: "720px",
    border: "1px solid black",
    borderRadius: "12px",
    padding: "16px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "16px",
}

const Header: FC<Props> = (props) => {
    const changeProductFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChangeFilter(e.target.value as ProductType);
    }

    return (
        <div style={headerStyles as React.CSSProperties}>
            <div>Фильтр по типу продукции</div>
            <select
                onChange={changeProductFilter}
            >
                {props.options?.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
        </div>
    )
}
export default Header;