import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCirclePlusLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9.25c0-1.367 1.094-2.5 2.5-2.5h15c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H3.125a.64.64 0 0 0-.625.625c0 .352.273.625.625.625H17.5c1.367 0 2.5 1.133 2.5 2.5v.04c-.234 0-.43-.04-.625-.04a6.86 6.86 0 0 0-6.875 6.875c0 1.68.586 3.203 1.563 4.375H2.5a2.47 2.47 0 0 1-2.5-2.5zm13.75 10.625c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m2.5 0c0 .352.273.625.625.625h1.875v1.875c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625V20.5h1.875a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625H20v-1.875c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v1.875h-1.875a.64.64 0 0 0-.625.625' />
    </g>
    <defs>
      <clipPath id='1ca33be775ffc2ce18d24ed019a5f726__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCirclePlusLgFillIcon);
export default ForwardRef;
