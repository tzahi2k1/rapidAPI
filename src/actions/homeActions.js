import { homeConstants } from '../constants';


export const homeActions = {
    dragEnd,

};

function dragEnd(x, y) {
    return { type: homeConstants.DRAG_END,top:y,left:x}
}


