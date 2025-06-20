import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.473 9.273a.6.6 0 0 1-.41.165H1.656a.216.216 0 0 0-.218.218v2.188c0 .136.082.219.218.219h2.407c.136 0 .3.082.41.19l3.09 2.708V6.566zm3.582-4.648c.437 0 .82.383.82.82v10.637c0 .438-.383.793-.82.793-.22 0-.41-.055-.547-.191l-3.719-3.309H1.656a1.53 1.53 0 0 1-1.531-1.531V9.656c0-.82.684-1.531 1.531-1.531H3.79l3.719-3.281a.76.76 0 0 1 .547-.219m3.691 3.691L13.25 9.82l1.504-1.504a.644.644 0 0 1 .902 0c.274.274.274.684 0 .93l-1.504 1.504 1.504 1.504c.274.273.274.684 0 .93a.6.6 0 0 1-.902 0L13.25 11.68l-1.504 1.504c-.273.273-.684.273-.93 0-.273-.246-.273-.657 0-.93l1.504-1.504-1.504-1.504c-.273-.246-.273-.656 0-.93.246-.246.657-.246.93 0' />
    </g>
    <defs>
      <clipPath id='9e056752065e785573e3fa5b3ee1a7df__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkSmBoldIcon);
export default ForwardRef;
