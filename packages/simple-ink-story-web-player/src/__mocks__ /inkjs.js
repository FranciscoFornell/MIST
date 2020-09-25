const EMPTY_STATE = {
  ToJson: jest.fn(() => ''),
};

let globalTags = [];
let remainingLines = [];
let CurrentText = '';
let currentChoices = [];
let state = EMPTY_STATE;

const setGlobalTags = (tags) => {
  globalTags = tags;
};

const setRemainingLines = (lines) => {
  remainingLines = lines;
};

const setState = (newState) => {
  state = { ...EMPTY_STATE, ...newState };
};

const Continue = jest.fn(() => {
  let line =
    remainingLines.length === 0 || Array.isArray(remainingLines[0])
      ? ''
      : remainingLines.shift();
  currentChoices = Array.isArray(remainingLines[0])
    ? remainingLines.shift()
    : [];
  CurrentText = line;
  return line;
});

const ContinueMaximally = jest.fn(() => {
  let lines;
  const indexOfNextChoice = remainingLines.findIndex((line) =>
    Array.isArray(line)
  );
  lines = remainingLines.splice(0, indexOfNextChoice);
  currentChoices = remainingLines.shift() || [];
  CurrentText = lines.slice(-1).join('');
  return lines.join('\n');
});

const ChooseChoiceIndex = jest.fn((index) => {
  currentChoices = [];
});

const resetStoryInstance = () => {
  globalTags = [];
  remainingLines = [];
  CurrentText = '';
  currentChoices = [];
};

const constructor = () => {
  return {
    get globalTags() {
      return globalTags;
    },
    get CurrentText() {
      return CurrentText;
    },
    get state() {
      return state;
    },
    get canContinue() {
      return remainingLines.length > 0 && currentChoices.length === 0;
    },
    get currentChoices() {
      return currentChoices;
    },
    Continue,
    ContinueMaximally,
    ChooseChoiceIndex,
  };
};

const Story = jest.fn().mockImplementation(constructor);

export {
  Story,
  setGlobalTags,
  setState,
  setRemainingLines,
  resetStoryInstance,
  Continue,
  ContinueMaximally,
  ChooseChoiceIndex,
};
