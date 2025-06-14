import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.281-3a1.61 1.61 0 0 1 1.594 1.594c0 .492-.21.914-.54 1.195.423.328.728.844.728 1.43A1.78 1.78 0 0 1 6.28 12.5H5.72a1.78 1.78 0 0 1-1.782-1.781c0-.586.282-1.102.704-1.43-.328-.281-.516-.703-.516-1.195 0-.867.703-1.594 1.594-1.594zM5.72 8.938h.562a.855.855 0 0 0 .844-.844.87.87 0 0 0-.844-.844H5.72a.855.855 0 0 0-.844.844.84.84 0 0 0 .844.844m.562.75H5.72c-.586 0-1.032.468-1.032 1.03A1.01 1.01 0 0 0 5.72 11.75h.562c.563 0 1.032-.445 1.032-1.031A1.04 1.04 0 0 0 6.28 9.688' />
    </g>
    <defs>
      <clipPath id='c4c33cec57ed259da02711905d64b831__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightCaptionRegularIcon);
export default ForwardRef;
