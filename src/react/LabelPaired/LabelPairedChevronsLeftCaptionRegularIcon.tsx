import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.242 9.242 4.5-4.5q.258-.234.516 0 .234.258 0 .516L2.039 9.5l4.219 4.242q.234.258 0 .516-.258.234-.516 0l-4.5-4.5q-.234-.258 0-.516m9-4.5q.258-.234.516 0 .234.258 0 .516L6.539 9.5l4.219 4.242q.234.258 0 .516-.258.234-.516 0l-4.5-4.5q-.234-.258 0-.516z' />
    </g>
    <defs>
      <clipPath id='8e064abf44dd2440e8d2091a8992908f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftCaptionRegularIcon);
export default ForwardRef;
