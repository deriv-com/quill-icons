import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileLgBoldIcon = (
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
      <path d='M5 7.375A.64.64 0 0 0 4.375 8v10h9.375v2.5H1.875A1.85 1.85 0 0 1 0 18.625C0 18.313.273 18 .625 18H2.5V8c0-1.367 1.094-2.5 2.5-2.5h12.5C18.867 5.5 20 6.633 20 8v1.25h-1.875V8c0-.312-.312-.625-.625-.625zm10 5c0-1.016.82-1.875 1.875-1.875h6.25c1.016 0 1.875.86 1.875 1.875v11.25c0 1.055-.86 1.875-1.875 1.875h-6.25A1.85 1.85 0 0 1 15 23.625zm1.875 0v11.25h6.25v-11.25z' />
    </g>
    <defs>
      <clipPath id='d5410be247e4da046eb22f168e71d769__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileLgBoldIcon);
export default ForwardRef;
