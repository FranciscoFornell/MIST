import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InkHeader from '../InkHeader';
import InkLines from '../InkLines';
import InkChoices from '../InkChoices';
import InkButton from '../InkButton';
import { pick } from 'mist-utils';
import InkStoryManager from 'ink-story-manager';

/**
 * Ink Story Web Player
 * @component
 * @example
 * const props = {
 *   storyContent: {"inkVersion":19,"root":[[{"#":"title: InkStory component example"},{"#":"author: John Doe"},{"#":"defaultContinueText: Continue"},{"#":"continueMaximally"},"^Line 1","\n","^Line 2","\n","^Line 3","\n","ev","str","^Choice 1","/str","/ev",{"*":"0.c-0","flg":20},"ev","str","^Choice 2","/str","/ev",{"*":"0.c-1","flg":20},{"c-0":["\n","^You choosed 1","\n",{"->":"0.g-0"},{"#f":5}],"c-1":["\n","^You choosed 2","\n",{"->":"0.g-0"},{"#f":5}],"g-0":["^Line 4","\n","end",["done",{"#n":"g-1"}],null]}],"done",null],"listDefs":{}},
 * };
 *
 * return (<div style={{minHeight: '150px'}}>
 *   <InkStoryWebPlayer {...props} />
 * </div>);
 */
const InkStoryWebPlayer = ({ storyContent }) => {
  const [storyManager, setStoryManager] = useState();
  const [lines, setLines] = useState([]);
  const [canContinue, setCanContinue] = useState(true);
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    setStoryManager(new InkStoryManager(storyContent));
  }, []);

  const updateState = (getter) => {
    const { historyLines, canContinue, currentChoices } = getter();

    setLines(historyLines);
    setCanContinue(canContinue);
    setChoices(currentChoices);
  };

  const continueStory = (choiceIndex) => {
    updateState(() => storyManager.continueStory(choiceIndex));
  };

  const rewind = () => {
    updateState(() => storyManager.rewind());
  };

  return (
    <React.Fragment>
      {storyManager && (
        <React.Fragment>
          <InkHeader {...pick(storyManager.globalTags, 'title', 'author')} />
          <InkLines lines={lines} />
          {storyManager.canRewind && (
            <InkButton label={'<<'} onClick={() => rewind()} />
          )}
          {canContinue && (
            <InkButton
              onClick={() => continueStory()}
              label={storyManager.globalTags.defaultContinueText}
            />
          )}
          {choices.length > 0 && (
            <InkChoices choices={choices} clickHandler={continueStory} />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

InkStoryWebPlayer.propTypes = {
  /**
   * Inkle's ink story in json format
   */
  storyContent: PropTypes.object.isRequired,
};

export default InkStoryWebPlayer;
