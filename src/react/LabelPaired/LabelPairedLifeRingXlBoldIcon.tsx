import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingXlBoldIcon = (
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
      <path d='m18.047 25.64-3.75-3.75A4.43 4.43 0 0 1 12 22.5a4.43 4.43 0 0 1-2.297-.61l-3.75 3.75Q8.484 27.705 12 27.75q3.516-.046 6.047-2.11m3.187 0 .563.563q.656.797 0 1.594-.797.656-1.594 0l-.562-.563Q16.454 29.906 12 30q-4.454-.093-7.64-2.766l-.563.563q-.797.656-1.594 0-.655-.797 0-1.594l.563-.562Q.094 22.454 0 18q.094-4.454 2.766-7.64l-.563-.563q-.655-.797 0-1.594.797-.656 1.594 0l.562.563Q7.546 6.094 12 6q4.454.094 7.64 2.766l.563-.563q.797-.656 1.594 0 .656.797 0 1.594l-.563.562Q23.906 13.547 24 18q-.093 4.454-2.766 7.64m-1.593-1.593Q21.704 21.515 21.75 18q-.046-3.516-2.11-6.047l-3.75 3.75A4.43 4.43 0 0 1 16.5 18a4.43 4.43 0 0 1-.61 2.297zm-1.594-13.688Q15.515 8.297 12 8.25q-3.516.046-6.047 2.11l3.75 3.75A4.43 4.43 0 0 1 12 13.5q1.266 0 2.297.61zm-9.938 9.938A4.43 4.43 0 0 1 7.5 18q0-1.266.61-2.297l-3.75-3.75Q2.295 14.485 2.25 18q.046 3.516 2.11 6.047zM9.75 18q.047 1.266 1.125 1.969 1.125.563 2.25 0 1.078-.703 1.125-1.969-.047-1.266-1.125-1.969-1.125-.562-2.25 0Q9.797 16.734 9.75 18' />
    </g>
    <defs>
      <clipPath id='6128ca016da65688ae1dfb856ccf7fc6__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingXlBoldIcon);
export default ForwardRef;
