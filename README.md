
Gente aqui les describo los datos de la wallet que les permite acceder a la cuenta que contiene los 1000 token erc20 TEST de Crucible 

El contrato ya está deployado en la testenet de polygon

https://mumbai.polygonscan.com/address/0x0bCD55Dcd3b522462f26596B38095F1A34A03Cd6

El Smart Contract tiene la opción de mintear (mint) nuevos tokens cuando así lo vean necesario

Address token
0x0bCD55Dcd3b522462f26596B38095F1A34A03Cd6

Address wallet
0xeE93c086A8346D19321e99E2CB7C1a7a7eBE2ba2

Secret para la wallet Metamask

plastic lecture memory erosion someone jeans clever priority sausage match april witness

Cualquier cosa no duden en consultarme julio@waytoodigital.com



Como hacer el deploy y mintear 1000 tokens

npx truffle console --network matic 
 let token = await CrucibleTest.deployed()
 await token.name()
 let supply = await token.totalSupply()
 supply.toNumber()
 await token.mint("0xeE93c086A8346D19321e99E2CB7C1a7a7eBE2ba2","1000000000000000000000")