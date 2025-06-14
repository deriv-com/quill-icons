import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarMdBoldIcon = (
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
      <path d='M8 5.5c-2.344 0-4.469 1.25-5.656 3.25a6.52 6.52 0 0 0 0 6.5A6.51 6.51 0 0 0 8 18.5c2.313 0 4.438-1.219 5.625-3.25a6.52 6.52 0 0 0 0-6.5C12.438 6.75 10.313 5.5 8 5.5M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M8 7.781c.188 0 .344.125.438.282l.968 2 2.188.312a.51.51 0 0 1 .406.344.49.49 0 0 1-.125.5l-1.594 1.531.375 2.188a.52.52 0 0 1-.187.5c-.156.093-.375.124-.531.03L8 14.439l-1.969 1.03c-.156.095-.375.063-.531-.03a.52.52 0 0 1-.187-.5l.375-2.188-1.594-1.531a.49.49 0 0 1-.125-.5.51.51 0 0 1 .406-.344l2.188-.312.968-2A.54.54 0 0 1 8 7.78' />
    </g>
    <defs>
      <clipPath id='63444d41ff2c6dbaad049e46d8d2f5fe__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarMdBoldIcon);
export default ForwardRef;
