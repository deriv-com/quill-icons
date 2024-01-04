import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const SocialTelegramWhiteIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Zm-15.427-4.189c-1.556.648-4.666 1.987-9.33 4.02-.758.3-1.154.596-1.19.884-.062.486.548.678 1.378.94l.35.11c.817.266 1.916.577 2.487.59.519.01 1.097-.203 1.736-.642 4.358-2.942 6.607-4.428 6.749-4.46.1-.023.237-.052.33.032.094.083.085.24.075.283-.06.257-2.454 2.482-3.692 3.634-.386.359-.66.613-.716.672-.126.13-.254.253-.377.372-.758.731-1.328 1.28.032 2.176.653.43 1.176.787 1.698 1.142.57.388 1.137.774 1.873 1.256.187.123.366.25.54.375.663.473 1.259.897 1.994.83.428-.04.87-.442 1.094-1.641.53-2.834 1.572-8.973 1.813-11.503a2.829 2.829 0 0 0-.027-.63.674.674 0 0 0-.228-.433c-.192-.156-.488-.189-.62-.186-.602.01-1.525.331-5.969 2.18Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(SocialTelegramWhiteIcon);
export default ForwardRef;
