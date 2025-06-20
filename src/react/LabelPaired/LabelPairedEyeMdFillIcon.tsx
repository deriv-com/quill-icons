import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeMdFillIcon = (
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
      <path d='M9 5c2.5 0 4.531 1.156 6 2.531 1.469 1.344 2.438 2.969 2.906 4.094.094.25.094.531 0 .781C17.438 13.5 16.47 15.125 15 16.5S11.5 19 9 19c-2.531 0-4.562-1.125-6.031-2.5S.53 13.5.063 12.406a1.12 1.12 0 0 1 0-.781C.53 10.5 1.5 8.875 2.969 7.531 4.438 6.156 6.469 5 9 5m-4.5 7c0 1.625.844 3.094 2.25 3.906a4.46 4.46 0 0 0 4.5 0A4.54 4.54 0 0 0 13.5 12c0-1.594-.875-3.062-2.25-3.875a4.46 4.46 0 0 0-4.5 0A4.46 4.46 0 0 0 4.5 12M9 10c0-.219-.062-.406-.125-.625-.062-.156.063-.375.25-.375a3.02 3.02 0 0 1 2.75 2.25c.438 1.594-.5 3.219-2.125 3.656a2.975 2.975 0 0 1-3.656-2.125A2.3 2.3 0 0 1 6 12.156c-.031-.187.188-.312.344-.25.218.063.406.094.656.094 1.094 0 2-.875 2-2' />
    </g>
    <defs>
      <clipPath id='bf2e83b00ae5a0383b0fe21327ef862d__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeMdFillIcon);
export default ForwardRef;
