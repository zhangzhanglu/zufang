import React from 'react';
import './Item.less';
class Item extends React.Component{
    render(){
        return(
            <div className='itembox'> 
                <div className='itemimg'>
                    <img src={this.props.curdata.img} alt=""/>
                </div>
                <div>
                    <div>
                        <h4>{this.props.curdata.title}</h4>
                        <p>{this.props.curdata.houseType}</p>
                    </div>
                    <div>
                        <p>{this.props.curdata.rentType}</p>
                        {/* 解析标签 */}
                        <p dangerouslySetInnerHTML={{__html:this.props.curdata.price+"/月"}}></p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Item;