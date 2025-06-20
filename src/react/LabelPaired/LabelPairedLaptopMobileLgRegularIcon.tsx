import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileLgRegularIcon = (
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
      <path d='M5 6.75c-.703 0-1.25.586-1.25 1.25v8.75h10V18H1.29c.233.742.898 1.25 1.679 1.25H13.75v1.25H2.969A2.967 2.967 0 0 1 0 17.531c0-.43.313-.781.742-.781H2.5V8c0-1.367 1.094-2.5 2.5-2.5h12.5C18.867 5.5 20 6.633 20 8v1.25h-1.25V8c0-.664-.586-1.25-1.25-1.25zm11.25 5.625v11.25c0 .352.273.625.625.625h6.25a.64.64 0 0 0 .625-.625v-11.25c0-.312-.312-.625-.625-.625h-6.25a.64.64 0 0 0-.625.625m-1.25 0c0-1.016.82-1.875 1.875-1.875h6.25c1.016 0 1.875.86 1.875 1.875v11.25c0 1.055-.86 1.875-1.875 1.875h-6.25A1.85 1.85 0 0 1 15 23.625z' />
    </g>
    <defs>
      <clipPath id='31455b0be17b698ad5d3769e3e735ccf__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileLgRegularIcon);
export default ForwardRef;
