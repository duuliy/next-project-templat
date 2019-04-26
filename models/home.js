import {
    SignOutAsync
  } from '../services/api';
export default {
    namespace: 'Home',
    state: {
      admittanceBody: {}
  
    },
    effects: {
      * getAdmittanceList ({ payload }, { call, put }) {
        const data = yield call(asset.getAdmittanceList, payload)
        yield put({ type: 'save', payload: { admittanceBody: data } })
      },
      * QUERY({payload}, {call,put}) { 
        const response = yield call(SignOutAsync, payload);
        if (response) {
          yield put({
            type: 'save',
            payload: { admittanceBody: response.data },
          })
        }
      },
    },
    reducers: {
      save (state, action) {
        console.log(action.payload)
        return { ...state, ...action.payload }
      }
    }
  }
      