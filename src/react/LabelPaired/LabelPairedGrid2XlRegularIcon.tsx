import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2XlRegularIcon = (
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
      <path d='M3.75 9q-.703.047-.75.75v4.5q.046.703.75.75h4.5q.703-.047.75-.75v-4.5q-.047-.703-.75-.75zm-2.25.75q.047-.937.656-1.594A2.45 2.45 0 0 1 3.75 7.5h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 1.5 14.25zM3.75 21q-.703.046-.75.75v4.5q.046.704.75.75h4.5q.703-.046.75-.75v-4.5q-.047-.704-.75-.75zm-2.25.75q.047-.937.656-1.594A2.45 2.45 0 0 1 3.75 19.5h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 1.5 26.25zM20.25 9h-4.5q-.703.047-.75.75v4.5q.047.703.75.75h4.5q.704-.047.75-.75v-4.5q-.046-.703-.75-.75m-4.5-1.5h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594v-4.5q.047-.937.656-1.594A2.45 2.45 0 0 1 15.75 7.5m0 13.5q-.703.046-.75.75v4.5q.047.704.75.75h4.5q.704-.046.75-.75v-4.5q-.046-.704-.75-.75zm-2.25.75q.047-.937.656-1.594a2.45 2.45 0 0 1 1.594-.656h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594z' />
    </g>
    <defs>
      <clipPath id='12534481884d6dc6e59cc92042c9723b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2XlRegularIcon);
export default ForwardRef;
