import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightCaptionBoldIcon = (
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
      <path d='M6.563 4.063v1.5A.555.555 0 0 1 6 6.125a.54.54 0 0 1-.562-.562v-1.5c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563m3.68 1.992L9.163 7.133c-.21.21-.562.21-.797 0-.21-.235-.21-.586 0-.797l1.078-1.078c.211-.211.563-.211.797 0 .211.234.211.586 0 .797M2.53 5.258 3.61 6.336c.211.21.211.562 0 .797-.234.21-.586.21-.796 0L1.758 6.055c-.235-.211-.235-.563 0-.797.21-.211.562-.211.773 0M.562 8.938h1.5a.57.57 0 0 1 .563.562.555.555 0 0 1-.562.563h-1.5A.54.54 0 0 1 0 9.5c0-.305.234-.562.563-.562m9.376 0h1.5A.57.57 0 0 1 12 9.5a.555.555 0 0 1-.562.563h-1.5a.54.54 0 0 1-.563-.563c0-.305.234-.562.563-.562m-6.329 3.75-1.078 1.054a.513.513 0 0 1-.773 0 .513.513 0 0 1 0-.773l1.055-1.078c.21-.211.562-.211.796 0 .211.234.211.586 0 .797m5.555-.797 1.078 1.078c.211.21.211.562 0 .773-.234.235-.586.235-.797 0l-1.078-1.055c-.21-.21-.21-.562 0-.796.235-.211.586-.211.797 0m-2.601 1.547v1.5A.555.555 0 0 1 6 15.5a.54.54 0 0 1-.562-.562v-1.5c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563M7.5 9.5c0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29 0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313m-4.125 0c0-.937.492-1.781 1.313-2.25a2.52 2.52 0 0 1 2.625 0c.796.469 1.312 1.313 1.312 2.25 0 .96-.516 1.805-1.312 2.273a2.52 2.52 0 0 1-2.625 0A2.58 2.58 0 0 1 3.375 9.5' />
    </g>
    <defs>
      <clipPath id='a16f43e7bd17a3c38f0b114f1186d8b6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightCaptionBoldIcon);
export default ForwardRef;
