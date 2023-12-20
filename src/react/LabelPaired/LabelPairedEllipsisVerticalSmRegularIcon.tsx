import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisVerticalSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 4 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 14.25c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629.852.852 0 0 1-.246.629A.852.852 0 0 1 2 16a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629c0-.255.082-.465.246-.629A.852.852 0 0 1 2 14.25m0-4.375c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629c0-.255.082-.465.246-.629A.852.852 0 0 1 2 9.875m.875-3.5a.852.852 0 0 1-.246.629A.852.852 0 0 1 2 7.25a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629c0-.255.082-.465.246-.629A.852.852 0 0 1 2 5.5c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h4v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalSmRegularIcon);
export default ForwardRef;
