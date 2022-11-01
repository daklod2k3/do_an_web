var categories  = 
['Trang chủ', 'Nam', 'Nữ', 'Trẻ em', 'Khuyến mãi']
var info = {
    'phone-num' : "+84337961759",
    'email' : 'trandacloc123@gmail.com',
    'address' : 'Đại học Sài Gòn'
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

}

window.onload = renData

