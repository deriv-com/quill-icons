import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketCaptionBoldIcon = (
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
      <path d='M4.5 12.078 7.078 9.5 4.5 6.922v1.266q-.047.514-.562.562H1.124v1.5h2.813q.514.047.562.563zM8.25 9.5a1 1 0 0 1-.305.727l-2.718 2.695a1.01 1.01 0 0 1-.774.328.98.98 0 0 1-.75-.328 1.1 1.1 0 0 1-.328-.75v-.797h-2.25a1.22 1.22 0 0 1-.797-.328A1.22 1.22 0 0 1 0 10.25v-1.5q.024-.468.328-.797.329-.304.797-.328h2.25v-.797q.024-.445.328-.75a.98.98 0 0 1 .75-.328q.445 0 .774.328l2.718 2.695a1 1 0 0 1 .305.727m-.187 4.125h1.874a.85.85 0 0 0 .657-.281.85.85 0 0 0 .281-.656V6.312a.85.85 0 0 0-.281-.656.85.85 0 0 0-.656-.281H8.062q-.514-.047-.562-.562.047-.516.563-.563h1.874q.868.024 1.454.61.585.585.609 1.452v6.376q-.024.867-.61 1.453-.585.585-1.453.609H8.063q-.516-.047-.563-.562.047-.516.563-.563' />
    </g>
    <defs>
      <clipPath id='03244767904c2869eb847a211a35602f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketCaptionBoldIcon);
export default ForwardRef;
