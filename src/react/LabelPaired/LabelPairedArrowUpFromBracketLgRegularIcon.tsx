import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.43 5.695 5 5a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L9.625 7.648v10.977A.64.64 0 0 1 9 19.25a.617.617 0 0 1-.625-.625V7.648L4.43 11.594a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l5-5a.66.66 0 0 1 .899 0M1.5 18.625v3.75c0 1.055.82 1.875 1.875 1.875h11.25c1.016 0 1.875-.82 1.875-1.875v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75a3.11 3.11 0 0 1-3.125 3.125H3.375C1.617 25.5.25 24.133.25 22.375v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
    </g>
    <defs>
      <clipPath id='c9f2fee771110234f9dfeb7cd639eea9__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketLgRegularIcon);
export default ForwardRef;
