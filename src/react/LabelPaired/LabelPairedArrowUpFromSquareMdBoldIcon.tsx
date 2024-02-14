import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareMdBoldIcon = (
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
      <path d='m8.531 4.219 3.5 3.5q.438.531 0 1.062-.531.438-1.062 0L8.75 6.562v7.688q-.063.687-.75.75-.687-.063-.75-.75V6.563L5.031 8.78q-.531.438-1.062 0-.438-.531 0-1.062l3.5-3.5q.531-.438 1.062 0M2.25 5h.25q.687.063.75.75-.063.687-.75.75h-.25q-.687.063-.75.75v10.5q.063.687.75.75h11.5q.687-.063.75-.75V7.25q-.063-.687-.75-.75h-.25q-.687-.063-.75-.75.063-.687.75-.75h.25q.969.031 1.594.656.624.625.656 1.594v10.5q-.031.969-.656 1.594-.625.624-1.594.656H2.25q-.969-.031-1.594-.656Q.032 18.719 0 17.75V7.25q.031-.969.656-1.594Q1.281 5.032 2.25 5' />
    </g>
    <defs>
      <clipPath id='04f12497c2506d616fdeeb406652b176__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareMdBoldIcon);
export default ForwardRef;
