import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCalendarXlRegularIcon = (
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
      <path d='M22.5 18q-.047-2.859-1.406-5.25-1.407-2.39-3.844-3.844Q14.766 7.5 12 7.5T6.75 8.906Q4.313 10.36 2.906 12.75 1.546 15.141 1.5 18q.047 2.859 1.406 5.25 1.407 2.39 3.844 3.844Q9.234 28.5 12 28.5t5.25-1.406q2.437-1.453 3.844-3.844 1.36-2.391 1.406-5.25M0 18q.047-3.28 1.594-6Q3.187 9.282 6 7.594 8.859 6 12 6t6 1.594Q20.813 9.28 22.406 12q1.548 2.72 1.594 6-.046 3.282-1.594 6-1.593 2.719-4.406 4.406Q15.141 30 12 30t-6-1.594Q3.187 26.72 1.594 24 .047 21.282 0 18m9.75-7.5q.703.047.75.75V12h3v-.75q.047-.703.75-.75.703.047.75.75V12h.75q.937.047 1.594.656.61.657.656 1.594v7.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 15.75 24h-7.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 6 21.75v-7.5q.047-.937.656-1.594A2.45 2.45 0 0 1 8.25 12H9v-.75q.047-.703.75-.75M7.5 14.25V15h9v-.75q-.046-.703-.75-.75h-7.5q-.703.047-.75.75m9 2.25h-9v5.25q.046.704.75.75h7.5q.704-.046.75-.75z' />
    </g>
    <defs>
      <clipPath id='a1ab4dcf1309336c1dc50b90a2749888__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarXlRegularIcon);
export default ForwardRef;
