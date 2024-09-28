<template>
<div>
	<div :style='{"padding":"20px","margin":"64px auto 10px","borderRadius":"0 0 30px 30px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","display":"flex","width":"80%","justifyContent":"center"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'Ξ'" :style='{"fontSize":"15px","lineHeight":"1"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index"><a>{{item.name}}</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div v-if="centerType" :style='{"padding":"20px","margin":"64px auto 10px","borderRadius":"0 0 30px 30px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","display":"flex","width":"80%","justifyContent":"center"}'>
		<el-button size="mini" @click="backClick">返回</el-button>
	</div>
	<div class="list-preview" :style='{"width":"100%","padding":"10px 10%","margin":"0 auto","position":"relative","background":"#F6F6F6"}'>
		

	
    <el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"10px 0","margin":"0 0 10px","alignItems":"center","flexWrap":"wrap","background":"none","display":"flex","width":"100%","height":"auto"}'>
      <el-form-item :style='{"margin":"0 10px"}'>
	    <div class="lable" v-if="false" :style='{"width":"auto","padding":"0 10px","lineHeight":"42px","display":"inline-block"}'>活动名称：</div>
        <el-input v-model="formSearch.huodongmingcheng" placeholder="活动名称" @keydown.enter.native="getList(1, curFenlei)" clearable></el-input>
      </el-form-item>
	  <el-button v-if=" true " :style='{"cursor":"pointer","border":"0","padding":"0px 10px","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"10px","background":"#5FE3EB","width":"auto","fontSize":"14px","lineHeight":"42px","height":"42px"}' type="primary" @click="getList(1, curFenlei)"><i v-if="true" :style='{"color":"#000","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-search"></i>查询</el-button>
	  <el-button v-if="btnAuth('huodongbaoming','新增')" :style='{"cursor":"pointer","border":"0","padding":"0px 10px","margin":"0 10px 0 0","outline":"none","color":"#000","borderRadius":"10px","background":"#FFDFA6","width":"auto","fontSize":"14px","lineHeight":"42px","height":"42px"}' type="primary" @click="add('/index/huodongbaomingAdd')"><i v-if="true" :style='{"color":"#000","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-circle-plus-outline"></i>添加</el-button>
    </el-form>
	<div class="select2" :style='{"border":"4px solid #5FE3EB","width":"100%","padding":"10px","borderRadius":"10px","background":"#fff","height":"auto"}'>
	  <div :style='{"padding":"0 0 0 0","margin":"4px 0","alignItems":"center","background":"none","display":"flex","width":"100%","position":"relative","height":"auto"}' class="list" v-for="(item,index) in selectOptionsList" :key="item">
	    <div :style='{"padding":"0 5px","lineHeight":"32px","fontSize":"14px","color":"#000","display":"inline-block"}' class="label">{{item.name}}：</div>
	    <div :style='{"width":"100%","flexWrap":"wrap","flex":"1","display":"flex","height":"auto"}' class="item-body">
	      <div class="item" @click="selectClick2(item,-1)" :class="item.check ==-1 ? 'active' : ''">全部</div>
	      <div class="item" @click="selectClick2(item,index1)" :class="item.check == index1 ? 'active' : ''" v-for="item1,index1 in item.list" :key="item1">{{item1}}</div>
	    </div>
	  </div>
	</div>
	<div class="list" :style='{"margin":"0 0 10px","background":"#fff"}'>
		
		<!-- 样式三 -->
		<div class="list3 index-pv1" :style='{"padding":"20px 10px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		  <div v-for="(item, index) in dataList" :key="index" @click.stop="toDetail(item)" class="list-item animation-box">
		    <div :style='{"border":"1px solid #5FE3EB","width":"200px","padding":"10px","overflow":"hidden","borderRadius":"10px","height":"250px"}' class="img-box">
				<img @click.stop="imgPreView(item.fengmian)" :style='{"width":"100%","objectFit":"cover","borderRadius":"10px","display":"block","height":"150px"}' v-if="item.fengmian && item.fengmian.substr(0,4)=='http'" :src="item.fengmian.split(',')[0]" class="image" />
				<img @click.stop="imgPreView(baseUrl + (item.fengmian?item.fengmian.split(',')[0]:''))" :style='{"width":"100%","objectFit":"cover","borderRadius":"10px","display":"block","height":"150px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" class="image" />
			</div>
		    <div :style='{"padding":"0 10px","overflow":"hidden","flex":"1","display":"flex","height":"auto"}' class="item-info">
		      <div :style='{"width":"110px","padding":"0 10px 0 0","flex":"1"}'>
				<div class="title">{{item.huodongmingcheng}}</div>
				<div v-if="item.price" class="price"><span :style='{"fontSize":"12px"}'>￥</span>{{item.price}}</div>
		        <div :style='{"padding":"0 10px","borderColor":"#5FE3EB","borderStyle":"solid","borderWidth":"0 0 1px 0"}' class="time">
		          <span class="icon iconfont icon-shijian21"></span>
		          <span class="text">{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","borderColor":"#5FE3EB","borderStyle":"solid","borderWidth":"0 0 1px 0"}' class="publisher">
		          <span class="icon iconfont icon-geren16"></span>
		          <span class="text">{{item.yonghuzhanghao}}</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	</div>

	
	<el-pagination
	  background
	  id="pagination"
	  class="pagination"
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
      @size-change="sizeChange"
	  @prev-click="prevClick"
	  @next-click="nextClick"
	></el-pagination>

  </div>
  <el-dialog title="预览图" :visible.sync="previewVisible" width="50%">
  	<img :src="previewImg" alt="" style="width: 100%;">
  </el-dialog>
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
		selectIndex2: 0,
		selectOptionsList: [],
	    layouts: '',
		swiperIndex: -1,
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '活动报名'
          }
        ],
        formSearch: {
          huodongmingcheng: '',
        },
        fenlei: [],
		feileiColumn: '',
        dataList: [],
        total: 1,
        pageSize: 10,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        curFenlei: '全部',
        isPlain: false,
        indexQueryCondition: '',
        timeRange: [],
		centerType:false,
		previewImg: '',
		previewVisible: false,
		sortType: 'id',
		sortOrder: 'desc',
      }
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
		this.baseUrl = this.$config.baseUrl;
      this.getFenlei();
      this.getList(1, '全部');
    },
    //方法集合
    methods: {
		selectClick2(row,index) {
			row.check = index
			if(index == -1){
				this.formSearch[row.tableName] = ''
			}else {
				this.formSearch[row.tableName] = row.list[index]
			}
			this.getList()
		},
		add(path) {
			let query = {}
			if(this.centerType){
				query.centerType = 1
			}
			this.$router.push({path: path,query:query});
		},
      getFenlei() {
      },
      getList(page, fenlei, ref = '') {
        let params = {page, limit: this.pageSize};
        let searchWhere = {};
        if (this.formSearch.huodongmingcheng != '') searchWhere.huodongmingcheng = '%' + this.formSearch.huodongmingcheng + '%';
		if(!this.centerType){
			params['sfsh'] = '是';
		}
			let user = JSON.parse(localStorage.getItem('sessionForm'))
		if (this.sortType) searchWhere.sort = this.sortType
		if (this.sortOrder) searchWhere.order = this.sortOrder
        this.$http.get(`huodongbaoming/${this.centerType?'page':'list'}`, {params: Object.assign(params, searchWhere)}).then(res => {
          if (res.data.code == 0) {
            this.dataList = res.data.data.list;
            this.total = Number(res.data.data.total);
            this.pageSize = Number(res.data.data.pageSize);
            this.totalPage = res.data.data.totalPage;
			
			this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
          }
        });
      },
      curChange(page) {
        this.getList(page);
      },
      prevClick(page) {
        this.getList(page);
      },
      sizeChange(size){
        this.pageSize = size
        this.getList(1);
      },
      nextClick(page) {
        this.getList(page);
      },
	  imgPreView(url){
		  this.previewImg = url
		  this.previewVisible = true
	  },
      toDetail(item) {
		  let params = {
			  id: item.id
		  }
		  if(this.centerType){
			  params.centerType = 1
		  }
        this.$router.push({path: '/index/huodongbaomingDetail', query: params});
      },
	btnAuth(tableName,key){
		if(this.centerType){
			return this.isBackAuth(tableName,key)
		}else{
			return this.isAuth(tableName,key)
		}
	},
	backClick() {
		this.$router.push({path: '/index/center'});
	},
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.list-preview .list-form-pv .el-input {
		width: auto;
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
	
	.category-1 .item {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #efefef;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-1 .item:hover {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #000;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-1 .item.active {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 10px 0 0;
		color: #999;
		background: #000;
		width: 72px;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item:hover {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item.active {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-3 .item {
		cursor: pointer;
		border: 2px solid #5FE3EB;
		border-radius: 5px;
		padding: 5px 10px;
		margin: 0 10px 0 0;
		color: #000;
		background: none;
		display: flex;
		align-items: center;
	}
	
	.category-3 .item:hover {
		color: #000;
		background: #5FE3EB;
	}
	
	.category-3 .item.active {
		color: #000;
		background: #5FE3EB;
	}
	
	.list-form-pv .el-input /deep/ .el-input__inner {
		border: 1px solid #5FE3EB;
		border-radius: 8px;
		padding: 0 10px;
		margin: 0;
		outline: none;
		color: #333;
		width: 140px;
		font-size: 14px;
		line-height: 42px;
		height: 42px;
	}
	
	.list-form-pv .el-select /deep/ .el-input__inner {
	}
	
	.list-form-pv .el-date-editor /deep/ .el-input__inner {
		border: 1px solid #5FE3EB;
		border-radius: 8px;
		padding: 0 30px;
		margin: 0;
		outline: none;
		color: #333;
		width: 140px;
		font-size: 14px;
		line-height: 42px;
		height: 42px;
	}
	
	.list .index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.list .index-pv1 .animation-box:hover {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
		z-index: 1;
	}
	
	.list .index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.list .index-pv1 .animation-box img:hover {
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

	.list3 .list-item {
				border-radius: 10px;
				padding: 10px;
				margin: 0 0 10px;
				background: #F9F9F9;
				display: flex;
				width: 49%;
				font-size: 0;
				position: relative;
				height: auto;
			}
	
	.list3 .list-item:hover {
				box-shadow: 0 4px 8px rgba(0,0,0,.3);
				background: #EFFEFF;
			}
	
	.list3 .list-item .title {
				padding: 0 10px;
				color: #000;
				font-size: 14px;
				border-color: #5FE3EB;
				border-width: 0 0 1px 0;
				line-height: 36px;
				border-style: solid;
			}
	
	.list3 .list-item:hover .title {
				color: #000;
			}
	.list3 .list-item .price {
				padding: 0 10px;
				color: #F10000;
				left: 10px;
				bottom: 40px;
				width: 200px;
				font-size: 22px;
				border-color: #5FE3EB;
				border-width: 0;
				line-height: 36px;
				position: absolute;
				border-style: solid;
				text-align: center;
			}
	
	.list3 .list-item:hover .price {
				color: #F10000;
			}
	
	.list3 .list-item .time .icon {
				margin: 0 2px 0 0;
				color: #000;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .time .icon {
				color: #000;
			}
	.list3 .list-item .time .text {
				color: #000;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .time .text {
				color: #000;
			}
	
	.list3 .list-item .publisher .icon {
				margin: 0 2px 0 0;
				color: #000;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .publisher .icon {
				color: #000;
			}
	.list3 .list-item .publisher .text {
				color: #000;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .publisher .text {
				color: #000;
			}
	
	.list3 .list-item .like .icon {
				margin: 0 2px 0 0;
				color: #000;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .like .icon {
				color: #000;
			}
	.list3 .list-item .like .text {
				color: #000;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .like .text {
				color: #000;
			}
	
	.list3 .list-item .collect .icon {
				margin: 0 2px 0 0;
				color: #000;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .collect .icon {
				color: #000;
			}
	.list3 .list-item .collect .text {
				color: #000;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .collect .text {
				color: #000;
			}
	
	.list3 .list-item .view .icon {
				margin: 0 2px 0 0;
				color: #000;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .view .icon {
				color: #000;
			}
	.list3 .list-item .view .text {
				color: #000;
				font-size: 12px;
				line-height: 28px;
			}
	.list3 .list-item:hover .view .text {
				color: #000;
			}
	
	.list3 .list-item .desc {
				padding: 0 10px;
				color: #9E9E9E;
				flex: 2;
				font-size: 12px;
				line-height: 1.5;
			}
	.list3 .list-item:hover .desc {
				color: #9E9E9E;
			}
	
	.select2 .list .item-body .item {
				border: 2px solid #5FE3EB;
				border-radius: 4px;
				padding: 0 10px;
				margin: 0 10px;
				color: #333;
				background: none;
				font-size: 14px;
				line-height: 32px;
			}
	.select2 .list .item-body .item:hover {
				color: #fff;
				background: #5FE3EB;
			}
	.select2 .list .item-body .item.active {
				color: #fff;
				background: #5FE3EB;
			}
</style>
