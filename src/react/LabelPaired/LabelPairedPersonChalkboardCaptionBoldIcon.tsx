import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardCaptionBoldIcon = (
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
      <path d='M4.5 5.75a1.17 1.17 0 0 1-.984-.562 1.2 1.2 0 0 1 0-1.125q.351-.54.984-.563.633.024.984.563.282.563 0 1.125-.351.538-.984.562m-.328 1.875h-.047v3h.75v-3zm-.047 7.313q-.047.514-.562.562-.516-.047-.563-.562V8.75l-1.008 1.781q-.304.422-.773.211-.423-.304-.211-.773L2.39 7.555q.28-.492.75-.774A1.97 1.97 0 0 1 4.17 6.5H7.5V4.625q.024-.468.328-.797.328-.304.797-.328h5.25q.469.024.797.328.304.329.328.797v5.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-5.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797V8.75h1.125v1.125h5.25v-5.25h-5.25V6.5h.563q.514.047.562.563-.047.514-.562.562H6v7.313q-.047.514-.562.562-.516-.047-.563-.562V11.75h-.75z' />
    </g>
    <defs>
      <clipPath id='25444758bf394b4fc78fa98d80374100__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardCaptionBoldIcon);
export default ForwardRef;
