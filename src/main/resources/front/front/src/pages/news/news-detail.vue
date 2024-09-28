<template>
	<div :style='{"width":"100%","padding":"10px 10%","margin":"10px auto","position":"relative","background":"#F6F6F6"}'>
	<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="warning" size="mini" @click="backClick" class="el-icon-back">返回</el-button>
	<div :style='{"width":"100%"}'>
		<div :style='{"width":"100%","borderRadius":"30px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","fontWeight":"bold","height":"auto"}'>
			<div :style='{"margin":"10px 0","fontSize":"20px","lineHeight":"54px","color":"#333","textAlign":"center","background":"none"}'>社团资讯</div>
		</div>
		<div :style='{"border":"2px solid #5FE3EB","padding":"20px 20px 0","borderRadius":"10px 10px 0 0","flexWrap":"wrap","background":"#fff","borderWidth":"2px 2px 0","display":"flex","width":"100%","position":"relative"}'>
			<div  :style='{"color":"#000","textAlign":"center","width":"100%","lineHeight":"40px","fontSize":"18px","fontWeight":"bold","order":"1"}'>{{detail.title}}</div>
			
			<div :style='{"width":"100%","alignItems":"center","justifyContent":"flex-end","display":"flex","order":"2"}'>
			  <div :style='{"padding":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#9E9E9E"}'></span>
			    <span :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"12px"}'>发布时间：{{detail.addtime}}</span>
			  </div>
			  <div :style='{"padding":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#9E9E9E"}'></span>
			    <span :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"12px"}'>{{detail.name}}</span>
			  </div>
			  <div :style='{"padding":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#9E9E9E"}'></span>
			    <span :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"12px"}'>{{detail.thumbsupnum}}</span>
			  </div>
			  <div :style='{"padding":"0 10px 0 0"}'>
			    <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#9E9E9E"}'></span>
			    <span :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"12px"}'>{{detail.storeupnum}}</span>
			  </div>
			  <div :style='{"padding":"0"}'>
			    <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#9E9E9E"}'></span>
			    <span :style='{"color":"#9E9E9E","lineHeight":"1.5","fontSize":"12px"}'>{{detail.clicknum}}</span>
			  </div>
			</div>
			<div class="operate" :style='{"width":"100%","padding":"20px 0","alignItems":"center","justifyContent":"flex-start","display":"flex","order":"4"}'>
				<div @click="zanClick" :style='{"padding":"0 15px","alignItems":"center","borderRadius":"30px","background":"#5FE3EB","justifyContent":"center","display":"flex"}'>
					<span class="icon iconfont icon-guanzhu-zhihui" :style='{"margin":"0 2px 0 0","lineHeight":"30px","fontSize":"14px","color":"#000"}'></span>
					<span :style='{"color":"#000","lineHeight":"30px","fontSize":"14px"}'>{{zanType?'取消赞':'点赞'}}</span>
				</div>
				<div @click="collectClick" :style='{"padding":"0 15px","margin":"0 10px","alignItems":"center","borderRadius":"30px","background":"#FFDFA6","display":"flex","justifyContent":"center"}'>
					<span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"30px","fontSize":"14px","color":"#000"}'></span>
					<span :style='{"color":"#000","lineHeight":"30px","fontSize":"14px"}'>{{collectType?'取消收藏':'收藏'}}</span>
				</div>
			</div>
			
			<div :style='{"width":"100%","height":"auto","order":"3"}' class="content-detail" v-html="detail.content"></div>
		</div>
		<!-- option -->
		<div :style='{"border":"2px solid #5FE3EB","padding":"0 20px 10px","margin":"0 0 20px","borderRadius":"0 0 10px 10px","alignItems":"center","background":"#fff","borderWidth":"0 2px 2px","display":"flex","width":"100%","justifyContent":"center","height":"auto"}'>
		  <div :style='{"padding":"0 10px","margin":"0 20px","color":"#000","borderRadius":"30px","background":"#5FE3EB","lineHeight":"30px","fontSize":"14px"}' @click="prepDetailClick">上一篇：prev</div>
		  <div :style='{"padding":"0 10px","lineHeight":"30px","fontSize":"14px","color":"#000","borderRadius":"30px","background":"#FFDFA6"}' @click="nextDetailClick">下一篇：next</div>
		</div>
		<el-tabs class="detail" :style='{"border":"none","width":"100%","boxShadow":"none","background":"none"}' v-model="activeName" type="border-card">
			<el-tab-pane label="评论" name="discuss">
				<el-form class="add comment" :style='{"boxShadow":"none","padding":"15px","margin":"0 0 20px"}' :model="form" :rules="rules" ref="form">
					<el-form-item class="item" :style='{"width":"100%","display":"flex","height":"auto"}' label="评论" prop="content">
						<editor
						    :style='{"border":"0","boxShadow":"none","outline":"none","color":"#333","borderRadius":"4px","background":"#fff","width":"100%","lineHeight":"32px","fontSize":"14px"}'
						    v-model="form.content" 
						    class="editor" 
						    action="file/upload">
						</editor>
					</el-form-item>
					<el-form-item class="btn" :style='{"width":"100%","padding":"0 0 0 80px","margin":"10px 0 0","height":"auto"}'>
						<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#000","borderRadius":"5px","background":"#5FE3EB","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="primary" @click="submitForm('form')">立即提交</el-button>
						<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#9E9E9E","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="resetForm('form')">重置</el-button>
					</el-form-item>
				</el-form>
				
				<div v-if="infoList.length" :style='{"boxShadow":"none","padding":"0"}' class="comment">
					<div :style='{"padding":"15px","margin":"0 0 20px","borderColor":"#5FE3EB","alignItems":"center","borderRadius":"5px","borderWidth":"2px","background":"#fff","width":"100%","borderStyle":"solid","height":"auto"}' v-for="item in infoList" :key="item.id" @mouseenter="discussEnter(item.id)"
						@mouseleave="discussLeave">
						<div class="user" :style='{"width":"100%","alignItems":"center","display":"flex","height":"auto"}'>
							<el-image v-if="item.avatarurl" :style='{"width":"40px","margin":"0 10px 0 0","borderRadius":"100%","objectFit":"cover","height":"40px"}' :size="50" :src="baseUrl + item.avatarurl"></el-image>
							<el-image v-if="!item.avatarurl" :style='{"width":"40px","margin":"0 10px 0 0","borderRadius":"100%","objectFit":"cover","height":"40px"}' :size="50" :src="require('@/assets/touxiang.png')"></el-image>
							<div :style='{"color":"#333","fontSize":"16px"}' class="name">{{item.nickname}}</div>
						</div>
						<div :style='{"padding":"8px","boxShadow":"none","margin":"10px 0px 0px","color":"#9E9E9E","borderRadius":"4px","background":"none","wordWrap":"break-word","lineHeight":"30px","fontSize":"14px"}' class="content-block-ask">
							<div v-html="item.content"></div>
							<div style="width: 100%;display:flex;justify-content: flex-end;height:30px;align-items:center">
								<el-button type="text" v-if="showIndex==item.id&&userid==item.userid" @click="discussDel(item.id)">删除</el-button>
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

		<!-- 热门文章 -->
		<div class="hot" :style='{"width":"100%","boxShadow":"none","background":"none","height":"auto"}'>
		  <div :style='{"border":"1px solid #FFDFA6","color":"#000","textAlign":"left","background":"none","borderWidth":"0 0 4px","width":"100%","lineHeight":"50px","fontSize":"20px","fontWeight":"bold"}'>热门文章</div>
		  <div :style='{"width":"100%","padding":"0 0 5px 0","margin":"10px 0","background":"#fff","display":"flex","height":"auto"}'>
		    <div v-for="item in hotList" :key="item.id" :style='{"width":"calc(20% - 10px)","padding":"20px 30px","margin":"0 5px","background":"url(http://codegen.caihongy.cn/20240203/e6d59e58834443b594cba48f3afca4f1.png) center center/100% 100% no-repeat","height":"auto"}' @click="toDetail(item.id)">
		      <img :style='{"width":"100%","objectFit":"cover","borderRadius":"10px","display":"block","height":"150px"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"padding":"40px 5px 0","lineHeight":"2","fontSize":"16px","color":"#000","textAlign":"center","fontWeight":"bold"}'>{{ item.title }}</div>
		      <div :style='{"padding":"0 5px","lineHeight":"2","fontSize":"12px","color":"#000","textAlign":"center"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
		<!-- 热门标签 -->
		<div class="tags" :style='{"border":"1px solid #5FE3EB","boxShadow":"none","margin":"0","top":"0","left":"0","background":"#fff","width":"9%","position":"absolute","height":"auto"}'>
		  <div :style='{"color":"#000","borderRadius":"0 0 20px 20px","textAlign":"center","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","width":"100%","lineHeight":"44px","fontSize":"16px","fontWeight":"bold"}'>热门标签</div>
		  <div :style='{"padding":"5px ","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <div v-for="(item,index) in categoryList" :key="index" :style='{"width":"50%","lineHeight":"2","fontSize":"14px","color":"#000","textAlign":"center"}'>{{ item.typename }}</div>
		  </div>
		</div>
		<!-- 推荐文章 -->
		<div class="news" :style='{"width":"100%","flexWrap":"wrap","background":"#fff","display":"flex","height":"auto"}'>
		  <div :style='{"padding":"0 90px","color":"#000","borderRadius":"0 0 30px 30px","textAlign":"center","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","width":"auto","lineHeight":"50px","fontSize":"20px","fontWeight":"bold"}'>推荐文章</div>
		  <div :style='{"width":"100%","padding":"20px 0","background":"#fff","justifyContent":"flex-start","display":"flex","height":"auto"}'>
		    <div v-for="item in recommendList" :key="item.id" :style='{"width":"calc(20% - 10px)","padding":"20px 30px","margin":"0 5px","background":"url(http://codegen.caihongy.cn/20240203/e6d59e58834443b594cba48f3afca4f1.png) center center/100% 100% no-repeat","height":"auto"}' @click="toDetail(item.id)">
		      <img :style='{"width":"100%","objectFit":"cover","borderRadius":"10%","display":"block","height":"150px"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"padding":"40px 5px 0","lineHeight":"2","fontSize":"16px","color":"#000","textAlign":"center","fontWeight":"bold"}'>{{ item.title }}</div>
		      <div :style='{"padding":"0 10px","lineHeight":"2","fontSize":"14px","color":"#000","textAlign":"center"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		//数据集合
		data() {
			return {
				id: 0,
				detail: {},
				zanType: false,
				zanForm: {},
				collectType:false,
				collectForm: {},
				baseUrl:'',
				total: 1,
				pageSize: 5,
				pageSizes: [10,20,30,50],
				totalPage: 1,
				showIndex: -1,
				infoList: [],
				rules: {
					content: [
						{ required: true, message: '请输入内容', trigger: 'blur' }
					],
				},
				userid: localStorage.getItem('frontUserid'),
				form: {
					content: '',
					userid: localStorage.getItem('frontUserid'),
					nickname: localStorage.getItem('username'),
					avatarurl: '',
				},
				activeName:'discuss',
				hotList: [],
				recommendList: [],
				categoryList: [],
				currentIndex: 0,
				allList: []
			}
		},
		created() {
			this.id = this.$route.query.id
			this.baseUrl = this.$config.baseUrl;
			this.getCategoryList()
			this.getDetail()
			this.getNewsList()
			this.getHotList()
			this.getRecommendList()
		},
		watch:{
			$route(newValue) {
				this.id = this.$route.query.id
			    this.getDetail()
			}
		},
		methods: {
			  backClick() {
				  history.back()
			  },
			getNewsList() {
				let params = {page:1, limit: 100,sort:'addtime',order:'desc'};
				this.$http.get('news/list', {params: params}).then(res => {
					if (res.data.code == 0) {
						for(let x in res.data.data.list){
							if(res.data.data.list[x].id == this.id){
								this.currentIndex = Number(x)
								break
							}
						}
						this.allList = res.data.data.list
					}
				});
			},
			// 上一篇
			prepDetailClick(){
				if(this.currentIndex == 0){
					this.$message.error('已经是第一篇了')
					return false
				}
				this.currentIndex--
				this.$router.push({path: '/index/newsDetail', query: {id: this.allList[this.currentIndex].id}});
			},
			// 下一篇
			nextDetailClick(){
				if(this.currentIndex == this.allList.length - 1){
					this.$message.error('已经是最后一篇了')
					return false
				}
				this.currentIndex++
				this.$router.push({path: '/index/newsDetail', query: {id: this.allList[this.currentIndex].id}});
			},
			getCategoryList(){
				this.$http.get('newstype/list', {}).then(res => {
					if (res.data.code == 0) {
						this.categoryList = res.data.data;
					}
				});
			},
			// 获取热门列表
			getHotList(){
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get('news/autoSort', {params: params}).then(res => {
					if (res.data.code == 0) {
						this.hotList = res.data.data.list;
					}
				});
			},
			// 获取推荐列表
			getRecommendList(){
				let url = 'news/autoSort'
				if(localStorage.getItem('frontToken')){
					url = 'news/autoSort2'
				}
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get(url, {params: params}).then(res => {
					if (res.data.code == 0) {
						this.recommendList = res.data.data.list;
					}
				});
			},
			// 跳转详情
			toDetail(id){
				this.$router.push({path: '/index/newsDetail', query: {id: id}});
			},
			getDetail(){
				this.$http.get(`news/detail/${this.id}`,{}).then(res=>{
					if(res.data&&res.data.code==0){
						this.detail = res.data.data
						window.scrollTo(0, 100)
						this.getZan()
						this.getCollect()
						this.getDiscussList(1);
					}
				})
			},
			getDiscussList(page) {
				this.$http.get('discussnews/list', {params: {page, limit: this.pageSize, refid: this.detail.id}}).then(res => {
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
						this.$http.post('discussnews/delete',[id]).then(res=>{
							if(res.data&&res.data.code==0){
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
						this.form.refid = this.detail.id;
						this.form.avatarurl = localStorage.getItem('frontHeadportrait')?localStorage.getItem('frontHeadportrait'):'';
						this.$http.post('discussnews/add', this.form).then(res => {
							if (res.data.code == 0) {
								this.form.content = '';
								this.getDiscussList(1);
								this.$message({
									type: 'success',
									message: '评论成功!',
									duration: 1500,
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
			curChange(page) {
				this.getDiscussList(page);
			},
			prevClick(page) {
				this.getDiscussList(page);
			},
			nextClick(page) {
				this.getDiscussList(page);
			},
			getZan() {
				this.$http.get('storeup/list', {
					params: {
						page: 1,
						limit: 1,
						type: 21,
						userid: localStorage.getItem('frontUserid'),
						tablename: 'news',
						refid: this.id
					}
				}).then(res=>{
					if(res.data&&res.data.code==0){
						if(res.data.data.list.length){
							this.zanType = true
							this.zanForm = res.data.data.list[0]
						}else{
							this.zanType = false
						}
					}
				})
			},
			getCollect(){
				this.$http.get('storeup/list', {
					params: {
						page: 1,
						limit: 1,
						type: 1,
						userid: localStorage.getItem('frontUserid'),
						tablename: 'news',
						refid: this.id
					}
				}).then(res=>{
					if(res.data&&res.data.code==0){
						if(res.data.data.list.length){
							this.collectType = true
							this.collectForm = res.data.data.list[0]
						}else{
							this.collectType = false
						}
					}
				})
			},
			zanClick() {
				if(this.zanType){
					this.$http.post('storeup/delete', [this.zanForm.id]).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('取消成功')
							this.detail.thumbsupnum--
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getZan()
						}
					})
				}else{
					let data = {
						name: this.detail.title,
						picture: this.detail.picture,
						refid: this.detail.id,
						type: 21,
						tablename: 'news',
						userid: localStorage.getItem('frontUserid')
					}
					this.$http.post('storeup/add', data).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('点赞成功')
							this.detail.thumbsupnum++
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getZan()
						}
					})
				}
			},
			collectClick(){
				if(this.collectType){
					this.$http.post('storeup/delete', [this.collectForm.id]).then(res => {
						if (res.data && res.data.code == 0) {
							this.$message.success('取消成功')
							this.detail.storeupnum--
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.getCollect()
						}
					})
				}else{
					let data = {
						name: this.detail.title,
						picture: this.detail.picture,
						refid: this.detail.id,
						type: 1,
						tablename: 'news',
						userid: localStorage.getItem('frontUserid')
					}
					this.$http.post('storeup/add', data).then(res => {
						if (res.data && res.data.code == 0) {
							this.detail.storeupnum++
							this.$http.post('news/update',this.detail).then(obj=>{})
							this.$message.success('收藏成功')
							this.getCollect()
						}
					})
				}
			},
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.section {
		width: 900px;
		margin: 0 auto;
	}
	.editor /deep/ .avatar-uploader {
		height: 0;
		line-height: 0;
	}
	.section-content {
		margin-top: 30px;
	}
	.content-title {
		text-align: center;
		font-size: 22px;
		font-weight: bold;
	}
	.content-sub-title {
		text-align: center;
		margin-top: 20px;
		color: #888888;
		font-size: 14px;
	}
	.operate{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40px;
	}
</style>