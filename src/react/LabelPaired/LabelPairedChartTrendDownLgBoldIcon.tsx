import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendDownLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M24.14 25.11a.925.925 0 0 1-1.25-.43l-3.476-6.992H13.75c-.39 0-.703-.196-.86-.508L8.32 8.04l-6.68 3.32a.925.925 0 0 1-1.25-.43.925.925 0 0 1 .43-1.25l7.5-3.75a.925.925 0 0 1 1.25.43l4.727 9.453h5.664a.96.96 0 0 1 .86.546l3.75 7.5a.925.925 0 0 1-.43 1.25' />
    </g>
    <defs>
      <clipPath id='eec05ff954aa3a5e641e9434268be86c__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownLgBoldIcon);
export default ForwardRef;
