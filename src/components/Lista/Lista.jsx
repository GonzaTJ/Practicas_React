import { useState } from 'react';
import listado from './Listado'
import ListaVista from './ListaVista';

function Lista(){
    let [items, setItems] = useState(listado)

    function filterItems(searchPattern){
        if(searchPattern ===""){
            setItems(listado);
        }else{
            let newItems = filterItemsBySearchPattern(searchPattern);
                setItems(newItems);
        }
    }

    function filterItemsBySearchPattern(searchPattern){
        let filterItems = listado
                          .map(item => item.toLowerCase().includes(searchPattern.toLowerCase()) ? item:null)
        return filterItems;
    }
    return(
       <ListaVista elements={items} funcfilterItems={filterItems}/>
    );
}

export default Lista;