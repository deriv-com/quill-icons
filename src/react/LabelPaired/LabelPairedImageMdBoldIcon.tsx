import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14 6.5H2c-.281 0-.5.25-.5.5v10.031l.125-.187 2.5-3.5c.156-.219.375-.344.625-.344.219 0 .469.125.594.313l.968 1.343 2.594-3.344A.71.71 0 0 1 9.5 11c.219 0 .438.125.594.313l4.25 5.5.156.187V7c0-.25-.25-.5-.5-.5M2 5h12c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2m2.5 6a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75.531 0 1 .313 1.281.75.282.469.282 1.063 0 1.5-.281.469-.75.75-1.281.75' />
    </g>
    <defs>
      <clipPath id='b952a1f600187c9a01dc9b813b3c7915__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageMdBoldIcon);
export default ForwardRef;
