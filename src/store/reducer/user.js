function user(state='',action){
    switch (action.type) {
        case 'setUser':
            state = action.data;
            return state;
            break;
        default:
            return state;
            break;
    }
}
//导出
export default user;