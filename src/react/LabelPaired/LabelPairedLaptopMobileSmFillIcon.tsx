import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileSmFillIcon = (
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
      <path d='M3.75 3.75h8.75c.957 0 1.75.793 1.75 1.75v.875H12.5V5.5H3.75v6.125h6.125v2.625H2.328A2.077 2.077 0 0 1 .25 12.172c0-.3.219-.547.52-.547H2V5.5c0-.957.766-1.75 1.75-1.75M12.5 16H16V9h-3.5zm-1.75-7.437c0-.711.574-1.313 1.313-1.313h4.374c.711 0 1.313.602 1.313 1.313v7.874c0 .739-.602 1.313-1.312 1.313h-4.375a1.296 1.296 0 0 1-1.313-1.312z' />
    </g>
    <defs>
      <clipPath id='1d5ccae59f6e1ca4bfbd3332ab348277__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileSmFillIcon);
export default ForwardRef;
