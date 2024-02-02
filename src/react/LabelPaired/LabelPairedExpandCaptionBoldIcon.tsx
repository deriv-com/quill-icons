import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandCaptionBoldIcon = (
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
      <path d='M3.438 4.25q.514.047.562.563-.047.514-.562.562H1.374v2.063Q1.328 7.952.813 8 .297 7.953.25 7.438V4.813q.047-.516.563-.563zM.25 11.563q.047-.516.563-.563.514.047.562.563v2.062h2.063q.514.047.562.563-.047.514-.562.562H.813q-.516-.047-.563-.562zm9.938-7.313q.514.047.562.563v2.625q-.047.514-.562.562-.516-.047-.563-.562V5.374H7.563Q7.047 5.328 7 4.813q.047-.516.563-.563zm-.563 7.313q.047-.516.563-.563.514.047.562.563v2.624q-.047.516-.562.563H7.562q-.514-.047-.562-.562.047-.516.563-.563h2.062z' />
    </g>
    <defs>
      <clipPath id='7f11e99f6de873c2__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandCaptionBoldIcon);
export default ForwardRef;
