<template>
  <div class="hello">
    <section class="jq22-flexView">
      <header class="jq22-navBar jq22-navBar-fixed b-line">
        <a href="javascript:;" class="jq22-navBar-item">
          <i class="icon icon-return"></i>
        </a>
        <div class="jq22-center">
          <span class="jq22-center-title">个人信息</span>
        </div>
        <a href="javascript:;" class="jq22-navBar-item">
          <i class="icon icon-sys"></i>
        </a>
      </header>
      <section class="jq22-scrollView">
        <!-- <div class="jq22-auto-img">
          <img src="images/head.png" alt="">
        </div> -->
        <div class="jq22-auto-form" style="margin-top: 2rem;">
          <div class="jq22-auto-box">
            <div class="jq22-auto-inp">
              <div class="jq22-flex">
                <label>姓名</label>
                <div class="jq22-flex-box">
                  <input type="text" v-model="name" placeholder="请输入姓名">
                </div>
              </div>
              <div class="jq22-flex">
                <label>地址</label>
                <div class="jq22-flex-box">
                  <input type="text" v-model="address" placeholder="请输入地址">
                </div>
              </div>
              <div class="jq22-flex">
                <label>手机码</label>
                <div class="jq22-flex-box">
                  <input type="text" v-model="iphone" autocomplete="off" placeholder="请输入手机号码">
                </div>
              </div>
              <button class="jq22-apply-btn" @click="binding">立即提交</button>

            </div>
          </div>
        </div>

      </section>
    </section>
  </div>
</template>

<script>
import request from '../utils/axios'

