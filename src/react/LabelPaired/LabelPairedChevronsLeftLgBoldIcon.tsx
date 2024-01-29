import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.836 14.836 7.5-7.5q.664-.548 1.328 0 .548.664 0 1.328L3.828 15.5l6.836 6.836q.548.664 0 1.328-.664.547-1.328 0l-7.5-7.5q-.547-.664 0-1.328m15-7.5q.664-.548 1.328 0 .547.664 0 1.328L11.328 15.5l6.836 6.836q.547.664 0 1.328-.664.547-1.328 0l-7.5-7.5q-.547-.664 0-1.328z' />
    </g>
    <defs>
      <clipPath id='53b287c9c926b3af4c3c6a2bea9e2f4c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftLgBoldIcon);
export default ForwardRef;
