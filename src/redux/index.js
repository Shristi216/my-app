import store from "./Store";

const unsubscribe= tore.subscribe(()=>{
    console.log("Store changed!",Store.getState());
})

store.dispatch({
    type: "bugAdded",
    payload:{
        description:"Bug1"
    }
});

unsubscribe();

store.dispatch({
    type:"bugRemoved",
    payload:{
        id:1
    }
});