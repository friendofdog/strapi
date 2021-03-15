import mainReducer from './containers/Main/reducer';
import listViewReducer from './containers/ListView/reducer';
import rbacManagerReducer from './containers/RBACManager/reducer';
import pluginId from './pluginId';

const reducers = {
  [`${pluginId}_main`]: mainReducer,
  [`${pluginId}_listView`]: listViewReducer,
  [`${pluginId}_rbacManager`]: rbacManagerReducer,
};

export default reducers;
