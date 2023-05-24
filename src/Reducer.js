
let reducer = (state,action)=> {
    switch(action.type) {
        case "IS_LOADING": 
           return {
            ...state,
            is_Loading: true,
           }

        case "GET_STORIES":
            return {
                ...state,
                is_Loading: false,
                hits:action.payload.hits,
                 nbPages: action.payload.nbPages,
            };

        case "REMOVE_POST" : 
            return {
                ...state,
                hits: state.hits.filter((curElem)=>{
                    return curElem.objectID !== action.payload
                   
                })

            }
     case "SEARCH_QUERY" :
                return {
                 ...state,
                 query: action.payload,
                }
      case "NEXT_PAGE":
                  let pageNumInc = state.page + 1;
            
                  if (pageNumInc >= state.nbPages) {
                    pageNumInc = 0;
                  }
                  return {
                    ...state,
                    page: pageNumInc,
                  };
            
        case "PREV_PAGE":
                  let pageNum = state.page - 1;
            
                  if (pageNum <= 0) {
                    pageNum = 0;
                  }
            
                  return {
                    ...state,
                    page: pageNum,
                  };          
    
                 
    }
    
    return state;
}
export {reducer}