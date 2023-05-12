import React, { ChangeEvent, FC } from "react";

import { ProductType } from "../../types/ProductType";
import { ProductOption } from "../../types/ProductOption";

interface Props {
    productType: ProductType;
    options: ProductOption[],
    onChangeFilter: (value: ProductType) => void,
}

const headerStyles: React.CSSProperties = {
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
    const { productType, options, onChangeFilter } = props;

    const changeProductFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeFilter(e.target.value as ProductType);
    }

    return (
        <div style={headerStyles}>
            <div>Фильтр по типу продукции</div>
            <select
                value={productType}
                onChange={changeProductFilter}
            >
                {options?.map(opt => (
                    <option
                        key={opt.value}
                        value={opt.value}
                    >
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default Header;