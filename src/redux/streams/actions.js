//Import axios

export const STREAMS_ACTION_TYPES = {
  FETCH_STREAMS: 'FETCH_STREAMS',
  FETCH_STREAM_TYPES: 'FETCH_STREAM_TYPES'
};

export const STREAMS_ACTION_FUNCTIONS = {
  fetchStreams: () => {
    console.log("hoikes");

    return {
      type: STREAMS_ACTION_TYPES.FETCH_STREAMS,
      streams: {name:'Jean Pierre de Sensor'}
    };
  },
  fetchStreamTypes: () => {
    console.log("test test");

    return {
      type: STREAMS_ACTION_TYPES.FETCH_STREAM_TYPES,
      stream_types: ["temperature","humidity"]
    };
    // return een action met de nieuwe stream types als payload
  }
};