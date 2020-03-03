
function sclist(state=[],action){
    switch (action.type) {
        case 'setSC':
            state.push(action.data);
            return [...state];
            break;
        case 'removeSC':
            let index = state.indexOf(action.data)
            if(index!=-1){
               state.splice(index,1);
            }
            return [...state];
            break;
        default:
            return state;
            break;
    }
}
//导出
export default sclist;