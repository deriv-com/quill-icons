import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressCaptionBoldIcon = (
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
      <path d='M4 4.813v2.625q-.047.514-.562.562H.813Q.297 7.953.25 7.438q.047-.516.563-.563h2.062V4.813q.047-.516.563-.563.514.047.562.563M.813 11h2.625q.514.047.562.563v2.624q-.047.516-.562.563-.516-.047-.563-.562v-2.063H.813q-.516-.047-.563-.562.047-.516.563-.563m7.312-6.187v2.062h2.063q.514.047.562.563-.047.514-.562.562H7.562Q7.049 7.953 7 7.438V4.813q.047-.516.563-.563.514.047.562.563M7.563 11h2.625q.514.047.562.563-.047.514-.562.562H8.124v2.063q-.047.514-.562.562-.516-.047-.563-.562v-2.626q.047-.514.563-.562' />
    </g>
    <defs>
      <clipPath id='a7b06e95791fa1b307ffcfbf90fa9211__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressCaptionBoldIcon);
export default ForwardRef;
