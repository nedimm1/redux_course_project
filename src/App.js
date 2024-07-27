const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const actionTypes = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
  APPLY_LOAN: "APPLY_LOAN",
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

    case actionTypes.APPLY_LOAN:
      if (state.loan > 0)
        return {
          ...state,
          loan: action.payload,
        };

    case actionTypes.REPAY_LOAN:
      return {
        ...state,
        loan: state.loan - action.payload,
      };

    default:
      return state;
  }
};
