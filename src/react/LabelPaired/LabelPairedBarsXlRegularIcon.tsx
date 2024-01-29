import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsXlRegularIcon = (
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
      <path d='M0 9.75Q.047 9.047.75 9h19.5q.704.047.75.75-.046.703-.75.75H.75q-.703-.047-.75-.75m0 7.5q.047-.704.75-.75h19.5q.704.046.75.75-.046.704-.75.75H.75q-.703-.046-.75-.75m21 7.5q-.046.704-.75.75H.75q-.703-.046-.75-.75.047-.704.75-.75h19.5q.704.046.75.75' />
    </g>
    <defs>
      <clipPath id='40c2184bb4ced6690023814f6609a298__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsXlRegularIcon);
export default ForwardRef;
