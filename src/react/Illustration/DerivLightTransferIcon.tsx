import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightTransferIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#C6E4E5'
      d='m31.657 12.14-8.9-7.873A1.052 1.052 0 0 0 21 5.022v3.993h-7a1 1 0 0 0-1 1v4h6a3.01 3.01 0 0 1 3 3v3.97c.257.018.51-.061.712-.22l8.9-7.086a1 1 0 0 0 .045-1.54'
    />
    <path
      fill='#85ABB0'
      d='M20 22.98V17.02a1 1 0 0 0-1-1h-8v-3.997A1.036 1.036 0 0 0 9.945 11a1.05 1.05 0 0 0-.7.267l-8.9 7.872a1 1 0 0 0 .042 1.544l8.9 7.085c.187.15.42.232.659.232A1.036 1.036 0 0 0 11 26.978v-2.993h8a1.007 1.007 0 0 0 1-1.004'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightTransferIcon);
export default ForwardRef;
