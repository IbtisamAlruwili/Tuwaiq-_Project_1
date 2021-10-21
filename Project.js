const Name = $("#name");
const Img = $("#img");
const Price = $("#price");
const Div = $("#div");
const DivA = $("#divA");
const webArray =[
    {NameProduct : " فرش المكياج " , ImgProduct: "   https://www.aljamila.com/sites/default/files/styles/1100x732_scale/public/2019/01/14/2444336-1266191703.jpg " , priceProduct: "20 RS"} ,
    {NameProduct :"ظلال عيون" , ImgProduct: "   https://upload.3dlat.com/uploads/13304539609.jpg  " ,priceProduct: "20 RS"},
    {NameProduct : "فاونديشن" , ImgProduct: " https://jouzal.com/wp-content/uploads/2019/08/images-14.jpeg " , priceProduct: "20 RS"},
    {NameProduct :"ماسكارا" , ImgProduct: "  https://rqeeqa.com/wp-content/uploads/2018/08/%D8%B5%D9%88%D8%B1-%D8%A3%D8%AF%D9%88%D8%A7%D8%AA-%D9%85%D9%83%D9%8A%D8%A7%D8%AC-2-500x281.jpg " ,priceProduct: "20 RS"},
    {NameProduct :"بودره" , ImgProduct: " https://lh3.googleusercontent.com/proxy/rGalEEigq4CanRIdkchaZw7aMmoy5Yj79AL3G3PdEkOROcCyflrKgTxpr6GG_tt8Nr8tMUgk5TkU3h38cSz2Qjy_GeYJ_wKh4ZWNKyiFb3nV8kQSrg  " ,priceProduct: "20 RS"},
    {NameProduct :"كحل العيون" , ImgProduct: " https://www.3roos.com/wp-content/uploads/2019/07/16.jpg  " ,priceProduct: "20 RS"},

  ];
///هينا سويت داله 
function renderArr(array) {
    for (let i = 0; i < array.length; i++) {
      const div =
       $(`<div class="col-md-4">
       <button id="hideBtn" onclick="delet(${i})"> delet</button>
          <img src="${array[i].ImgProduct}" >
          <h1>${array[i].NameProduct}</h1>
          <p>${array[i].priceProduct}</p>
      </div>`);
      Div.append(div);
    }
  }

  renderArr(webArray);
  
function addproduct() {
    const newProduct = {
        NameProduct: Name.val(),
        ImgProduct: Img.val(),
        priceProduct: Price.val(),
    };
    webArray.push(newProduct);
    renderArr([newProduct]);
}
DivA.hide();

function showHandler() {
    DivA.show();
  }
  function hideHandler() {
    DivA.hide();
  }

  function delet(E){
      webArray.splice(E,1);
      Div.html("");
      renderArr(webArray);
  }



  $('#btnEmailSave').click(function(){

    var email = $('#email').val();
    if(email.length > 0)
    {
      localStorage.setItem("Email",email);
      $('#lblMsg').append('<b> تم حفظ بريدك'+ localStorage.getItem("Email")+' بنجاح</b>')
    }else
    {
      alert("Invalid Data!");
    }
   


  });