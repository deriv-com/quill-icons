import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerXlBoldIcon = (
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
      <path d='M18 9.75H3q-.703.047-.75.75V21q.046.704.75.75h15q.704-.046.75-.75V10.5q-.046-.703-.75-.75M3 24q-1.266-.047-2.11-.89Q.048 22.265 0 21V10.5q.047-1.266.89-2.11.844-.843 2.11-.89h15q1.266.047 2.11.89.843.844.89 2.11V21q-.047 1.266-.89 2.11-.844.843-2.11.89h-4.078l.75 2.25h2.203q1.032.094 1.125 1.125-.093 1.032-1.125 1.125H4.125Q3.095 28.407 3 27.375q.095-1.03 1.125-1.125h2.203l.75-2.25zm5.672 2.25h3.656l-.75-2.25H9.422zM24.75 9.75v1.5h3v-1.5zm0 3.75V15h3v-1.5zm3 3.75h-3v9h3zm-5.25-7.5q.047-.937.656-1.594A2.45 2.45 0 0 1 24.75 7.5h3q.937.047 1.594.656.61.657.656 1.594v16.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-3a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594zm3.75 13.125q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='8fb1308df6ddb88772d67d1d1b559a27__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerXlBoldIcon);
export default ForwardRef;
