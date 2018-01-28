define(["jquery"], function($q) {
    return {
        getMsg: function() {
            // 定义一个延迟对象
            var deferred = $q.Deferred(); // 应该是jq的版本问题
            // var deferred = $q.defer();// 这种写法是angular的$q的服务
            require(["./js/xiaolajiao"], function(xiaolajiao) {
                // 修改延迟对象的标识 改为成功
                deferred.resolve(xiaolajiao);
            });
            // 使deferred的执行状态不能被改变
            return deferred.promise();
            // return deferred.promise; // 这种也是angular的$q的服务中的写法
        }
    }
});
/**
 * http://www.ruanyifeng.com/blog/2011/08/a_detailed_explanation_of_jquery_deferred_object 关于defer的
 * deferred.promise() 的作用
 * 在原来的deferred对象上返回另一个deferred对象，
 * 后者只开放与改变执行状态无关的方法（比如done()方法和fail()方法），
 * 屏蔽与改变执行状态有关的方法（比如resolve()方法和reject()方法），
 * 从而使得执行状态不能被改变
 */