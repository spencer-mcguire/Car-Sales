export const TRIGGER_BUY = "TRIGGER_BUY";
export const TRIGGER_REMOVE = "TRIGGER_REMOVE";

export const buyFeature = payload => {
  return { type: TRIGGER_BUY, payload: payload };
};

export const removeFeature = payload => {
  return { type: TRIGGER_REMOVE, payload: payload };
};
