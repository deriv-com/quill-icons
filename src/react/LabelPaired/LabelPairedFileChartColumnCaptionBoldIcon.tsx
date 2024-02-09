import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnCaptionBoldIcon = (
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
      <path d='M1.125 14q.023.352.375.375h6q.352-.023.375-.375V7.25H6a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V4.625H1.5q-.352.023-.375.375zM1.5 3.5h3.89q.61 0 1.055.445l2.11 2.11Q9 6.5 9 7.133V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14V5q.024-.632.445-1.055Q.868 3.524 1.5 3.5m3.563 6.563v3q-.048.514-.563.562-.516-.047-.562-.562v-3q.045-.516.562-.563.516.047.563.563m2.062.75v2.25q-.047.514-.562.562-.516-.047-.563-.562v-2.25q.047-.516.563-.563.514.047.562.563M3 11.563v1.5q-.047.514-.562.562-.516-.047-.563-.562v-1.5q.047-.516.563-.563.514.047.562.563' />
    </g>
    <defs>
      <clipPath id='6fd0bc982631053657855e8a4f39483d__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnCaptionBoldIcon);
export default ForwardRef;
