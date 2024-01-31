import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGooglePlayMdIcon = (
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
      <path d='m10.156 11.313 1.875-1.876-8.75-5.03zM1.47 4 9.5 12l-8.031 8q-.657-.344-.688-1.094V5.094Q.812 4.344 1.47 4m13.281 7.063a1.1 1.1 0 0 1 .469.937q0 .594-.438.938l-1.875 1.093L10.875 12l2.031-2zm-11.469 8.53 6.875-6.905 1.875 1.874z' />
    </g>
    <defs>
      <clipPath id='cf81da7d85fbcaf9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayMdIcon);
export default ForwardRef;
