import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 10.5q-1.266-.047-1.969-1.125-.562-1.125 0-2.25Q7.734 6.047 9 6q1.266.046 1.969 1.125.562 1.125 0 2.25Q10.266 10.453 9 10.5m-.656 3.75H8.25v6h1.5v-6zM8.25 28.875Q8.157 29.907 7.125 30 6.095 29.907 6 28.875V16.5l-2.016 3.563q-.609.843-1.546.421-.845-.61-.422-1.547L4.78 14.11a4.2 4.2 0 0 1 1.5-1.546A3.93 3.93 0 0 1 8.344 12H15V8.25q.047-.937.656-1.594A2.45 2.45 0 0 1 17.25 6h10.5q.937.047 1.594.656.61.657.656 1.594v10.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 27.75 21h-10.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 15 18.75V16.5h2.25v2.25h10.5V8.25h-10.5V12h1.125q1.032.095 1.125 1.125-.093 1.032-1.125 1.125H12v14.625q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125V22.5h-1.5z' />
    </g>
    <defs>
      <clipPath id='2934c7c378b121939fc0bebcbc51b18f__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardXlBoldIcon);
export default ForwardRef;
