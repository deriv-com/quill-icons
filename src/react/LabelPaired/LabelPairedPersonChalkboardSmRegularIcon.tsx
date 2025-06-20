import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardSmRegularIcon = (
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
      <path d='M4.844 5.281c0 .383.273.657.656.657a.65.65 0 0 0 .656-.657c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656m2.187 0a1.531 1.531 0 0 1-2.297 1.34c-.492-.273-.765-.766-.765-1.34 0-.547.273-1.039.765-1.312A1.53 1.53 0 0 1 7.031 5.28M5.145 8.125c-.192 0-.356.055-.52.11V12.5h1.75V8.125zm-.52 9.188a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V9.3l-1.367 2.543a.45.45 0 0 1-.602.191c-.218-.137-.3-.383-.191-.601l1.613-3.008A2.21 2.21 0 0 1 5.145 7.25H9V5.063c0-.711.574-1.313 1.313-1.313h6.124c.711 0 1.313.602 1.313 1.313v6.125c0 .738-.602 1.312-1.312 1.312h-6.125A1.296 1.296 0 0 1 9 11.188V9h.875v2.188c0 .246.191.437.438.437h6.124a.45.45 0 0 0 .438-.437V5.062a.47.47 0 0 0-.437-.437h-6.125a.45.45 0 0 0-.438.438V7.25h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H7.25v9.188a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-3.938h-1.75z' />
    </g>
    <defs>
      <clipPath id='6b1381f68c3dff0b82f606b230638bc5__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardSmRegularIcon);
export default ForwardRef;
