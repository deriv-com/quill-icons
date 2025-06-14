import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.5 6.375a1.31 1.31 0 0 1-1.148-.656c-.247-.383-.247-.903 0-1.313.246-.383.656-.656 1.148-.656.465 0 .875.273 1.121.656.246.41.246.93 0 1.313-.246.41-.656.656-1.121.656m-.383 2.188c-.027 0-.054.027-.054.027v3.473h.875v-3.5zm-.054 8.53c0 .384-.301.657-.657.657a.63.63 0 0 1-.656-.656V9.875l-1.203 2.078a.613.613 0 0 1-.875.246.613.613 0 0 1-.246-.875L3.012 8.48c.437-.738 1.23-1.23 2.105-1.23H9V5.063c0-.711.574-1.313 1.313-1.313h6.124c.711 0 1.313.602 1.313 1.313v6.125c0 .738-.602 1.312-1.312 1.312h-6.125A1.296 1.296 0 0 1 9 11.188V9.875h1.313v1.313h6.124V5.062h-6.125V7.25h.657c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H7.25v8.53c0 .384-.3.657-.656.657a.63.63 0 0 1-.657-.656v-3.719h-.875z' />
    </g>
    <defs>
      <clipPath id='bb3d65441e997a9c9009c8f3208aff14__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardSmBoldIcon);
export default ForwardRef;
