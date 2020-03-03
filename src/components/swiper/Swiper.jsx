//轮播图
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import './Swiper.less';
import MyPagination from './pagination/index';
//引入自动播放
import {autoPlay} from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class MySwiper extends React.Component {
    constructor(){
        super()
        this.state={
            index:0
        }
    }
    componentDidMount(){
        // console.log(this.props.arr);
    }
    getIndex=(index)=>{
        // console.log(index)
        this.setState({
            index:index
        })
    }
    render() {
        return (
            <div className='myswiper'>
                <AutoPlaySwipeableViews onChangeIndex={this.getIndex} className='swiperBox'>
                {/* <div style={Object.assign({}, styles.slide, styles.slide1)}>
                    slide n°1
                </div>
                <div style={Object.assign({}, styles.slide, styles.slide2)}>
                    slide n°2
                </div>
                <div style={Object.assign({}, styles.slide, styles.slide3)}>
                    slide n°3
                </div> */}
                {this.props.arr.map((ele,index)=>{
                    return(<div key={index}>
                        <img src={ele}/>
                </div>)
                })}
            </AutoPlaySwipeableViews>
            <MyPagination index={this.state.index} size = {this.props.arr.length}/>
            </div>
        )
    }
} 
export default MySwiper;