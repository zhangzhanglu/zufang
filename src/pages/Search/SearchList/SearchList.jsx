import React from 'react';
import Item from '../Item/Item.jsx';
import { Link } from 'react-router-dom';
class SearchList extends React.Component {
    componentDidMount() {
        console.log(this.props.list)
    }
    componentDidUpdate() {
        // console.log(this.props.list)
    }
    render() {
        // let { list } = this.props;
        return (
            <div>
                {this.props.list.length > 0
                    ? this.props.list.map((ele, index) => {
                        return <Link to={`/detail/${ele.id}`} key={index}><Item  curdata={ele} /></Link>
                    })
                    : <div>数据加载中</div>
                }
            </div>
        )
    }
}
export default SearchList;