//document.getElementById("showButton").addEventListener("click", hello)

function GetImageHtml(imgNum,hidden)
{
    let str = '<div class="col-lg-3 col-sm-6 imgbody"><div class="imgTitle"></div><div class="imgContainer"><img class = "img-fluid" src="img' + imgNum + '.jpg"></div></div>';
    return str;
}

function ShowImages()
{
    if(document.getElementById("showButton").className != "btn btn-success")
    {
        document.getElementById("showButton").className = "btn btn-success"
        for (let i = 1; i < 11; i++) 
        {
        document.getElementById("imgRow").innerHTML+=GetImageHtml(i,false);   
        }
    }
    else 
    {
        document.getElementById("showButton").className = "btn btn-secondary"
        document.getElementById("imgRow").innerHTML="";
    }
}


function Shuffle()
{
    if(document.getElementById("showButton").className == "btn btn-success")
    {
        document.getElementById("imgRow").innerHTML="";
        let numlist = [];
    
        for (let i = 1; i < 11; i++) {
            
            let num = getRandomInt(1,11);
           
           
            numlist[numlist.length+1] = num; 
            document.getElementById("imgRow").innerHTML+=GetImageHtml(num,false);
            
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  