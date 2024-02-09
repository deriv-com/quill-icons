import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.875 5.563q.047-.516.563-.563.514.047.562.563v7.875q-.047.514-.562.562-.516-.047-.563-.562v-2.461l-4.148 2.906a.74.74 0 0 1-.399.117.63.63 0 0 1-.492-.21.63.63 0 0 1-.211-.493V5.703q0-.305.21-.492Q1.025 5 1.329 5q.235 0 .399.117l4.148 2.906zm0 4.03v-.187L1.75 6.523V12.5z' />
    </g>
    <defs>
      <clipPath id='343a599d7e6af1b3e229c3d80c29a985__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepCaptionBoldIcon);
export default ForwardRef;
