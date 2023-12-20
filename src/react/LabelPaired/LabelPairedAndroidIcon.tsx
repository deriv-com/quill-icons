import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedAndroidIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.156 13.438c.438-.042.688-.292.75-.75-.062-.459-.312-.709-.75-.75-.458.041-.708.291-.75.75.042.458.292.708.75.75m-8.312 0c.458-.042.708-.292.75-.75-.042-.459-.292-.709-.75-.75-.438.041-.688.291-.75.75.062.458.312.708.75.75m8.562-4.532a8.731 8.731 0 0 1 3.156 2.938C17.376 13.052 17.855 14.438 18 16H0c.146-1.562.625-2.948 1.438-4.156a8.731 8.731 0 0 1 3.156-2.938l-1.5-2.594A.336.336 0 0 1 3.063 6a.307.307 0 0 1 .28-.156c.126 0 .22.052.282.156l1.531 2.656A9.136 9.136 0 0 1 9 7.812c1.333 0 2.615.282 3.844.844L14.375 6a.307.307 0 0 1 .281-.156c.125 0 .219.052.281.156a.336.336 0 0 1-.03.313z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidIcon);
export default ForwardRef;
