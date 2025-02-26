import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeLgBoldIcon = (
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
      <path d='M5.875 8.625h-3.75v3.75h3.75zM2.125 6.75h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 12.375v-3.75c0-1.016.82-1.875 1.875-1.875m3.75 11.875h-3.75v3.75h3.75zm-3.75-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 22.375v-3.75c0-1.016.82-1.875 1.875-1.875m10-8.125v3.75h3.75v-3.75zm-1.875 0c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zm-7.187 1.563c0-.313.273-.626.624-.626h.626c.312 0 .625.313.625.626v.624a.64.64 0 0 1-.625.626h-.625a.617.617 0 0 1-.626-.626zm.624 9.375h.626c.312 0 .625.312.625.625v.625a.64.64 0 0 1-.625.625h-.625a.617.617 0 0 1-.626-.625v-.625c0-.313.274-.625.626-.625m9.376-9.375c0-.313.273-.626.624-.626h.626c.312 0 .624.313.624.626v.624a.64.64 0 0 1-.624.626h-.626a.617.617 0 0 1-.624-.626zm-2.813 7.187c0-.312.273-.625.625-.625h2.5c.313 0 .625.313.625.625 0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625h-2.5a.617.617 0 0 1-.625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v2.5a.64.64 0 0 1-.625.625h-1.25a.617.617 0 0 1-.625-.625zM14.625 23c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m2.5 0c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='b8cce055a53707e159afe80e93b01aba__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeLgBoldIcon);
export default ForwardRef;
