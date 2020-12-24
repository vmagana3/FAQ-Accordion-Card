

var title = document.getElementsByClassName('faq-title')

for(var i = 0; i<title.length; i++)
{
    title[i].addEventListener("click",showText)   
}

function showText()
{        
    //console.log(this.nextElementSibling.textContent)

    
    var text = this.nextElementSibling;    

    if(text.style.display === "none")
    {        
        text.style.display = "inline"                        
    }   
    else
    {
        text.style.display = "none"                  
    }    
}

