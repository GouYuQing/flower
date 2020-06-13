<template>
    <div>
        <div>
            <van-nav-bar 
             title="花单查询"
             left-text="返回"
             right-text="..."
             left-arrow
              />
        </div>
        <div class="top">
           <img src="../../assets/images/avator.png" class="top-img" />
           <div><h3>快乐宝贝</h3><p>ID:1159793978</p></div>
        </div>
        <div>
            <van-cell-group>
                <van-cell class="iconfont icon-dingdan" title="我的订单" is-link to="/order" />
                <!-- <van-cell class="iconfont icon-gouwuche" title="购物车" is-link  /> -->
                <van-cell class="iconfont icon-youhuiquan" title="我的优惠券" is-link to="/coupons" />
                <van-cell class="iconfont icon-B" title="我的积分" is-link value="496"/>
                <van-cell class="iconfont icon-dingwei" title="收货地址" is-link to="/address" />
            </van-cell-group>

        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
        }
    }
</script>

<style scoped>
 .top{
        height:5rem;
        text-align: left;
        padding-top:2rem;
        padding-left:1rem;
        padding-bottom: 2rem;
        background-color:white ;
    }
    .top-img{
        width:100px;
        height: 100px;
        border-radius: 50%;
    }
    .top div{
        float: right;
        margin-right: 6rem;
    }
    .top div p{
        color: #ccc;
    }
</style>