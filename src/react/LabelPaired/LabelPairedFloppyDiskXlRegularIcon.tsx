import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 10.5v15q0 .657.422 1.078Q2.343 27 3 27h15q.657 0 1.078-.422.422-.421.422-1.078V14.016q0-.657-.422-1.078l-3.515-3.516A1.3 1.3 0 0 0 15 9.094V13.5q0 .657-.422 1.078Q14.157 15 13.5 15h-9q-.656 0-1.078-.422Q3 14.157 3 13.5V9q-.656 0-1.078.422Q1.5 9.843 1.5 10.5m3-1.5v4.5h9V9zM0 10.5q.047-1.266.89-2.11.844-.843 2.11-.89h11.484q1.266 0 2.157.89l3.468 3.47q.891.89.891 2.156V25.5q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11zM12.75 21q-.047-1.266-1.125-1.969-1.125-.562-2.25 0Q8.297 19.734 8.25 21q.047 1.266 1.125 1.969 1.125.563 2.25 0 1.078-.703 1.125-1.969m-2.25-3.75q2.109.046 3.234 1.875 1.032 1.875 0 3.75-1.125 1.829-3.234 1.875-2.109-.046-3.234-1.875-1.032-1.875 0-3.75Q8.39 17.296 10.5 17.25' />
    </g>
    <defs>
      <clipPath id='0bbdd0c7cdcd7c0f9541ab28684a8147__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskXlRegularIcon);
export default ForwardRef;
