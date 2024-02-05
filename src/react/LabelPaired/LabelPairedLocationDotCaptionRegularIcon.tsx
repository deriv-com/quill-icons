import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.25 8q-.046-1.593-1.102-2.648Q6.094 4.297 4.5 4.25q-1.593.046-2.648 1.102Q.797 6.406.75 8q0 .562.398 1.477.399.937 1.008 1.945.609.984 1.242 1.828.633.867 1.102 1.453.47-.585 1.102-1.453.632-.844 1.242-1.828.632-1.008 1.031-1.945Q8.25 8.562 8.25 8M9 8q-.047 1.055-.75 2.438a24 24 0 0 1-1.64 2.671q-.915 1.312-1.548 2.086a.71.71 0 0 1-.562.282.71.71 0 0 1-.562-.282A35 35 0 0 1 2.39 13.11Q1.476 11.82.75 10.438.047 9.055 0 8q.047-1.922 1.313-3.187Q2.577 3.547 4.5 3.5q1.922.047 3.188 1.313Q8.952 6.078 9 8M3.375 8q.024.633.563.984.562.282 1.124 0 .54-.351.563-.984a1.17 1.17 0 0 0-.562-.984 1.2 1.2 0 0 0-1.125 0q-.54.351-.563.984M4.5 9.875q-1.054-.024-1.617-.937-.516-.938 0-1.876.563-.913 1.617-.937 1.055.024 1.617.938.516.938 0 1.875-.562.913-1.617.937' />
    </g>
    <defs>
      <clipPath id='1cd6d773e5d5bea011d5b645072bd289__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotCaptionRegularIcon);
export default ForwardRef;
