import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

// Juntar todos os sagas em um único arquivo
export default function* rootSaga() {
  return yield all([cart]);
}
