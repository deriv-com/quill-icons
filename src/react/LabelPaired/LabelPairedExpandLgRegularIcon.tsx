import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandLgRegularIcon = (
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
      <path d='M5.875 6.75c.313 0 .625.313.625.625A.64.64 0 0 1 5.875 8H1.5v4.375A.64.64 0 0 1 .875 13a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625zM.25 18.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625V23h4.375c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625zM17.125 6.75c.313 0 .625.313.625.625v5a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V8h-4.375a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625zM16.5 18.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625v5a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H16.5z' />
    </g>
    <defs>
      <clipPath id='0b278e18a114af0661c9dea23cb74a59__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandLgRegularIcon);
export default ForwardRef;
