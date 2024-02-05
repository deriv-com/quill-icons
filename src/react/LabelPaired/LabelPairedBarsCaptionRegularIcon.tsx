import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5.375Q.273 5.023.625 5h9.75q.352.023.375.375-.023.352-.375.375H.625Q.273 5.727.25 5.375m0 3.75q.023-.352.375-.375h9.75q.352.023.375.375-.023.352-.375.375H.625Q.273 9.477.25 9.125m10.5 3.75q-.023.352-.375.375H.625q-.352-.023-.375-.375.023-.352.375-.375h9.75q.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='c23dcb7a5876f3f48315a0136934efff__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsCaptionRegularIcon);
export default ForwardRef;
