import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopwatchMdBoldIcon = (
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
      <path d='M4.5 4.75q.063-.687.75-.75h3.5q.687.063.75.75-.063.687-.75.75h-1v1.531q2.063.282 3.563 1.594l.906-.906q.531-.438 1.062 0 .438.531 0 1.062l-.969.969q1.156 1.625 1.188 3.75-.063 2.75-1.906 4.594Q9.75 19.937 7 20q-2.75-.063-4.594-1.906Q.563 16.25.5 13.5q.063-2.562 1.656-4.344Q3.782 7.375 6.25 7.031V5.5h-1q-.687-.063-.75-.75M7 18.5q1.345 0 2.5-.656A5.2 5.2 0 0 0 11.344 16 5.1 5.1 0 0 0 12 13.5q0-1.312-.656-2.5A5.2 5.2 0 0 0 9.5 9.156 5 5 0 0 0 7 8.5a5 5 0 0 0-2.5.656A5.2 5.2 0 0 0 2.656 11 5.1 5.1 0 0 0 2 13.5q0 1.312.656 2.5A5.2 5.2 0 0 0 4.5 17.844q1.156.656 2.5.656m.75-7.75V14q-.063.687-.75.75-.687-.063-.75-.75v-3.25q.063-.687.75-.75.687.063.75.75' />
    </g>
    <defs>
      <clipPath id='bf1b38185d700869c21b903d5149cc9d__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchMdBoldIcon);
export default ForwardRef;
