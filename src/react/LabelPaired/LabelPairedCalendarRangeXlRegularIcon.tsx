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
      <path d='M5.25 6c.375 0 .75.375.75.75V9h9V6.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75V9H18c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V12c0-1.64 1.313-3 3-3h1.5V6.75c0-.375.328-.75.75-.75m14.25 9h-18v12c0 .844.656 1.5 1.5 1.5h15c.797 0 1.5-.656 1.5-1.5zM18 10.5H3c-.844 0-1.5.703-1.5 1.5v1.5h18V12c0-.797-.703-1.5-1.5-1.5m0 8.25c0 .422-.375.75-.75.75h-7.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h7.5c.375 0 .75.375.75.75m-6.75 6.75h-7.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h7.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75M4.5 18.75c0 .422.328.75.75.75.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75M5.25 21c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25C6.75 20.578 6.047 21 5.25 21m10.5 4.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75m2.25-.75c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0-.703-.422-1.125-1.125-1.125-1.969 0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C17.531 23.25 18 23.953 18 24.75' />
    </g>
    <defs>
      <clipPath id='283c285794d61580290c48a96204daa4__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeXlRegularIcon);
export default ForwardRef;
