import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.145 5.938c-.739 0-1.422.3-1.942.82l-.957.957c-.273.273-.683.273-.93 0a.6.6 0 0 1 0-.902l.957-.985a4.08 4.08 0 0 1 2.872-1.203h.19A3.9 3.9 0 0 1 8.22 8.508c0 1.066-.465 2.078-1.23 2.816l-4.567 4.239h5.797c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H.78a.69.69 0 0 1-.629-.41.69.69 0 0 1 .164-.711l5.77-5.387c.52-.492.82-1.176.82-1.86a2.567 2.567 0 0 0-2.57-2.57z' />
    </g>
    <defs>
      <clipPath id='611ace10268bfac8d97b04ae922ed5ae__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoSmBoldIcon);
export default ForwardRef;
