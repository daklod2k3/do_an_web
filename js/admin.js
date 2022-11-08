function table_ren(products){
    var tby = document.createElement('table');
    var table =  document.querySelector('.product-view > table > tbody')
    products.forEach(ele => {
        var tr = document.createElement('tr')
        var td = document.createElement('td')
        td.textContent = ele.id
        tr.append(td)
        tby.append(tr)

        var img = document.createElement('img')
        td = document.createElement('td')
        img.setAttribute('src', ele.img)
        td.append(img)
        tr.append(td)
        tby.append(tr)
        
        td = document.createElement('td')
        td.append(ele.name)
        tr.append(td)
        tby.append(tr)
        
        td = document.createElement('td')
        td.append(ele.cate)
        tr.append(td)
        tby.append(tr)

        td = document.createElement('td')
        td.append(ele.price)
        tr.append(td)
        tby.append(tr)
        
        td = document.createElement('td')
        td.innerHTML = `<a class="btn-edt">
        <i class="fa-sharp fa-solid fa-gear"></i>
        </a>
        <br>
        <a class="btn-dlt">
        <i class="fa-sharp fa-solid fa-circle-xmark"></i>
        </a>`
        tr.append(td)
        tby.append(tr)
        table.innerHTML = tby.innerHTML
    });
}
function adminRen(){
    table_ren(products)
}


function searchChange(){
    var id = document.getElementById('product-id-search').textContent
    if (id.trim() !== ""){
        table_ren(products.map(function(ele){
            return ele.id.search(id)
        }))
    }else{
        table_ren(products)
    }
}