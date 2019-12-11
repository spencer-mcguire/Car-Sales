export const BUY_FEATURE = "BUY_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const buy = item => {
  return { type: BUY_FEATURE, payload: item };
};

export const remove = id => {
  return { type: REMOVE_FEATURE, payload: id };
};
