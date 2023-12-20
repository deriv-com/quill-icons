import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsDownSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.45 5.8c-.183-.2-.183-.4 0-.6.2-.183.4-.183.6 0L7 10.12 11.95 5.2c.2-.182.4-.182.6 0 .183.2.183.401 0 .602L7.3 11.05c-.2.182-.4.182-.6 0zm0 5.25c-.183-.2-.183-.4 0-.6.2-.183.4-.183.6 0L7 15.37l4.95-4.922c.2-.182.4-.182.6 0 .183.2.183.401 0 .602L7.3 16.3c-.2.182-.4.182-.6 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownSmRegularIcon);
export default ForwardRef;
