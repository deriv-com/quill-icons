import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 7q-.843-.03-1.312-.75-.375-.75 0-1.5Q5.156 4.03 6 4q.844.03 1.313.75.375.75 0 1.5Q6.844 6.97 6 7m-.437 2.5H5.5v4h1v-4zM5.5 19.25q-.063.687-.75.75-.687-.063-.75-.75V11l-1.344 2.375q-.405.563-1.031.281-.563-.405-.281-1.031l1.844-3.219q.375-.656 1-1.031T5.563 8H10V5.5q.03-.625.438-1.062A1.63 1.63 0 0 1 11.5 4h7q.625.03 1.063.438.405.436.437 1.062v7a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 18.5 14h-7a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 10 12.5V11h1.5v1.5h7v-7h-7V8h.75q.687.063.75.75-.063.687-.75.75H8v9.75q-.063.687-.75.75-.687-.063-.75-.75V15h-1z' />
    </g>
    <defs>
      <clipPath id='7e07748d0888bf44f89f93d6abf9ba5e__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardMdBoldIcon);
export default ForwardRef;
