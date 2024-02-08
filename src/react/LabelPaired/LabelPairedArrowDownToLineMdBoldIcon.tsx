import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineMdBoldIcon = (
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
      <path d='M11.25 19H.75q-.687-.063-.75-.75.063-.687.75-.75h10.5q.687.063.75.75-.063.687-.75.75m-5.781-4.25v.031l-4-4.25Q1.03 9.97 1.5 9.47q.53-.437 1.063.031l2.687 2.875V5.75Q5.313 5.063 6 5q.687.063.75.75v6.625L9.469 9.5q.5-.469 1.062-.031.438.5.031 1.031l-4 4.25A.78.78 0 0 1 6 15a.68.68 0 0 1-.531-.25' />
    </g>
    <defs>
      <clipPath id='1e68ac8d31c0084feaca5f870e294ad8__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineMdBoldIcon);
export default ForwardRef;
