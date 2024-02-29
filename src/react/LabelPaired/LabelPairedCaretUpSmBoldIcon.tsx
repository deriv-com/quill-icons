import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpSmBoldIcon = (
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
      <path d='m4.5 8.754-2.434 2.434h4.868zm-.629-1.258A.91.91 0 0 1 4.5 7.25q.356 0 .629.246l3.5 3.5q.383.437.191.957A.9.9 0 0 1 8 12.5H1a.9.9 0 0 1-.82-.547q-.192-.519.191-.957z' />
    </g>
    <defs>
      <clipPath id='d5869010bd824f936d8b1794cf706877__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpSmBoldIcon);
export default ForwardRef;
