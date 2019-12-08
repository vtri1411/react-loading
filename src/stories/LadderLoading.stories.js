import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { LadderLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('LadderLoading', module)
  .addDecorator(withKnobs)
  .add(
    'LadderLoading',
    () => {
      let speed = 1;
      let color = '';
      let size = radios(
        '动画尺寸',
        {
          'small': 'small',
          'default': 'default',
          'large': 'large'
        },
        'default'
      );
      speed = number('动画速度(s)');
      color = text('颜色');
      return (
        <Container>
          <LadderLoading speed={speed} color={color} size={size}></LadderLoading>
        </Container>
      );
    }
  );
