import React from "react";
import ListPoint from "./listPoint";

const ItemList = React.memo (({offer}: {offer: string}) => {
    return (
        <li className="flex items-center gap-1">
            <ListPoint/>
            <p className="text-black">{offer}</p>
        </li>
    );
})

export default ItemList;
