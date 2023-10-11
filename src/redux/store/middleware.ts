// middleware.ts
import { type Middleware } from 'redux';

import { itemsApi } from '../../service/itemsApi';

const apiSlicesMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  return result;
};

const combinedMiddleware = [itemsApi.middleware, apiSlicesMiddleware];

export default combinedMiddleware;
