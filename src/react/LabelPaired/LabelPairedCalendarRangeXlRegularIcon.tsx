import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeXlRegularIcon = (
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
      <path d='M6.75 6q.704.046.75.75V9h9V6.75q.046-.703.75-.75.704.046.75.75V9h1.5q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89h-15q-1.266-.047-2.11-.89-.843-.844-.89-2.11V12q.047-1.266.89-2.11.844-.843 2.11-.89H6V6.75q.046-.703.75-.75M21 15H3v12q0 .657.422 1.078.421.422 1.078.422h15q.657 0 1.078-.422Q21 27.657 21 27zm-1.5-4.5h-15q-.656 0-1.078.422Q3 11.343 3 12v1.5h18V12q0-.656-.422-1.078-.421-.422-1.078-.422m0 8.25q-.046.704-.75.75h-7.5q-.703-.046-.75-.75.047-.704.75-.75h7.5q.704.046.75.75m-6.75 6.75h-7.5q-.703-.046-.75-.75.046-.704.75-.75h7.5q.703.046.75.75-.047.704-.75.75M6 18.75q.046.704.75.75.704-.046.75-.75-.046-.704-.75-.75-.703.046-.75.75M6.75 21q-1.266-.046-1.969-1.125-.562-1.125 0-2.25.703-1.079 1.969-1.125 1.266.046 1.969 1.125.563 1.125 0 2.25Q8.016 20.954 6.75 21m10.5 4.5q.704-.046.75-.75-.046-.704-.75-.75-.704.046-.75.75.046.704.75.75m2.25-.75q-.046 1.266-1.125 1.969-1.125.563-2.25 0-1.078-.703-1.125-1.969.047-1.266 1.125-1.969 1.125-.562 2.25 0 1.079.703 1.125 1.969' />
    </g>
    <defs>
      <clipPath id='a0d2fd1a962e08508195b5c061122188__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeXlRegularIcon);
export default ForwardRef;
