import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 19q.406 0 .906-.406t1.031-1.375q.47-.938.75-2.219H5.314q.28 1.281.75 2.219.53.969 1.03 1.375T8 19m-2.875-5h5.75q.125-.938.125-2t-.125-2h-5.75A15 15 0 0 0 5 12q0 1.062.125 2m.188-5h5.375q-.282-1.281-.75-2.219-.532-.969-1.032-1.375Q8.406 5.001 8 5q-.406 0-.906.406T6.062 6.781Q5.595 7.72 5.313 9m6.562 1q.125.97.125 2t-.125 2h2.844A7.1 7.1 0 0 0 15 12a7.1 7.1 0 0 0-.281-2zm2.469-1a7.173 7.173 0 0 0-4.094-3.625q1 1.344 1.469 3.625zM4.28 9q.47-2.281 1.5-3.625a7.1 7.1 0 0 0-2.437 1.406A6.7 6.7 0 0 0 1.688 9zm-3 1A7.1 7.1 0 0 0 1 12q0 1.031.281 2h2.844A16 16 0 0 1 4 12q0-1.03.125-2zm8.969 8.625a7.2 7.2 0 0 0 2.406-1.406A6.7 6.7 0 0 0 14.312 15H11.72q-.469 2.281-1.469 3.625m-4.469 0q-1.03-1.344-1.5-3.625H1.688a6.7 6.7 0 0 0 1.656 2.219 7.1 7.1 0 0 0 2.437 1.406M8 20q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20' />
    </g>
    <defs>
      <clipPath id='9eba3f2e4e4aec149a3db827ef8cd11f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeMdRegularIcon);
export default ForwardRef;
