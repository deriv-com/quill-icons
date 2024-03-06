import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroXlBoldIcon = (
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
      <path d='M21.75 18q0-2.671-1.312-4.875-1.266-2.203-3.563-3.562Q14.578 8.25 12 8.25T7.125 9.563q-2.297 1.359-3.562 3.562Q2.25 15.329 2.25 18t1.313 4.875q1.264 2.203 3.562 3.563Q9.422 27.75 12 27.75t4.875-1.312q2.297-1.36 3.563-3.563Q21.75 20.671 21.75 18M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m6 .75h.75a6 6 0 0 1-.047-.703q0-.422.047-.797H6q-.703-.046-.75-.75.046-.703.75-.75h1.172a6.17 6.17 0 0 1 2.156-2.719q1.5-.984 3.422-1.031h1.922q1.03.095 1.125 1.125-.095 1.032-1.125 1.125H12.75q-1.922.047-3 1.5h3.75q.703.046.75.75-.047.704-.75.75H9.047q-.094.375-.094.797 0 .375.094.703H13.5q.703.046.75.75-.047.704-.75.75H9.656q1.125 1.5 3.094 1.594h1.922q1.03.093 1.125 1.125-.095.984-1.125 1.125H12.75q-1.968-.047-3.422-1.078a6.36 6.36 0 0 1-2.203-2.766H6q-.703-.046-.75-.75.046-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='883cf1c4ddb057f4160d41249338d538__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroXlBoldIcon);
export default ForwardRef;
