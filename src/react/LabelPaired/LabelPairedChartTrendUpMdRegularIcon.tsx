import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.219 4.563c.25.125.343.437.218.687l-3 6a.5.5 0 0 1-.437.25h-4.719l-3.844 7.75a.513.513 0 0 1-.687.219l-6-3a.513.513 0 0 1-.219-.688.513.513 0 0 1 .688-.219l5.531 2.782 3.781-7.563A.54.54 0 0 1 11 10.5h4.688l2.843-5.719a.513.513 0 0 1 .688-.218' />
    </g>
    <defs>
      <clipPath id='4819f200f0dbcc5843a3eac983d183f9__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpMdRegularIcon);
export default ForwardRef;
