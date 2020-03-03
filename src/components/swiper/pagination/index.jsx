import React from 'react';
import './index.less';
export default class MyPagination extends React.Component{
    render(){
        let count = this.props.size;
        let arr = new Array(count).fill(1);
        // console.log(arr);
        return(
            <div className='MyPagination'>
                <ul>
                   {arr.map((ele,index)=>{
                       return(
                           <li  key={index} className={index===this.props.index?'active MyPagination-item':'MyPagination-item'}></li>
                       )
                   })}
                </ul>
            </div>
        )
    }
}