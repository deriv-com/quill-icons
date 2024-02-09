import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.063 5.188v3.75h3.75q.514.045.562.562-.047.515-.562.563h-3.75v3.75q-.048.514-.563.562-.516-.047-.562-.562v-3.75h-3.75Q.672 10.015.625 9.5q.047-.516.563-.562h3.75v-3.75q.045-.516.562-.563.516.047.563.563' />
    </g>
    <defs>
      <clipPath id='9a4f82554c42bbceaaa40790d03337b6__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusCaptionBoldIcon);
export default ForwardRef;
