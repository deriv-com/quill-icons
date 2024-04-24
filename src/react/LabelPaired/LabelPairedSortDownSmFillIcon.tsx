import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownSmFillIcon = (
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
      <path d='M5.102 16.629a.843.843 0 0 1-1.23 0l-3.5-3.5a.88.88 0 0 1-.192-.957.9.9 0 0 1 .82-.547h7c.328 0 .656.219.793.547a.88.88 0 0 1-.191.957z' />
    </g>
    <defs>
      <clipPath id='bb53ba37f157327c78b5d531b809e85a__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownSmFillIcon);
export default ForwardRef;
