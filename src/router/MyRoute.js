import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedId = false;
  if (isClosed && !isLoggedId) {
    return (
      <Redirect
        to={{
          pathname: '/login', state: { prevPath: rest.location.pathname }
        }}
      />
    );
  }
  //estlint-disable-next-line react/jsc-props-no-spreading
  return <Route {...rest} component={Component} />
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.PropTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
};