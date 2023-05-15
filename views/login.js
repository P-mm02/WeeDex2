
document.getElementById('LoginButton').addEventListener('click', event => {
    let account
    let btn = event.target
    
    ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
      account = accounts[0]
      console.log(account)
      btn.textContent = account
      document.getElementById("LoginButton").style.fontSize = '0.75vw'        

      ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
        console.log(result)
        let wei = parseInt(result,4);
        let balance = wei / (10**18)
        document.getElementById("balanceETH").innerHTML = balance
      })
      let address = document.getElementById("addressadd")   
      address.value = account   
      document.getElementById("loginForm").submit()
    })    
      
  })