
import { combineReducers } from 'redux';
import postsSlice from './posts/slice'

 const rootReducer = combineReducers({
    postsSlice,

});
export default rootReducer;
