import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8.25A2.25 2.25 0 0 1 2.25 6v20.719l6.094-4.36c.375-.28.89-.28 1.312 0l6.094 4.36V8.25H2.25V6h13.5C16.969 6 18 7.031 18 8.25v20.625c0 .422-.234.844-.61 1.031-.374.188-.843.14-1.171-.093L9 24.656l-7.266 5.157a1.08 1.08 0 0 1-1.125.093C.234 29.72 0 29.296 0 28.875z' />
    </g>
    <defs>
      <clipPath id='25d739c56f6f5f9cd75a5e474a310278__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkXlBoldIcon);
export default ForwardRef;
