import * as React from 'react';
import {Path} from 'react-native-svg';
import {COLORS} from '../../../constants/colors';
import Icon from '../Icon';

export const Logo = ({fill = COLORS.ROSE700}) => (
  <Icon>
    <Path
      d="M8.723 30.9c-3.16 0-4.997-1.347-5.982-2.477-1.199-1.374-1.86-3.217-1.86-5.185 0-1.712.639-3.396 1.95-5.147 1.062-1.417 2.436-2.72 3.765-3.982 2.155-2.043 4.383-4.157 4.48-6.142.063-1.311-.217-2.34-.83-3.056-.675-.787-1.78-1.22-3.11-1.22-1.043.002-2.044.46-2.782 1.276-.738.816-1.153 1.922-1.154 3.076 0 .37-.133.725-.37.987a1.205 1.205 0 0 1-.893.409c-.335 0-.656-.148-.893-.41a1.474 1.474 0 0 1-.37-.986C.674 4.104 3.574.9 7.137.9c2.03 0 3.785.742 4.942 2.09 1.094 1.277 1.62 3.05 1.518 5.127-.155 3.176-2.797 5.685-5.355 8.11-2.377 2.256-4.834 4.587-4.834 7.011 0 1.224.42 2.407 1.153 3.248.924 1.06 2.363 1.622 4.162 1.622 1.621 0 3.42-.61 5.343-1.81 1.837-1.146 3.736-2.797 5.648-4.906l.962-1.18c-1.36-1.617-4.275-5.44-4.872-9.113-.655-4.033.375-6.422 1.354-7.716a6.134 6.134 0 0 1 2.35-1.896A6.503 6.503 0 0 1 22.248.9c2.057 0 4.03 1.042 5.28 2.787.965 1.35 1.95 3.745 1.148 7.486-.738 3.449-3.4 7.353-4.597 8.98l6.267 7.634c.112.136.198.294.254.467a1.532 1.532 0 0 1-.047 1.067c-.071.166-.17.315-.294.438a1.246 1.246 0 0 1-.422.28 1.154 1.154 0 0 1-.966-.052 1.28 1.28 0 0 1-.395-.324l-6.074-7.398-.855 1.05-.024.026c-2.08 2.3-4.172 4.113-6.217 5.388C13 30.17 10.785 30.9 8.723 30.9ZM22.247 3.692c-.759 0-2.177.192-3.152 1.482-.909 1.203-1.187 3.08-.805 5.43.251 1.547 1.15 3.47 2.6 5.566.53.764 1.046 1.425 1.45 1.915 1.151-1.605 3.302-4.86 3.877-7.555.45-2.1.218-3.866-.672-5.111-.761-1.065-2.025-1.727-3.298-1.727Z"
      fill={fill}
    />
  </Icon>
);