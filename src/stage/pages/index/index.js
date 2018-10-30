import React, { Component } from 'react';
import $ from 'jquery';
import './index.less';

console.log('我是真的关于我们页面！');  

$("#root").html("我是jquery输出的");


console.log(IS_PRODUCTION);
 

const Content=()=>(<div>我是关于我们，我是react输出的</div>);




ReactDOM.render(<Content />,document.getElementById("test1"));