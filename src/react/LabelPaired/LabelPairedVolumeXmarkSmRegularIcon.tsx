import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkSmRegularIcon = (
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
      <path d='M4.254 8.89A.4.4 0 0 1 3.98 9H1.656C1.273 9 1 9.3 1 9.656v2.188c0 .383.273.656.656.656H3.98c.083 0 .192.055.274.11L8 15.944V5.582zm3.8-4.265c.438 0 .821.383.821.82v10.637c0 .438-.383.793-.82.793-.22 0-.41-.055-.547-.191l.3-.329-.3.329-3.719-3.309H1.656a1.53 1.53 0 0 1-1.531-1.531V9.656c0-.82.684-1.531 1.531-1.531H3.79l3.719-3.281a.76.76 0 0 1 .547-.219m3.31 3.637 1.886 1.886 1.86-1.886a.463.463 0 0 1 .628 0 .463.463 0 0 1 0 .629l-1.886 1.859 1.886 1.887a.463.463 0 0 1 0 .629.463.463 0 0 1-.629 0l-1.859-1.887-1.887 1.887a.463.463 0 0 1-.629 0 .463.463 0 0 1 0-.63l1.887-1.886-1.887-1.86a.463.463 0 0 1 0-.628.463.463 0 0 1 .63 0' />
    </g>
    <defs>
      <clipPath id='1c7a44a3b2dce947dad5da52641a92f3__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkSmRegularIcon);
export default ForwardRef;
