import React from 'react';
//引入导航
import Nav from '../../components/Nav/Nav.jsx';
//引入轮播图
import MySwiper from '../../components/swiper/Swiper';
//引入本地图片
import pic1 from '../../static/images/banner1.png';
import pic2 from '../../static/images/banner2.png';
import pic3 from '../../static/images/banner3.png';
//引入HomeProduct
import HomeProduct from './HomeProduct/HomeProduct';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//引入头部
// import Header from '../../components/Header/Header';
import './Home.less';

class Home extends React.Component{
    constructor(){
        super()
        this.state={
            scontent:''
        }
    }
    //键盘抬起事件
    SearchList=(e)=>{
        // console.log(e.keyCode)
        //判断回车键
        if(e.keyCode===13){
            //跳转search页面
            this.props.history.push('/search/'+this.state.scontent)
        }
    }
    //改变值
    changescontent=(e)=>{
        this.setState({
            scontent:e.target.value
        })
    }
    //评论事件
    pinglun=()=>{
        this.props.history.push('/Pinglun');
    }
    render(){
        return(
            <div>
                {/* 头部 */}
                <header className='home-header'>
                    <div className='home-city'>{this.props.city} <Link to='/city'><i className='iconfont icon-xiala'></i></Link> </div>
                    <div className='home-search'>
                        <input onKeyUp={this.SearchList} value={this.state.scontent} onChange={this.changescontent}/>
                    <i className='iconfont icon-sousuo home-sousuo'></i>
                    </div>
                    <div className='home-icon' onClick={this.pinglun}><i className='iconfont icon-pinglun'></i></div>
                </header>
                {/* 轮播图---使用插件 */}
                <MySwiper arr={[pic1,pic2,pic3]}/>
                {/* 热销单品 */}
                <HomeProduct title={'热销单品'}/>
                {/* 家庭常用 */}
                <HomeProduct title={'家庭常用'}/>
                <Nav/>
            </div>
        )
    }
}
export default connect((state)=>{
    return{
        city:state.city
    }
})(Home);