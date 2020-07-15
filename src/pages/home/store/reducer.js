import {fromJS} from "immutable"; 

import {INIT_HOME_DATA, ADD_HOME_DATA, CHANGE_SHOW_TO_TOP} from "./actionTypes";

const defaultState = fromJS({
  labelList: [],
  articleList: [],
  panelsList: [],
  articlePage: 1,
  
  showToTop: false  
  
})

const initHomeData = (state, action) => {
  return state.merge({  
    labelList: action.labelList,
    articleList: action.articleList,
    panelsList: action.panelsList
  });
};

const addHomeData = (state, action) => {
  return state.merge({
    "articleList": state.get("articleList").concat(action.moreArticleList),
    "articlePage": action.nextPage
  });
}


export default (state=defaultState, action) => {  
  switch(action.type) {
    case INIT_HOME_DATA:
      return initHomeData(state, action);
        
    case ADD_HOME_DATA:
      return addHomeData(state, action);
      
    case CHANGE_SHOW_TO_TOP:
      return state.set("showToTop", action.show);
      
    default:
      return state;
  }
};