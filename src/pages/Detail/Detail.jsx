import React from 'react';
import {fetchPost} from '../../untils/utils';
import Header from '../../components/Header/Header';
import Swiper from '../../components/swiper/Swiper';

import Mytabs from '../../components/Mytabs/Mytabs';
import Commit from './Commit/Commit';
import './Detail.less';

import setUser from '../../store/action/UserAction';
// import setSC from '../../store/action/scAction';
// import removeSC from '../../store/action/scAction';
import {setSC,removeSC} from '../../store/action/scAction';
import {connect} from 'react-redux';
 class Detail extends React.Component{
    constructor(){
        super()
        this.state={
            detailData:'',
            info:'',
            flag:''
        }
    }
    componentDidMount(){
        console.log(this.props);
        if(this.props.sc.indexOf(this.props.match.params.id)!=-1){
            //已收藏
            this.setState({
                flag:true
            })
        }
        else{
            //还未收藏
            this.setState({
                flag:false
            })
        }
        // console.log(this.props.match.params.id);
        const id= this.props.match.params.id;
        fetchPost('/content/detail',{id:id})
        .then(data=>data.json())
        .then(res=>{
            console.log(res);
            this.setState({
                detailData:res,
                info:res.info
            })
        })
    }
    callback=()=>{
        console.log();
    }
    //收藏事件
    sc=()=>{
        //首先判断用户是否登录了 登录：可以收藏  未登录：去登录 然后可以收藏
        if(this.props.user){
            console.log("已登陆，可以收藏");
            this.props.setSC(this.props.match.params.id)
            this.setState({
                flag:true
            })
        }
        else{
            console.log('没有登录，请登陆');
            this.props.history.push('/Login');
        } 
    }
    quxiao=()=>{
        this.props.removeSC(this.props.match.params.id)
        this.setState({
            flag:false
        })
    }
    render(){
        return (
            <div>
                <Header title={'详情页'}/>
                <div>
                    {this.state.detailData?<Swiper arr={this.state.detailData.imgs}/>:''}
                </div>
                {/* tabs切换 */}
                <Mytabs defaultActiveKey="1" onChange={this.callback} className='detail-box'>
                    <div tab='房屋信息' akey='1'>
                        <div className='detail-xinxi'>
                            <h3>{this.state.detailData.title}</h3>
                            <div className='detail-info'>
                                <div>
                                    <p>{this.state.detailData.price}/月</p>
                                    <p>租金</p>
                                </div>
                                <div>
                                    <p>{this.state.info.type}</p>
                                    <p>房型</p>
                                </div>
                                <div>
                                    <p>{this.state.detailData.houseType}</p>
                                    <p>面积</p>
                                </div>
                            </div>
                            <ul className='detail-product'>
                                <li>楼层：{this.state.info.level}</li>
                                <li>装修：{this.state.info.style}</li>
                                <li>类型：{this.state.info.type}</li>
                                <li>朝向：{this.state.info.orientation}</li>
                                <li>年代：{this.state.info.years}</li>
                            </ul>
                        </div>
                        <div className='detail-button'>
                            <div>{this.state.flag?<button onClick={this.quxiao} style={{'background':'#ff7f32'}}>已收藏</button>:<button onClick={this.sc}>收藏</button>}</div>
                            <div><button>购买</button></div>
                        </div>
                    </div>
                    <div className='detail-pinlun' tab='房屋评价' akey='2'>
                        <Commit id={this.props.match.params.id}/>
                    </div>
                </Mytabs>
                
            </div>

        )
    }
}
// 获取redux数据
function mapStateToProps(state){
    return{
        user:state.user,
        sc:state.sc
    }
}
//写入
function mapDispatchToProps(dispatch){
    return{
        setUser:(data)=>{
            dispatch(setUser(data))
        },
        setSC:(data)=>{
            dispatch(setSC(data))
        },
        removeSC:(data)=>{
            dispatch(removeSC(data))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Detail);