import adminController from './controller/adminController.js';
import cadastroController from './controller/cadastroController.js';
import express from 'express';


export default function adicionarRotas(servidor) {
  servidor.use(cadastroController);
  servidor.use(adminController);

}