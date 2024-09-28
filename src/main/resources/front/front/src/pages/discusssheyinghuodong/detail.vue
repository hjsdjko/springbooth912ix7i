<template>
<div>
	<div :style='{"padding":"20px","margin":"64px auto 10px","borderRadius":"0 0 30px 30px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","display":"flex","width":"80%","justifyContent":"center"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'Ξ'" :style='{"fontSize":"15px","lineHeight":"1"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index" to="/index/discusssheyinghuodong"><a>{{item.name}}</a></el-breadcrumb-item>
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
                    </div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>关联表id</div>
					<div  :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.refid}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>用户名</div>
					<div  :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.nickname}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>评论内容</div>
					<div  :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.content}}</div>
				</div>
				<div class="item" :style='{"padding":"10px","margin":"0 0 10px 0","alignItems":"center","background":"#fff","justifyContent":"spaceBetween","display":"flex"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#9e9e9e","textAlign":"right","width":"102px","fontSize":"14px","lineHeight":"30px","height":"30px"}'>回复内容</div>
					<div  :style='{"padding":"0 10px","fontSize":"14px","lineHeight":"30px","color":"#000","flex":"1","height":"30px"}'>{{detail.reply}}</div>
				</div>
				<div class="btn" :style='{"padding":"10px 0","flexWrap":"wrap","display":"flex"}'>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"linear-gradient(90deg, #5FE3EB 0%, #FFDFA6 100%)","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('discusssheyinghuodong','修改')" @click="editClick">修改</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#FFDFA680","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="btnAuth('discusssheyinghuodong','删除')" @click="delClick">删除</el-button>
					
				</div>
			</div>
		</div>
		
			<el-carousel v-if="detailBanner.length" :style='{"width":"55%","margin":"0","height":"500px"}' trigger="click" indicator-position="inside" arrow="always" type="default" direction="horizontal" height="500px" :autoplay="false" :interval="3000" :loop="true">
				<el-carousel-item :style='{"borderRadius":"10px","width":"100%","height":"100%"}' v-for="item in detailBanner" :key="item.id">
					<img :style='{"objectFit":"cover","width":"100%","height":"500px"}' :preview-src-list="[item]" v-if="item.substr(0,4)=='http'" :src="item" class="image">
					<img :style='{"objectFit":"cover","width":"100%","height":"500px"}' :preview-src-list="[baseUrl + item]" v-else :src="baseUrl + item" class="image">
				</el-carousel-item>
			</el-carousel>


		

		
		<el-tabs class="detail" :style='{"border":"none","width":"100%","boxShadow":"none","background":"none"}' v-model="activeName" type="border-card">
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
        tablename: 'discusssheyinghuodong',
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '摄影活动评论表'
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
        buynumber: 1,
		centerType: false,
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
              this.$forceUpdate();

			  this.getDiscussList(1);
				if(localStorage.getItem('frontToken')){
				}

            }
          });
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
        this.$http.get('discussdiscusssheyinghuodong/list', {params: {page, limit: this.pageSize, refid: this.detail.id}}).then(res => {
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
		      this.$http.post('discussdiscusssheyinghuodong/delete',[id]).then(res=>{
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
            this.form.refid = this.detail.id;
            this.form.avatarurl = localStorage.getItem('frontHeadportrait')?localStorage.getItem('frontHeadportrait'):'';
            this.$http.post('discussdiscusssheyinghuodong/add', this.form).then(res => {
              if (res.data.code == 0) {
                this.form.content = '';
				this.addDiscussNum(2)
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
		  this.$http.post('discusssheyinghuodong/update',this.detail).then(res=>{
			  
		  })
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
			this.$router.push(`/index/discusssheyinghuodongAdd?type=edit&&id=${this.detail.id}`);
		},
		// 删除
		async delClick(){
			await this.$confirm('是否删除此摄影活动评论表？')
			  .then(_ => {
			    this.$http.post('discusssheyinghuodong/delete', [this.detail.id]).then(async res => {
					if (res.data.code == 0) {
						this.$message({
							type: 'success',
							message: '删除成功!',
							duration: 1500,
							onClose: () => {
								history.back()
							}
						});
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
