import React from "react";
import './PinglunView.less';
import Item from '../Item/Item'; 
class PinglunView extends React.Component {
  
    componentDidMount() {
        console.log(this.props.list);
    }

    render() {
        return (
            <div>
                {this.props.list.map((ele, index) => {
                    return (
                        <Item key={index} ele={ele}/>      
                    )
                })}
            </div>
        )
    }
}
export default PinglunView;
