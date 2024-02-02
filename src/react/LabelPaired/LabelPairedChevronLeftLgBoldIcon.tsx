import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.836 14.836 7.5-7.5q.664-.548 1.328 0 .547.664 0 1.328L2.828 15.5l6.836 6.836q.547.664 0 1.328-.664.547-1.328 0l-7.5-7.5q-.547-.664 0-1.328' />
    </g>
    <defs>
      <clipPath id='e0545b6ca8565ec1__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftLgBoldIcon);
export default ForwardRef;
