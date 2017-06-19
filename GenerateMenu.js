
function GenerateMenu()
{
  
    //document.body.appendChild(a);

    document.querySelector("#divMenu").appendChild(GenerateMenuOnePoint("Page01", "Page01.html"));
    GenerateOneLine();
    document.querySelector("#divMenu").appendChild( GenerateMenuOnePoint("Page02", "Page02.html"));
    GenerateOneLine();
    document.querySelector("#divMenu").appendChild( GenerateMenuOnePoint("Page03", "Page03.html"));
    GenerateOneLine();
    document.querySelector("#divMenu").appendChild(GenerateMenuOnePoint("Page04", "Page04.html"));
    GenerateOneLine();
}

function GenerateMenuOnePoint(nameLink, hrefLink)
{
    var a = document.createElement('a');
    var linkText = document.createTextNode(nameLink);
    a.appendChild(linkText);
    a.title = nameLink;
    a.href = hrefLink;
    return a;
}
function GenerateOneLine()
{
    var br = document.createElement('br');
    document.querySelector("#divMenu").appendChild(br);
}