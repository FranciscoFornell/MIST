let lastInstance;
const DEFAULT_STEP_DATA = {
  canContinue: true,
  historyLines: [],
  currentChoices: [],
};
let stepData = DEFAULT_STEP_DATA;
let nextStepData;
let previousSteps = [];
let globalTags = {};
const continueStory = jest.fn().mockImplementation(() => {
  previousSteps.push(stepData);
  stepData = nextStepData;
  return stepData;
});
const rewind = jest.fn().mockImplementation(() => {
  stepData = previousSteps.pop() || DEFAULT_STEP_DATA;
  return stepData;
});

const constructor = () => {
  stepData = DEFAULT_STEP_DATA;
  previousSteps = [];
  lastInstance = {
    get globalTags() {
      return globalTags;
    },
    continueStory,
    rewind,
    get canRewind() {
      return previousSteps.length > 0;
    },
  };
  return lastInstance;
};

const InkStoryManager = jest.fn().mockImplementation(constructor);

export default InkStoryManager;
export const getLastStoryManagerInstance = () => lastInstance;
export const setStoryNextStepData = (newStepData) => {
  nextStepData = newStepData;
};
export const setStoryGlobalTags = (newGlobalTags) => {
  globalTags = newGlobalTags;
};
export const StoryManagerContinueMethod = continueStory;
export const StoryManagerRewindMethod = rewind;
export const resetStoryInstance = () => constructor();
