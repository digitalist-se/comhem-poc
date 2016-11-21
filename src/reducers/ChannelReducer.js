export default function reducer(state = [{
 channel: 5,
 author: "Vilhelm Falkenmark"
}], action) {
    //////////////////////////////////////////
    ///////// ADD SKILL
    //////////////////////////////////////////
    if (action.type === "ADD_SKILL") {
     return state.concat(action.payload);
    }
    //////////////////////////////////////////
    ///////// EDIT SKILL
    //////////////////////////////////////////
    else if (action.type === "EDIT_SKILL") {
     return state.map(function(skill,index) {
      if(index !== action.payload.index) {
       return skill
      }
      return {
       ...skill,
      level: skill.level + action.payload.int
     };
     })
    }
    //////////////////////////////////////////
    ///////// DELETE SKILL
    //////////////////////////////////////////
    return state;
}
