var oLi = document.getElementsByClassName('col');
var flag = false;
var page = 1;
//获取数据
function getData() {
   flag = true;
   ajax('GET', 'js/getPics.php', 'cpage='+page, true, renderDom);

}

//渲染页面
function renderDom(data) {
   data = typeof data == "string" ? JSON.parse(data) : data;
   data.forEach(function (ele, index, self) {
      var itemDom = addDom(ele);
      var minIndex = getMinLi();
      oLi[minIndex].appendChild(itemDom);
   })
   flag = false;
   page ++;
}

function addDom(data) {
   var itemDom = document.createElement('div');
   itemDom.classList.add('item');
   var imgDiv = document.createElement('div');
   var img = new Image();
   img.src = data.preview;
   img.style.height = data.height / data.width * 138;
   var p = document.createElement('p');
   p.innerText = data.title;
   imgDiv.appendChild(img);
   itemDom.appendChild(imgDiv);
   itemDom.appendChild(p);
   return itemDom;
}



//寻找最短的列
function getMinLi() {
   var oLi = document.getElementsByClassName('col');
   var minIndex = 0;
   var minHeight = oLi[minIndex].offsetHeight;
   for (var i = 1; i < oLi.length; i++) {
      if (oLi[i].offsetHeight < oLi[minIndex]) {
         minHeight = oLi[i].offsetHeight;
         minIndex = i;
      }
   }
   return minIndex;
}

window.scroll = function () {
   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
   var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
   var minHeight = oLi[getMinLi()].offsetHeight;
   if (scrollTop + clientHeight > minHeight) {
      if(!flag){
         flag = true;

         getData();
      }
      
   }
}



getData();