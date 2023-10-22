import React from 'react';
import BoxA from './BoxA';

export default {
  title: 'Form/BoxA',
  component: BoxA,
};

export const primary = () => <BoxA size="150px" color="navy">click!</BoxA>;
export const secondary = () => <BoxA size="200px" color="purple">event!</BoxA>;


// export const Secondary = () => <ButtonA variant='secondary'>Happy Event 🥰</ButtonA>
// export const Success = () => <ButtonA variant='success'>Success</ButtonA>
// export const Danger = () => <ButtonA variant='danger'>Regnskur 100-1000 mm</ButtonA>




// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import BoxA from './BoxA'; // Import the BoxA component

// storiesOf('BoxA', module)
//   .add('Small Red BoxA', () => <BoxA size="50px" color="red" />)
//   .add('Medium Blue BoxA', () => <BoxA size="100px" color="blue" />);