import Immutable from "seamless-immutable";

import { USER_TYPES } from "./actions.js";

export const DEFAULT_STATE = {
  location: {
    lat: 50.889244,
    lng: 4.700518
  }
};

export default function(state = Immutable(DEFAULT_STATE), action) {
  switch (action.type) {
    case USER_TYPES.SET_LOCATION: {
      const { latitude: lat, longitude: lng } = action.location;

      return Immutable.merge(state, { location: { lat, lng } });
    }
    default:
      return state;
  }
}
