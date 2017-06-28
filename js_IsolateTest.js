function DisplayTransferValue(box)
{
    ToPrintDisplay("<br> &nbsp; &nbsp; &nbsp; box.constructor.prototype.transferValue: " + box.constructor.prototype.transferValue);
    ToPrintDisplay("<br> &nbsp; &nbsp; &nbsp; box.prototype.transferValue: ");
    if (typeof box.prototype == "undefined")  { ToPrintDisplay("нет значение родителя"); }
    else { ToPrintDisplay(box.prototype.transferValue); }
    ToPrintDisplay( "<br> &nbsp; &nbsp; &nbsp; box.constructor.transferValue: " + box.constructor.transferValue);
    ToPrintDisplay("<br> &nbsp; &nbsp; &nbsp; box.transferValue: " + box.transferValue) ;

}

function ToPrintDisplay(valuePrint)
{
    document.getElementById("test").innerHTML += valuePrint;
}