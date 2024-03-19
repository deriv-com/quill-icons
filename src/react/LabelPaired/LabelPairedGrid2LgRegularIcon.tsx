import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2LgRegularIcon = (
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
      <path d='M3.125 8a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75C7.5 8.313 7.188 8 6.875 8zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zM3.125 18a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zM16.875 8h-3.75a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625m-3.75-1.25h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-3.75c0-1.016.82-1.875 1.875-1.875m0 11.25a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875z' />
    </g>
    <defs>
      <clipPath id='a1a0aa496bf6a52d902dd8c9fcfb97d2__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2LgRegularIcon);
export default ForwardRef;
