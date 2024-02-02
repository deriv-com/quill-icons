import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateXlRegularIcon = (
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
      <path d='M3.234 15.89h.047q-.187.564-.797.61-.796-.094-.703-.844.845-3.562 3.657-5.812Q8.202 7.594 12 7.5q2.907.047 5.25 1.406A10.4 10.4 0 0 1 21 12.61V9.75q.046-.703.75-.75.704.047.75.75v4.5q-.046.703-.75.75h-4.5q-.704-.047-.75-.75.046-.703.75-.75h2.531a8.8 8.8 0 0 0-3.234-3.281Q14.53 9.047 12 9q-3.234.047-5.625 1.969-2.344 1.874-3.14 4.922m17.532 4.266v-.047q.14-.562.75-.609.796.094.703.844-.844 3.562-3.61 5.812Q15.797 28.406 12 28.5q-2.905-.047-5.25-1.406A10.5 10.5 0 0 1 3 23.437v2.813q-.046.704-.75.75-.655-.046-.75-.75v-4.5q.095-.704.75-.75h4.5q.704.046.75.75-.046.704-.75.75H4.219a8.8 8.8 0 0 0 3.234 3.281Q9.47 26.954 12 27q3.234-.046 5.625-1.969 2.345-1.875 3.14-4.875' />
    </g>
    <defs>
      <clipPath id='44214d434a4eaa08__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateXlRegularIcon);
export default ForwardRef;
