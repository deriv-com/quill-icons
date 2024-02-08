import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletXlRegularIcon = (
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
      <path d='M3 7.5q-.656 0-1.078.422Q1.5 8.343 1.5 9v18q0 .657.422 1.078.421.422 1.078.422h15q.657 0 1.078-.422.422-.421.422-1.078V9q0-.656-.422-1.078Q18.657 7.5 18 7.5zM0 9q.047-1.266.89-2.11Q1.735 6.048 3 6h15q1.266.047 2.11.89.843.844.89 2.11v18q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27zm9 15.75h3q.703.046.75.75-.047.704-.75.75H9q-.703-.046-.75-.75.047-.704.75-.75' />
    </g>
    <defs>
      <clipPath id='b19a90534029fd78adde9e28ffd35127__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletXlRegularIcon);
export default ForwardRef;
