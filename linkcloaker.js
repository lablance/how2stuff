//Blogger Affiliate Link Cloaker

//<![CDATA[
var key = window.location.href.split("go/")[1].replace("/","")
var urls={
 'godaddy':'http://www.jdoqocy.com/click-7623593-10602879?sid=659',
 'product1':"https:/www.how2stuff.com/go/godaddy",
}
if(key){
 if(urls[key]){
 window.location.href=urls[key]
 }else{
 document.write("'"+key+"' not found :(");
 }
}
//]]>