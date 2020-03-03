import React from 'react';
import {fetchGet} from '../../untils/utils';
import SearchList from './SearchList/SearchList';
import '../Home/Home.less'
import LoadMore from '../LoadMore/LoadMore';

class Search extends React.Component{
    constructor(){
        super()
        this.state={
            list:[],
            scontent:'',
            flag:true
        }
    }
    //键盘抬起事件 input 标签回车键 再次搜索
    SearchList=(e)=>{
        // console.log(e.keyCode)
        //判断回车键
        if(e.keyCode===13){
            //跳转search页面
            // this.setState({
            //     list:[]
            // })
            this.props.history.push('/search/'+this.state.scontent)
        }
    }
    //改变值
    changescontent=(e)=>{
        this.setState({
            scontent:e.target.value
        })
    }
    //返回
    back=()=>{
        this.props.history.goBack()
        
    }
    getdata=(keyword,cs)=>{
        this.setState({
            flag:cs
        })
        fetchGet('/content/search/'+keyword)
        .then(data=>data.json())
        .then(res=>{
            // console.log(res)
            let arr = this.state.list.concat(res.data);
            this.setState({
                list:arr,
                flag:true
            },function(){
                console.log(this.state)
            })
        })
    }
    componentDidMount(){
        console.log('渲染')
        this.getdata(this.props.match.params.keyword);
        this.setState({
            scontent:this.props.match.params.keyword
        })
       
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.keyword!==this.props.match.params.keyword){
            console.log('更新');
            this.getdata(this.props.match.params.keyword);
            this.setState({
                list:[],
                scontent:this.props.match.params.keyword
            })
        }
    }
    render(){
        return(
            <div>
                 {/* 头部 */}
                 <header className='home-header'>
                    <div className='home-city'><i onClick={this.back} className='iconfont icon-fanhui'></i></div>
                    <div className='home-search'>
                        <input onKeyUp={this.SearchList} value={this.state.scontent} onChange={this.changescontent}/>
                    <i className='iconfont icon-sousuo home-sousuo'></i>
                    </div>
                    <div className='home-icon'></div>
                </header>
                <SearchList list={this.state.list}/>
                <LoadMore getdata={this.getdata} kw={this.props.match.params.keyword} flag={this.state.flag}/>
            </div>
        )
    }
}
export default Search;