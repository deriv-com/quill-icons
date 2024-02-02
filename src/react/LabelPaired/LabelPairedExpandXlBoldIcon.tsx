import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.375 7.5q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H2.25v4.125Q2.157 14.907 1.125 15 .095 14.907 0 13.875v-5.25Q.095 7.595 1.125 7.5zM0 22.125Q.095 21.095 1.125 21q1.032.094 1.125 1.125v4.125h4.125q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-5.25Q.095 28.407 0 27.375zM19.875 7.5q1.032.095 1.125 1.125v5.25q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125V9.75h-4.125q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125zM18.75 22.125q.094-1.03 1.125-1.125 1.032.094 1.125 1.125v5.25q-.093 1.032-1.125 1.125h-5.25q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125h4.125z' />
    </g>
    <defs>
      <clipPath id='4b1bd2b78431f200a3d1e2c6a1c9f6be__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandXlBoldIcon);
export default ForwardRef;
