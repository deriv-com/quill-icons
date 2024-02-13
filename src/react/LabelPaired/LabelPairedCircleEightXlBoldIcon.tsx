import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightXlBoldIcon = (
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
      <path d='M21.75 18q0-2.671-1.312-4.875-1.266-2.203-3.563-3.562Q14.578 8.25 12 8.25T7.125 9.563q-2.297 1.359-3.562 3.562Q2.25 15.329 2.25 18t1.313 4.875q1.264 2.203 3.562 3.563Q9.422 27.75 12 27.75t4.875-1.312q2.297-1.36 3.563-3.563Q21.75 20.671 21.75 18M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m12.375-6q1.454.047 2.39.984.939.938.985 2.391 0 1.125-.61 1.969 1.314 1.077 1.36 2.906-.046 1.594-1.078 2.672Q14.343 23.953 12.75 24h-1.5q-1.593-.046-2.672-1.078Q7.547 21.843 7.5 20.25q.047-1.828 1.406-2.906-.656-.844-.656-1.969.047-1.454.984-2.39.938-.939 2.391-.985zm-.75 4.5h.75q1.032-.093 1.125-1.125-.093-1.03-1.125-1.125h-.75q-1.03.095-1.125 1.125.095 1.032 1.125 1.125m.75 2.25H11.25q-.656 0-1.078.422-.422.421-.422 1.078t.422 1.078q.421.422 1.078.422h1.5q.657 0 1.078-.422.422-.421.422-1.078 0-.656-.422-1.078-.421-.422-1.078-.422z' />
    </g>
    <defs>
      <clipPath id='9ce1fbeb972da76a2475b3dc9853a025__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightXlBoldIcon);
export default ForwardRef;
