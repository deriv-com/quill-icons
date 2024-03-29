import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.414 3.922a.385.385 0 0 1 .164.515l-2.25 4.5a.37.37 0 0 1-.328.188H8.46l-2.882 5.813a.385.385 0 0 1-.516.164l-4.5-2.25a.385.385 0 0 1-.164-.516.385.385 0 0 1 .516-.164l4.148 2.086 2.836-5.672a.4.4 0 0 1 .352-.211h3.516l2.132-4.29a.385.385 0 0 1 .516-.163' />
    </g>
    <defs>
      <clipPath id='21ad1789c158ae27a47d353461345d18__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpCaptionRegularIcon);
export default ForwardRef;
