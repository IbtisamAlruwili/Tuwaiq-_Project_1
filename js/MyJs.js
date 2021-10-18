

////     قمت باضافة المنتجات لمصفوفة 
    var products = [
        {name:"فيتامين C",disc:"يرطب البشرة ويحافظ على نعومتها",img:"https://media.zid.store/cdn-cgi/image/f=auto/https://media.zid.store/69700348-64c8-4da8-a2cb-3b3b12a78746/677ddd11-adfa-42b3-b274-a90421361b53.png"},
        {name:"مجموعة ميركل سوم",disc:"تحتوي على مواد تعمل على تقشير البشرة وتكون أكثر تألقا",img:"https://cdn.shopify.com/s/files/1/2080/5361/products/106ffc80d858f600c2ff771ccb36f470_1024x1024.jpg?v=1631087056"},
        {name:"مجموعة ايزيل للعناية",disc:"يوحد لون البشرة، ينقي ,وينظف بعمق",img:"https://www.izilbeauty.com/media/catalog/product/cache/f4a6c3541f3bdce311154f7273526e93/s/e/set_glow_and_radiance_set.jpg"},
        {name:"افين سولار",disc:"واقي شمس",img:"https://cdn.shopify.com/s/files/1/0041/8378/5542/products/P11631701507028_000_001_900x.jpg?v=1586264710"}
    
    ];
    ///  قمت باستدعاء دالة تحميل البيانات
    LoadProduct(products);

    //// 
    $('#btnSave').click(function(){
        let Name = $('#Name').val();
        let Disc = $('#Disc').val();
        let Img = $('#Img').val();
        products.push({name:Name,disc:Disc,img:Img});
       
      //  window.location.href = "file:///C:/Users/techn/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/store/index.html";
        LoadProduct(products);
        alert("Product Store Succssfully.");
    });

///   دالة تضيف البيانات الي ملف ال html
function LoadProduct(MyProducts)
{
    $('#myproducts').empty();
    MyProducts.forEach(function(value,index){

        $('#myproducts').append('<div class="col-md-4"><div class="card" style="width: 18rem;">\
        <img src="'+value.img+'" class="card-img-top" alt="..."><div class="card-body text-center">\
        <h5 class="card-title">'+value.name+'</h5>\
         <p class="card-text">'+value.disc+'</p>\
         </div></div></div>');

    });

    $(document).ready(function(){

        $("#switchField1").click(function() {
            $("#field1").toggle(50);
        });
    });


}