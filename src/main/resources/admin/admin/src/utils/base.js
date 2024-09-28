const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooth912ix7i/",
            name: "springbooth912ix7i",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooth912ix7i/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "万里学院摄影社团管理系统"
        } 
    }
}
export default base
