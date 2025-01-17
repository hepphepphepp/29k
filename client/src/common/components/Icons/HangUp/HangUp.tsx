import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../../constants/colors';

const style = StyleSheet.create({icon: {aspectRatio: 1}});

export const HangUpIcon = ({fill = COLORS.GREY200}) => (
  <Svg width="100%" height="100%" viewBox="0 0 30 30" style={style.icon}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.058 10l-.412.006a28.536 28.536 0 00-4.018.41c-2.688.472-4.908 1.29-6.387 2.58C3.437 13.695 3 14.739 3 15.838v2.277a2.3 2.3 0 00.699 1.665C4.479 20.53 5.576 21 7 21c1.424 0 2.523-.47 3.302-1.22A2.3 2.3 0 0011 18.114v-1.063c.01-.125.12-.39.436-.67.61-.537 1.744-.882 3.564-.882 1.904 0 3.05.375 3.634.948.172.17.276.34.332.503l.024.08.01.04v1.044a2.3 2.3 0 00.699 1.665c.78.75 1.877 1.22 3.301 1.22 1.424 0 2.523-.47 3.302-1.22A2.3 2.3 0 0027 18.114v-2.276c0-1.1-.436-2.144-1.24-2.843-1.48-1.29-3.7-2.108-6.388-2.58a28.54 28.54 0 00-2.835-.348l-.64-.04a20.696 20.696 0 00-.84-.028z"
      fill={fill}
    />
  </Svg>
);
