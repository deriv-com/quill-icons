import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownLgBoldIcon = (
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
      <path d='m9.336 23.664-7.5-7.5q-.547-.664 0-1.328.664-.548 1.328 0L10 21.672l6.836-6.836q.664-.548 1.328 0 .547.664 0 1.328l-7.5 7.5q-.664.547-1.328 0m-7.5-15q-.547-.664 0-1.328.664-.548 1.328 0L10 14.172l6.836-6.836q.664-.548 1.328 0 .547.664 0 1.328l-7.5 7.5q-.664.547-1.328 0z' />
    </g>
    <defs>
      <clipPath id='c65c155797dd787ef45e5450822e9dc2__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownLgBoldIcon);
export default ForwardRef;
