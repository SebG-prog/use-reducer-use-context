
const initialState = {
  name: 'Bob',
  loading: false,
  click: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'startGettingName':
      return { ...state, loading: true }
    case 'endGettingName':
      return { ...state, name: action.name, loading: false, click: state.click + 1 }
    default:
      throw new Error('Unexpected action')
  }
}

export {initialState, reducer}