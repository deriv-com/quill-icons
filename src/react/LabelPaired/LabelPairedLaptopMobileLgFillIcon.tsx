import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileLgFillIcon = (
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
      <path d='M5 5.5h12.5C18.867 5.5 20 6.633 20 8v1.25h-2.5V8H5v8.75h8.75v3.75H2.969A2.967 2.967 0 0 1 0 17.531c0-.43.313-.781.742-.781H2.5V8c0-1.367 1.094-2.5 2.5-2.5M17.5 23h5V13h-5zM15 12.375c0-1.016.82-1.875 1.875-1.875h6.25c1.016 0 1.875.86 1.875 1.875v11.25c0 1.055-.86 1.875-1.875 1.875h-6.25A1.85 1.85 0 0 1 15 23.625z' />
    </g>
    <defs>
      <clipPath id='bbd02d3335c2a7438b0d98086607f3c9__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileLgFillIcon);
export default ForwardRef;
