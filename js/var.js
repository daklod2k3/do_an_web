var categories = localStorage.getItem('cate')
categories = JSON.parse(categories)
if (!categories){
    categories  = 
    ['Trang chủ', 'Nam', 'Nữ', 'Trẻ em', 'Khuyến mãi']
    localStorage.setItem('cate', JSON.stringify(categories))
}

var info = localStorage.getItem('info')
info = JSON.parse(info)

if (!info) {
    info = {
        'phone-num' : "+84337961759",
        'email' : 'trandacloc123@gmail.com',
        'address' : 'Đại học Sài Gòn'
    }
    localStorage.setItem('info', JSON.stringify(info))
}


var account = localStorage.getItem('acc')
account = JSON.parse(account)
if (!account) {
    account = [
        {
            username: 'admin',
            password: 'admin'
        }
    ]
    localStorage.setItem('acc', JSON.stringify(account))
}

var products = localStorage.getItem('product')
products = JSON.stringify(products)
if (!product) {
    var product = function (id, name, price, decrip, img){
        this.id = id;
        this.name = name;
        this.price = price;
        this.decrip = decrip;
        this.img = img
    }
    
    
    var tmp = new product(1,'Giày Thể Thao Nam Hunter Street Cream DSMH10400KEM (Kem)',781000,'Miêu tả:  ', '.img/product1.webp')
    
    products = []
    products.push(tmp)
}


function renData(){

    // Search selection
    var srchSelect =  document.querySelector('.input-select')
    categories.forEach((ele, index) => {
        if (index == 0) return
        var tmp = document.createElement('option');
        tmp.setAttribute('value', index)
        tmp.innerText = ele
        srchSelect.appendChild(tmp)
    });




    // Navigation
    var navBar = document.querySelector('nav > .container')
    console.log(navBar);
    categories.forEach(ele => {
        var span = document.createElement('span');
        span.setAttribute('class', 'active');
        var link = document.createElement('a');
        link.innerText = ele
        // link.appendChild(span)
        navBar.appendChild(link)
    })

    $('#body').load('admin.html') //Sửa admin.html thành tên file của mình


}

window.onload = renData

