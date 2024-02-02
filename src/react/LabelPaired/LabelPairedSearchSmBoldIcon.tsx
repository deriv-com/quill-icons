import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchSmBoldIcon = (
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
      <path d='M10.063 9.438q0-1.177-.575-2.188a4.56 4.56 0 0 0-1.613-1.613 4.46 4.46 0 0 0-4.375 0A4.56 4.56 0 0 0 1.887 7.25a4.36 4.36 0 0 0-.574 2.188q-.001 1.175.574 2.187A4.56 4.56 0 0 0 3.5 13.238a4.46 4.46 0 0 0 4.375 0 4.56 4.56 0 0 0 1.613-1.613 4.36 4.36 0 0 0 .575-2.187m-.848 4.457q-1.477 1.203-3.527 1.23-2.407-.055-4.02-1.668Q.054 11.844 0 9.437q.054-2.406 1.668-4.019Q3.28 3.804 5.688 3.75q2.406.054 4.019 1.668t1.668 4.02q-.027 2.05-1.23 3.527l3.664 3.664q.383.465 0 .93-.465.383-.93 0z' />
    </g>
    <defs>
      <clipPath id='c60da8d0196d344ebddbbfe072a9fcb6__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchSmBoldIcon);
export default ForwardRef;
