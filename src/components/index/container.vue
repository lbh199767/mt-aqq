<template>
  <div class="m-istyle">
      <dl @mouseover="over" :class="nav.class">
          <!-- <dt>有格调</dt>
          <dd :class="{active:kind=='all'}" data-type="all">全部</dd>
          <dd :class="{active:kind=='food'}" data-type="food">约会聚餐</dd>
          <dd :class="{active:kind=='spa'}" data-type="spa">丽人SPA</dd>
          <dd :class="{active:kind=='movie'}" data-type="movie">电影演出</dd>
          <dd :class="{active:kind=='travel'}" data-type="travel">品质出游</dd> -->
          <dl @mouseover="over">
            <dt>{{nav.title}}</dt>
            <dd 
              v-for="(item,index) in nav.list"
              :key="index"
              :class="{active:kind==item.tab}"
              :data-type='item.tab'
            >{{item.text}}
            </dd>
          </dl>
      </dl>
      <!-- axios请求来的数据 -->
      <!-- <li v-for="(item,index) in resultsData[kind]" :key="index">
              <el-card :body-style="{ padding: '0px' }" shadow="never">
                <img :src="item.image" class="image">
                <div class="cbody">
                    <div class="title" :title="item.title">{{item.title}}</div>
                    <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
                    <div class="price-info">
                        <span class="current-price-wrapper">
                            <span class="price-symbol numfont">￥</span>
                            <span class="current-price numfont">{{item.price}}</span>
                        </span>
                        <span class="sold bottom-right-info">{{item.address}}</span>
                    </div>
                </div>
              </el-card>
          </li> -->
      <ul class="ibody">
          <li v-for="(item,index) in list" :key="index">
              <el-card :body-style="{ padding: '0px' }" shadow="never">
                <img :src="item.image" class="image">
                <div class="cbody">
                    <div class="title" :title="item.title">{{item.title}}</div>
                    <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
                    <div class="price-info" v-if="item.rentNum&&item.price_info.current_price">
                        <span class="current-price-wrapper">
                            <span class="price-symbol numfont">￥</span>
                            <span class="current-price numfont">{{item.price_info.current_price}}</span>
                        </span>
                        <span class="old-price">门市价{{item.price_info.old_price}}</span>
                        <span class="sold bottom-right-info">{{item.address}}</span>
                    </div>
                    <div class="price-info" v-else-if="!item.rentNum">
                      <span class="current-price-wrapper">
                          <span class="price-symbol numfont">￥</span>
                          <span class="current-price numfont">抢光了</span>
                      </span>
                    </div>
                    <div class="price-info" v-else>
                      <span class="current-price-wrapper">
                        <span class="price-symbol numfont">￥</span>
                        <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                        <span class="units">/{{item.price_info.units}}均</span>
                      </span>
                    </div>
                </div>
              </el-card>
          </li>
      </ul>

  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data(){
        return {
            kind:'all',
            resultsData:{},
            list:[{
                image:'https://img.meituan.net/phoenix/514ec8d914ba5eff2a954f34bf1c280d1047202.jpg',
                title:'COSTA COFFEE(新田瑞店)',
                sub_title:'巧克力酥卷小美式，建议单人使用',
                price_info:{
                    current_price:null,
                    old_price:null,
                    avg_price:18,
                    units:"人"
                },
                rentNum:1,
                address:'崇文门',
            },{
                image:'http://p1.meituan.net/iphoenix/7228dbe545e337d2d60911235edb60832413955.jpg@740w_416h_1e_1c',
                title:'胡桃里音乐酒馆（世贸天阶店）',
                sub_title:'下午茶双人套餐，提供免费wifi',
                price_info:{
                    current_price:98,
                    old_price:194,
                    avg_price:null,
                    units:null,
                },
                rentNum:10,
                address:'朝外天街/世贸天阶店',
            },{
                image:'https://img.meituan.net/phoenix/371ebcecd9c7fd9f183b01a671bec6e32046214.jpg@740w_416h_1e_1c',
                title:'COSTA COFFEE(新田瑞店)',
                sub_title:'巧克力酥卷小美式，建议单人使用',
                price_info:{
                    current_price:18,
                    old_price:36,
                },
                address:'崇文门',
            }]
        }
    },
    created(){
        api.resultsByKeywords().then(res=>{
            this.resultsData=res.data.data;
        })
    },
    props:[
      'nav',
    ],
    methods:{
        over(e){
            // console.log(e.target)
            let dom=e.target;
            let tagName=dom.tagName.toLowerCase();
            if(tagName!='dd'){
                return false;
            }
            this.kind=dom.getAttribute('data-type');
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss"
</style>