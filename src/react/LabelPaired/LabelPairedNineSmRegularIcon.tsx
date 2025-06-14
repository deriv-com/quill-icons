import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 9a3.49 3.49 0 0 0 3.5 3.5A3.503 3.503 0 0 0 8 9.11V9c0-1.914-1.586-3.5-3.5-3.5A3.507 3.507 0 0 0 1 9m4.402 4.293q-.45.082-.902.082A4.353 4.353 0 0 1 .125 9 4.37 4.37 0 0 1 4.5 4.625 4.39 4.39 0 0 1 8.875 9c0 .055 0 .11-.027.164-.028 1.04-.41 2.05-1.121 2.816l-4.211 4.758c-.164.192-.438.192-.63.028a.407.407 0 0 1-.027-.602z' />
    </g>
    <defs>
      <clipPath id='f5c7cfb7cdb1a0fcfbc653245cd18cb7__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineSmRegularIcon);
export default ForwardRef;
