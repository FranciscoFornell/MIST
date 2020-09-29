import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InkStoryWebPlayer from './index';
import {
  setStoryGlobalTags,
  setStoryNextStepData,
  StoryManagerContinueMethod,
  StoryManagerRewindMethod,
  resetStoryInstance,
} from 'ink-story-manager';

jest.mock('ink-story-manager');

const renderComponent = () => render(<InkStoryWebPlayer storyContent={{}} />);

afterEach(() => {
  jest.clearAllMocks();
  resetStoryInstance();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('InkStory component', () => {
  it('should render correctly the initial state', () => {
    setStoryGlobalTags({
      defaultContinueText: 'Continue',
      author: 'Author Name',
      title: 'Story Title',
    });
    expect(renderComponent().container.outerHTML).toMatchSnapshot();
  });

  describe('Whe the user clicks on', () => {
    describe('continue', () => {
      beforeEach(() => {
        setStoryGlobalTags({
          defaultContinueText: 'Continue',
          author: 'Author Name',
          title: 'Story Title',
        });
        setStoryNextStepData({
          canContinue: false,
          historyLines: ['Line 1', 'Line 2', 'Line 3'],
          currentChoices: [
            { text: 'Choice 1', index: 0 },
            { text: 'Choice 2', index: 1 },
          ],
        });
      });

      it('should make StoryManager to continue', () => {
        const { getByText } = renderComponent();
        fireEvent.click(getByText('Continue'));

        expect(StoryManagerContinueMethod).toHaveBeenCalledWith(undefined);
      });

      it('should render correctly with lines, choices, and rewind button', () => {
        const { getByText, container } = renderComponent();
        fireEvent.click(getByText('Continue'));

        expect(container.outerHTML).toMatchSnapshot();
      });
    });

    describe('choice button', () => {
      beforeEach(() => {
        setStoryGlobalTags({
          defaultContinueText: 'Continue',
          author: 'Author Name',
          title: 'Story Title',
        });
        setStoryNextStepData({
          canContinue: false,
          historyLines: ['Line 1', 'Line 2', 'Line 3'],
          currentChoices: [
            { text: 'Choice 1', index: 0 },
            { text: 'Choice 2', index: 1 },
            { text: 'Choice 3', index: 2 },
            { text: 'Choice 4', index: 3 },
          ],
        });
      });

      it('should make StoryManager to select the propper choice and continue', () => {
        const { getByText } = renderComponent();
        fireEvent.click(getByText('Continue'));
        fireEvent.click(getByText('Choice 4'));

        expect(StoryManagerContinueMethod).toHaveBeenCalledWith(3);
      });

      it('should render accordingly', () => {
        const { getByText, container } = renderComponent();
        fireEvent.click(getByText('Continue'));

        expect(container.outerHTML).toMatchSnapshot();
      });
    });

    describe('rewind button', () => {
      beforeEach(() => {
        setStoryGlobalTags({
          defaultContinueText: 'Continue',
          author: 'Author Name',
          title: 'Story Title',
        });
        setStoryNextStepData({
          canContinue: false,
          historyLines: ['Line 1', 'Line 2', 'Line 3'],
          currentChoices: [{ text: 'Continue', index: 0 }],
        });
      });
      it('should make the story manager to rewind story state and history', () => {
        const { getByText } = renderComponent();
        fireEvent.click(getByText('Continue'));
        fireEvent.click(getByText('<<'));
        expect(StoryManagerRewindMethod).toHaveBeenCalled();
      });
      it('should render with the previous story state and history', () => {
        const { getByText, container } = renderComponent();
        fireEvent.click(getByText('Continue'));
        const previousRender = container.outerHTML;
        setStoryNextStepData({
          canContinue: false,
          historyLines: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
          currentChoices: [{ text: 'Continue', index: 0 }],
        });
        fireEvent.click(getByText('Continue'));
        const newRender = container.outerHTML;
        fireEvent.click(getByText('<<'));
        expect(container.outerHTML).not.toEqual(newRender);
        expect(container.outerHTML).toEqual(previousRender);
      });
    });
  });
});
