function prepareInternalnav() {
    if(!document.getElementsByTagName){return false;}
    if(!document.getElementById){return false;}
    //var rightBottom = document.getElementsByClassName('right-bottom');
    //if(rightBottom.length == 0){return false;}
    var internalNav = document.getElementById('internalnav');
    //if(navs.length == 0){return false;}
    //var nav = navs[0];
    var links = internalNav.getElementsByTagName('a');
    for(var i = 0;i < links.length;i++){
        var sectionId = links[i].getAttribute('href').split('#')[1];
        //console.log(sectionId);
        if(!document.getElementById(sectionId)){continue;}
        document.getElementById(sectionId).style.display = 'none';
        links[i].destination = sectionId;
        links[i].onclick = function () {
            showSection(this.destination);
            return false
        }
    }
}
//根据被点击的a标签链接设置section的display值
function showSection(id) {
    var sections = document.getElementsByTagName('section');
    for(var i = 0;i < sections.length;i++){
        if(sections[i].getAttribute('id') != id){
            sections[i].style.display = 'none';}
        else{sections[i].style.display = 'block';}
    }
}

function relationMe(){
    var relation = document.getElementById("relation");
    var relationWay = document.getElementById("relationWay");
    relation.onmouseover = function(){
        relation.style.backgroundColor = 'rgba(0,0,0,0.3)';
        relationWay.style.display = "block";
    };
    relation.onmouseout = function(){
        //relation.style.border-top-right-radius = '';
        relation.style.backgroundColor = 'rgba(0,0,0,0.6)';
        relationWay.style.display = "none";
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareInternalnav);
addLoadEvent(relationMe);