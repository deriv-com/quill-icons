import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.25 5q.687.063.75.75-.063.687-.75.75H1.5v2.75q-.063.687-.75.75-.687-.063-.75-.75v-3.5Q.063 5.063.75 5zM0 14.75q.063-.687.75-.75.687.063.75.75v2.75h2.75q.687.063.75.75-.063.687-.75.75H.75q-.687-.063-.75-.75zM13.25 5q.687.063.75.75v3.5q-.063.687-.75.75-.687-.063-.75-.75V6.5H9.75q-.687-.063-.75-.75.063-.687.75-.75zm-.75 9.75q.063-.687.75-.75.687.063.75.75v3.5q-.063.687-.75.75h-3.5q-.687-.063-.75-.75.063-.687.75-.75h2.75z' />
    </g>
    <defs>
      <clipPath id='43a808bf154578098b3daddaf5db72ce__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandMdBoldIcon);
export default ForwardRef;
