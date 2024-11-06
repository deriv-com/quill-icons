import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 6.125C0 5.813.273 5.5.625 5.5c.313 0 .625.313.625.625v18.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625zm6.25 6.25c0 .352.273.625.625.625h11.25a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625H6.875a.64.64 0 0 0-.625.625zM5 9.875C5 8.859 5.82 8 6.875 8h11.25C19.141 8 20 8.86 20 9.875v2.5c0 1.055-.86 1.875-1.875 1.875H6.875A1.85 1.85 0 0 1 5 12.375zm1.25 11.25c0 .352.273.625.625.625h6.25a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625h-6.25a.64.64 0 0 0-.625.625zM5 18.625c0-1.016.82-1.875 1.875-1.875h6.25c1.016 0 1.875.86 1.875 1.875v2.5C15 22.18 14.14 23 13.125 23h-6.25A1.85 1.85 0 0 1 5 21.125z' />
    </g>
    <defs>
      <clipPath id='372f99f3a4ee5268fc06064017c379bb__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftLgRegularIcon);
export default ForwardRef;
