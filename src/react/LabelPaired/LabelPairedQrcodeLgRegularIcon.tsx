import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeLgRegularIcon = (
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
      <path d='M5.875 8h-3.75a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75C6.5 8.313 6.188 8 5.875 8m-3.75-1.25h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 12.375v-3.75c0-1.016.82-1.875 1.875-1.875M5.875 18h-3.75a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625m-3.75-1.25h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 22.375v-3.75c0-1.016.82-1.875 1.875-1.875m10-8.75a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zm0 8.75c0-.312.273-.625.625-.625h2.5c.313 0 .625.313.625.625v2.656h2.5v-2.656c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.281a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625V18H11.5v5.938a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625zM3.688 9.563h.624c.313 0 .625.312.625.624v.626a.64.64 0 0 1-.625.624h-.625a.617.617 0 0 1-.624-.624v-.626c0-.312.273-.624.624-.624m-.626 10.625c0-.313.274-.625.626-.625h.624c.313 0 .625.312.625.625v.625a.64.64 0 0 1-.625.625h-.625a.617.617 0 0 1-.624-.625zM13.689 9.563h.624c.313 0 .626.312.626.624v.626a.64.64 0 0 1-.626.624h-.624a.617.617 0 0 1-.626-.624v-.626c0-.312.274-.624.626-.624M12.75 23c0-.312.273-.625.625-.625H14c.313 0 .625.313.625.625v.625a.64.64 0 0 1-.625.625h-.625a.617.617 0 0 1-.625-.625zm3.75-.625h.625c.313 0 .625.313.625.625v.625a.64.64 0 0 1-.625.625H16.5a.617.617 0 0 1-.625-.625V23c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='3c95393c504e0ca466aae28b20b80079__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeLgRegularIcon);
export default ForwardRef;
