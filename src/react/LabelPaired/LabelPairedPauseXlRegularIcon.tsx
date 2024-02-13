import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 10.5q-.703.047-.75.75v13.5q.046.704.75.75H4.5q.704-.046.75-.75v-13.5q-.046-.703-.75-.75zM0 11.25q.047-.937.656-1.594A2.45 2.45 0 0 1 2.25 9H4.5q.937.047 1.594.656.61.657.656 1.594v13.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 4.5 27H2.25a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 0 24.75zm10.5-.75q-.703.047-.75.75v13.5q.047.704.75.75h2.25q.703-.046.75-.75v-13.5q-.047-.703-.75-.75zm-2.25.75q.047-.937.656-1.594A2.45 2.45 0 0 1 10.5 9h2.25q.937.047 1.594.656.61.657.656 1.594v13.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 12.75 27H10.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594z' />
    </g>
    <defs>
      <clipPath id='a539b6eec5b7576c88915d6dcc06660f__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseXlRegularIcon);
export default ForwardRef;
