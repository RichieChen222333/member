// 設定廣告可左右滑動
// 使用方法
// 呼叫 AD_SEC(秒數)
// 圖片與文字的必須分別使用id="AD_IMG"  id="AD_TEXT" 超連結 id="AD_HREF"


// 滑動的頁面"#demo-home"與html的頁面id一致

$( document ).on( "pagecreate", "#demo-home", function() {
                $( document ).on( "swipeleft swiperight", "#demo-home", function( e ) {
//             if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
                if ( e.type === "swipeleft" ) {
                    $(AD_PLUS);
                } else if ( e.type === "swiperight" ) {
					 $(AD_MINUS);
            }
//         }
    });
});




var adnum = 0;


var adimg,adname,adurl;

var adimgA = new Array  ( "img000.jpg","img001.jpg","img002.jpg","img003.jpg",
					      "img004.jpg","img005.jpg","img006.jpg","img007.jpg",
					      "img008.jpg","img009.jpg","img010.jpg","img011.jpg",
					      "img012.jpg","img013.jpg","img014.jpg","img015.jpg",
					      "img016.jpg","img017.jpg","img018.jpg","img019.jpg"
					    );

var adnameA = new Array ( "img000","img001","img002","img003",
						  "img004","img005","img006","img007",
						  "img008","img009","img010","img011",
						  "img012","img013","img014","img015",
						  "img016","img017","img018","img019"
						);

var adurlA = new Array  ( "http://192.168.60.101/ship/img000.jpg","http://192.168.60.101/ship/img001.jpg",
					      "http://192.168.60.101/ship/img002.jpg","http://192.168.60.101/ship/img003.jpg",
					      "http://192.168.60.101/ship/img004.jpg","http://192.168.60.101/ship/img005.jpg",
					      "http://192.168.60.101/ship/img006.jpg","http://192.168.60.101/ship/img007.jpg",
					      "http://192.168.60.101/ship/img008.jpg","http://192.168.60.101/ship/img009.jpg",
					      "http://192.168.60.101/ship/img010.jpg","http://192.168.60.101/ship/img012.jpg",
					      "http://192.168.60.101/ship/img012.jpg","http://192.168.60.101/ship/img013.jpg",
					      "http://192.168.60.101/ship/img014.jpg","http://192.168.60.101/ship/img015.jpg",
					      "http://192.168.60.101/ship/img016.jpg","http://192.168.60.101/ship/img017.jpg",
					      "http://192.168.60.101/ship/img018.jpg","http://192.168.60.101/ship/img019.jpg"
					    );

function AD_PLUS(){

	adnum++;
	if (adnum>adimgA.length-1) {adnum=0}
	adimg="images/ship/"+adimgA[adnum];
	adname=adnameA[adnum];
	adurl=adurlA[adnum];
	$("#AD_IMG").attr("src",adimg);
	$("#AD_TEXT").text(adname);
	$("#AD_HREF").attr("href",adurl);
}

function AD_MINUS(){

	adnum--;
	if (adnum<0) {adnum=adimgA.length-1}
	adimg="images/ship/"+adimgA[adnum];
	adname=adnameA[adnum];
	adurl=adurlA[adnum];
	$("#AD_IMG").attr("src",adimg);
	$("#AD_TEXT").text(adname);
	$("#AD_HREF").attr("href",adurl);
}


