import React, { createRef } from 'react';
class LoadMore extends React.Component {
    constructor() {
        super()
        this.myDiv = React.createRef();
        
    }
    myscroll=()=>{
            if((document.documentElement.clientHeight+50)>=this.myDiv.current.getBoundingClientRect().top && this.props.flag){
                this.props.getdata(this.props.kw,false);
                console.log('到底了');
            }
        }
    //组件将要销毁
    componentWillUnmount(){
        let _this=this;
        //取消事件监听
        window.removeEventListener('scroll',_this.myscroll);
    }
    componentDidMount() {
        // console.log(this.props);
        let _this = this;
        //获取dom元素
        let myDiv = this.myDiv.current;
        // console.log(this.myDiv.current);
        //绑定滚动事件
        window.onscroll = function () {
            //     //元素距里页面顶部的距离还剩多少
            //     console.log('元素距里页面顶部的距离还剩多少',myDiv.getBoundingClientRect().top);
            //    //获取元素距离页面顶部的高度
            //     console.log('获取元素距页面顶部的距离',myDiv.offsetTop,myDiv.offsetWidth)
            //     //滚动高度
            //     console.log('滚动的高度',document.documentElement.scrollTop);
            //     //可视窗口的高度
            //     console.log('可视窗口的高度',document.documentElement.clientHeight);
            // if((document.documentElement.scrollTop+document.documentElement.clientHeight+20)>=myDiv.offsetTop){
            //     console.log('到底了');
            // }
        }
        window.addEventListener('scroll',_this.myscroll)
    //     window.addEventListener('scroll', () => {
    //         if((document.documentElement.clientHeight+50)>=this.myDiv.current.getBoundingClientRect().top && this.props.flag){
    //             this.props.getdata(this.props.kw,false);
    //             console.log('到底了');
    //         }
    //         // if ((document.documentElement.clientHeight + 50) >= this.myDiv.current.getBoundingClientRect().top) {
    //         //     //定时器
    //         //     if(this.state.timer){
    //         //         clearTimeout(this.state.timer);
    //         //     }
    //         //     //只执行最后一次
    //         //     this.state.timer = setTimeout(function () {
    //         //         console.log('到底了');
    //         //         _this.props.getdata(_this.props.kw);
    //         //     },300)

    //         // }
    //     })
       
     }
    render() {
        return (
            <div ref={this.myDiv}>
                加载更多.....
            </div>
        )
    }
}
export default LoadMore;