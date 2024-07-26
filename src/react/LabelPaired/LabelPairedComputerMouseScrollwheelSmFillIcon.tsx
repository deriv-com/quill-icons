import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.625 3.75h1.75a4.39 4.39 0 0 1 4.375 4.375v5.25a4.37 4.37 0 0 1-4.375 4.375h-1.75A4.353 4.353 0 0 1 .25 13.375v-5.25A4.37 4.37 0 0 1 4.625 3.75m1.75 3.5a.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875v.875c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875z' />
    </g>
    <defs>
      <clipPath id='498eb9fb23dc68d350e648a7db0f0963__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelSmFillIcon);
export default ForwardRef;
