import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m6.098-3.445c-.328-.137-.711.054-.82.41l-1.313 3.937c-.082.192-.027.41.082.575a.64.64 0 0 0 .547.273h2.843v1.094c0 .383.274.656.657.656a.65.65 0 0 0 .656-.656V12.5h.219a.65.65 0 0 0 .656-.656c0-.356-.3-.656-.656-.656H8.75V9.656c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656v1.531H5.496l1.012-3.062c.137-.355-.055-.71-.41-.82' />
    </g>
    <defs>
      <clipPath id='e9d84c2b7a8148dad06368e881a0bab8__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourSmFillIcon);
export default ForwardRef;
