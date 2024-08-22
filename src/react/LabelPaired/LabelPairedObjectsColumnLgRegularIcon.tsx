import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnLgRegularIcon = (
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
      <path d='M2.125 8a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-6.25C6.5 8.313 6.188 8 5.875 8zM.25 8.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 14.875zM12.125 15.5a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-6.25c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zM5.875 19.25h-3.75a.64.64 0 0 0-.625.625v2.5c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625M2.125 18h3.75c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 22.375v-2.5C.25 18.859 1.07 18 2.125 18m10-10a.64.64 0 0 0-.625.625v2.5c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875z' />
    </g>
    <defs>
      <clipPath id='3205706aeb71852577d2281705b6ef95__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnLgRegularIcon);
export default ForwardRef;
