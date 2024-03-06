import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.04 10.75 7 15.07V6.43zM7.054 5.5q.355 0 .574.246a.73.73 0 0 1 .246.574v2.817l4.813-3.473a.8.8 0 0 1 .492-.164q.355 0 .574.246A.73.73 0 0 1 14 6.32v8.86a.73.73 0 0 1-.246.574.73.73 0 0 1-.574.246.8.8 0 0 1-.492-.164l-4.813-3.473v2.817a.73.73 0 0 1-.246.574.73.73 0 0 1-.574.246.8.8 0 0 1-.492-.164L.272 11.27A.6.6 0 0 1 0 10.75q0-.328.273-.52l6.29-4.566a.8.8 0 0 1 .492-.164m.82 5.77 5.25 3.8V6.43l-5.25 3.8z' />
    </g>
    <defs>
      <clipPath id='b16d34ae76028b4663f23d673d89d839__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardSmRegularIcon);
export default ForwardRef;
