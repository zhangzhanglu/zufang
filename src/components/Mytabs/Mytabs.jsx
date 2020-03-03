import React from 'react';
import './Mytabs.less'
export default class Mytabs extends React.Component{
    constructor(){
        super()
        this.state={
            cur:'1'
        }
    }
    changetab=(e)=>{
        console.log(e.target.id)
        this.setState({
            cur:e.target.id
        })
    }
    componentDidMount(){
        console.log(this.props.children);
    }
    render(){
        return(
            <div className='tab-box'>
                <ul onClick={this.changetab} className='tab-info'>
                    {
                        React.Children.map(this.props.children,(ele,index)=>{
                            // console.log(ele);
                        return <li style={{'color':this.state.cur ===ele.props.akey?'#ff5555':''}} id={ele.props.akey}>{ele.props.tab}</li>
                        })
                    }
                </ul>
                <div className='tab-content'>
                    {
                        React.Children.map(this.props.children,(element,index)=>{
                        return <div className={this.state.cur===element.props.akey?'active':'hide'}>{element.props.children}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}