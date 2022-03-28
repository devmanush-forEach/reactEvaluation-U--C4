import { DATALOADING, LOADINGFAILED, LOADINGSUCCESS, SORTPRODUCTS } from "./actionTypes";


export const dataLoading = ()=>(
    {
        type : DATALOADING
    }
)

export const loadingSuccess = (payload)=>(
    {
        type : LOADINGSUCCESS,
        payload
    }
)


export const loadingFailed = (payload)=>(
    {
        type : LOADINGFAILED,
        payload
    }
)


export const getData = (payload) =>{

    console.log( " payload"+payload);


    
    let url;
    
    if(payload === undefined){
        url = `https://movie-fake-server.herokuapp.com/products`;
    }else{
        url = `https://movie-fake-server.herokuapp.com/products/${payload}`
    }


    return (dispatch) =>{
        dispatch(dataLoading());
        fetch(url).then(
            (res)=> res.json()
            ).then(
                (data)=>{
            dispatch(loadingSuccess(data));
        }).catch((err=>{
            dispatch(loadingFailed(err.message));
        }))
    }
}


export const sortProducts = (payload)=>(
    {
        type : SORTPRODUCTS,
        payload
    }
)