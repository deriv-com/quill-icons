import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.25 7q.687.063.75.75v7.5q-.063.687-.75.75-.687-.063-.75-.75V9.563L2.281 16.78q-.531.438-1.062 0-.438-.531 0-1.062L8.438 8.5H2.75q-.687-.063-.75-.75.063-.687.75-.75z' />
    </g>
    <defs>
      <clipPath id='d9853312cb9d19014cbde833397c898e__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightMdBoldIcon);
export default ForwardRef;
