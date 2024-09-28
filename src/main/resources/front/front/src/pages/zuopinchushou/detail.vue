<template>
<div>
	<div :style='{"padding":"20px","margin":"64px auto 10px","borderRadius":"0 0 30px 30px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","display":"flex","width":"80%","justifyContent":"center"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'Ξ'" :style='{"fontSize":"15px","lineHeight":"1"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index" to="/index/zuopinchushou"><a>{{item.name}}</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item3"><a href="javascript:void(0);">详情</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div :style='{"padding":"20px","margin":"64px auto 10px","borderRadius":"0 0 30px 30px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","display":"flex","width":"80%","justifyContent":"center"}'>
		<el-button size="mini" @click="backClick">返回</el-button>
	</div>
	<div class="detail-preview" :style='{"padding":"0 10%","margin":"10px auto","alignItems":"flex-start","flexWrap":"wrap","background":"#F6F6F6","display":"flex","width":"100%","position":"relative"}'>
		<div class="attr" :style='{"minHeight":"550px","width":"45%","padding":"0 20px","position":"relative","background":"#fff","display":"flex"}'>

			<div class="info" :style='{"padding":"0","margin":"0 0 0 10px","background":"#fff","flex":"1"}'>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"space-between","display":"flex"}'>
					<div :style='{"color":"#000","fontSize":"16px","fontWeight":"bold"}'>
                    {{detail.zuopinmingcheng}}
                    </div>
					<div @click="storeup(1)" v-show="!isStoreup" :style='{"borderRadius":"5px","padding":"10px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)"}'><i v-if="true" :style='{"color":"#000","fontSize":"14px"}' class="el-icon-star-off"></i><span :style='{"color":"#000","fontSize":"14px"}'>点我收藏({{detail.storeupnum}})</span></div>
					<div @click="storeup(-1)" v-show="isStoreup" :style='{"borderRadius":"5px","padding":"10px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)"}'><i v-if="true" :style='{"color":"#000","fontSize":"14px"}' class="el-icon-star-on"></i><span :style='{"color":"#000","fontSize":"14px"}'>取消收藏({{detail.storeupnum}})</span></div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}' v-if="detail.price">
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>价格</div>
					<div style="font-weight: bold;" :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'><span :style='{"fontSize":"12px"}'>￥</span>{{detail.price}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}' v-if="detail.jf">
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>积分</div>
					<div style="color: red;font-weight: bold;" :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.jf}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>单限</div>
					<div :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.onelimittimes}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>库存</div>
					<div :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.alllimittimes}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>作品分类</div>
					<div  :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.zuopinfenlei}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>用户账号</div>
					<div  :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.yonghuzhanghao}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>用户姓名</div>
					<div  :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.yonghuxingming}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>点击次数</div>
					<div  :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.clicknum}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}' v-if="centerType">
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>是否审核</div>
					<div :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.sfsh}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}' v-if="centerType">
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>审核回复</div>
					<div :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.shhf}}</div>
				</div>
				<div class="btn" :style='{"padding":"10px 0","flexWrap":"wrap","display":"flex"}'>
					<el-input-number :style='{"width":"180px","margin":"0 5px 0 0","lineHeight":"38px","position":"relative","display":"inline-block"}' v-if="detail.alllimittimes" :min=1 v-model="buynumber"></el-input-number>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="detail.alllimittimes" type="warning" size="small" @click="addCart">添加到购物车</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="detail.alllimittimes" type="warning" size="small" @click="buyNow">立即购买</el-button>

				</div>
				<div class="btn" :style='{"padding":"10px 0","flexWrap":"wrap","display":"flex"}'>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('zuopinchushou','修改')&&detail.sfsh!='是'&&detail.sfsh!='否' " @click="editClick">修改</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#FFDFA680","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('zuopinchushou','删除')" @click="delClick">删除</el-button>
					
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#FFDFA680","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('zuopinchushou','审核') && (detail.sfsh=='待审核'||!detail.sfsh)" @click="onSH" type="warning">审核</el-button>
				</div>
			</div>
		</div>
		
			<el-carousel v-if="detailBanner.length" :style='{"width":"55%","margin":"0","height":"500px"}' trigger="click" indicator-position="inside" arrow="always" type="default" direction="horizontal" height="500px" :autoplay="false" :interval="3000" :loop="true">
				<el-carousel-item :style='{"borderRadius":"10px","width":"100%","height":"100%"}' v-for="item in detailBanner" :key="item.id">
					<img :style='{"objectFit":"cover","width":"100%","height":"500px"}' :preview-src-list="[item]" v-if="item.substr(0,4)=='http'" :src="item" class="image">
					<img :style='{"objectFit":"cover","width":"100%","height":"500px"}' :preview-src-list="[baseUrl + item]" v-else :src="baseUrl + item" class="image">
				</el-carousel-item>
			</el-carousel>

			<div class="zancai" :style='{"padding":"0","margin":"10px 0 0","top":"500px","background":"#fff","display":"flex","width":"44%","position":"absolute","right":"10%"}'>
				<div :style='{"padding":"0","margin":"0 2px","alignItems":"center","borderRadius":"5px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","display":"flex","width":"100%","lineHeight":"40px","justifyContent":"center","height":"40px"}' v-if="!isThumbsupnum && !isCrazilynum" class="zan" @click="thumbsupOrCrazily(21)">
					<i :style='{"color":"#000","margin":"0 5px","fontSize":"14px"}' class="iconfont icon-dianzan"></i>
					<span :style='{"color":"#000","margin":"0 3px","fontSize":"14px"}'>赞一下({{detail.thumbsupnum}})</span>
				</div>
				<div :style='{"padding":"0","margin":"0 2px","alignItems":"center","borderRadius":"5px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","display":"flex","width":"100%","lineHeight":"40px","justifyContent":"center","height":"40px"}' v-if="!isThumbsupnum && !isCrazilynum" class="cai" @click="thumbsupOrCrazily(22)">
					<i :style='{"color":"#000","margin":"0 5px","fontSize":"14px"}' class="iconfont icon-iconfontzan"></i>
					<span :style='{"color":"#000","margin":"0 3px","fontSize":"14px"}'>踩一下({{detail.crazilynum}})</span>
				</div>
				<div :style='{"padding":"0","margin":"0 2px","alignItems":"center","borderRadius":"5px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","display":"flex","width":"100%","lineHeight":"40px","justifyContent":"center","height":"40px"}' v-if="isThumbsupnum" class="zan" @click="cancelThumbsupOrCrazily(21)">
					<i :style='{"color":"#000","margin":"0 5px","fontSize":"14px"}' class="iconfont icon-dianzan"></i>
					<span :style='{"color":"#000","margin":"0 3px","fontSize":"14px"}'>取消赞({{detail.thumbsupnum}})</span>
				</div>
				<div :style='{"padding":"0","margin":"0 2px","alignItems":"center","borderRadius":"5px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","display":"flex","width":"100%","lineHeight":"40px","justifyContent":"center","height":"40px"}' v-if="isCrazilynum" class="cai" @click="cancelThumbsupOrCrazily(22)">
					<i :style='{"color":"#000","margin":"0 5px","fontSize":"14px"}' class="iconfont icon-iconfontzan"></i>
					<span :style='{"color":"#000","margin":"0 3px","fontSize":"14px"}'>取消踩({{detail.crazilynum}})</span>
				</div>
			</div>

		
		<video :style='{"border":"0","width":"100%","margin":"10px auto","outline":"none","borderRadius":"4px","display":"block"}' :src="baseUrl +  detail.sheyingshipin" controls="controls">
			您的浏览器不支持视频播放
		</video>

		
		<el-tabs class="detail" :style='{"border":"none","width":"100%","boxShadow":"none","background":"none"}' v-model="activeName" type="border-card">
												<el-tab-pane label="作品简介" name="first">
				<div v-html="detail.zuopinjianjie"></div>
			</el-tab-pane>
																							<el-tab-pane label="评论" name="second">
				<el-form class="add comment" :style='{"boxShadow":"none","padding":"15px","margin":"0 0 20px"}' :model="form" :rules="rules" ref="form">
					<el-form-item class="item" :style='{"width":"100%","display":"flex","height":"auto"}' label="评论" prop="content">
						<editor
						    :style='{"border":"0","boxShadow":"none","color":"#333","borderRadius":"4px","width":"100%","lineHeight":"32px","fontSize":"14px"}'
						    v-model="form.content" 
						    class="editor" 
						    action="file/upload">
						</editor>
					</el-form-item>
					<el-form-item class="btn" :style='{"width":"100%","padding":"0 0 0 80px","margin":"10px 0 0","height":"auto"}'>
						<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","color":"#000","outline":"none","borderRadius":"4px","background":"#5FE3EB","width":"128px","lineHeight":"40px","fontSize":"15px","fontWeight":"bold","height":"40px"}' type="primary" @click="submitForm('form')">立即提交</el-button>
						<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","color":"#000","outline":"none","borderRadius":"4px","background":"#FFDFA6","width":"128px","lineHeight":"40px","fontSize":"15px","fontWeight":"bold","height":"40px"}' @click="resetForm('form')">重置</el-button>
					</el-form-item>
				</el-form>
				
				<div v-if="infoList.length" :style='{"boxShadow":"none","padding":"0"}' class="comment">
					<div :style='{"padding":"15px","margin":"0 0 20px","borderColor":"#5FE3EB","alignItems":"center","borderRadius":"10px","borderWidth":"2px","background":"#fff","width":"100%","borderStyle":"solid","height":"auto"}' v-for="item in infoList" :key="item.id" @mouseenter="discussEnter(item.id)"
						@mouseleave="discussLeave">
						<div class="user" :style='{"width":"100%","alignItems":"center","display":"flex","height":"auto"}'>
							<el-image v-if="item.avatarurl" :style='{"width":"40px","margin":"0 10px 0 0","borderRadius":"100%","objectFit":"cover","height":"40px"}' :size="50" :src="baseUrl + item.avatarurl"></el-image>
							<el-image v-if="!item.avatarurl" :style='{"width":"40px","margin":"0 10px 0 0","borderRadius":"100%","objectFit":"cover","height":"40px"}' :size="50" :src="require('@/assets/touxiang.png')"></el-image>
							<div :style='{"color":"#333","fontSize":"16px"}' class="name">{{item.nickname}}</div>
						</div>
						<div :style='{"padding":"8px","boxShadow":"none","margin":"10px 0px 0px","color":"#9E9E9E","borderRadius":"4px","background":"none","wordWrap":"break-word","lineHeight":"30px","fontSize":"14px"}' class="content-block-ask">
							<div v-html="item.content"></div>
							<div class="btn" :style='{"width":"100%","margin":"8px 0 0 0","alignItems":"center","justifyContent":"flex-end","display":"flex","height":"25px"}'>
							  <!-- <el-button :style='{"border":"0","cursor":"pointer","padding":"0 20px","margin":"0 10px","outline":"none","color":"#000","borderRadius":"5px","background":"#5FE3EB","width":"auto","lineHeight":"25px","fontSize":"14px","height":"25px"}'>回复</el-button> -->
							  <el-button v-if="showIndex==item.id&&userid==item.userid" @click="discussDel(item.id)" :style='{"border":"0","cursor":"pointer","padding":"0 20px","margin":"0 10px","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"5px","background":"#9E9E9E","width":"auto","lineHeight":"25px","fontSize":"14px","height":"25px"}'>删除</el-button>
							</div>
						</div>
						<div :style='{"padding":"8px","boxShadow":"none","margin":"10px 0px 0px","color":"#9E9E9E","borderRadius":"4px","background":"none","wordWrap":"break-word","lineHeight":"30px","fontSize":"14px"}' class="content-block-reply" v-if="item.reply">
							回复：<span v-html="item.reply"></span>
						</div>
					</div>
				</div>
				
				<el-pagination
				  background
				  id="pagination" class="pagination"
				  :pager-count="7"
				  :page-size="pageSize"
				  :page-sizes="pageSizes"
				  prev-text="<"
				  next-text=">"
				  :hide-on-single-page="true"
				  :layout='["prev","pager","next"].join()'
				  :total="total"
				  :style='{"padding":"10px","margin":"0 auto","whiteSpace":"nowrap","color":"#333","textAlign":"center","background":"#F6F6F6","width":"100%","fontWeight":"500"}'
				  @current-change="curChange"
				  @prev-click="prevClick"
				  @next-click="nextClick"
				></el-pagination>
			</el-tab-pane>
		</el-tabs>
		<el-dialog title="审核" :visible.sync="sfshVisiable" width="50%">
			<el-form ref="shForm" :model="shForm" label-width="80px">
				<el-form-item label="审核状态">
					<el-select v-model="shForm.sfsh" placeholder="审核状态">
						<el-option label="通过" value="是"></el-option>
						<el-option label="不通过" value="否"></el-option>
						<el-option label="待审核" value="待审核"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="内容">
					<el-input type="textarea" :rows="8" v-model="shForm.shhf"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="sfshVisiable = false">取 消</el-button>
				<el-button type="primary" @click="shHandler">确 定</el-button>
			</div>
		</el-dialog>
	</div>
	<div class="share_view" :style='{"boxShadow":"0 1px 6px rgba(0,0,0,.3)","position":"fixed","right":"0","bottom":"20%","background":"#fff","zIndex":"11"}'>
	</div>
