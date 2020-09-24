import Summary from './models/Summary';
import * as summaryViews from './views/summaryViews';

const state = {};


const controlSummary = async () => {
    state.summary = new Summary();
    try {
        await state.summary.getSummary();
        summaryViews.renderSummary(state.summary.result);
        console.log(state.summary.result);
    } catch (error) {
        alert(error);
    }

};
controlSummary();