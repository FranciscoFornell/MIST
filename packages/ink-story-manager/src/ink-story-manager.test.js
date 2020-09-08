import {
  setGlobalTags,
  setState,
  setRemainingLines,
  resetStoryInstance,
  Continue as inkjsContinueMethod,
  ContinueMaximally as inkjsContinueMaximallyMethod,
  ChooseChoiceIndex as inkjsChooseChoiceIndexMethod,
} from 'inkjs';
import InkStoryManager from './ink-story-manager.js';

const TAGS_AUTHOR_TITLE = ['title: The Title', 'author: Author Name'];
const TAGS_RANDOM_TAG = ['random tag: random value'];
const TAG_CONTINUE_MAXIMALLY = ['continueMaximally'];
const TWO_CHOICES = [
  { text: 'Choice 1', index: 0 },
  { text: 'Choice 2', index: 1 },
];

describe('InkStoryManager class tests', () => {
  let storyManager;

  afterEach(() => {
    jest.clearAllMocks();
    resetStoryInstance();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('InkStoryManager constructor', () => {
    it('works correctly', () => {
      storyManager = new InkStoryManager();
      expect(storyManager).toBeInstanceOf(InkStoryManager);
    });
  });

  describe('global tags getter', () => {
    it('gets the correct value for value tags', () => {
      setGlobalTags([...TAGS_AUTHOR_TITLE, ...TAGS_RANDOM_TAG]);
      storyManager = new InkStoryManager();
      expect(storyManager.globalTags).toMatchObject(
        expect.objectContaining({
          title: 'The Title',
          author: 'Author Name',
          'random tag': 'random value',
        })
      );
    });

    it('gets true for present non value tags', () => {
      setGlobalTags(TAG_CONTINUE_MAXIMALLY);
      storyManager = new InkStoryManager();
      expect(storyManager.globalTags).toMatchObject(
        expect.objectContaining({
          continueMaximally: true,
        })
      );
    });
  });

  describe('continueMaximally getter', () => {
    it('gets true when continueMaximally global tag is present', () => {
      setGlobalTags(TAG_CONTINUE_MAXIMALLY);
      storyManager = new InkStoryManager();
      expect(storyManager.continueMaximally).toStrictEqual(true);
    });

    it('gets false when continueMaximally global tag is not present', () => {
      storyManager = new InkStoryManager();
      expect(storyManager.continueMaximally).toStrictEqual(false);
    });
  });

  describe('headerInfo getter', () => {
    it('gets the title and author from the global tags', () => {
      setGlobalTags(TAGS_AUTHOR_TITLE);
      storyManager = new InkStoryManager();
      expect(storyManager.headerInfo).toStrictEqual({
        title: 'The Title',
        author: 'Author Name',
      });
    });

    it('gets undefined for title or author when they are not on the global tags', () => {
      storyManager = new InkStoryManager();
      expect(storyManager.headerInfo).toStrictEqual({
        title: undefined,
        author: undefined,
      });
    });
  });

  describe('currentLine getter', () => {
    it('gets the current line from the ink story', () => {
      setRemainingLines(['A story line']);
      storyManager = new InkStoryManager();
      storyManager.continueStory();
      expect(storyManager.currentLine).toBe('A story line');
    });
  });

  describe('historyLines getter', () => {
    it('gets all the seen lines from the beginning', () => {
      setRemainingLines(['Line 1', 'Line 2', 'Line 3', 'Line 4']);
      storyManager = new InkStoryManager();
      storyManager.continueStory();
      storyManager.continueStory();
      storyManager.continueStory();
      expect(storyManager.historyLines).toEqual(['Line 1', 'Line 2', 'Line 3']);
    });
  });

  describe('state getter', () => {
    it('gets the current state from the ink story', () => {
      setState({
        this: 'this',
        is: 'is',
        a: 'a',
        state: 'state',
      });
      storyManager = new InkStoryManager();
      expect(storyManager.state).toMatchObject({
        this: 'this',
        is: 'is',
        a: 'a',
        state: 'state',
      });
    });
  });

  describe('currentStepData getter', () => {
    it('gets all the seen lines from the beginning, the current choices, and if the story can continue', () => {
      setRemainingLines(['Line 1', 'Line 2', 'Line 3', 'Line 4', TWO_CHOICES]);
      storyManager = new InkStoryManager();
      storyManager.continueStory();
      storyManager.continueStory();
      storyManager.continueStory();
      storyManager.continueStory();
      expect(storyManager.currentStepData).toEqual({
        canContinue: false,
        currentChoices: [
          { text: 'Choice 1', index: 0 },
          { text: 'Choice 2', index: 1 },
        ],
        historyLines: ['Line 1', 'Line 2', 'Line 3', 'Line 4'],
      });
    });
  });

  describe('canRewind getter', () => {
    it('gets false if there are no previous steps to rewind to', () => {
      storyManager = new InkStoryManager();
      expect(storyManager.canRewind).toBe(false);
    });

    it('gets true if there are previous steps to rewind to', () => {
      setRemainingLines(['Line 1']);
      storyManager = new InkStoryManager();
      storyManager.continueStory();
      expect(storyManager.canRewind).toBe(true);
    });
  });

  describe('continueStory method', () => {
    describe('when no parameters are given', () => {
      describe('and continueMaximally global tag is not set', () => {
        describe('and canContinue is true', () => {
          it('should advance one step and return the current step data, with only one new line', () => {
            setRemainingLines(['Line 1', 'Line 2']);
            storyManager = new InkStoryManager();
            expect(storyManager.continueStory()).toEqual({
              canContinue: true,
              historyLines: ['Line 1'],
              currentChoices: [],
            });
          });
        });

        describe('and canContinue is false', () => {
          it('should not call Continue method of the ink Story', () => {
            storyManager = new InkStoryManager();
            storyManager.continueStory();
            expect(inkjsContinueMethod).not.toHaveBeenCalled();
          });

          it('should return the same currentStepData it had before', () => {
            storyManager = new InkStoryManager();
            const previousStepData = storyManager.currentStepData;
            const currentStepData = storyManager.continueStory();
            expect(previousStepData).toEqual(currentStepData);
          });
        });
      });

      describe('and continueMaximally global tag is set', () => {
        beforeEach(() => {
          setGlobalTags(TAG_CONTINUE_MAXIMALLY);
        });

        describe('and canContinue is true', () => {
          it("should advance several steps and return all the lines until it can't continue, canContinue to false, and the curent choices", () => {
            setRemainingLines([
              'Line 1',
              'Line 2',
              'Line 3',
              'Line 4',
              TWO_CHOICES,
              'Line 5',
            ]);
            storyManager = new InkStoryManager();
            expect(storyManager.continueStory()).toEqual({
              canContinue: false,
              historyLines: ['Line 1', 'Line 2', 'Line 3', 'Line 4'],
              currentChoices: [
                { text: 'Choice 1', index: 0 },
                { text: 'Choice 2', index: 1 },
              ],
            });
          });
        });

        describe('and canContinue is false', () => {
          beforeEach(() => {
            setRemainingLines(['Line 1']);
            storyManager = new InkStoryManager();
            storyManager.continueStory();
            inkjsContinueMaximallyMethod.mockClear();
          });

          it('should not call ContinueMaximally method of the ink Story', () => {
            storyManager.continueStory();
            expect(inkjsContinueMaximallyMethod).not.toHaveBeenCalled();
          });

          it('should return the same currentStepData it had before', () => {
            const previousStepData = storyManager.currentStepData;
            const currentStepData = storyManager.continueStory();
            expect(previousStepData).toEqual(currentStepData);
          });
        });
      });
    });

    describe('When a choice index parameter is given', () => {
      describe('and there are current choices', () => {
        beforeEach(() => {
          setRemainingLines(['Line 1', TWO_CHOICES, 'Line 2']);
          storyManager = new InkStoryManager();
          storyManager.continueStory();
        });

        describe('and it is a valid index', () => {
          it('should continue the story selecting that index', () => {
            const stepData = storyManager.continueStory(1);
            expect(inkjsChooseChoiceIndexMethod).toHaveBeenCalled();
            expect(stepData).toMatchObject({
              historyLines: ['Line 1', 'Line 2'],
            });
          });
        });

        describe('and it is not a valid index', () => {
          it('should not call ChooseChoiceIndex method of the ink story', () => {
            storyManager.continueStory(2);
            expect(inkjsChooseChoiceIndexMethod).not.toHaveBeenCalled();
          });
        });
      });

      describe('and there are no current choices', () => {
        it('should not call ChooseChoiceIndex method of the ink story', () => {
          setRemainingLines(['Line 1']);
          storyManager = new InkStoryManager();
          storyManager.continueStory(2);
          expect(inkjsChooseChoiceIndexMethod).not.toHaveBeenCalled();
        });
      });
    });
  });

  describe('rewind method', () => {
    describe('when at least one line has been seen', () => {
      const LoadJson = jest.fn();

      beforeEach(() => {
        setState({ LoadJson });
        setRemainingLines(['Line 1']);
        storyManager = new InkStoryManager();
      });

      it('should call LoadJson method of the ink Story state', () => {
        storyManager.continueStory();
        storyManager.rewind();
        expect(LoadJson).toHaveBeenCalled();
      });

      it('should return the current step data accordingly', () => {
        const previousStepData = storyManager.currentStepData;
        const newStepData = storyManager.continueStory();
        storyManager.rewind();
        setRemainingLines(['Line 1']);
        expect(storyManager.currentStepData).not.toEqual(newStepData);
        expect(storyManager.currentStepData).toEqual(previousStepData);
      });
    });

    describe('when no line has been seen', () => {
      const LoadJson = jest.fn();

      beforeEach(() => {
        setState({ LoadJson });
        storyManager = new InkStoryManager();
      });

      it('should not call LoadJson method of the ink Story state', () => {
        storyManager.rewind();
        expect(LoadJson).not.toHaveBeenCalled();
      });

      it('should return the same step data', () => {
        const previousStepData = storyManager.currentStepData;
        storyManager.rewind();
        expect(storyManager.currentStepData).toEqual(previousStepData);
      });
    });
  });
});
