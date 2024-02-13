import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.25 7.125q.095-1.03 1.125-1.125h7.5q1.032.095 1.125 1.125v7.5q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125V9.844L11.297 20.297q-.797.656-1.594 0-.655-.797 0-1.594L20.156 8.25h-4.781q-1.03-.093-1.125-1.125M3.375 7.5h6q1.032.095 1.125 1.125-.093 1.032-1.125 1.125h-6q-1.03.095-1.125 1.125v15.75q.095 1.032 1.125 1.125h15.75q1.032-.093 1.125-1.125v-6q.094-1.03 1.125-1.125 1.032.094 1.125 1.125v6q-.047 1.454-.984 2.39-.937.939-2.391.985H3.375q-1.454-.047-2.39-.984-.939-.937-.985-2.391v-15.75q.047-1.454.984-2.39.937-.939 2.391-.985' />
    </g>
    <defs>
      <clipPath id='f709567bb5441021390dab684686cfe4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareXlBoldIcon);
export default ForwardRef;
