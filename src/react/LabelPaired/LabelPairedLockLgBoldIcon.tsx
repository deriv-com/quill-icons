import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockLgBoldIcon = (
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
      <path d='M5.875 10.5V13h6.25v-2.5A3.134 3.134 0 0 0 9 7.375 3.11 3.11 0 0 0 5.875 10.5M4 13v-2.5c0-2.734 2.227-5 5-5 2.734 0 5 2.266 5 5V13h1.25c1.367 0 2.5 1.133 2.5 2.5V23c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23v-7.5c0-1.367 1.094-2.5 2.5-2.5zm-1.875 2.5V23c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625v-7.5c0-.312-.312-.625-.625-.625H2.75a.64.64 0 0 0-.625.625' />
    </g>
    <defs>
      <clipPath id='22eb899558585826db286ac2cf4d3538__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockLgBoldIcon);
export default ForwardRef;
