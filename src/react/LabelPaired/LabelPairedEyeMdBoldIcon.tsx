import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 6.5c-2.062 0-3.719.938-5 2.125A11.2 11.2 0 0 0 1.531 12c.438.938 1.25 2.281 2.469 3.406C5.281 16.594 6.938 17.5 9 17.5c2.031 0 3.688-.906 4.969-2.094 1.219-1.125 2.062-2.469 2.469-3.406-.407-.937-1.25-2.25-2.438-3.375C12.688 7.438 11.031 6.5 9 6.5M2.969 7.531C4.438 6.156 6.469 5 9 5c2.5 0 4.531 1.156 6 2.531s2.438 2.969 2.906 4.094c.094.25.094.531 0 .781C17.438 13.5 16.47 15.125 15 16.5S11.5 19 9 19c-2.531 0-4.562-1.125-6.031-2.5S.53 13.5.063 12.406a1.12 1.12 0 0 1 0-.781C.53 10.5 1.5 8.875 2.969 7.531M9 14.5c1.375 0 2.5-1.094 2.5-2.5 0-1.375-1.125-2.5-2.5-2.5h-.062c.03.188.062.344.062.5 0 1.125-.906 2-2 2-.187 0-.344 0-.5-.062V12c0 1.406 1.094 2.5 2.5 2.5M9 8c1.406 0 2.719.781 3.438 2 .718 1.25.718 2.781 0 4A3.96 3.96 0 0 1 9 16c-1.437 0-2.75-.75-3.469-2-.718-1.219-.718-2.75 0-4A4.04 4.04 0 0 1 9 8' />
    </g>
    <defs>
      <clipPath id='8d22d438f3d1dcd1da4ae8a21ef50457__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeMdBoldIcon);
export default ForwardRef;
