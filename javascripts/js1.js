$(window).on('load',function(){
    waterfall();
    var dataInt={'data':[{'src':'http://npic7.edushi.com/cn/zixun/zh-chs/2015-08/11/ee9e5534ab0047c1962a3d5ed811c5fb.jpg'},
    {'src':'http://i3.hoopchina.com.cn/user/289/2737289/13059794690.jpg'},
    {'src':'http://b.zol-img.com.cn/desk/bizhi/image/1/960x600/134856641957.jpg'},
    {'src':'http://img2.imgtn.bdimg.com/it/u=2952100908,4178186784&fm=21&gp=0.jpg'}]};
    $(window).on('scroll',function(){
        if (check()){
            $.each( dataInt.data, function( index, value ){
                var $oPin = $('<div>').addClass('pin').appendTo( $( "#main" ) );
                var $oBox = $('<div>').addClass('box').appendTo( $oPin );
                $('<img>').attr('src','./img/' + $( value).attr( 'src') ).appendTo($oBox);
            });
            waterfall();
        };
    })
});


function waterfall(){
    var $pin=$("#main>div");
    var pinW=$pin.eq(0).outerWidth();
   // var wid=$(window).width();
    var n=Math.floor($(window).width()/pinW);
    //设置main的宽度
    $("#main").width(pinW*n).css("margin","0 auto");
    var arra=[];
    $pin.each(function(index,value){
        var h=$pin.eq(index).outerHeight();
        if(index<n){
            arra[index]=h;
        }else {
            var minH=Math.min.apply(null,arra);
            var minN= $.inArray(minH,arra);
            $(value).css({
                'position':'absolute',
                'top':minH+"px",
                'left':pinW*minN+"px"
            })
            arra[minN]+=$pin.eq(index).outerHeight();
        }
    })
}
function check(){
    var $last=$("#main>div").last();
    var a=$last.offset().top+Math.floor($last.outerHeight()/2);
    var b=$(window).scrollTop();
    var c=$(window).height();
    var d=b+c;
    return (a<d)?true:false;
}
