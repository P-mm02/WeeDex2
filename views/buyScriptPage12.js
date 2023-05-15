function BuyWindow12(){
    BuyWindowPage1.style.left = '30vw'
    BuyWindowPage1.style.visibility = 'visible'

    fetch('itemData.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        appenData(data)
    })
    .catch(function(err){
        console.log('error: ' + err)
    })
    
    function appenData(data){
        var mainContainer = document.getElementById("BuyWindowPage1")  
        var spanTime = document.createElement("span")
        spanTime.setAttribute("id","span111")
        spanTime.innerHTML = "Registeration Time: <br>" + data[1].regisTime
        mainContainer.appendChild(spanTime)
    
        var spanName = document.createElement("span")
        spanName.setAttribute("id","span112")
        spanName.innerHTML = "Name: <br>" + data[1].name    
        mainContainer.appendChild(spanName)
    
        var spanGameName = document.createElement("span")
        spanGameName.setAttribute("id","span113")
        spanGameName.innerHTML = "Game: <br>" + data[1].gameName    
        mainContainer.appendChild(spanGameName)
        
        var spanPrice = document.createElement("span")
        spanPrice.setAttribute("id","span114")
        spanPrice.innerHTML = "Price: <br>" + data[1].price    
        mainContainer.appendChild(spanPrice)
    
        var spanAddress = document.createElement("span")
        spanAddress.setAttribute("id","span115")
        spanAddress.innerHTML = "Address: <br>" + data[1].address    
        mainContainer.appendChild(spanAddress)   
          
    }
}

fetch('itemData.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        appenData(data)
    })
    .catch(function(err){
        console.log('error: ' + err)
    })

function CloseBuyWindow11(){
    BuyWindowPage1.style.visibility = 'hidden'
    var elem = document.getElementById("span111")
    elem.parentNode.removeChild(elem)
    var elem = document.getElementById("span112")
    elem.parentNode.removeChild(elem)
    var elem = document.getElementById("span113")
    elem.parentNode.removeChild(elem)
    var elem = document.getElementById("span114")
    elem.parentNode.removeChild(elem)
    var elem = document.getElementById("span115")
    elem.parentNode.removeChild(elem)
}


