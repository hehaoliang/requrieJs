require.config({
    baseUrl: "./",
    paths: {
        "jquery": "./libs/jquery/jquery.min",
        "bootstrap": "./libs/bootstrap/bootstrap",
        "modernizr": "./libs/modernizr",
    },
    shim: {
        /**
         * 这里将bootstrap所依赖的jq和css都引入了 
         * 也可以将paths中的jq放在这里引入，但是,
         * 在模块中会调用jquery，所以放在上面引入，
         * 这样在组织代码上也是最优
         */
        "bootstrap": ['jquery', "css!./libs/bootstrap/bootstrap.css"],
        // 两种写法相同 
        // "bootstrap": {
        //     deps: ['jquery', "css!./libs/bootstrap/bootstrap.css"],
        // },
        "modernizr": {
            exports: "Modernizr",
        }
    },
    map: {
        "*": {
            'css': './libs/require-css/css'
        }
    }


});

/**
 * 在框架中，可以把共用的css文件放在require的数组中引入
 * 但是，要加 css! 的前缀
 */
require(["jquery", "modernizr", "./js/dahe", "bootstrap"], function($q, modernizr, dahe) {
    $(".btn").click(function() {
        dahe.getMsg().then(function(xiaolajiao) {
            var cont_html = "";
            for (var i in xiaolajiao) {
                cont_html += xiaolajiao[i];
            }
            $("#content").html(cont_html);
        });
    });
});