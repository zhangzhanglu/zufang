import React from 'react';
import star from '../../../static/images/star.png';
import chat from '../../../static/images/chat.png';
import './CommitView.less';
export default class CommitView extends React.Component{
    render(){
        return(
            <div>
                {this.props.data.map((ele,index)=>{
                    return (
                        <div key={index} className='commit-box'>
                            <div>
                                <i className='iconfont icon-wodedangxuan'></i>
                                <span>{ele.username}</span>
                            </div>
                            <div className='commit-star'> 
                                {[1,1,1,1,1].map((element,sindex)=>{
                                    return(
                                   <img key={sindex} src={sindex+1<=ele.star?star:chat} alt=''/>
                                    )
                                })}
                            </div>
                            <div>
                                {ele.comment}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}