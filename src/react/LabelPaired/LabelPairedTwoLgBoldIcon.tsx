import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoLgBoldIcon = (
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
      <path d='M5.992 8.625c-1.054 0-2.031.43-2.773 1.172l-1.367 1.367c-.391.39-.977.39-1.329 0a.856.856 0 0 1 0-1.289l1.368-1.406A5.83 5.83 0 0 1 5.992 6.75h.274c3.047 0 5.547 2.5 5.547 5.547 0 1.523-.665 2.969-1.758 4.023L3.53 22.375h8.282a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H1.188a.99.99 0 0 1-.899-.586.98.98 0 0 1 .234-1.016l8.243-7.695c.742-.703 1.172-1.68 1.172-2.656a3.67 3.67 0 0 0-3.672-3.672z' />
    </g>
    <defs>
      <clipPath id='9d76f6a86e692186176889aed6f5a4c0__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoLgBoldIcon);
export default ForwardRef;
