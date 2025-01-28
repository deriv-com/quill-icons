import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.102 7.523 3.5 3.5a.89.89 0 0 1 .191.957.89.89 0 0 1-.793.547H1a.9.9 0 0 1-.82-.546.89.89 0 0 1 .191-.958l3.5-3.5a.843.843 0 0 1 1.23 0' />
    </g>
    <defs>
      <clipPath id='688cd3963d37f6f0f3724611ff6d2663__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpSmFillIcon);
export default ForwardRef;
