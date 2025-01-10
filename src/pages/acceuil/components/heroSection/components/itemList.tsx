import React from "react";
import ListPoint from "./listPoint";

const ItemList = React.memo (({offer}: {offer: string}) => {
    return (
        <li className="flex gap-2 ">
            <div className="w-5">
                <ListPoint/>
            </div>
            <p className="text-black opacity-90 ">{offer}</p>
        </li>
    );
})

export default ItemList;
