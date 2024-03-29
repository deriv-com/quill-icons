import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopSmFillIcon = (
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
      <path d='M3.75 4.625h10.5c.957 0 1.75.793 1.75 1.75v7h-1.75v-7H3.75v7H2v-7c0-.957.766-1.75 1.75-1.75M.77 14.25h16.433c.3 0 .547.246.547.547 0 1.148-.957 2.078-2.105 2.078H2.328A2.077 2.077 0 0 1 .25 14.797c0-.3.219-.547.52-.547' />
    </g>
    <defs>
      <clipPath id='f419edd2fc2ef9c233b6a04a5677f64b__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopSmFillIcon);
export default ForwardRef;
