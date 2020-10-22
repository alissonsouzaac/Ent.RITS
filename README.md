# Ent.RITS

Este código é um back end de uma lanchonete utilizando Node.js/Typescript com integração com um banco de dados mongoDB que é utilizado para salvar tanto os dados quanto as operações do cliente e admin e produzido com a clean architecture.

Poderá ser executa entrando na pasta pelo terminal e utilizando o comando "npm run main".

# NotCliente

POST:http://localhost:9000/

{
    "name": "Alisson",
    "email": "alisson.315@hotmail.com",
    "phone": "81992893009",
    "endereco": "rua do jasmim"
}

Parte do NotClient para cadastrar o novo cliente e os dados necessários para testar via postman.

# Client

GET:http://localhost:9000/cliente/listar

Rota responsável para listar todos os pedidos feito pelo cliente. Não precisa introduzir dados via postman

GET:http://localhost:9000/cliente/ver

{
    
    "codProd": "1",
    
}

Rota responsável para mostrar um pedido expecifico basta especificar um campo mais conveniente para a busca.

POST: http://localhost:9000/cliente/criar

{
    
    "codProd": "1",
    "dataCria": "22/10/2020"
    
}

Rota responsável para a criação de pedido. "o resto dos dados são preenchidos automaticamente".

DELETE: http://localhost:9000/cliente/deletar

{
    "codClient": "6b0a5be8-bcfc-4815-a2f8-db5c074d00fd"
}

Rota responsável por deletar o pedido atráves do código do cliente.

# NotAdmin

POST: http://localhost:9090/

{
    "nid": "08320305462",
    "fullName": "ALISSON COSTA",
    "phone": "81992893009",
    "email": "alisson.315@hotmail.com",
    "password": "123456"

}

Rota responsável por salvar um administrador.

POST: http://localhost:9090/login

{
    "email": "alisson.315@hotmail.com",
    "password": "123456"
}

Rota responsável pelo login do admin.

# Admin

GET: http://localhost:9090/admin/produtos

Lista todos os produtos. Não precisa de dados.

GET: http://localhost:9090/admin/clientes

Lista todos os clientes. Nõa precisa de dados.

GET: http://localhost:9090/admin/produto

{
    "cod": "30"
}

Pesquisa um produto especifico passando como parametro o "cod" do produto.

GET: http://localhost:9090/admin/cliente

{
    "name": "Alisson"
}


Pesquisa um cliente especifico passando como parametro o "name" do cliente.

POST: http://localhost:9090/admin/produto

{
    "name": "coxinha",
    "preco": "2",
    "cod": "30"
}

Rota para adicionar produtos pelo admin.

POST: http://localhost:9090/admin/cliente

{
    "name": "Alisson",
    "email": "alisson.315@hotmail.com",
    "phone": "81992893009",
    "endereco": "rua do jasmim"
}

Cria cliente pelo Admin. Obs: sem a verificação se já existe email ou phone já cadastrados.

PUT: http://localhost:9090/admin/produto

{
    "cod": "1",
    "preco": "3"
}

Faz atualização dos produtos pelo "cod" e passa o campo que deseja ser alterado.

PUT: http://localhost:9090/admin/status

{
    "codProd": "1",
    "status": "andamento"
}

Faz atualização do status a vontade para o "codProd" do pedido. "Atualiza todos os pedidos que o produto de tal código foi feito.

DELETE:http://localhost:9090/admin/produto

{
    "cod": "20"
}

Rota que deleta o produto apartir da "cod" do produto.
