<template>
	<div class="addEdit-block" :style='{"padding":"30px","margin":"0"}'>
		<el-form
			:style='{"border":"1px solid rgba(167, 180, 201,.3)  ","padding":"30px","borderRadius":"6px","background":"#fff"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="80px"
		>
			<template >
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="作品名称" prop="zuopinmingcheng">
					<el-input v-model="ruleForm.zuopinmingcheng" placeholder="作品名称" clearable  :readonly="ro.zuopinmingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="作品名称" prop="zuopinmingcheng">
					<el-input v-model="ruleForm.zuopinmingcheng" placeholder="作品名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="upload" v-if="type!='info' && !ro.zuopintupian" label="作品图片" prop="zuopintupian">
					<file-upload
						tip="点击上传作品图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.zuopintupian?ruleForm.zuopintupian:''"
						@change="zuopintupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="upload" v-else-if="ruleForm.zuopintupian" label="作品图片" prop="zuopintupian">
					<img v-if="ruleForm.zuopintupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.zuopintupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.zuopintupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="select" v-if="type!='info'"  label="作品分类" prop="zuopinfenlei">
					<el-select :disabled="ro.zuopinfenlei" v-model="ruleForm.zuopinfenlei" placeholder="请选择作品分类" >
						<el-option
							v-for="(item,index) in zuopinfenleiOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="作品分类" prop="zuopinfenlei">
					<el-input v-model="ruleForm.zuopinfenlei"
						placeholder="作品分类" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="upload" v-if="type!='info'&& !ro.sheyingshipin" label="摄影视频" prop="sheyingshipin">
					<file-upload
						tip="点击上传摄影视频"
						action="file/upload"
						:limit="1"
						:type="2"
						:multiple="true"
						:fileUrls="ruleForm.sheyingshipin?ruleForm.sheyingshipin:''"
						@change="sheyingshipinUploadChange"
					></file-upload>
				</el-form-item> 
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else-if="ruleForm.sheyingshipin" label="摄影视频" prop="sheyingshipin">
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 15px","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#18c1b9","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="text" size="small" @click="download($base.url+ruleForm.sheyingshipin)">预览</el-button>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else-if="!ruleForm.sheyingshipin" label="摄影视频" prop="sheyingshipin">
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 15px","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#18c1b9","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="text" size="small">无</el-button>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="date" v-if="type!='info'" label="发布时间" prop="fabushijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.fabushijian" 
						type="datetime"
						:readonly="ro.fabushijian"
						placeholder="发布时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-else-if="ruleForm.fabushijian" label="发布时间" prop="fabushijian">
					<el-input v-model="ruleForm.fabushijian" placeholder="发布时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" clearable  :readonly="ro.yonghuzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' class="input" v-if="type!='info'"  label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" clearable  :readonly="ro.yonghuxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else class="input" label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-if="type!='info'"  label="作品简介" prop="zuopinjianjie">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.zuopinjianjie" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"margin":"0 0 20px 0"}' v-else-if="ruleForm.zuopinjianjie" label="作品简介" prop="zuopinjianjie">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#333","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.zuopinjianjie"></span>
                </el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button class="btn3"  v-if="type!='info'" type="success" @click="onSubmit">
					<span class="icon iconfont icon-tijiao20" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
					提交
				</el-button>
				<el-button class="btn4" v-if="type!='info'" type="success" @click="back()">
					<span class="icon iconfont icon-quxiao16" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
					取消
				</el-button>
				<el-button class="btn5" v-if="type=='info'" type="success" @click="back()">
					<span class="icon iconfont icon-fanhui21" :style='{"margin":"0 2px","fontSize":"14px","color":"#fff","height":"40px"}'></span>
					返回
				</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				zuopinmingcheng : false,
				zuopintupian : false,
				zuopinfenlei : false,
				zuopinjianjie : false,
				sheyingshipin : false,
				fabushijian : false,
				yonghuzhanghao : false,
				yonghuxingming : false,
				thumbsupnum : false,
				crazilynum : false,
				discussnum : false,
				storeupnum : false,
			},
			
			
			ruleForm: {
				zuopinmingcheng: '',
				zuopintupian: '',
				zuopinfenlei: '',
				zuopinjianjie: '',
				sheyingshipin: '',
				fabushijian: '',
				yonghuzhanghao: '',
				yonghuxingming: '',
			},
		
			zuopinfenleiOptions: [],

			
			rules: {
				zuopinmingcheng: [
					{ required: true, message: '作品名称不能为空', trigger: 'blur' },
				],
				zuopintupian: [
				],
				zuopinfenlei: [
					{ required: true, message: '作品分类不能为空', trigger: 'blur' },
				],
				zuopinjianjie: [
				],
				sheyingshipin: [
					{ required: true, message: '摄影视频不能为空', trigger: 'blur' },
				],
				fabushijian: [
				],
				yonghuzhanghao: [
				],
				yonghuxingming: [
				],
				thumbsupnum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				crazilynum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				discussnum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				storeupnum: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
		this.ruleForm.fabushijian = this.getCurDateTime()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='zuopinmingcheng'){
							this.ruleForm.zuopinmingcheng = obj[o];
							this.ro.zuopinmingcheng = true;
							continue;
						}
						if(o=='zuopintupian'){
							this.ruleForm.zuopintupian = obj[o];
							this.ro.zuopintupian = true;
							continue;
						}
						if(o=='zuopinfenlei'){
							this.ruleForm.zuopinfenlei = obj[o];
							this.ro.zuopinfenlei = true;
							continue;
						}
						if(o=='zuopinjianjie'){
							this.ruleForm.zuopinjianjie = obj[o];
							this.ro.zuopinjianjie = true;
							continue;
						}
						if(o=='sheyingshipin'){
							this.ruleForm.sheyingshipin = obj[o];
							this.ro.sheyingshipin = true;
							continue;
						}
						if(o=='fabushijian'){
							this.ruleForm.fabushijian = obj[o];
							this.ro.fabushijian = true;
							continue;
						}
						if(o=='yonghuzhanghao'){
							this.ruleForm.yonghuzhanghao = obj[o];
							this.ro.yonghuzhanghao = true;
							continue;
						}
						if(o=='yonghuxingming'){
							this.ruleForm.yonghuxingming = obj[o];
							this.ro.yonghuxingming = true;
							continue;
						}
						if(o=='thumbsupnum'){
							this.ruleForm.thumbsupnum = obj[o];
							this.ro.thumbsupnum = true;
							continue;
						}
						if(o=='crazilynum'){
							this.ruleForm.crazilynum = obj[o];
							this.ro.crazilynum = true;
							continue;
						}
						if(o=='discussnum'){
							this.ruleForm.discussnum = obj[o];
							this.ro.discussnum = true;
							continue;
						}
						if(o=='storeupnum'){
							this.ruleForm.storeupnum = obj[o];
							this.ro.storeupnum = true;
							continue;
						}
				}
				












			}
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(((json.yonghuzhanghao!=''&&json.yonghuzhanghao) || json.yonghuzhanghao==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuzhanghao = json.yonghuzhanghao
						this.ro.yonghuzhanghao = true;
					}
					if(((json.yonghuxingming!=''&&json.yonghuxingming) || json.yonghuxingming==0) && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuxingming = json.yonghuxingming
						this.ro.yonghuxingming = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.$http({
				url: `option/zuopinfenlei/zuopinfenlei`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.zuopinfenleiOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `sheyingzuopin/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.zuopinjianjie = this.ruleForm.zuopinjianjie.replace(reg,'../../../springbooth912ix7i/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {


	if(this.ruleForm.zuopintupian!=null) {
		this.ruleForm.zuopintupian = this.ruleForm.zuopintupian.replace(new RegExp(this.$base.url,"g"),"");
	}



	if(this.ruleForm.sheyingshipin!=null) {
		this.ruleForm.sheyingshipin = this.ruleForm.sheyingshipin.replace(new RegExp(this.$base.url,"g"),"");
	}








var objcross = this.$storage.getObj('crossObj');
      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
		this.$refs["ruleForm"].validate(valid => {
			if (valid) {
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid = crossuserid;
					this.ruleForm.crossrefid = crossrefid;
					let params = { 
						page: 1, 
						limit: 10, 
						crossuserid:this.ruleForm.crossuserid,
						crossrefid:this.ruleForm.crossrefid,
					} 
				this.$http({ 
					url: "sheyingzuopin/page", 
					method: "get", 
					params: params 
				}).then(({ 
					data 
				}) => { 
					if (data && data.code === 0) { 
						if(data.data.total>=crossoptnum) {
							this.$message.error(this.$storage.get('tips'));
							return false;
						} else {
							this.$http({
								url: `sheyingzuopin/${!this.ruleForm.id ? "save" : "update"}`,
								method: "post",
								data: this.ruleForm
							}).then(({ data }) => {
								if (data && data.code === 0) {
									this.$message({
										message: "操作成功",
										type: "success",
										duration: 1500,
										onClose: () => {
											this.parent.showFlag = true;
											this.parent.addOrUpdateFlag = false;
											this.parent.sheyingzuopinCrossAddOrUpdateFlag = false;
											this.parent.search();
											this.parent.contentStyleChange();
										}
									});
								} else {
									this.$message.error(data.msg);
								}
							});

						}
					} else { 
				} 
			});
		} else {
			this.$http({
				url: `sheyingzuopin/${!this.ruleForm.id ? "save" : "update"}`,
				method: "post",
			   data: this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "操作成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.parent.showFlag = true;
							this.parent.addOrUpdateFlag = false;
							this.parent.sheyingzuopinCrossAddOrUpdateFlag = false;
							this.parent.search();
							this.parent.contentStyleChange();
						}
					});
				} else {
					this.$message.error(data.msg);
			   }
			});
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.sheyingzuopinCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    zuopintupianUploadChange(fileUrls) {
	    this.ruleForm.zuopintupian = fileUrls;
    },
    sheyingshipinUploadChange(fileUrls) {
	    this.ruleForm.sheyingshipin = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #374254;
	  	  font-weight: 600;
	  	  width: 80px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid rgba(167, 180, 201,.3);
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  outline: none;
	  	  color: #a7b4c9;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  	  border: 1px solid rgba(167, 180, 201,.3);
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  outline: none;
	  	  color: #a7b4c9;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border:  1px solid rgba(167, 180, 201,.3) ;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  outline: none;
	  	  color: #a7b4c9;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border:  1px solid rgba(167, 180, 201,.3) ;
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  outline: none;
	  	  color: #a7b4c9;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 2px dashed rgba(167, 180, 201,.3) ;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #a7b4c9  ;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 200px;
	  	  text-align: center;
	  	  height: 200px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 2px dashed rgba(167, 180, 201,.3) ;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #a7b4c9  ;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 200px;
	  	  text-align: center;
	  	  height: 200px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 2px dashed rgba(167, 180, 201,.3) ;
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #a7b4c9  ;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 200px;
	  	  text-align: center;
	  	  height: 200px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid rgba(167, 180, 201,.3)     ;
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  outline: none;
	  	  color: #a7b4c9 ;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
	
	.add-update-preview .btn .btn1 {
				border: 0;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #6574cd;
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn1:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn2 {
				border: 0;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #6574cd;
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn2:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn3 {
				border: 0;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #ff2b88;
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn3:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn4 {
				border: 0;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #ff2b88;
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn4:hover {
				opacity: 0.8;
			}
	
	.add-update-preview .btn .btn5 {
				border: 0;
				cursor: pointer;
				border-radius: 4px;
				padding: 0 24px;
				margin: 4px;
				outline: none;
				color: #fff;
				background: #ff2b88;
				width: auto;
				font-size: 14px;
				height: 40px;
			}
	
	.add-update-preview .btn .btn5:hover {
				opacity: 0.8;
			}
</style>
