import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseXlBoldIcon = (
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
      <path d='M2.25 11.25v13.5H4.5v-13.5zm-2.25 0q.047-.937.656-1.594A2.45 2.45 0 0 1 2.25 9H4.5q.937.047 1.594.656.61.657.656 1.594v13.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 4.5 27H2.25a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 0 24.75zm10.5 0v13.5h2.25v-13.5zm-2.25 0q.047-.937.656-1.594A2.45 2.45 0 0 1 10.5 9h2.25q.937.047 1.594.656.61.657.656 1.594v13.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 12.75 27H10.5a2.45 2.45 0 0 1-1.594-.656 2.45 2.45 0 0 1-.656-1.594z' />
    </g>
    <defs>
      <clipPath id='8ac670fb15bab42004e9df1645a3f68b__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseXlBoldIcon);
export default ForwardRef;
