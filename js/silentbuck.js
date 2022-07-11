// 首頁的panel

$( document ).on( "pagecreate", "#home", function() {
                $( document ).on( "swipeleft swiperight", "#home", function( e ) {
            if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
                if ( e.type === "swipeleft" ) {
                     $( "#right-panel" ).panel( "open" );
                } else if ( e.type === "swiperight" ) {
                     $( "#left-panel" ).panel( "open" );
            }
        }
    });
});

// 裡面頁面的panel

	$( document ).on( "pagecreate", "#details", function() {
                $( document ).on( "swipeleft swiperight", "#details", function( e ) {
            if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
                if ( e.type === "swipeleft" ) {
                     $( "#right-panel2" ).panel( "open" );
                } else if ( e.type === "swiperight" ) {
                     $( "#left-panel2" ).panel( "open" );
            }
        }
    });
});

//   第三頁的panel

		$( document ).on( "pagecreate", "#item", function() {
                $( document ).on( "swipeleft swiperight", "#item", function( e ) {
            if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
                if ( e.type === "swipeleft" ) {
                     $( "#right-panel3" ).panel( "open" );
                } else if ( e.type === "swiperight" ) {
                     $( "#left-panel3" ).panel( "open" );
            }
        }
    });
});



$(function(){
	// $("XXXXX") == findViewById
	$('#showprev').bind('click',showprev);
	$('#shownext').bind('click',shownext);
	// 加入計時器
	// setInterval(shownext,200)    
});

var index=0;

var PianoImg,PianoName;

var PianoImgV= new Array("CLP-645-th00.jpg","CLP-645-th01.jpg","CLP-645-th02.jpg","CLP-645-th03.jpg","p115-th00.jpg","p115-th01.jpg","p115-th02.jpg","p115-th03.jpg","YDP-163-th00.jpg","YDP-163-th01.jpg","YDP-163-th02.jpg","YDP-163-th03.jpg");

var PianoNameV=new Array("CLP-645-0","CLP-645-1","CLP-645-2","CLP-645-3","p115-0","p115-1","p115-2","p115-3","YDP-163-0","YDP-163-1","YDP-163-2","YDP-163-3");

function shownext(){
	// 下一張
	index ++;
	// 如果圖片超過,回到第一張
	if (index>11) {index=0}
		// 取得正確的圖片路徑
	PianoImg="images/piano/pianoth/"+PianoImgV[index];
		//取得相對應名稱 
	PianoName=PianoNameV[index];
		//改變圖片路徑 
	$("#pimg").attr("src",PianoImg);
		//改變相對應名稱
	$("#ptext").text(PianoName);
}

function showprev(){
	index --;
	if (index<0) {index=11}
	PianoImg="images/piano/pianoth/"+PianoImgV[index];
	PianoName=PianoNameV[index];
	$("#pimg").attr("src",PianoImg);
	$("#ptext").text(PianoName);
}



