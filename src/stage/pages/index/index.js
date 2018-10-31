import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.less';

if(module.hot){
    module.hot.accept();
} 

const Content=()=>(<div>wo shi stage1，我是react输出的</div>);




ReactDOM.render(<Content />,document.getElementById("test1"));