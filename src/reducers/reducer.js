import { BUY_FEATURE, REMOVE_FEATURE } from "../actions/featureActions";
import { bindActionCreators } from "../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";

const InitialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const featureReducer = (state = InitialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case BUY_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        }
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(i => action.payload !== i.id),
          additionalPrice: state.additionalPrice - action.payload.price
        }
      };

    default:
      return state;
  }
};
