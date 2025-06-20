import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserMdRegularIcon = (
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
      <path d='M12.875 17.031A7 7 0 0 0 15 12c0-3.844-3.156-7-7-7-3.875 0-7 3.156-7 7a7.1 7.1 0 0 0 2.094 5.031C3.53 15.313 5.125 14 7 14h2c1.844 0 3.438 1.313 3.875 3.031m-.906.719v.031C11.844 16.22 10.563 15 9 15H7a3.004 3.004 0 0 0-3 2.781C5.125 18.563 6.5 19 8 19c1.469 0 2.844-.437 3.969-1.25M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m0-8c.531 0 1-.281 1.281-.75.281-.437.281-1.031 0-1.5C9 9.313 8.531 9 8 9c-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75m-2.5-1.5c0-.875.469-1.687 1.25-2.156.75-.438 1.719-.438 2.5 0 .75.469 1.25 1.281 1.25 2.156 0 .906-.5 1.719-1.25 2.188-.781.437-1.75.437-2.5 0A2.53 2.53 0 0 1 5.5 10.5' />
    </g>
    <defs>
      <clipPath id='3eaa82a49d9832c0e3362d088b27b5e5__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserMdRegularIcon);
export default ForwardRef;
