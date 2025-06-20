import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 4h5v4c0 .563.438 1 1 1h4v9c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m6 0 4 4H8zm-3.156 7.844a.717.717 0 0 0-1.032-.188.72.72 0 0 0-.187 1.031l1.438 2.063-1.438 2.094c-.25.312-.156.781.188 1.031a.717.717 0 0 0 1.03-.187L6 16.063l1.125 1.625c.25.343.688.437 1.031.187.344-.25.438-.687.188-1.031L6.906 14.75l1.438-2.062a.72.72 0 0 0-.188-1.032.717.717 0 0 0-1.031.188L6 13.469z' />
    </g>
    <defs>
      <clipPath id='2f2b326b75c6edca285d017c9b184b40__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelMdFillIcon);
export default ForwardRef;
