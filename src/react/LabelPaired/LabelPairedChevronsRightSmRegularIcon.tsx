import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsRightSmRegularIcon = (
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
        d='M2.05 16.3c-.2.183-.4.183-.6 0-.183-.2-.183-.4 0-.6l4.921-4.95L1.45 5.8c-.182-.2-.182-.4 0-.6.2-.183.401-.183.602 0l5.25 5.25c.182.2.182.4 0 .6zm5.25 0c-.2.183-.4.183-.6 0-.183-.2-.183-.4 0-.6l4.921-4.95L6.7 5.8c-.182-.2-.182-.4 0-.6.2-.183.401-.183.602 0l5.25 5.25c.182.2.182.4 0 .6z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightSmRegularIcon);
export default ForwardRef;
