<template>
  <div>
      <span class="name">按省份选择：</span>
      <m-select 
        className="province"
        :list="provinceList" 
        title="省份" 
        :value="province" 
        :showWrapperActive='provinceActive' 
        @change="changeProvine"
        @change_active="changeProvinceActive"/>
      <m-select 
        :list="cityList" 
        title="城市" 
        className="city"
        :value="city" 
        :showWrapperActive='cityActive'
        @change="changeCity"
        :disabled="cityDisabled"
        @change_active="changeCityActive"/>
      <span>直接搜索</span>
      <el-select
        v-model="searchWord"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
            v-for="item in searchList"
            :key="item"
            :label="item"
            :value="item">
        </el-option>
      </el-select>

  </div>
</template>

<script>
import MSelect from "./select.vue";
import api from '@/api/index.js'
export default {
    data(){
        return{
            provinceList:[],
            province:"省份",
            cityList:[],
            city:'城市',
            provinceActive:false,
            cityActive:false,
            searchList:['成都','绵阳','德阳','自贡','巴中','广元','达州'],
            searchWord:'',
            loading:false,
            cityDisabled:true
        }
    },
    components:{
        MSelect
    },
    created(){
        api.getProvinceList().then(res=>{
            this.provinceList=res.data.data.map((item)=>{
                item.name=item.provinceName;
                return item;
            });
        })
    },
    methods:{
        changeProvinceActive(flag){
            this.provinceActive=flag;
            if(flag){
                this.cityActive=false;
            }
        },
        changeCityActive(flag){
            this.cityActive=flag;
            if(flag){
                this.provinceActive=false;
            }
        },
        changeProvine(item){
            this.province=item.name;
            this.cityDisabled=false;
            this.cityList=item.cityInfoList;
        },
        changeCity(item){
            this.city=item.name;
            this.$store.dispatch('setPosition',item)
            this.$router.push({name:'index'})
        },
        remoteMethod(val){
            console.log(document.cookie,localStorage)
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/changecity/iselect.scss"
</style>