export default {
  name: 'HelloWorld',
  data() {
    return {
      iphone: '',
      name: '',
      address: ''
    }
  },
  mounted() {
  },
  methods: {
    binding(){
      if (this.sendMessage3() && this.sendMessage2() && this.sendMessage1()) {
        request({
          url: '/api/private/v1/xingxi',
          params: {
            iphone: this.iphone,
            name: this.name,
            address: this.address
          }
        })
      }
    },
    sendMessage1() {
      let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
      if (!phoneReg.test(this.iphone)) {
        alert(" 请输入有效的手机号码");
        return false;
      }
      return true
    },

    sendMessage2() {
      if (!this.name) {
        alert("请输入姓名");
        return false;
      }
      return true
    },

    sendMessage3() {
      if (!this.address) {
        alert("请输入地址");
        return false;
      }
      return true
    },
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,body {
	color: #333;
	margin: 0;
	height: 100%;
	font-family: "Myriad Set Pro","Helvetica Neue",Helvetica,Arial,Verdana,sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: normal;
}

* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: #000;
}

a, label, button, input, select {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

img {
	width:100%;
	height:auto;
	display:block;
	border: 0;
}

body {
	background: #f4f4f4;
	color: #666;
}

html, body, div, dl, dt, dd, ol, ul, li, h1, h2, h3, h4, h5, h6, p, blockquote, pre, button, fieldset, form, input, legend, textarea, th, td {
	margin: 0;
	padding: 0;
}

a {
	text-decoration: none;
	color: #08acee;
}

button {
	outline: 0;
}

img {
	border: 0;
}

button,input,optgroup,select,textarea {
	margin: 0;
	font: inherit;
	color: inherit;
	outline: none;
}

li {
	list-style: none;
}

a {
	color: #666;
}

.clearfix::after {
	clear: both;
	content: ".";
	display: block;
	height: 0;
	visibility: hidden;
}

.clearfix {
}


.divHeight {
	width: 100%;
	height: 10px;
	background: #f5f5f5;
	position: relative;
	overflow: hidden;
}

.r-line {
	position: relative;
}

.r-line:after {
	content: '';
	position: absolute;
	z-index: 0;
	top: 0;
	right: 0;
	height: 100%;
	border-right: 1px solid #D9D9D9;
	-webkit-transform: scaleX(0.5);
	transform: scaleX(0.5);
	-webkit-transform-origin: 100% 0;
	transform-origin: 100% 0;
}

.b-line {
	position: relative;
}

.b-line:after {
	content: '';
	position: absolute;
	z-index: 2;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 1px;
	border-bottom: 1px solid #e2e2e2;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	-webkit-transform-origin: 0 100%;
	transform-origin: 0 100%;
}

.jq22-flex {
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
	padding: 15px;
	position: relative;
}

.jq22-flex-box {
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	flex: 1;
	min-width: 0;
	font-size: 14px;
	color: #333;
}


/* 必要布局样式css */

.jq22-flexView {
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
}

.jq22-scrollView {
	width: 100%;
	height: 100%;
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	-ms-flex: 1;
	flex: 1;
	overflow-y: auto;
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;
	position: relative;
}

.jq22-navBar {
	height: 44px;
	position: relative;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	z-index: 102;
	background:#ffffff;
}


.jq22-navBar-item {
	height: 44px;
	min-width: 25%;
	-webkit-box-flex: 0;
	-webkit-flex: 0 0 25%;
	-ms-flex: 0 0 25%;
	flex: 0 0 25%;
	padding: 0 0.9rem;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	font-size: 0.7rem;
	white-space: nowrap;
	overflow: hidden;
	color: #808080;
	position: relative;
}

.jq22-navBar-item:first-child {
	-webkit-box-ordinal-group: 2;
	-webkit-order: 1;
	-ms-flex-order: 1;
	order: 1;
	margin-right: -25%;
	font-size: 0.9rem;
	font-weight: bold;
}

.jq22-navBar-item:last-child {
	-webkit-box-ordinal-group: 4;
	-webkit-order: 3;
	-ms-flex-order: 3;
	order: 3;
	-webkit-box-pack: end;
	-webkit-justify-content: flex-end;
	-ms-flex-pack: end;
	justify-content: flex-end;
}

.jq22-center {
	-webkit-box-ordinal-group: 3;
	-webkit-order: 2;
	-ms-flex-order: 2;
	order: 2;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	height: 44px;
	width: 50%;
	margin-left: 25%;
}

.jq22-center-title {
	text-align: center;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	display: block;
	text-overflow: ellipsis;
	font-size: 0.95rem;
	color: #f5773a;
}

.icon {
	width: 20px;
	height: 20px;
	display: block;
	border: none;
	float: left;
	background-size: 20px;
	background-repeat: no-repeat;
}

.icon-return{
	background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB2UlEQVRoQ+3bMU7DMBQG4PeSCcEBOAZdShZQOQk9AlPbERaUDTgB16nUhSOwsYKIytL0oUSN2kJoUW2/9ydtpmSI5c/P8fDHZtqzi/fMSwcwWsW/RklvTnRd9Eui/OnkfvLi0kfoCmejpM/Mz6tA4VnHBQ0LrsOWcJG743R8u2uVIcF/YtsI3oQVkY+Y6OwoHb+2osLbsBTlPZfvtxgkmCmtgYUBa2EhwJpYc7A21hRsgTUDW2FNwJZYdbA1VhWMgFUDo2BVwEjY4GA0bFAwIjYYGBUbBIyM9Q5Gx3oFNwHrDdwUrBfwdNBNJY6Hi0SRiJchSpFB+Yhlds2v6t5zinimg/MbiaOHZcOyuGVCxDpXOBsmbxzx6fpICs2FMo7yC9fAzWdlq7acKlwPLrJy+aQov2wd+PeUXpvc78SzKzS0U4ULXjboplwtWj/moBDBoZ3BJbrmp1dlR0N7ATcJ7Q3cFLRXcBPQ3sHo6CBgZHQwMCo6KBgRHRyMhlYBI6HVwChoVTACWh1sjTYBW6LNwFZoU7AF2hysjYYAa6JhwFpoKPB/0LFIpzWbS6scbK+2D29Ft3GD+CZ0a48AVOjykAdTv3gWzh9dg324RSvE/6TVNg/g0CNs3f43xsvgTK3qfv8AAAAASUVORK5CYII=');
}


.m-slider {
	overflow-x: hidden;
	width: 100%;
	position: relative;
}

.slider-wrapper {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	width: 100%;
	height: 100%;
	-webkit-transform: translate3d(0px, 0px, 0px);
	transform: translate3d(0px, 0px, 0px);
	position: relative;
	z-index: 1;
	-webkit-transition-property: -webkit-transform;
	transition-property: -webkit-transform;
	transition-property: transform;
	transition-property: transform, -webkit-transform;
}

.slider-item {
	width: 100%;
	height: 100%;
	-webkit-flex-shrink: 0;
	-ms-flex-negative: 0;
	flex-shrink: 0;
	background: #f6f6f6;
}

.slider-item img {
	width: 100%;
	height: auto;
	display: block;
	border: none;
}

.slider-pagination {
	text-align: right;
	position: absolute;
	width: 100%;
	z-index: 2;
	right: 0;
	bottom: 10px;
	pointer-events: none;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: end;
	-webkit-align-items: flex-end;
	-ms-flex-align: end;
	align-items: flex-end;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
}

.slider-pagination > .slider-pagination-item {
	margin: 0 .25rem;
	width: 8px;
	height: 8px;
	display: inline-block;
	border-radius: 100%;
	background-color: rgba(255,255,255,0.4);
}

.slider-pagination > .slider-pagination-item.slider-pagination-item-active {
	background-color: #fff;
	border-radius: 100%;
}


.jq22-palace {
	padding: 0.5rem 0;
	position: relative;
	overflow: hidden;
}

.jq22-palace-grid {
	position: relative;
	float: left;
	padding: 1px;
	width: 25%;
	box-sizing: border-box;
	margin: 5px 0;
}

.jq22-palace-grid-icon {
	width: 30px;
	height: 30px;
	margin: 0 auto;
}

.jq22-palace-grid-icon img {
	display: block;
	width: 100%;
	height: 100%;
	border: none;
}

.jq22-palace-grid-text {
	display: block;
	text-align: center;
	color: #333;
	font-size: 0.85rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	padding-top: 0.2rem;
}

.jq22-palace-grid-text h2 {
	font-size: 0.8rem;
	font-weight: normal;
	color: #f57835;
}


.m-actionsheet {
	text-align: center;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
	background-color: #EFEFF4;
	-webkit-transform: translate(0, 100%);
	transform: translate(0, 100%);
	-webkit-transition: -webkit-transform .3s;
	transition: -webkit-transform .3s;
	transition: transform .3s;
	transition: transform .3s, -webkit-transform .3s;
}

.mask-black {
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	z-index: 500;
	bottom: 0;
	right: 0;
	left: 0;
	top: 0;
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-webkit-justify-content: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	z-index: 998;
}

.actionsheet-action {
	display: block;
	margin-top: .15rem;
	font-size: 0.28rem;
	color: #555;
	height: 1rem;
	line-height: 1rem;
	background-color: #FFF;
}

.m-actionsheet {
	text-align: center;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 10005;
	background-color: #ffffff;
	-webkit-transform: translate(0, 100%);
	transform: translate(0, 100%);
	-webkit-transition: -webkit-transform .3s;
	transition: -webkit-transform .3s;
	transition: transform .3s;
	transition: transform .3s, -webkit-transform .3s;
}

.actionsheet-toggle {
	-webkit-transform: translate(0, 0);
	transform: translate(0, 0);
}

.actionsheet-item {
	display: block;
	position: relative;
	font-size: 0.85rem;
	color: #555;
	height: 2rem;
	line-height: 2rem;
	background-color: #FFF;
}

.actionsheet-item {
	display: block;
	position: relative;
	font-size: 0.85rem;
	color: #555;
	height: 2rem;
	line-height: 2rem;
	background-color: #FFF;
}

.jq22-coll-cancel a {
	height: 45px;
	line-height: 45px;
	font-size: 12px;
	background: #f9f9f9;
	display: block;
	text-align: center;
	width: 100%;
}

.jq22-coll-share-img {
	width: 38px;
	height: 38px;
	margin: 0 auto;
}

.jq22-coll-share-img img {
	width: 100%;
	height: auto;
	display: block;
	border: none;
}

.jq22-coll-share-box {
	position: relative;
	overflow: hidden;
	padding: 10px 0;
}

.jq22-coll-cancel a {
	height: 45px;
	line-height: 45px;
	font-size: 12px;
	background: #f9f9f9;
	display: block;
	text-align: center;
	width: 100%;
}

.jq22-coll-share-item {
	position: relative;
	float: left;
	padding: 8px 10px;
	width: 33.333%;
	box-sizing: border-box;
	font-size: 12px;
	height: 85px;
}

.jq22-rule {
	position: absolute;
	right: 0;
	top: 1rem;
	background: #54ca9a;
	border-radius: 50px 0 0 50px;
	font-size: 0.8rem;
	padding: 0.2rem 0.6rem;
	color: #fff;
}


.jq22-auto-form{
	padding:0 1rem 2.2rem 1rem;
}

.jq22-auto-box{
	background:#fff;
	padding:1.2rem 1rem 3.5rem 1rem;
	width:100%;
	height:auto;
	box-shadow:0 4px 9px #dedede;
	border-radius:5px;
}

.jq22-palace .jq22-palace-grid:not(:nth-child(4n)):before{
	content: '';
	position: absolute;
	z-index: 0;
	top: 1rem;
	right: 0;
	width: 6px;
	height: 6px;
	border-radius:100%;
	background:#dddddd;
}
select {
	white-space: pre;
	-webkit-rtl-ordering: logical;
	color: black;
	cursor: default;
}
select {
	text-rendering: auto;
	color: initial;
	letter-spacing: normal;
	word-spacing: normal;
	text-transform: none;
	text-indent: 0px;
	text-shadow: none;
	text-align: start;
	font: 400 11px system-ui;
}
.weui-select {
	-webkit-appearance: none;
	border: 0;
	outline: 0;
	background-color: transparent;
	width: 100%;
	font-size: inherit;
	position: relative;
	z-index: 1;
	padding-left: 16px;
	height:2.3rem;
	color:#999;
}

option {
	font-weight: normal;
	display: block;
	white-space: pre;
	min-height: 1.2em;
	padding: 0px 2px 1px;
}

#btnSendCode1{
	position:absolute;
	right:15px;
	top:-3px;
	color:#f37936;
}


.jq22-auto-inp .jq22-flex{
	border:1px solid #dbdbdb;
	border-radius:3px;
	margin-bottom:1rem;
	padding:5px 15px;
}

.jq22-apply-btn{
	width:100%;
	height:2.8rem;
	line-height:2.8rem;
	background:#f47936;
	color:#fff;
	border:none;
	border-radius:3px;
	font-size:0.9rem;
}

.jq22-flex label{
	color:#000000;
	font-size:0.88rem;
	width:80px;
}

.jq22-flex-box input{
	background:none;
	border:none;
	padding:0.4rem 0;
	height:2.3rem;
	line-height:2.3rem;
}
</style>
