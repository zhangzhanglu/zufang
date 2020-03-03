import React from 'react';
import './Item.less';
import {PLcontext} from '../../../untils/utils';
class Item extends React.Component {
    //使用context
    static contextType = PLcontext;
    constructor(){
        super()
        this.state={
            flag:'',
            pldata:''
        }
    }
    //评论
    pinglunbt=()=>{
        console.log(2)
        this.setState({
            flag:true
        })
    }
    //文本域评论change事件
    plchange=(e)=>{
        this.setState({
            pldata:e.target.value
        })
    }
    //提交
    tijiao=(e)=>{
        this.context(e.target.id)
        this.setState({
            flag:false
        })
    }
    //取消
    quxiao=()=>{
        this.setState({
            flag:false
        })
    }
    render() {
        let ele = this.props.ele
        console.log(this.context)
        return (
            <div>
                <div className='pinglun-content' >
                    <div className='pinglun-img'><img src={ele.img} alt="" /></div>
                    <div className='pinglun-home'>
                        <p>商户：{ele.title}</p>
                        <p>号院：{ele.rentType}</p>
                        <p>类型：{ele.houseType}</p>
                        <p>价格：￥{ele.price}</p>
                    </div>
                    <div className='button'>
                        {
                            ele.commentState == 0 ?
                            <button onClick={this.pinglunbt} style={{ 'background': '#ff5555' }}>评论</button>
                            : ele.commentState == 2 ?
                            <button style={{ 'background': '#999' }}>已评论</button>
                            : ''
                        }
                    </div>
                </div>
                {  
                    this.state.flag?
                    <div className='pinglun-text'>
                    <textarea className='textarea' vlaue={this.state.pldata} onChange={this.plchange}></textarea>
                    <button id={ele.id} className='tijiao' onClick={this.tijiao}>提交</button>
                    <button className='quxiao' onClick={this.quxiao}>取消</button>
                    </div>
                    :''
                }
            </div>
        )
    }
}
export default Item;