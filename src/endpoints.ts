import { checkUniqueValues, memoize } from './utils/common';

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:8000';
export const WEB_BASE_URL =
  process.env.REACT_APP_WEB_BASE_URL ?? 'http://localhost:3000';

// Memoize the checkUniqueValues function
const memoizedCheckUniqueValues = memoize(checkUniqueValues);

const endpoints = {
  employeeInfo: '/employee-info',
  login: '/user/login',
  inventoryItemSetup: '/inventory-item-setup',
};

memoizedCheckUniqueValues(endpoints); // Calls the function and caches the result

export default endpoints;
