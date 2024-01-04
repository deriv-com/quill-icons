import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEllipsisSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.75 10.75a.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629c0-.255.082-.465.246-.629a.852.852 0 0 1 .629-.246c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629Zm-4.375 0a.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629c0-.255.082-.465.246-.629a.852.852 0 0 1 .629-.246c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629Zm-5.25.875a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629c0-.255.082-.465.246-.629a.852.852 0 0 1 .629-.246c.255 0 .465.082.629.246A.852.852 0 0 1 3 10.75a.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisSmRegularIcon);
export default ForwardRef;
