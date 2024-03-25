document.onscroll =function(e){
    if(document.documentElement.scrollTop>50)
    {
        let homeHeader = document.querySelector(".home-header")
        homeHeader.classList.add("scroll")
    }
    else{
        let homeHeader = document.querySelector(".home-header")
        homeHeader.classList.remove("scroll")
    }
}

var adultsElement = document.querySelector(".destination-item_adults")
var childrentElement = document.querySelector(".destination-item_chidrent")
var adultsListItem = document.querySelectorAll(".destination-item_adults-item")
var adultsList= document.querySelector(".destination-item_adults-list")
var childrentsList= document.querySelector(".destination-item_childrent-list")
var childrentListItem = document.querySelectorAll(".destination-item_childrent-item")
console.log(childrentListItem)
console.log(adultsListItem)
adultsElement.onclick=function()
{
    adultsList.classList.add("open")
    // alert("Please select")
}
childrentElement.onclick=function(){
    childrentsList.classList.toggle("open")
}
for (let i=0;i<adultsListItem.length;i++)
{
    adultsListItem[i].onclick=function(e){
        var adultsNum= document.querySelector(".destination-item_adults-num")
        // this.stopPropagation();
        var text=`${this.innerText}`;
        adultsNum.innerHTML=text;
        adultsList.classList.remove("open")
        e.stopPropagation();
    }
}
for (let i=0;i<childrentListItem.length;i++){
    childrentListItem[i].onclick=function(e){
        var childrentNum= document.querySelector(".destination-item_childrent-num")
        // this.stopPropagation();
        var text=`${this.innerText}`;
        childrentNum.innerHTML=text;
        childrentsList.classList.remove("open")
        e.stopPropagation();
    }
}

document.onmouseup=function(){
    adultsList.classList.remove("open")
    childrentsList.classList.remove("open")
    adultsList.onclick=function(e)
    {
        e.stopPropagation()
    }
    childrentsList.onclick=function(e)
    {
        e.stopPropagation()
    }
}

var rateList=document.querySelectorAll(".best-tour_item-rate i");
for (let i = 0; i < rateList.length; i++)
{
    rateList[i].onclick=function(e){
        this.classList.toggle('rated');
    }
}
