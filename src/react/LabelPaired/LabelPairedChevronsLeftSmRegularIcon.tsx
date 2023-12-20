import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsLeftSmRegularIcon = (
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
        d='M1.45 10.45 6.7 5.2c.2-.183.4-.183.6 0 .183.2.183.4 0 .6L2.38 10.75 7.3 15.7c.182.2.182.4 0 .6-.2.183-.401.183-.602 0l-5.25-5.25c-.182-.2-.182-.4 0-.6m10.5-5.25c.2-.183.4-.183.6 0 .183.2.183.4 0 .6L7.63 10.75l4.922 4.95c.182.2.182.4 0 .6-.2.183-.401.183-.602 0L6.7 11.05c-.182-.2-.182-.4 0-.6z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftSmRegularIcon);
export default ForwardRef;
