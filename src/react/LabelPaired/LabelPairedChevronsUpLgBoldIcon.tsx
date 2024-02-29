import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpLgBoldIcon = (
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
      <path d='m10.664 7.336 7.5 7.5q.547.664 0 1.328-.664.547-1.328 0L10 9.328l-6.836 6.836q-.664.547-1.328 0-.547-.664 0-1.328l7.5-7.5q.664-.548 1.328 0m7.5 15q.547.664 0 1.328-.664.547-1.328 0L10 16.828l-6.836 6.836q-.664.547-1.328 0-.547-.664 0-1.328l7.5-7.5q.664-.548 1.328 0z' />
    </g>
    <defs>
      <clipPath id='39de7bda4694226277a67d1277e1b802__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpLgBoldIcon);
export default ForwardRef;
