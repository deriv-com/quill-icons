import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.125 3.5h2.906c.281 0 .586.14.797.352l1.57 1.57c.211.21.352.516.352.797v5.156c0 .633-.516 1.125-1.125 1.125h-4.5A1.11 1.11 0 0 1 4 11.375v-6.75c0-.61.492-1.125 1.125-1.125m-3.75 3H3.25V8h-1.5v6h4.5v-.75h1.5v1.125c0 .633-.516 1.125-1.125 1.125h-5.25A1.11 1.11 0 0 1 .25 14.375v-6.75c0-.61.492-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='9d6f2810075de3eb5f9e79e15f46bb56__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyCaptionFillIcon);
export default ForwardRef;
