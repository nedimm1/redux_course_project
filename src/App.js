import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const actionTypes = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
  APPLY_LOAN: "REQUEST_LOAN",
  REPAY_LOAN: "REPAY_LOAN",
};

const financialReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case actionTypes.WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case actionTypes.REQUEST_LOAN:
      if (state.loan > 0)
        return {
          ...state,
          loan: action.payload,
        };

    case actionTypes.REPAY_LOAN:
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
};

// const store = createStore(financialReducer);

// store.dispatch({ type: actionTypes.DEPOSIT, payload: 500 });
// console.log(store.getState());

const deposit = (amount) => ({
  type: actionTypes.DEPOSIT,
  payload: amount,
});

const withdraw = (amount) => ({
  type: actionTypes.WITHDRAW,
  payload: amount,
});

const applyLoan = (amount, purpose) => ({
  type: actionTypes.APPLY_LOAN,
  payload: { amount, purpose },
});

const repayLoan = (amount) => ({
  type: actionTypes.REPAY_LOAN,
  payload: amount,
});

store.dispatch(deposit(100));
console.log(store.getState()); // { balance: 100, loan: 0, loanPurpose: '' }

store.dispatch(withdraw(50));
console.log(store.getState()); // { balance: 50, loan: 0, loanPurpose: '' }

store.dispatch(applyLoan(5000, "Car Loan"));
console.log(store.getState()); // { balance: 50, loan: 5000, loanPurpose: 'Car Loan' }

store.dispatch(repayLoan(1000));
console.log(store.getState());
