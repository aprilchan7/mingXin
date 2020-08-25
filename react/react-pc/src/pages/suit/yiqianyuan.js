import React, {Component} from 'react';
import ProductHead1 from "../../component/product/producthead1";
import ProductBox from "../../component/product/productBox";
import './yangYang.css'


class yiqianyuan extends Component {
    constructor() {
        super();
        this.state={
            Title:'1000元以下',
            yingYangPro:[
                {
                    id:1,
                    url:'1000YUAN.png',
                    title:'1000元以下',
                    content:'新动控油净肤露限定套装（适用油性肌肤）',
                    price1:885,
                    price2:705,
                },
                {
                    id:2,
                    url:'1000YUAN1.jpg',
                    title:'1000元以下',
                    content:'如新净肤系列套装[礼盒版]',
                    price1:1130,
                    price2:895,
                }

            ],
        }
    }

    render() {
        let proArr=this.state.yingYangPro.map((item,index)=>{
            return (
                <div key={item.id}>
                    <ProductBox myurl={item.url} title={item.title} content={item.content} price1={item.price1}
                                price2={item.price2}/>
                </div>

            )
        })
        return (
            <div>
                <ProductHead1 Title={this.state.Title}/>
                <div  className='showProBox'>
                    {proArr}
                </div>
            </div>
        )
    }
}

export default yiqianyuan