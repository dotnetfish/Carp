var constString={
    domain:"http://qsms.ccshj.net:8083",
    appRoot:"/soa/api/sqcp/",
    getRootUrl:function(){
        return this.domain+this.appRoot;
    },
    getUrl:function(url){
        if(url.indexOf("http")==0)
        return url;
        return this.domain+this.appRoot+url;
    }
}
module.exports=constString;