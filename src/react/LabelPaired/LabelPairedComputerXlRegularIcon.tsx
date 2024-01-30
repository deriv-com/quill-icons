import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerXlRegularIcon = (
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
      <path d='M18 9H3q-.656 0-1.078.422Q1.5 9.843 1.5 10.5V21q0 .657.422 1.078.421.422 1.078.422h15q.657 0 1.078-.422.422-.421.422-1.078V10.5q0-.656-.422-1.078Q18.657 9 18 9M3 24q-1.266-.047-2.11-.89Q.048 22.265 0 21V10.5q.047-1.266.89-2.11.844-.843 2.11-.89h15q1.266.047 2.11.89.843.844.89 2.11V21q-.047 1.266-.89 2.11-.844.843-2.11.89h-4.594l1.031 3h2.813q.704.046.75.75-.046.704-.75.75H3.75q-.703-.046-.75-.75.046-.704.75-.75h2.86l.984-3zm5.156 3h4.688l-1.031-3H9.187zM24.75 9q-.704.047-.75.75V12h4.5V9.75q-.046-.703-.75-.75zM24 13.5V15h4.5v-1.5zm0 12.75q.046.704.75.75h3q.704-.046.75-.75V16.5H24zm-1.5-16.5q.047-.937.656-1.594A2.45 2.45 0 0 1 24.75 7.5h3q.937.047 1.594.656.61.657.656 1.594v16.5a2.45 2.45 0 0 1-.656 1.594 2.45 2.45 0 0 1-1.594.656h-3a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594zm3.75 13.125q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125' />
    </g>
    <defs>
      <clipPath id='499c776ab44a43c44b9fed22b6bd0547__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerXlRegularIcon);
export default ForwardRef;
