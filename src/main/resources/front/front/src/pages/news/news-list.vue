<template>
<div>
	<div :style='{"padding":"20px","margin":"64px auto 10px","borderRadius":"0 0 30px 30px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","display":"flex","width":"80%","justifyContent":"center"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'Ξ'" :style='{"fontSize":"15px","lineHeight":"1"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index"><a>{{item.name}}</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	
	<div class="news-preview-pv" :style='{"width":"100%","padding":"0 10%","margin":"10px auto","position":"relative","background":"#F6F6F6"}'>
		<el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"0","boxShadow":"0 4px 8px rgba(0,0,0,.3)","margin":"10px auto","overflow":"hidden","alignItems":"center","borderRadius":"10px","flexWrap":"wrap","background":"#fff","display":"flex","width":"40%","justifyContent":"center","height":"auto"}'>
			<el-form-item :style='{"margin":"0","flex":"1"}'>
				<el-input v-model="title" placeholder="标题"></el-input>
			</el-form-item>
			<el-button type="primary" @click="getNewsList(1)" :style='{"cursor":"pointer","border":"0","padding":"0px 35px","margin":"0","outline":"none","color":"#fff","borderRadius":"10px","background":"linear-gradient(90deg, #5EE4EC 0%, #FFDFA6 100%)","width":"auto","fontSize":"0","lineHeight":"60px","height":"60px"}'>
				<span class="icon iconfont icon-chakan14" :style='{"color":"#000","margin":"0","fontSize":"24px"}'></span>
				搜索
			</el-button>
		</el-form>
		
		<!-- category -->
		<div class="category" :style='{"border":"4px solid #5FE3EB","padding":"10px","borderRadius":"5px","background":"#fff","display":"flex","width":"100%","height":"auto"}'>
		  <div class="item" @click="categoryClick(0)" :class="categoryIndex == 0 ? 'active' : ''">全部</div>
		  <div v-for="(item,index) in categoryList" @click="categoryClick(index+1)" :key="index" class="item" :class="categoryIndex == index+1 ? 'active' : ''">{{item.typename}}</div>
		</div>
	
				
				
				
				<!-- 样式四 -->
		<div class="list4 index-pv1" :style='{"padding":"10px 0","margin":"10px 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto"}'>
			<template v-for="(item,index) in newsList" :key="item.id">
			<div v-if="index%4 == 0 || index%4 == 1" :style='{"width":"calc(50% - 20px)","padding":"0 0 10px","margin":"0 10px","borderRadius":"10px","background":"#fff","height":"auto"}' @click="toNewsDetail(item)" class="list-item animation-box">
				<el-image :style='{"color":"400px","objectFit":"cover","borderRadius":"10px","display":"block","width":"100%","height":"400px","order":"1"}' :src="baseUrl + item.picture" :fit="fill"></el-image>
				<div :style='{"padding":"0 20px","whiteSpace":"nowrap","overflow":"hidden","color":"#000","width":"100%","lineHeight":"40px","fontSize":"16px","textOverflow":"ellipsis","fontWeight":"bold","order":"2"}' class="title ">{{item.title}}</div>
				<div :style='{"padding":"0 20px","whiteSpace":"nowrap","overflow":"hidden","color":"#000","width":"100%","lineHeight":"2","fontSize":"14px","textOverflow":"ellipsis","order":"3"}' class="introduction ">{{item.introduction}}</div>
				<div :style='{"padding":"0 20px","display":"inline-block","order":"8"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#000"}'></span>
				  <span :style='{"color":"#000","lineHeight":"2","fontSize":"12px"}'>{{item.addtime}}</span>
				</div>
				<div :style='{"padding":"0 20px 0 0","display":"inline-block","order":"7"}'>
				  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#000"}'></span>
				  <span :style='{"color":"#000","lineHeight":"2","fontSize":"12px"}'>{{item.name}}</span>
				</div>
				<div :style='{"padding":"0 20px 0 0","display":"inline-block","order":"4"}'>
				  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#000"}'></span>
				  <span :style='{"color":"#000","lineHeight":"2","fontSize":"12px"}'>{{item.thumbsupnum}}</span>
				</div>
				<div :style='{"padding":"0 20px 0 0","display":"inline-block","order":"5"}'>
				  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#000"}'></span>
				  <span :style='{"color":"#000","lineHeight":"2","fontSize":"12px"}'>{{item.storeupnum}}</span>
				</div>
				<div :style='{"padding":"0 20px 0 0","display":"inline-block","order":"6"}'>
				  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#000"}'></span>
				  <span :style='{"color":"#000","lineHeight":"2","fontSize":"12px"}'>{{item.clicknum}}</span>
				</div>
				<div :style='{"padding":"0 50px","margin":"10px 0 10px 20px","color":"#000","textAlign":"center","background":"#5FE3EB","display":"block","width":"200px","fontSize":"14px","lineHeight":"40px","fontWeight":"bold","order":"9","height":"40px"}' class="tags ">新闻动态</div>
			</div>
			<div v-if="index%4 == 2 || index%4 == 3" :style='{"padding":"10px 20px","margin":"10px","borderRadius":"10px","background":"#fff","width":"calc(50% - 20px)","position":"relative","height":"auto"}' @click="toNewsDetail(item)" class="list-item animation-box">
				<div :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#000","width":"100%","lineHeight":"2","fontSize":"16px","textOverflow":"ellipsis","fontWeight":"bold"}' class="title ">{{item.title}}</div>
				<div :style='{"whiteSpace":"nowrap","overflow":"hidden","color":"#000","width":"100%","lineHeight":"2","fontSize":"14px","textOverflow":"ellipsis"}' class="introduction ">{{item.introduction}}</div>
				<div :style='{"padding":"0 20px 0 0","display":"inline-block"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#000"}'></span>
				  <span :style='{"color":"#000","lineHeight":"2","fontSize":"12px"}'>{{item.addtime}}</span>
				</div>
				<div :style='{"padding":"0 20px 0 0","display":"inline-block"}'>
				  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#000"}'></span>
				  <span :style='{"color":"#000","lineHeight":"2","fontSize":"12px"}'>{{item.name}}</span>
				</div>
				<div :style='{"padding":"0 20px 0 0","display":"inline-block"}'>
				  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#000"}'></span>
				  <span :style='{"color":"#000","lineHeight":"2","fontSize":"12px"}'>{{item.thumbsupnum}}</span>
				</div>
				<div :style='{"padding":"0 20px 0 0","display":"inline-block"}'>
				  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#000"}'></span>
				  <span :style='{"color":"#000","lineHeight":"2","fontSize":"12px"}'>{{item.storeupnum}}</span>
				</div>
				<div :style='{"padding":"0","display":"inline-block"}'>
				  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#000"}'></span>
				  <span :style='{"color":"#000","lineHeight":"2","fontSize":"12px"}'>{{item.clicknum}}</span>
				</div>
				<div :style='{"padding":"0 10px","margin":"10px 0","color":"#000","textAlign":"center","background":"#5FE3EB","display":"block","width":"200px","fontSize":"14px","lineHeight":"40px","fontWeight":"bold","height":"40px"}' class="tags ">新闻动态</div>
			</div>
			</template>
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

		<!-- 热门信息 -->
		<div class="hot" :style='{"width":"100%","boxShadow":"none","margin":"0 0 10px","background":"none","height":"auto"}'>
		  <div :style='{"border":"4px solid #FFDFA6","color":"#000","textAlign":"left","background":"none","borderWidth":"0 0 4px","width":"100%","lineHeight":"50px","fontSize":"20px","fontWeight":"bold"}'>热门信息</div>
		  <div :style='{"padding":"10px 0","margin":"10px 0 0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto"}'>
		    <div v-for="item in hotList" :key="item.id" :style='{"width":"calc(20% - 10px)","padding":"20px 30px","margin":"0 5px","background":"url(http://codegen.caihongy.cn/20240203/e6d59e58834443b594cba48f3afca4f1.png) center center/100% 100% no-repeat","height":"auto"}' @click="toNewsDetail(item)">
		      <img :style='{"width":"100%","objectFit":"cover","borderRadius":"10px","display":"block","height":"150px"}' :src="baseUrl + item.picture" alt="">
		      <div :style='{"padding":"40px 5px 0","lineHeight":"2","fontSize":"16px","color":"#000","textAlign":"center","fontWeight":"bold"}'>{{ item.title }}</div>
		      <div :style='{"padding":"0 5px","lineHeight":"2","fontSize":"14px","color":"#000","textAlign":"center"}'>{{item.addtime}}</div>
		    </div>
		  </div>
		</div>
		<!-- 最新动态 -->
		<div class="news" :style='{"width":"100%","flexWrap":"wrap","background":"#fff","display":"flex","height":"auto"}'>
		  <div :style='{"padding":"0 90px","color":"#000","borderRadius":"0 0 30px 30px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","width":"auto","lineHeight":"44px","fontSize":"18px","fontWeight":"bold"}'>最新动态</div>
		  <div :style='{"width":"100%","padding":"20px","background":"#fff","justifyContent":"flex-start","display":"flex","height":"auto"}'>
		    <div v-for="item in recommendList" :key="item.id" :style='{"width":"calc(20% - 10px)","padding":"20px 30px","margin":"0 5px","background":"url(http://codegen.caihongy.cn/20240203/e6d59e58834443b594cba48f3afca4f1.png) center center/100% 100% no-repeat","height":"auto"}' @click="toNewsDetail(item)">
		      <img :style='{"width":"100%","objectFit":"cover","borderRadius":"10px","display":"block","height":"150px"}' :src="baseUrl + item.picture" alt="">
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
				baseUrl: this.$config.baseUrl,
				breadcrumbItem: [
				  {
					name: '社团资讯'
				  }
				],
				newsList: [],
				total: 1,
				pageSize: 10,
				pageSizes: [10,20,30,50],
				totalPage: 1,
				layouts: '',
				title: '',
				categoryIndex: 0,
				categoryList: [],
				hotList: [],
				recommendList: [],
			}
		},
		created() {
			this.getCategoryList()
			this.getNewsList(1);
			this.getHotList()
			this.getRecommendList()
		},
		//方法集合
		methods: {
			getCategoryList(){
				this.$http.get('newstype/list', {}).then(res => {
					if (res.data.code == 0) {
						this.categoryList = res.data.data.list
					}
				});
			},
			categoryClick(index) {
				this.categoryIndex = index
				this.getNewsList()
			},
			getNewsList(page) {
				let params = {page, limit: this.pageSize,sort:'addtime',order:'desc'};
				let searchWhere = {};
				if(this.title != '') searchWhere.title = '%' + this.title + '%';
				if(this.categoryIndex!=0){
					searchWhere.typename = this.categoryList[this.categoryIndex - 1].typename
				}
				this.$http.get('news/list', {params: Object.assign(params, searchWhere)}).then(res => {
					if (res.data.code == 0) {
						this.newsList = res.data.data.list;
						this.total = res.data.data.total;
						this.pageSize = Number(res.data.data.pageSize);
						this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
						this.totalPage = res.data.data.totalPage;
					}
				});
			},
			getHotList(){
				let params = {page:1, limit: 4,sort:'addtime',order:'desc'};
				this.$http.get('news/autoSort', {params: params}).then(res => {
					if (res.data.code == 0) {
						this.hotList = res.data.data.list;
					}
				});
			},
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
			curChange(page) {
				this.getNewsList(page);
			},
			prevClick(page) {
				this.getNewsList(page);
			},
			nextClick(page) {
				this.getNewsList(page);
			},
			toNewsDetail(item) {
				this.$router.push({path: '/index/newsDetail', query: {id: item.id}});
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
	
	.news-wrap {
	  width: 1000px;
	  margin: 0 auto;
	}
	.news-item {
	  height: 200px;
	  width: auto;
	  margin-bottom: 30px;
	  cursor: pointer;
	}
	.news-item-text {
	  width: calc(100% - 215px);
	  display: inline-block;
	  vertical-align: top;
	  margin-left: 15px;
	}
	.news-item-text-title {
	  font-size: 16px;
	  margin-bottom: 15px;
	}
	.news-item-text-intro {
	  font-size: 14px;
	  color: #666;
	}
	
	.hide1 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.hide2 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.hide3 {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	
	.index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
	}
	
	.index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
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
	
	.news-preview-pv .el-input /deep/ .el-input__inner {
				border: 0;
				border-radius: 8px;
				padding: 0 10px;
				margin: 0;
				outline: none;
				color: #333;
				flex: 1;
				width: 100%;
				font-size: 14px;
				line-height: 60px;
				height: 60px;
			}
	
	.news-preview-pv .category .item {
				cursor: pointer;
				border: 2px solid #5FE3EB;
				border-radius: 5px;
				padding: 0 20px;
				margin: 0 10px 0 0;
				color: #000;
				background: #fff;
				width: auto;
				font-size: 14px;
				line-height: 36px;
				text-align: center;
			}
	
	.news-preview-pv .category .item:hover {
				color: #000;
				background: #5FE3EB;
			}
	
	.news-preview-pv .category .item.active {
				color: #000;
				background: #5FE3EB;
			}
	
	.news-preview-pv .list9 .item .image {
				object-fit: cover;
				display: block;
				width: 100%;
				transition: 0.3s;
				height: 100%;
			}
	
	.news-preview-pv .list9 .item:hover .image {
				transform: scale(1.1);
			}
	
	.news-preview-pv .list9 .item .info {
				padding: 10px;
				left: 0;
				bottom: -100%;
				background: rgba(0,0,0,.5);
				width: 100%;
				position: absolute;
				transition: 0.3s;
				height: 100%;
			}
	
	.news-preview-pv .list9 .item:hover .info {
				bottom: 0;
			}
</style>
