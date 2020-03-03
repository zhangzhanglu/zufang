import React from 'react';
import {fetchGet} from '../../../untils/utils';
import CommitView from '../CommitView/CommitView';
import LoadMore from '../../LoadMore/LoadMore';
export default class Commit extends React.Component{
    constructor(){
        super()
        this.state={
            pinglunData:[],
            hasMore:false,
            flag:true
        }

    }
    getdata=(kw,bool)=>{
        this.setState({
            hasMore:bool
        })
        fetchGet('/content/commit',{id:this.props.id})
        .then(data=>data.json())
        .then(res=>{
            // console.log(res);
            this.setState({
                pinglunData:this.state.pinglunData.concat(res.data),
                hasMore:res.hasMore,
                flag:true
            })
        })
    }
    componentDidMount(){
        console.log(this.props.id);
        this.getdata()
    }
    render(){
        return(
            <div>
                {this.state.pinglunData.length>0?<CommitView data={this.state.pinglunData}/>:
                <div>数据正在加载中</div>
                }
                {/* 加载更多 */}
                {this.state.hasMore?<LoadMore kw='' getdata={this.getdata} flag={this.state.flag}/>:''}
                
            </div>
        )
    }
}