import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpSmBoldIcon = (
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
      <path d='M4.5 6.129 2.04 8.563h4.894zm-.629-1.23a.843.843 0 0 1 1.23 0l3.5 3.5a.88.88 0 0 1 .192.956.86.86 0 0 1-.793.547H1a.9.9 0 0 1-.82-.547.88.88 0 0 1 .191-.957z' />
    </g>
    <defs>
      <clipPath id='a027f34042aed9aa053583d1292c5673__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpSmBoldIcon);
export default ForwardRef;
