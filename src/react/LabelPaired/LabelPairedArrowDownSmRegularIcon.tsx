import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.2 16.738.386 11.926c-.183-.2-.183-.401 0-.602.2-.182.4-.182.601 0l4.075 4.047V5.063c.018-.274.164-.42.437-.438.273.018.42.164.438.438V15.37l4.074-4.047c.2-.182.4-.182.601 0 .183.2.183.401 0 .602l-4.812 4.812c-.2.183-.401.183-.602 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownSmRegularIcon);
export default ForwardRef;
