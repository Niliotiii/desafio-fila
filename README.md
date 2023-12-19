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

## Desenvolvido por:
- Danilo Saiter da Silva