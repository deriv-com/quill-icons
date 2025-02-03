import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerMouseScrollwheelSmBoldIcon = (
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
      <path d='M9.438 13.375v-5.25c0-1.668-1.395-3.062-3.063-3.062h-1.75a3.075 3.075 0 0 0-3.062 3.062v5.25a3.057 3.057 0 0 0 3.062 3.063h1.75a3.075 3.075 0 0 0 3.063-3.063M.25 8.125A4.37 4.37 0 0 1 4.625 3.75h1.75a4.39 4.39 0 0 1 4.375 4.375v5.25a4.37 4.37 0 0 1-4.375 4.375h-1.75A4.353 4.353 0 0 1 .25 13.375zm5.25-1.75a.9.9 0 0 1 .875.875v.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V7.25c0-.465.383-.875.875-.875' />
    </g>
    <defs>
      <clipPath id='50e43ff6360f06baae261120e95e97ab__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelSmBoldIcon);
export default ForwardRef;
