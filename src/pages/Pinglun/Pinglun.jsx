import React from 'react';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import {fetchGet} from '../../untils/utils';
import PinglunView from './PinglunView/PinglunView';
import {PLcontext} from '../../untils/utils';
class Pinglun extends React.Component {
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        console.log(this.props);
        if(!this.props.user){
            this.props.history.push('/login')
            return;
        }
        fetchGet('/content/pinglun')
        .then(data=>data.json())
        .then(res=>{
            console.log(res)
            this.setState({
                list:res
            })
        })

        
        
    }
    //修改list的commentState的方法
    changeCommentState=(id)=>{
        let arr  = this.state.list
        for(let i=0;i<arr.length;i++){
            if(arr[i].id===id){
                arr[i].commentState=2;
            }
        }
        this.setState({
            list:arr
        })
    }
    render() {
        return (
            <PLcontext.Provider value={this.changeCommentState}>
                <Header title={'评论页面'} />
                <p><i className='iconfont icon-wodedangxuan'></i>{this.props.user}</p>
                <p><i className='iconfont icon-yiliaohangyedeICON-'></i>{this.props.city}</p>
                
                 {this.state.list.length>0?<PinglunView list={this.state.list}/>:
                 <div>数据正在加载中</div>
                 }   
                
            </PLcontext.Provider>
        )
    }
}
export default connect((state) => {
    return{
        user:state.user,
        city:state.city
    }
    })(Pinglun);