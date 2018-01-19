import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Chat from '../components/Chat'
import ChatInput from '../components/ChatInput'
import ChatContainer from '../container/Chat'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Chat', module)
  .add('Chat', () => <Chat messages={[{ message: 'Hello' }, { message: 'How are you?' }]} />)
  .add('ChatInput', () => <ChatInput onSubmit={action('Submit Message')} />)
  .add('ChatContainer', () => <ChatContainer />)
