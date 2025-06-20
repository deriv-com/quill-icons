import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeLgFillIcon = (
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
      <path d='M.25 8.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 12.375zm2.5.625v2.5h2.5v-2.5zm-2.5 9.375c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 22.375zm2.5.625v2.5h2.5v-2.5zm9.375-12.5h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-3.75c0-1.016.82-1.875 1.875-1.875m3.125 2.5h-2.5v2.5h2.5zm-5 8.125c0-.312.273-.625.625-.625h2.5c.313 0 .625.313.625.625 0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625h-2.5a.617.617 0 0 1-.625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v2.5a.64.64 0 0 1-.625.625h-1.25a.617.617 0 0 1-.625-.625zm4.375 6.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625a.64.64 0 0 1-.625.625m2.5 0a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625a.64.64 0 0 1-.625.625' />
    </g>
    <defs>
      <clipPath id='e8ead166ba42bcf7a47e7c21e388fb77__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeLgFillIcon);
export default ForwardRef;
