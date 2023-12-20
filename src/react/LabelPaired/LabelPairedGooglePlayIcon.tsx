import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGooglePlayIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m10.156 11.313 1.875-1.876-8.75-5.03zM1.47 4 9.5 12l-8.031 8c-.438-.23-.667-.594-.688-1.094V5.094c.021-.5.25-.865.688-1.094m13.281 7.063a1.1 1.1 0 0 1 .469.937c0 .396-.146.708-.438.938l-1.875 1.093L10.875 12l2.031-2zm-11.469 8.53 6.875-6.905 1.875 1.874z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayIcon);
export default ForwardRef;
