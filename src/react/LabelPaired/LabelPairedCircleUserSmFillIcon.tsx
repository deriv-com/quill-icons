import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSmFillIcon = (
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
      <path d='M10.91 14.277c-.629-1.066-1.75-1.777-3.035-1.777h-1.75c-1.312 0-2.434.71-3.035 1.777A5.22 5.22 0 0 0 7 16a5.3 5.3 0 0 0 3.91-1.723M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7 .438a1.94 1.94 0 0 0 1.695-.985 1.95 1.95 0 0 0 0-1.969A2 2 0 0 0 7 7.25a2.01 2.01 0 0 0-1.723.984 1.95 1.95 0 0 0 0 1.97c.356.628 1.012.983 1.723.983' />
    </g>
    <defs>
      <clipPath id='2d2e9f229c0e443b95bde0bad480a456__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSmFillIcon);
export default ForwardRef;
