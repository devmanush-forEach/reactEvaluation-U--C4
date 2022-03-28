import { DATALOADING, GETDATA, LOADINGFAILED, LOADINGSUCCESS, SORTPRODUCTS } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    error: "",
    data: []
}


export const reducer = (store = initialState, { type, payload }) => {

    switch (type) {
        case DATALOADING:
            return { ...store, isLoading: true };

        case LOADINGSUCCESS:
            return { ...store, isLoading: false, data: payload }

        case LOADINGFAILED:
            return { ...store, isError: true, error: payload }

        case GETDATA:
            return { ...store, data: payload };
        case SORTPRODUCTS:

        let sortedProducts;

        if(payload === "asc"){
            sortedProducts = store.data.sort((a,b)=>{
                return a.price-b.price
            })
        }else if(payload === "desc"){
            sortedProducts = store.data.sort((a,b)=>{
                return b.price-a.price
            })
        }
        else if (payload === 'default'){
            return {...store}
        }

        return {...store, data : sortedProducts};

        default:

            return { ...store }
    }

}