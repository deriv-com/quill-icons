import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.5 4.75q.063-.687.75-.75h5q.687.063.75.75v5q-.063.687-.75.75-.687-.063-.75-.75V6.563L7.531 13.53q-.531.438-1.062 0-.438-.531 0-1.062L13.438 5.5H10.25q-.687-.063-.75-.75M2.25 5h4q.687.063.75.75-.063.687-.75.75h-4q-.687.063-.75.75v10.5q.063.687.75.75h10.5q.687-.063.75-.75v-4q.063-.687.75-.75.687.063.75.75v4q-.031.969-.656 1.594-.625.624-1.594.656H2.25q-.969-.031-1.594-.656Q.032 18.719 0 17.75V7.25q.031-.969.656-1.594Q1.281 5.032 2.25 5' />
    </g>
    <defs>
      <clipPath id='4d2646f8f09668270b8c4b3115e8f2f9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareMdBoldIcon);
export default ForwardRef;
