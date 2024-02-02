import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2XlBoldIcon = (
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
      <path d='M3.75 9.75v4.5h4.5v-4.5zm-2.25 0q.047-.937.656-1.594A2.45 2.45 0 0 1 3.75 7.5h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 1.5 14.25zm2.25 12v4.5h4.5v-4.5zm-2.25 0q.047-.937.656-1.594A2.45 2.45 0 0 1 3.75 19.5h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 1.5 26.25zm18.75-12h-4.5v4.5h4.5zm-4.5-2.25h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594v-4.5q.047-.937.656-1.594A2.45 2.45 0 0 1 15.75 7.5m0 14.25v4.5h4.5v-4.5zm-2.25 0q.047-.937.656-1.594a2.45 2.45 0 0 1 1.594-.656h4.5q.937.047 1.594.656.61.657.656 1.594v4.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-4.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594z' />
    </g>
    <defs>
      <clipPath id='fcd9b4ba6f58bb3a__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2XlBoldIcon);
export default ForwardRef;
