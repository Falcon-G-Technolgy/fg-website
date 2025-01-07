import React from "react";
import { NavLink } from "react-router-dom";
export interface OngletType {
    to: string,
    ongletName: string
}
const ItemOnglet = React.memo (({to, ongletName}: OngletType) => {
    return (
        <NavLink to={to}>
            <span>
                {ongletName}
            </span>
        </NavLink>
    );
})

export default ItemOnglet;
