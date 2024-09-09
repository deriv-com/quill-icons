import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.375 11.438V15.5h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-6.29A15.6 15.6 0 0 1 1.892 23h10.234c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.875a.68.68 0 0 1-.547-.273.6.6 0 0 1 0-.625l.04-.079a14 14 0 0 0 1.718-6.523H.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h1.25v-4.062A4.676 4.676 0 0 1 6.813 6.75h.273c.508 0 .976.117 1.484.273l3.125 1.016c.313.117.47.469.39.82-.116.313-.468.47-.82.391L8.142 8.195A3.2 3.2 0 0 0 7.086 8h-.274a3.443 3.443 0 0 0-3.437 3.438' />
    </g>
    <defs>
      <clipPath id='7089c53d0e3af7001881de3d0b156d47__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignLgRegularIcon);
export default ForwardRef;
