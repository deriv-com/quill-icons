import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendDownMdRegularIcon = (
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
      <path d='M19.219 19.469a.513.513 0 0 1-.688-.219l-2.843-5.75H11a.51.51 0 0 1-.469-.25L6.75 5.688l-5.531 2.78c-.25.126-.563 0-.688-.218a.513.513 0 0 1 .219-.687l6-3a.513.513 0 0 1 .688.218L11.28 12.5H16c.188 0 .344.125.438.281l3 6a.513.513 0 0 1-.22.688' />
    </g>
    <defs>
      <clipPath id='61d0c9b9be614665787a52f5c451294b__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownMdRegularIcon);
export default ForwardRef;
