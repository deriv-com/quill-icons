import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashCaptionFillIcon = (
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
      <path d='M.89 3.64 4.5 6.454a2.996 2.996 0 0 1 3-2.953c1.64 0 3 1.36 3 3 0 1.406-.96 2.555-2.227 2.906l6.493 5.11c.257.187.304.539.093.773a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774.518.518 0 0 1 .774-.093m5.298 7.008 6.117 4.805c-.094.047-.164.047-.258.047H2.93a.68.68 0 0 1-.68-.68 4.17 4.17 0 0 1 3.938-4.172' />
    </g>
    <defs>
      <clipPath id='8ce2581f0fdb635a1f7ee5938e3de529__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashCaptionFillIcon);
export default ForwardRef;
