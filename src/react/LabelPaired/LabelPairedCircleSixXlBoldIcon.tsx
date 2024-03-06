import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSixXlBoldIcon = (
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
      <path d='M21.75 18q0-2.671-1.312-4.875-1.266-2.203-3.563-3.562Q14.578 8.25 12 8.25T7.125 9.563q-2.297 1.359-3.562 3.562Q2.25 15.329 2.25 18t1.313 4.875q1.264 2.203 3.562 3.563Q9.422 27.75 12 27.75t4.875-1.312q2.297-1.36 3.563-3.563Q21.75 20.671 21.75 18M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m12 3.75q1.266-.046 1.969-1.125.562-1.125 0-2.25-.703-1.079-1.969-1.125-1.266.046-1.969 1.125-.562 1.125 0 2.25.703 1.079 1.969 1.125M7.5 19.5q.046-2.39 1.828-3.937l3.797-3.282q.844-.61 1.594.094.61.844-.094 1.594l-1.406 1.219q1.453.42 2.344 1.593.89 1.126.937 2.719-.047 1.922-1.312 3.188Q13.922 23.952 12 24q-1.922-.047-3.187-1.312Q7.547 21.422 7.5 19.5' />
    </g>
    <defs>
      <clipPath id='6391943cc645d8b9a465e89436a23aee__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSixXlBoldIcon);
export default ForwardRef;
