import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseXlFillIcon = (
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
      <path d='M2.25 9h1.5q.937.047 1.594.656.61.657.656 1.594v13.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 3.75 27h-1.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 0 24.75v-13.5q.047-.937.656-1.594A2.45 2.45 0 0 1 2.25 9m9 0h1.5q.937.047 1.594.656.61.657.656 1.594v13.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 12.75 27h-1.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 9 24.75v-13.5q.047-.937.656-1.594A2.45 2.45 0 0 1 11.25 9' />
    </g>
    <defs>
      <clipPath id='7561873bd8eae02437d1660695245123__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseXlFillIcon);
export default ForwardRef;
