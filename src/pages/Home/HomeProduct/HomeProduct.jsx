//智能组件 写数据 请求... 给木偶组件传递数据
import React from 'react';
//home数据
import {fetchGet} from '../../../untils/utils';
//引入木偶组件
import HomeProductView from './HomeProductView';
class HomeProduct extends React.Component{
    constructor(){
        super()
        this.state={
            productData:[]
        }
    }
    componentDidMount(){
        console.log(this.props.title);
        fetchGet('/content/homeData',{city:'beijing'})
        .then(data=>data.json())
        .then(res=>{
            console.log(res);
            if(this.props.title =='热销单品'){
                this.setState({
                    productData:res.hot1
                })
            } else{
                this.setState({
                    productData:res.hot2
                })
            }
            
        })
    }
    render(){
        return(
            <div>
               {this.state.productData.length>0
                ?<HomeProductView title={this.props.title} HomeProductArr={this.state.productData}/>:
                <div>数据正在加载中...</div>
                } 
            </div>
            
        )
    }
}
export default HomeProduct;