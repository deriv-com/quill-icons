import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderXlBoldIcon = (
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
      <path d='M4.125 7.5h.75Q5.907 7.595 6 8.625 5.907 9.657 4.875 9.75h-.75q-.797 0-1.312.563-.563.514-.563 1.312v.75q-.093 1.032-1.125 1.125Q.095 13.407 0 12.375v-.75q.047-1.734 1.219-2.906T4.125 7.5m-3 7.5q1.032.095 1.125 1.125v3.75Q2.157 20.907 1.125 21 .095 20.907 0 19.875v-3.75Q.095 15.095 1.125 15m18.75 0q1.032.095 1.125 1.125v3.75q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125v-3.75q.094-1.03 1.125-1.125m0-1.5q-1.03-.093-1.125-1.125v-.75q0-.797-.562-1.312-.516-.563-1.313-.563h-.75Q15.095 9.657 15 8.625q.095-1.03 1.125-1.125h.75q1.734.047 2.906 1.219T21 11.625v.75q-.093 1.032-1.125 1.125M21 23.625v.75q-.046 1.734-1.219 2.906-1.172 1.173-2.906 1.219h-.75q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125h.75q.797 0 1.313-.562.562-.516.562-1.313v-.75q.094-1.03 1.125-1.125 1.032.094 1.125 1.125m-18.75 0v.75q0 .797.563 1.313.514.562 1.312.562h.75q1.032.094 1.125 1.125-.093 1.032-1.125 1.125h-.75q-1.734-.046-2.906-1.219Q.046 26.11 0 24.375v-.75q.095-1.03 1.125-1.125 1.032.094 1.125 1.125M8.625 28.5q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125h3.75q1.032.094 1.125 1.125-.093 1.032-1.125 1.125zM7.5 8.625q.095-1.03 1.125-1.125h3.75q1.032.095 1.125 1.125-.093 1.032-1.125 1.125h-3.75Q7.595 9.657 7.5 8.625' />
    </g>
    <defs>
      <clipPath id='0ea0fb3737eb9caf82d85fc5d57ff9d1__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderXlBoldIcon);
export default ForwardRef;
