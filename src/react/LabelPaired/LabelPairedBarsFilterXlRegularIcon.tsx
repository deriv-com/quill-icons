import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterXlRegularIcon = (
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
      <path d='M0 9.75Q.047 9.047.75 9h19.5q.704.047.75.75-.046.703-.75.75H.75q-.703-.047-.75-.75m3 7.5q.046-.704.75-.75h13.5q.704.046.75.75-.046.704-.75.75H3.75q-.703-.046-.75-.75m10.5 7.5q-.047.704-.75.75h-4.5q-.703-.046-.75-.75.046-.704.75-.75h4.5q.703.046.75.75' />
    </g>
    <defs>
      <clipPath id='ef768dcfbf2a7ca280a172f747a19c46__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterXlRegularIcon);
export default ForwardRef;
