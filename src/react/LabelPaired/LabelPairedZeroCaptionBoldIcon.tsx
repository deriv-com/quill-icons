import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 8q.046-1.593 1.102-2.648Q2.407 4.297 4 4.25q1.594.046 2.648 1.102Q7.703 6.406 7.75 8v3q-.046 1.594-1.102 2.648Q5.594 14.703 4 14.75q-1.593-.046-2.648-1.102Q.297 12.594.25 11zM4 5.375q-1.125.024-1.852.773-.75.727-.773 1.852v3q.024 1.125.773 1.852.727.75 1.852.773 1.125-.024 1.852-.773.75-.727.773-1.852V8q-.024-1.125-.773-1.852-.727-.75-1.852-.773' />
    </g>
    <defs>
      <clipPath id='522b26db4044d6a2578f4f8c86ad969e__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroCaptionBoldIcon);
export default ForwardRef;
