import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashSmFillIcon = (
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
      <path d='M1.29 3.914 5.5 7.195A3.495 3.495 0 0 1 9 3.75c1.914 0 3.5 1.586 3.5 3.5 0 1.64-1.121 2.98-2.598 3.39l7.575 5.962c.3.218.355.628.109.902a.604.604 0 0 1-.902.11L.496 4.925a.604.604 0 0 1-.11-.903.604.604 0 0 1 .903-.109m6.179 8.176 7.136 5.605c-.109.055-.19.055-.3.055H3.668a.794.794 0 0 1-.793-.793c0-2.598 2.023-4.73 4.594-4.867' />
    </g>
    <defs>
      <clipPath id='43b369dd5781b3ae52df662ed117002c__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashSmFillIcon);
export default ForwardRef;
