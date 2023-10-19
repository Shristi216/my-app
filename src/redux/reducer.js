


// function Reducer(state=[],action){
    // let lastId=0;
//     if(action.type==='bugAdded')
//     return[
// ...state,
// {
//     id: ++LastPageOutlined,
//     description:action.payload.description,
//     resolved: false
// }];
// else if(action.type === 'bugRemoved')
// return state.filter(bug=>bug.id != action.payload.id);
// return state;
// }



// switch case

function reducer(state = [], action) {
    let lastId=0;
switch(action.type){
 case "bugAdded":
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  case "bugRemoved":
    return state.filter((bug) => bug.id !== action.payload.id);
 default:
    return state;
}
}
