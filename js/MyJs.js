

////     قمت باضافة المنتجات لمصفوفة 
let productName = "";
let products = [
    { name: "فيتامين C", disc: "يرطب البشرة ويحافظ على نعومتها", img: "https://media.zid.store/cdn-cgi/image/f=auto/https://media.zid.store/69700348-64c8-4da8-a2cb-3b3b12a78746/677ddd11-adfa-42b3-b274-a90421361b53.png" },
    { name: "مجموعة ميركل سوم", disc: "تحتوي على مواد تعمل على تقشير البشرة وتكون أكثر تألقا", img: "https://cdn.shopify.com/s/files/1/2080/5361/products/106ffc80d858f600c2ff771ccb36f470_1024x1024.jpg?v=1631087056" },
    { name: "مجموعة ايزيل للعناية", disc: "يوحد لون البشرة، ينقي ,وينظف بعمق", img: "https://www.izilbeauty.com/media/catalog/product/cache/f4a6c3541f3bdce311154f7273526e93/s/e/set_glow_and_radiance_set.jpg" },
    { name: "افين سولار", disc: "واقي شمس", img: "https://cdn.shopify.com/s/files/1/0041/8378/5542/products/P11631701507028_000_001_900x.jpg?v=1586264710" }

];


///  قمت باستدعاء دالة تحميل البيانات
//LoadProduct(products);

////   خاص بافت منتج تحت الانشاء
$('#btnSave').click(function () {
    let Name = $('#Name').val();
    let Disc = $('#Disc').val();
    let Img = $('#Img').val();
    window.products.push({ name: Name, disc: Disc, img: Img });


    






///  تحميل المنتجات داخل الشاشة الرئيسية
    LoadProduct(products);
    alert("تم اضافة المنتج بنجاح");
    showHome();
    $('#Name').val(" ");
    $('#Disc').val(" ");
    $('#Img').val(" ");
});

///   دالة تضيف البيانات الي ملف ال html
function LoadProduct(MyProducts) {
    $('#ShowProducts').empty();
    MyProducts.forEach(function (value,) {

        $('#ShowProducts').append('<div class="col-md-4"><div class="card" style="width: 18rem;">\
        <img src="'+ value.img + '" class="card-img-top" alt="..."><div class="card-body text-center">\
        <h5 class="card-title">'+ value.name + '</h5>\
         <p class="card-text">'+ value.disc + '</p>\
         </div></div></div>');

    });
}

/// دالة ابتدائية لشتغيل رئيسية الموقع 
function init() {
    LoadProduct(window.products);
}

///  دالة لعرض الرئيسية واخفاء الاضافة وادارة المنتجات
function showHome() {
    LoadProduct(products);
    $('#EditProduct').addClass("d-none");
    $('#ShowProducts').removeClass("d-none");
    $('#AddProduct').addClass("d-none");
}
///   اظهار اضافة منتج واخفاء البقية
function showAddProduct() {

    $('#EditProduct').addClass("d-none");
    $('#ShowProducts').addClass("d-none");
    $('#AddProduct').removeClass("d-none");
}

//    دالة اظهار التعديل والحذف واخفاء البقية
function showEditProduct() {
    LoadSelectData();
    $('#EditProduct').removeClass("d-none");
    $('#ShowProducts').addClass("d-none");
    $('#AddProduct').addClass("d-none");
}

////  دالة لحفظ التعديل
function SaveEditProduct() {
    productName = $('#productOption').val();
    products.forEach(function (value) {

        if (value.name == productName) {
            value.name = $('#e_Name').val();
            value.disc =  $('#e_Disc').val();
            value.img =  $('#e_Img').val();
            alert("Product Modified Successfully.");
            LoadSelectData();
            showHome();
        }

    });
   

}

// دالة لتعبئة بيانات الselect
function LoadSelectData(){
    $('#productOption').empty();
    products.forEach(function (value) {

        $('#productOption').append('<option value="' + value.name + '">' + value.name + '</option>');
    });
}


///   دالة لاظهار نموذج التعديل
function ShowEditForm(show){

    if(show =="true")
    {
        $('#edit_form').removeClass("d-none");
    }else{
        $('#edit_form').addClass("d-none");
    }

    
}

/// دالة لحذف منتج 
function DeleteProduct()
{
    productName = $('#productOption').val();

 products.forEach(function (value,index) {

        if (value.name == productName) {
           products.splice(index,index+1);
            alert("Product Deleted Successfully.");
            LoadSelectData();
            showHome();
        }

    });
}