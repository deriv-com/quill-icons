import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterSmBoldIcon = (
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
      <path d='M0 5.773c0-.628.492-1.148 1.121-1.148h11.73c.63 0 1.149.52 1.149 1.148 0 .274-.11.52-.273.711l-4.54 5.606V16c0 .492-.41.875-.902.875a.84.84 0 0 1-.547-.191l-2.515-1.997a1.06 1.06 0 0 1-.41-.847v-1.75L.245 6.484A1.07 1.07 0 0 1 0 5.774m1.504.165 4.457 5.496q.165.204.164.41v1.886l1.75 1.395v-3.281c0-.137.027-.274.137-.41l4.484-5.496z' />
    </g>
    <defs>
      <clipPath id='7c8eb4693056b3215ef14dcb5f7db5e8__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterSmBoldIcon);
export default ForwardRef;
