// function convert(){
//     alert("This is convert function !!!!")
// }
function convert(){
var frm,to,amt;
frm= document.getElementById('from');
to = document.getElementById('to');
amt = document.getElementById('amt');
// curr= document.getElementById('currency');

var z = 'https://v6.exchangerate-api.com/v6/eab7e00d7c6c00617e242dee/latest/'+frm.value;
fetch(z).then(function(res){
    return res.json();
}).then(function(data){
    // document.write(data,"<br>");
    // document.write(data['result'],"<br>");
    // document.write(data['conversion_rates'],"<br>");
    var cr = data['conversion_rates'];
    var cf = cr[to.value];
    var fam = cf * amt.value;
    
    
    result.innerHTML=fam;
   


})
// document.write(res);

// document.write(frm.value,"<br>",to.value,"<br>",amt.value);
 }

