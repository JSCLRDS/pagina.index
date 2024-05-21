function clique(){
    var n = window.document.getElementById('nome')
    var x = window.document.getElementsByName('fnc')
    var cv = window.document.getElementById('div2')
    var img = window.document.createElement('img')
    var v1 = window.document.getElementById('vtotal')
    var v2 = window.document.getElementById('ventrada')
    var v3 =  Number(v1.value) - Number(v2.value)
    var p1 = window.document.createElement(p1)
    var parc = window.document.getElementsByName('parcela')
    var p2 = window.document.createElement(p2)
    var p3 = window.document.createElement(p3)

    

    if (x[0].checked){
       var car = 'Carro'  
       img.setAttribute('src', 'carro.png')   
      
    
    }
    else {
    var car = 'Imóvel'
    img.setAttribute('src', 'imovel.jpg')   
    
    }


    if (parc[0].checked){
        var tipo = v3 *((1 + 3.25/100)**24 * 3.25/100)/((1 + 3.25/100)**24 - 1)
        var total = tipo * 24
    
    }
    if (parc[1].checked) {
        var tipo = v3 * ((1 + 3.25/100)**36 * 3.25/100) / ((1 + 3.25/100)**36 - 1)
        var total = tipo * 36
    
    }    
        
    else {
        var tipo = v3 * ((1 + 3.25/100)**48 * 3.25/100) / ((1 + 3.25/100)**48 - 1)
        var total = tipo * 48
    }

    cv.innerText= ` Olá ${n.value}! Você irá financiar um ${car}.`
    p1.innerHTML = `O Valor total financiado é ${v3} <br> ` 
    p2. innerHTML = `O Pagamento mensal estimado é: ${tipo} <br>`
    p3. innerHTML = `O valor total pago no finaciamento é: ${total}`
    cv.appendChild(img)   
    cv.appendChild(p1)
    cv.appendChild(p2)
    cv.appendChild(p3)
    


    
}

   