<style>
.alert_ul {
	list-style: none;
	margin: 0px;
	padding: 0px;
	width: 70%;
	margin: auto;
	margin-top: 53%;
}

.alert_title {
	background: #eee;
	text-align: left;
	padding-left: 20px;
	line-height: 30px;
	border: 0px solid #999;
}

.alert_content {
	background: #fff;
	text-align: center;
	height: 80px;
	line-height: 80px;
	font-size:18px;
}

.alert_btn-wrap {
	background: #eee;
	text-align: center;
	height: 30px;
	line-height: 30px;
	border: 1px solid #999;
}

.alert_btn {
	height:30px;
	width:220px;
	cursor: pointer;
	color: #000;
	line-height: 30px;
	border-style:solid;
	border-width:1px;
	border-color:#aaa;
}
#alertFram{
	border-radius:5px 0;
}
</style>
window.alert = function(str)
        {
             
            var alertFram = document.createElement("DIV");
            alertFram.id="alertFram";
            alertFram.style.position = "fixed";
            alertFram.style.width = "100%";
            alertFram.style.height = "100%";
            alertFram.style.top = "0";
            alertFram.style.textAlign = "center";
            alertFram.style.lineHeight = "150px";
            alertFram.style.zIndex = "300";
            alertFram.style.backgroundColor="rgba(0, 0, 0, 0.58)";
            alertFram.style.fontSize="12px";
            strHtml = '<ul class="alert_ul">';
            strHtml += '<li class="alert_title">感谢您的参与</li>';
            strHtml += '<li class="alert_content">'+str+'</li>';
            strHtml += '<li class="alert_btn-wrap" onclick="doOk()" class="alert_btn">确定</li>';
            strHtml += '</ul>';
            alertFram.innerHTML = strHtml;
            document.body.appendChild(alertFram);
            this.doOk = function(){
               // alertFram.style.display = "none";
              // var idObject = document.getElementById('sidebar');
            	alertFram.parentNode.removeChild(alertFram);


            }
        }