</div>
</template>

<script>
  import CountDown from '@/components/CountDown';
  import axios from 'axios'
  import Swiper from "swiper";
  
  export default {
    //数据集合
    data() {
      return {
        tablename: 'zuopinchushou',
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '作品出售'
          }
        ],
        title: '',
        detailBanner: [],
		userid: localStorage.getItem('frontUserid'),
		id: 0,
        detail: {},
        activeName: 'second',
        form: {
          content: '',
          userid: localStorage.getItem('frontUserid'),
          nickname: localStorage.getItem('username'),
          avatarurl: '',
        },
		showIndex: -1,
        infoList: [],
        rules: {
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' }
          ],
        },
        total: 1,
        pageSize: 5,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        storeupParams: {
          name: '',
          picture: '',
          refid: 0,
          tablename: 'zuopinchushou',
          userid: localStorage.getItem('frontUserid')
        },
        isStoreup: false,
        storeupInfo: {},
        isCrazilynum: false,
        isThumbsupnum: false,
        thumbsupOrCrazilyInfo: {},
        buynumber: 1,
        cart: {
          buynumber: 0,
          discountprice: 0,
          goodid: 0,
          goodname: '',
          picture: '',
          price: 0,
          userid: localStorage.getItem('frontUserid')
        },
        isInCart: false,
        sfshVisiable: false,
        shForm: {
          sfsh: '是',
          shhf: ''
        },
		centerType: false,
		shareUrl: location.href,
      }
    },
    created() {
		if(this.$route.query.centerType) {
			this.centerType = true
		}
		
        this.init();
    },
	mounted() {
	},
    //方法集合
    methods: {
        init() {
		  this.id = this.$route.query.id
          this.baseUrl = this.$config.baseUrl;
          this.$http.get(this.tablename + '/detail/'  + this.id, {}).then(res => {
            if (res.data.code == 0) {
              this.detail = res.data.data;
              this.title = this.detail.zuopinmingcheng;
              this.detailBanner = this.detail.zuopintupian ? this.detail.zuopintupian.split(",") : [];
              this.$forceUpdate();

			  this.getDiscussList(1);
				if(localStorage.getItem('frontToken')){
					this.getStoreupStatus();
					this.getThumbsupOrCrazilyStatus();
					this.getCartList();
				}

            }
          });
        },
      onSH() {
        this.sfshVisiable = true;
      },
      shHandler(){
        this.$confirm(`确定操作?`, "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.detail.sfsh = this.shForm.sfsh;
          this.detail.shhf = this.shForm.shhf;
          this.$http.post(`${this.tablename}/update`, this.detail).then(res => {
            if (res.data.code == 0) {
              this.sfshVisiable = false;
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
              });
            }
          });
        });
      },
      storeup(type) {
        if (type == 1 && !this.isStoreup) {
          this.storeupParams.name = this.title;
          this.storeupParams.picture = this.detailBanner[0];
          this.storeupParams.refid = this.detail.id;
          this.storeupParams.type = type;
          this.$http.post('storeup/add', this.storeupParams).then(res => {
            if (res.data.code == 0) {
              this.isStoreup = true;
			  this.detail.storeupnum++
			  this.$http.post('zuopinchushou/update', this.detail).then(res => {});
              this.$message({
                type: 'success',
                message: '收藏成功!',
                duration: 1500,
              });
            }
          });
        }
        if (type == -1 && this.isStoreup) {
          this.$http.get('storeup/list', {params: {page: 1, limit: 1, type: 1, refid: this.detail.id, tablename: 'zuopinchushou', userid: localStorage.getItem('frontUserid')}}).then(res => {
            if (res.data.code == 0 && res.data.data.list.length > 0) {
              this.isStoreup = true;
              this.storeupInfo = res.data.data.list[0];
              let delIds = new Array();
              delIds.push(this.storeupInfo.id);
              this.$http.post('storeup/delete', delIds).then(res => {
                if (res.data.code == 0) {
                  this.isStoreup = false;
				  this.detail.storeupnum--
				  this.$http.post('zuopinchushou/update', this.detail).then(res => {});
                  this.$message({
                    type: 'success',
                    message: '取消成功!',
                    duration: 1500,
                  });
                }
              });
            }
          });
        }
      },
      getStoreupStatus(){
        if(localStorage.getItem("frontToken")) {
            this.$http.get('storeup/list', {params: {page: 1, limit: 1, type: 1, refid: this.detail.id, tablename: 'zuopinchushou', userid: localStorage.getItem('frontUserid')}}).then(res => {
              if (res.data.code == 0 && res.data.data.list.length > 0) {
                this.isStoreup = true;
                this.storeupInfo = res.data.data.list[0];
              }
            });
        }
      },
      thumbsupOrCrazily(type) {
        this.storeupParams.name = this.title;
        this.storeupParams.picture = this.detailBanner[0];
        this.storeupParams.refid = this.detail.id;
        this.storeupParams.type = type;
        this.$http.post('storeup/add', this.storeupParams).then(res => {
          if (res.data.code == 0) {
            this.getThumbsupOrCrazilyStatus();
            this.$message({
              type: 'success',
              message: '操作成功!',
              duration: 1500,
            });
          }
        });

        if (type == 21) this.detail.thumbsupnum = Number(this.detail.thumbsupnum) + 1;
        if (type == 22) this.detail.crazilynum = Number(this.detail.crazilynum) + 1;
        this.$http.post('zuopinchushou/update', this.detail).then(res => {});
      },
      cancelThumbsupOrCrazily(type) {
        let delIds = new Array();
        delIds.push(this.thumbsupOrCrazilyInfo.id);
        this.$http.post('storeup/delete', delIds).then(res => {
          if (res.data.code == 0) {
            this.isThumbsupnum = false;
            this.isCrazilynum = false;
            this.$message({
              type: 'success',
              message: '取消成功!',
              duration: 1500,
            });
          }
        });

        if (type == 21) this.detail.thumbsupnum -= 1;
        if (type == 22) this.detail.crazilynum -= 1;
        this.$http.post('zuopinchushou/update', this.detail).then(res => {});
      },
    getThumbsupOrCrazilyStatus() {
        if(localStorage.getItem("frontToken")) {
            this.$http.get('storeup/list', {params: {page: 1, limit: 1, type: 21, refid: this.detail.id, tablename: 'zuopinchushou', userid: localStorage.getItem('frontUserid')}}).then(res => {
              if (res.data.code == 0 && res.data.data.list.length > 0) {
                this.isThumbsupnum = true;
                this.thumbsupOrCrazilyInfo = res.data.data.list[0];
              }
            });

            this.$http.get('storeup/list', {params: {page: 1, limit: 1, type: 22, refid: this.detail.id, tablename: 'zuopinchushou', userid: localStorage.getItem('frontUserid')}}).then(res => {
              if (res.data.code == 0 && res.data.data.list.length > 0) {
                this.isCrazilynum = true;
                this.thumbsupOrCrazilyInfo = res.data.data.list[0];
              }
            });
        }
    },
      curChange(page) {
        this.getDiscussList(page);
      },
      prevClick(page) {
        this.getDiscussList(page);
      },
      nextClick(page) {
        this.getDiscussList(page);
      },
		// 返回按钮
		backClick(){
			history.back()
		},
		// 下载
		download(file){
			if(!file) {
				this.$message({
				  type: 'error',
				  message: '文件不存在',
				  duration: 1500,
				});
				return;
			}
		  let arr = file.replace(new RegExp('upload/', "g"), "")
		  axios.get(this.baseUrl + '/file/download?fileName=' + arr, {
		  	headers: {
		  		token: localStorage.getItem("frontToken")
		  	},
		  	responseType: "blob"
		  }).then(({
		  	data
		  }) => {
		  	const binaryData = [];
		  	binaryData.push(data);
		  	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
		  		type: 'application/pdf;chartset=UTF-8'
		  	}))
		  	const a = document.createElement('a')
		  	a.href = objectUrl
		  	a.download = arr
		  	// a.click()
		  	// 下面这个写法兼容火狐
		  	a.dispatchEvent(new MouseEvent('click', {
		  		bubbles: true,
		  		cancelable: true,
		  		view: window
		  	}))
		  	window.URL.revokeObjectURL(data)
		  },err=>{
			  axios.get((location.href.split(this.$config.name).length>1 ? location.href.split(this.$config.name)[0] :'') + this.$config.name + '/file/download?fileName=' + arr, {
			  	headers: {
			  		token: localStorage.getItem("frontToken")
			  	},
			  	responseType: "blob"
			  }).then(({
			  	data
			  }) => {
			  	const binaryData = [];
			  	binaryData.push(data);
			  	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
			  		type: 'application/pdf;chartset=UTF-8'
			  	}))
			  	const a = document.createElement('a')
			  	a.href = objectUrl
			  	a.download = arr
			  	// a.click()
			  	// 下面这个写法兼容火狐
			  	a.dispatchEvent(new MouseEvent('click', {
			  		bubbles: true,
			  		cancelable: true,
			  		view: window
			  	}))
			  	window.URL.revokeObjectURL(data)
			  })
		  })
      },
      getDiscussList(page) {
        this.$http.get('discusszuopinchushou/list', {params: {page, limit: this.pageSize, refid: this.detail.id}}).then(res => {
          if (res.data.code == 0) {
            this.infoList = res.data.data.list;
            this.total = res.data.data.total;
            this.pageSize = res.data.data.pageSize;this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
            this.totalPage = res.data.data.totalPage;
          }
        });
      },
	  discussEnter(index){
		  this.showIndex = index
	  },
	  discussLeave(){
		  this.showIndex = -1
	  },
	  discussDel(id){
		  this.$confirm('是否删除此评论？')
		    .then(_ => {
		      this.$http.post('discusszuopinchushou/delete',[id]).then(res=>{
				  if(res.data&&res.data.code==0){
					  this.addDiscussNum(1)
					  this.$message({
					    type: 'success',
					    message: '删除成功!',
					    duration: 1500,
						onClose: () => {
							this.getDiscussList(1);
						}
					  });
				  }
			  })
		    }).catch(_ => {});
	  },
      submitForm(formName) {
        let sensitiveWords = "";
        let sensitiveWordsArr = [];
        if(sensitiveWords) {
            sensitiveWordsArr = sensitiveWords.split(",");
        }
        for(var i=0; i<sensitiveWordsArr.length; i++){
            //全局替换
            var reg = new RegExp(sensitiveWordsArr[i],"g");
            //判断内容中是否包括敏感词
            if (this.form.content.indexOf(sensitiveWordsArr[i]) > -1) {
                // 将敏感词替换为 **
                this.form.content = this.form.content.replace(reg,"**");
            }
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get('orders/list', {params: {page: 1, limit: 1, status: '已完成', goodid: this.detail.id, userid: localStorage.getItem('frontUserid')}}).then(res => {
                if (res.data.code == 0 && res.data.data.list.length == 0) {
                  this.$message({
                    type: 'success',
                    message: '请完成订单后再评论!',
                    duration: 1500
                  });
                  return false
                } else {
                    this.form.refid = this.detail.id;
                    this.form.avatarurl = localStorage.getItem('frontHeadportrait')?localStorage.getItem('frontHeadportrait'):'';
                    this.$http.post('discusszuopinchushou/add', this.form).then(res => {
						if (res.data.code == 0) {
							this.addDiscussNum(2)
							this.form.content = '';
							this.getDiscussList(1);
							this.$message({
								type: 'success',
								message: '评论成功!',
								duration: 1500,
							});
						}
                    });
                }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
	  addDiscussNum(type){
		  if(type==2){
			  this.detail.discussnum++
		  }else if(type==1){
			  if(this.detail.discussnum!=0){
				  this.detail.discussnum--
			  }else{
				  this.detail.discussnum = 0
			  }
		  }
		  this.$http.post('zuopinchushou/update',this.detail).then(res=>{
			  
		  })
	  },
      getCartList() {
        this.$http.get('cart/list', {params: {userid: localStorage.getItem('frontUserid'), tablename: 'zuopinchushou', goodid: this.detail.id}}).then(res => {
          if (res.data.code == 0) {
            if (res.data.data.list.length > 0) {
              this.isInCart = true;
            } else {
              this.isInCart = false;
            }
          }
        });
      },
      addCart() {
            // 单次购买限制
            if (this.detail.onelimittimes > 0 && this.detail.onelimittimes < this.buynumber) {
                this.$message.error(`每人单次只能购买${this.detail.onelimittimes}件`);
                return
            }
            // 库存不够
            if (this.detail.alllimittimes <= 0 ) {
                this.$message.error(`商品已售罄`);
                return
            }
            // 库存限制
            if (this.detail.alllimittimes > 0 && this.detail.alllimittimes < this.buynumber) {
                this.$message.error(`库存不足`);
                return
            }
        if (this.isInCart) {
          this.$message.error('该商品已经添加到购物车');
          return;
        }

        this.cart.buynumber = this.buynumber;
        this.cart.goodid = this.detail.id;
        this.cart.goodname = this.title;
        this.cart.tablename = this.tablename;
        this.cart.yonghuzhanghao = this.detail.yonghuzhanghao;
        this.cart.picture = this.detailBanner[0];
        this.cart.price = this.detail.price;
        this.$http.post('cart/save', this.cart).then(res => {
          if (res.data.code === 0) {
            this.getCartList();
            this.$message({
              message: '添加成功',
              type: 'success',
              duration: 1500,
            });
          } else {
            this.$message.error(res.data.msg);
          }
        });
      },
        //立即购买
        buyNow() {
            // 单次购买限制
            if (this.detail.onelimittimes > 0 && this.detail.onelimittimes < this.buynumber) {
                this.$message.error(`每人单次只能购买${this.detail.onelimittimes}件`);
                return
            }
            // 库存不够
            if (this.detail.alllimittimes <= 0 ) {
                this.$message.error(`商品已售罄`);
                return
            }
            // 库存限制
            if (this.detail.alllimittimes > 0 && this.detail.alllimittimes < this.buynumber) {
                this.$message.error(`库存不足`);
                return
            }
            // 保存到storage中，在确认下单页面中获取要购买的商品
            localStorage.setItem('orderGoods', JSON.stringify([{
                tablename: this.tablename,
                goodid: this.detail.id,
                goodname: this.title,
                yonghuzhanghao: this.detail.yonghuzhanghao,

                picture:this.detailBanner[0],
                buynumber: this.buynumber,
                userid: localStorage.getItem('frontUserid'),
                price: this.detail.price,
                discountprice: this.detail.vipprice ? this.detail.vipprice : 0
            }]));
            // 跳转到确认下单页面
            let query = {
                type: 1,
            }
            this.$router.push({path: '/index/shop-order/orderConfirm', query: query});
        },


		// 权限判断
		btnAuth(tableName,key){
			if(this.centerType){
				return this.isBackAuth(tableName,key)
			}else{
				return this.isAuth(tableName,key)
			}
		},
		// 修改
		editClick(){
			this.$router.push(`/index/zuopinchushouAdd?type=edit&&id=${this.detail.id}`);
		},
		// 删除
		async delClick(){
			await this.$confirm('是否删除此作品出售？')
			  .then(_ => {
			    this.$http.post('zuopinchushou/delete', [this.detail.id]).then(async res => {
					if (res.data.code == 0) {
						this.$http.get('storeup/list',{params:{
							page: 1,
							limit: 100,
							refid: this.detail.id,
							tablename: 'zuopinchushou',
						}}).then(async obj=>{
							if(obj.data&&obj.data.code==0){
								let arr = []
								for(let x in obj.data.data.list){
									arr.push(obj.data.data.list[x].id)
								}
								await this.$http.post('storeup/delete',arr).then(()=>{})
								this.$message({
									type: 'success',
									message: '删除成功!',
									duration: 1500,
									onClose: () => {
										history.back()
									}
								});
							}
						})
					}
			    });
			  }).catch(_ => {});
		},
    },
    components: {
      CountDown
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.editor /deep/ .avatar-uploader {
		height: 0;
		line-height: 0;
	}
	
	.detail-preview {
	
	  .attr {
	    .el-carousel /deep/ .el-carousel__indicator button {
	      width: 0;
	      height: 0;
	      display: none;
	    }
	
	    .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
	      border-color: none;
	    }
	  }
	
	  .detail {
	    & /deep/ .el-tabs__header .el-tabs__nav-wrap {
	      margin-bottom: 0;
	    }
	
	    & .add .el-textarea {
	      width: auto;
	    }
	  }
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: red;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: red;
	}

	.attr .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 0.7;
		height: 12px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li.is-active {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 1;
		height: 12px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__decrease {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		border-radius: 4px 0 0 4px;
		top: 1px;
		left: 1px;
		background: linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%);
		width: 40px;
		justify-content: center;
		border-width: 0 1px 0 0;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 38px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__decrease i {
		color: #000;
		font-size: 14px;
	}

	.attr .el-input-number /deep/ .el-input-number__increase {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		right: 1px;
		border-radius: 0 4px 4px 0;
		top: 1px;
		background: linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%);
		width: 40px;
		justify-content: center;
		border-width: 0 0 0 1px;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 38px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__increase i {
		color: #000;
		font-size: 14px;
	}
	
	.attr .el-input-number /deep/ .el-input .el-input__inner {
		border: 1px solid #FFDFA6;
		border-radius: 4px;
		padding: 0 40px;
		outline: none;
		color: #000;
		background: #FFF;
		display: inline-block;
		width: 100%;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		height: 40px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header {
		margin: 0;
		background: linear-gradient(271deg, #5FE3EB 0%, #FFDFA6 100%);
		border-color: #E4E7ED;
		border-width: 0;
		border-style: solid;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item {
		border: 0;
		padding: 0 40px;
		margin: 0 10px;
		color: #000;
		background: none;
		font-weight: 500;
		display: inline-block;
		font-size: 16px;
		line-height: 50px;
		position: relative;
		list-style: none;
		height: 50px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
		border: 1px solid #5FE3EB;
		padding: 0 40px;
		margin: 0 10px;
		color: #5FE3EB;
		background: #FFF;
		font-weight: bold;
		font-size: 16px;
		border-width: 0 0 2px;
		line-height: 50px;
		height: 50px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
		border: 1px solid #5FE3EB;
		padding: 0 40px;
		margin: 0 10px;
		color: #5FE3EB;
		background: #FFF;
		font-weight: bold;
		font-size: 16px;
		border-width: 0 0 2px;
		line-height: 50px;
		height: 50px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__content {
		padding: 15px;
	}
	
	.detail-preview .detail.el-tabs .add /deep/ .el-form-item__label {
		padding: 0 10px 0 0;
		color: #666;
		width: 80px;
		font-size: 14px;
		line-height: 40px;
		text-align: right;
	}
	
	.detail-preview .detail.el-tabs .add /deep/ .el-textarea__inner {
	}
	
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 20px;
		color: #000;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb .item1 /deep/ .el-breadcrumb__inner a {
		color: #000;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb .item2 /deep/ .el-breadcrumb__inner a {
		color: #000;
		display: inline-block;
	}
		
	.breadcrumb-preview .el-breadcrumb .item3 /deep/ .el-breadcrumb__inner a {
		color: #000;
		display: inline-block;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #fff;
		background: #5FE3EB;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #fff;
		background: #5FE3EB;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev:disabled {
		border: none;
		cursor: not-allowed;
		padding: 0;
		margin: 0 5px;
		color: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		filter: grayscale(70%);
		border-radius: 2px;
		background: #5FE3EB;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next:disabled {
		border: none;
		cursor: not-allowed;
		padding: 0;
		margin: 0 5px;
		color: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		filter: grayscale(70%);
		border-radius: 2px;
		background: #5FE3EB;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #000;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #CBCBCB;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number:hover {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #000;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #FFDFA6;
		text-align: center;
		min-width: 30px;
		height: 28px;
}

#pagination.el-pagination /deep/ .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #000;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #FFDFA6;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 25px 0 8px;
		color: #606266;
		display: inline-block;
		font-size: 13px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}

	#pagination.el-pagination /deep/ .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	.share_view{
		position: fixed;
		right:0;
		bottom: 20%;
		background: #fff;
		box-shadow: 0 4px 6px rgba(0,0,0,.1);
		.share{
			width: 40px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid #eee;
			cursor: pointer;
		}
		.share:last-of-type{
			border:none;
		}
	}


	.detail-preview .el-rate /deep/ .el-rate__item {
				cursor: pointer;
				display: inline-block;
				vertical-align: middle;
				font-size: 0;
				position: relative;
			}
	
	.detail-preview .el-rate /deep/ .el-rate__item .el-rate__icon {
				margin: 0 3px;
				display: block;
				font-size: 18px;
				position: relative;
				transition: .3s;
			}
</style>
