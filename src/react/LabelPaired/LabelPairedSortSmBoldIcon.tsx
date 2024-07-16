import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortSmBoldIcon = (
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
      <path d='M2.04 8.563h4.894L4.5 6.129zm3.062-3.665 3.5 3.5a.88.88 0 0 1 .191.957.9.9 0 0 1-.82.547H1a.9.9 0 0 1-.82-.547.88.88 0 0 1 .191-.957l3.5-3.5a.843.843 0 0 1 1.23 0m-3.063 8.04 2.461 2.46 2.434-2.46zm3.063 3.69a.843.843 0 0 1-1.23 0l-3.5-3.5a.88.88 0 0 1-.192-.956.9.9 0 0 1 .82-.547h7c.328 0 .656.219.793.547a.88.88 0 0 1-.191.957z' />
    </g>
    <defs>
      <clipPath id='9f97f9fc117f7a0550ac5e57a041e498__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortSmBoldIcon);
export default ForwardRef;
