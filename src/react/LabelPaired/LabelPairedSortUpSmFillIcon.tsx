import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpSmFillIcon = (
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
      <path d='m5.102 4.898 3.5 3.5a.88.88 0 0 1 .191.957.89.89 0 0 1-.793.547H1a.9.9 0 0 1-.82-.547.88.88 0 0 1 .191-.957l3.5-3.5a.843.843 0 0 1 1.23 0' />
    </g>
    <defs>
      <clipPath id='aeb8556f7a0b9934950b6809f40c328e__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpSmFillIcon);
export default ForwardRef;
