//reducers
function city(state='北京',action){
    switch (action.type) {
        case 'setCity':
            state = action.data;
            return state;
            break;
        default:
            return state;
            break;
    }
}
//导出
export default city;