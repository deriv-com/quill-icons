import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsRightRegularIcon = (
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
        d='M2.344 18.344c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688L7.281 12 1.656 6.344c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0l6 6c.208.23.208.459 0 .688zm6 0c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688L13.281 12 7.656 6.344c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0l6 6c.208.23.208.459 0 .688z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightRegularIcon);
export default ForwardRef;
