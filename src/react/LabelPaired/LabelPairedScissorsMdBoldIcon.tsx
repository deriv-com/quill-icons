import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsMdBoldIcon = (
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
      <path d='M15.813 17.719q-.47.5-1.032.093L9.75 13.625l1.188-.969 4.78 4.031q.5.47.095 1.032M3.5 5.5q-1.125.03-1.719 1-.562 1 0 2 .594.97 1.719 1 1.125-.03 1.719-1 .563-1 0-2-.594-.97-1.719-1m0-1.5q1.5.031 2.469 1.031Q6.969 6 7 7.5q0 .844-.375 1.563L9 11.03l5.781-4.844q.563-.406 1.031.094.407.563-.093 1.032l-9.094 7.625Q7 15.657 7 16.5q-.031 1.5-1.031 2.469Q5 19.969 3.5 20q-1.5-.031-2.469-1.031Q.031 18 0 16.5q.031-1.5 1.031-2.469Q2 13.031 3.5 13q1.28.03 2.188.781L7.813 12l-2.125-1.781q-.907.75-2.188.781-1.5-.031-2.469-1.031Q.031 9 0 7.5.031 6 1.031 5.031 2 4.031 3.5 4m2 12.5q-.03-1.125-1-1.719-1-.562-2 0-.97.594-1 1.719.03 1.125 1 1.719 1 .563 2 0 .97-.594 1-1.719' />
    </g>
    <defs>
      <clipPath id='f8fb7d0ba4fff50e758ef8c4b8134fe5__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsMdBoldIcon);
export default ForwardRef;
