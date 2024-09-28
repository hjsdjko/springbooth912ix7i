<template>
<div :style='{"width":"100%","padding":"80px 10%","margin":"10px auto","position":"relative","background":"#F6F6F6"}'>
    <el-form
	  :style='{"width":"100%","padding":"40px 0","position":"relative","background":"#fff"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="作品名称" prop="zuopinmingcheng">
            <el-input v-model="ruleForm.zuopinmingcheng" 
                placeholder="作品名称" clearable :disabled=" false  ||ro.zuopinmingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="作品图片" v-if="type!='cross' || (type=='cross' && !ro.zuopintupian)" prop="zuopintupian">
            <file-upload
            tip="点击上传作品图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.zuopintupian?ruleForm.zuopintupian:''"
            @change="zuopintupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="作品图片" prop="zuopintupian">
                <img v-if="ruleForm.zuopintupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.zuopintupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.zuopintupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}'  label="作品分类" prop="zuopinfenlei">
            <el-select v-model="ruleForm.zuopinfenlei" placeholder="请选择作品分类" :disabled=" false  ||ro.zuopinfenlei" >
              <el-option
                  v-for="(item,index) in zuopinfenleiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="摄影视频" v-if="type!='cross' || (type=='cross' && !ro.sheyingshipin)" prop="sheyingshipin">
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
		  <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="摄影视频" prop="sheyingshipin">
			<el-button v-if="ruleForm.sheyingshipin" @click="download(baseUrl + ruleForm.sheyingshipin)" type="success">预览</el-button>
			<el-button v-else disabled>暂无</el-button>
		  </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="用户账号" prop="yonghuzhanghao">
            <el-input v-model="ruleForm.yonghuzhanghao" 
                placeholder="用户账号" clearable :disabled=" false  ||ro.yonghuzhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="用户姓名" prop="yonghuxingming">
            <el-input v-model="ruleForm.yonghuxingming" 
                placeholder="用户姓名" clearable :disabled=" false  ||ro.yonghuxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="单限" prop="onelimittimes">
            <el-input v-model.number="ruleForm.onelimittimes" 
                placeholder="单限" clearable :disabled=" false  ||ro.onelimittimes"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="库存" prop="alllimittimes">
            <el-input v-model.number="ruleForm.alllimittimes" 
                placeholder="库存" clearable :disabled=" false  ||ro.alllimittimes"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="价格" prop="price">
			<el-input-number v-model="ruleForm.price" placeholder="价格" :readonly="ro.price"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="作品简介" prop="zuopinjianjie">
            <editor 
                :style='{"padding":"0","boxShadow":"none","margin":"0","borderColor":"#E2E3E5","backgroundColor":"#fff","borderRadius":"0","borderWidth":"1px ","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.zuopinjianjie" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0 40px","margin":"0 20px 0 0","outline":"none","color":"#000","borderRadius":"5px","background":"#5FE3EB","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0 40px","margin":"0","outline":"none","color":"#fff","borderRadius":"5px","background":"#9E9E9E","width":"auto","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				zuopinmingcheng : false,
				zuopintupian : false,
				zuopinfenlei : false,
				zuopinjianjie : false,
				sheyingshipin : false,
				yonghuzhanghao : false,
				yonghuxingming : false,
				onelimittimes : false,
				alllimittimes : false,
				sfsh : false,
				shhf : false,
				thumbsupnum : false,
				crazilynum : false,
				clicktime : false,
				clicknum : false,
				discussnum : false,
				price : false,
				storeupnum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          zuopinmingcheng: '',
          zuopintupian: '',
          zuopinfenlei: '',
          zuopinjianjie: '',
          sheyingshipin: '',
          yonghuzhanghao: '',
          yonghuxingming: '',
          onelimittimes: Number('-1') ,
          alllimittimes: Number('-1') ,
          thumbsupnum: '',
          crazilynum: '',
          clicktime: '',
          clicknum: '',
          discussnum: '',
          price: '',
          storeupnum: '',
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
          yonghuzhanghao: [
          ],
          yonghuxingming: [
          ],
          onelimittimes: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          alllimittimes: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          sfsh: [
          ],
          shhf: [
          ],
          thumbsupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          crazilynum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          clicktime: [
          ],
          clicknum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          discussnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          price: [
            { required: true, message: '价格不能为空', trigger: 'blur' },
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          storeupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='zuopinmingcheng'){
              this.ruleForm.zuopinmingcheng = obj[o];
              this.ro.zuopinmingcheng = true;
              continue;
            }
            if(o=='zuopintupian'){
              this.ruleForm.zuopintupian = obj[o].split(",")[0];
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
            if(o=='onelimittimes'){
              this.ruleForm.onelimittimes = obj[o];
              this.ro.onelimittimes = true;
              continue;
            }
            if(o=='alllimittimes'){
              this.ruleForm.alllimittimes = obj[o];
              this.ro.alllimittimes = true;
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
            if(o=='clicktime'){
              this.ruleForm.clicktime = obj[o];
              this.ro.clicktime = true;
              continue;
            }
            if(o=='clicknum'){
              this.ruleForm.clicknum = obj[o];
              this.ro.clicknum = true;
              continue;
            }
            if(o=='discussnum'){
              this.ruleForm.discussnum = obj[o];
              this.ro.discussnum = true;
              continue;
            }
            if(o=='price'){
              this.ruleForm.price = obj[o];
              this.ro.price = true;
              continue;
            }
            if(o=='storeupnum'){
              this.ruleForm.storeupnum = obj[o];
              this.ro.storeupnum = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.yonghuzhanghao!=''&&json.yonghuzhanghao) || json.yonghuzhanghao==0){
                this.ruleForm.yonghuzhanghao = json.yonghuzhanghao            }
            if((json.yonghuxingming!=''&&json.yonghuxingming) || json.yonghuxingming==0){
                this.ruleForm.yonghuxingming = json.yonghuxingming            }
          }
        });
        this.$http.get('option/zuopinfenlei/zuopinfenlei', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.zuopinfenleiOptions = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`zuopinchushou/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

			if(this.ruleForm.price<0){
				this.$message.error("价格不能输入负数");
				return
			}
			if(this.ruleForm.alllimittimes<0){
				this.$message.error("库存不能输入负数");
				return
			}
			if(this.ruleForm.onelimittimes<0){
				this.$message.error("单次购买不能输入负数");
				return
			}
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('zuopinchushou/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`zuopinchushou/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`zuopinchushou/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
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
			this.$router.go(-1);
		},
      zuopintupianUploadChange(fileUrls) {
          this.ruleForm.zuopintupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      sheyingshipinUploadChange(fileUrls) {
          this.ruleForm.sheyingshipin = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #000;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #E2E3E5;
	  border-radius: 0;
	  padding: 0 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 1px solid #E2E3E5;
	  border-radius: 0;
	  padding: 0 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
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
	  border: 1px solid #E2E3E5;
	  border-radius: 0;
	  padding: 0 10px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #E2E3E5;
	  border-radius: 0;
	  padding: 0 10px 0 30px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 200px;
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
	  border: 1px solid #E2E3E5;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  width: 200px;
	  font-size: 32px;
	  line-height: 60px;
	  text-align: center;
	  height: 60px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #E2E3E5;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  width: 200px;
	  font-size: 32px;
	  line-height: 60px;
	  text-align: center;
	  height: 60px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #E2E3E5;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  width: 200px;
	  font-size: 32px;
	  line-height: 60px;
	  text-align: center;
	  height: 60px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solidd #E2E3E5;
	  border-radius: 0;
	  padding: 12px;
	  box-shadow: none;
	  outline: none;
	  color: #000;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
