import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneSmFillIcon = (
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
      <path d='m4.484 4.434 1.094 2.625c.192.437.082.957-.3 1.257l-1.34 1.121a9.2 9.2 0 0 0 4.374 4.376l1.122-1.34c.3-.383.82-.493 1.257-.301l2.625 1.094c.52.191.766.765.63 1.285l-.657 2.406a1.08 1.08 0 0 1-1.039.793A12.23 12.23 0 0 1 0 5.5c0-.492.328-.902.793-1.04l2.406-.655c.52-.137 1.094.11 1.285.629' />
    </g>
    <defs>
      <clipPath id='b39a7d00383ae08cf36400e8264c179d__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneSmFillIcon);
export default ForwardRef;
