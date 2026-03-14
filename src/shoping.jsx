

import Item from './item';

export default function Shopping ( {shop}){
    return(
        <div>
             <h2>The Furniture List</h2>
             <h3>Total Furniture LIst : {shop.length}</h3>
             
            <ul>
                {
                shop.map(shopimg => <Item key={shopimg.item} shop={shopimg}></Item>)
                }
            </ul>
        </div>
    )
}