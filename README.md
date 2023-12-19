# API - PROJETO FILA DE ESPERA DE CRECHES - TCE/RO

## Description

API desenvolvida para participação no seletivo para a vaga de desenvolvedor Beck-End do projeto Fila de Espera de Creches desenvolvido pelo Ifro Câmpus Ji-Paraná em parceria com o TCE/RO

## Observação
É necessário ter o Docker em ambiente linux para conseguir executar o projeto

## Passo a passo:
```bash
cp .env-example .env

npm install

make up

docker exec -it api-fila npm run migration:up

make logs
```

## URL da documentação e testes:

```bash
http://localhost:3003/api
```

## Criar apenas criança:
```bash
{
  "id":1,
  "nome": "Danilo Saiter Da Silva",
  "cpf": "034.424.442-33",
  "sexo": "Masculino",
  "data_nascimento": "2023-12-19T22:04:19.523Z",
  "nome_responsavel": "Adelina",
  "tipo_responsavel_id": 1
}
```

## Criar objeto ccmpleto:
```bash
{
  "id":1,
  "nome": "Danilo Saiter Da Silva",
  "cpf": "034.424.442-33",
  "sexo": "Masculino",
  "data_nascimento": "2023-12-19T22:04:19.523Z",
  "nome_responsavel": "Adelina",
  "tipo_responsavel_id": 1,
  "endereco_id": {
    "id":1,
    "cep": "76920-000",
    "logradouro": "Rua dos Produtores",
    "numero": 37,
    "bairro": "Incra",
    "complemento": "Casa",
    "municipio": "Ouro Preto do Oeste",
    "uf": "RO"
  },
  "contato_id": {
    "id":1,
    "telefone": "69993707021",
    "tipo_responsavel_id": 1
  }
}
```

## Desenvolvido por:
- Danilo Saiter da Silva