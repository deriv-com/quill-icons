import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineMdBoldIcon = (
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
      <path d='M14 6.75v10.5q-.063.687-.75.75-.687-.063-.75-.75V6.75q.063-.687.75-.75.687.063.75.75m-4.25 5.813.031-.032-4.25 4q-.562.438-1.062-.031-.438-.531.031-1.031l2.875-2.719H.75Q.063 12.687 0 12q.063-.687.75-.75h6.625L4.5 8.531q-.469-.5-.031-1.031.5-.469 1.031-.031l4.25 4A.68.68 0 0 1 10 12a.78.78 0 0 1-.25.563' />
    </g>
    <defs>
      <clipPath id='d90b27b75ca54097b9ba8faafa4c3cc1__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineMdBoldIcon);
export default ForwardRef;
