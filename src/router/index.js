import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Aluno from '../views/Aluno';
import Alunos from '../views/Alunos';
import Fotos from '../views/Fotos';
import Login from '../views/Login';
import Page404 from '../views/Page404';
import Register from '../views/Register';

export default function Routes() {
  return (

    <Switch>                              {/**Esse Rota não é fechada - isClose */}
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aluno/:id/edite" component={Aluno} isClosed />
      <MyRoute exact path="/aluno" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/register" component={Register} isClosed={false} />
      <MyRoute exact path="/login" component={Login} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  )
};