import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.89 3.64 4.5 6.454a2.996 2.996 0 0 1 3-2.953c1.64 0 3 1.36 3 3 0 1.406-.96 2.555-2.227 2.906l6.493 5.11c.257.187.304.539.093.773a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774.518.518 0 0 1 .774-.093m5.907 4.618c.21.07.445.117.703.117 1.031 0 1.875-.82 1.875-1.875A1.88 1.88 0 0 0 7.5 4.625 1.866 1.866 0 0 0 5.625 6.5c0 .422.117.797.328 1.102zm-.61 2.39 1.407 1.102H6.422a3.06 3.06 0 0 0-3.024 2.625h7.547l1.36 1.078c-.094.047-.164.047-.258.047H2.93a.68.68 0 0 1-.68-.68 4.17 4.17 0 0 1 3.938-4.172' />
    </g>
    <defs>
      <clipPath id='41d6dee054fd8eb23bc80c22eb1708f3__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashCaptionBoldIcon);
export default ForwardRef;
