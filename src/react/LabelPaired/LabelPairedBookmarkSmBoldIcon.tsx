import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5.063q.027-.547.383-.93.382-.356.93-.383v12.059l3.554-2.516a.66.66 0 0 1 .766 0l3.555 2.516V5.063H1.561V3.75h7.876q.546.027.93.383.355.383.382.93v12.03q0 .383-.355.575a.7.7 0 0 1-.684-.027L5.5 14.633 1.29 17.64a.7.7 0 0 1-.685.027.68.68 0 0 1-.355-.574z' />
    </g>
    <defs>
      <clipPath id='f58c707be48d00be__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkSmBoldIcon);
export default ForwardRef;
