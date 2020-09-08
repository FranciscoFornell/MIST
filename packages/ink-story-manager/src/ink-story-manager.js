/**
 * InkStoryManager module.
 * @module InkStoryManager
 */
/**
 * A step in the story
 * @typedef {Object} Step
 * @property {Boolean} canContinue - True if the story can continue
 * @property {Array.<string>} historyLines - All the read lines, including the current one
 * @property {Array.<module:InkStoryManager~Choice>} currentChoices - Currently available choices, if any
 */
/**
 * An Ink choice
 * @typedef {Object} Choice
 * @property {number} index - The choice index, starting in 1
 * @property {string} text - The choice text
 */

import { Story } from 'inkjs';

/**
 * Ink stories manager
 */
class InkStoryManager {
  #inkStory;
  #history;
  #globalTags;

  #privateMethods = {
    saveToHistory: (lines, state) => {
      this.#history.push({ lines, state });
    },
  };

  /**
   * Creates a InkStoryManager instance
   * @param  {Object} storyContent - A valid and parsed ink json file
   */
  constructor(storyContent) {
    this.#inkStory = new Story(storyContent);
    this.#history = [];
    this.#globalTags =
      this.#inkStory.globalTags &&
      this.#inkStory.globalTags
        .map((tag) => tag.split(':'))
        .reduce(
          (prev, [key, value]) => ({
            ...prev,
            [key]: value ? value.trim() : true,
          }),
          {}
        );
  }

  /**
   * Object containing all the global tags of the ink, with true as value when it is not a key-value tag
   * @type {Object}
   * @readonly
   */
  get globalTags() {
    return this.#globalTags;
  }
  /**
   * True if continueMaximally global tag is set, false otherwise
   * @type {Boolean}
   * @readonly
   */
  get continueMaximally() {
    return !!this.#globalTags.continueMaximally;
  }
  /**
   * Object containing the header information
   * @type {Object}
   * @readonly
   * @property {string} author - The author of the ink
   * @property {string} title - The title of the ink
   */
  get headerInfo() {
    const { title, author } = this.#globalTags;
    return { title, author };
  }
  /**
   * Current line of the story
   * @type {string}
   * @readonly
   */
  get currentLine() {
    return this.#inkStory.CurrentText;
  }
  /**
   * All read lines including the current one
   * @type {string}
   * @readonly
   */
  get historyLines() {
    return this.#history.reduce((prev, { lines }) => [...prev, ...lines], []);
  }
  /**
   * The state of the ink
   * @type {Object}
   * @readonly
   */
  get state() {
    return this.#inkStory.state;
  }
  /**
   * Data about the current step
   * @readonly
   * @type {module:InkStoryManager~Step}
   */
  get currentStepData() {
    const { canContinue, currentChoices } = this.#inkStory;
    const historyLines = this.historyLines;

    return { canContinue, historyLines, currentChoices };
  }
  /**
   * True if it is not the first line and the story can be rewinded
   * @type {Boolean}
   * @readonly
   */
  get canRewind() {
    return this.#history.length > 0;
  }

  /**
   * Continue the story, one step by default or until it can not contiue if continueMaximally tag is set.
   * When a choiceIndex is given, it selects the choice, and continue.
   * @param {number} [choiceIndex] - The index of the choice
   * @returns {module:InkStoryManager~Step} The current step data
   */
  continueStory(choiceIndex) {
    const previousState = this.state.ToJson();
    choiceIndex !== undefined &&
      this.#inkStory.currentChoices.length > 0 &&
      0 <= choiceIndex &&
      choiceIndex < this.#inkStory.currentChoices.length &&
      this.#inkStory.ChooseChoiceIndex(choiceIndex);

    const newLines = this.#inkStory.canContinue
      ? this.continueMaximally
        ? this.#inkStory.ContinueMaximally().split('\n')
        : [this.#inkStory.Continue()]
      : [];

    if (newLines.length > 0) {
      this.#privateMethods.saveToHistory(newLines, previousState);
    }

    return this.currentStepData;
  }

  /**
   * Rewinds a step in the story.
   * @returns {module:InkStoryManager~Step}
   */
  rewind() {
    if (this.canRewind) {
      const previousState = this.#history.pop().state;
      this.state.LoadJson(previousState);
    }

    return this.currentStepData;
  }
}

export default InkStoryManager;
