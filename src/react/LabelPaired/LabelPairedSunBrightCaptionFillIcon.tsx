import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightCaptionFillIcon = (
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
      <path d='M6 3.5a.57.57 0 0 1 .563.563v1.5A.555.555 0 0 1 6 6.125a.54.54 0 0 1-.562-.562v-1.5c0-.305.234-.563.562-.563m0 9.375a.57.57 0 0 1 .563.563v1.5A.555.555 0 0 1 6 15.5a.54.54 0 0 1-.562-.562v-1.5c0-.305.234-.563.562-.563m5.438-2.812h-1.5a.54.54 0 0 1-.563-.563c0-.305.234-.562.563-.562h1.5A.57.57 0 0 1 12 9.5a.555.555 0 0 1-.562.563M2.624 9.5a.555.555 0 0 1-.562.563h-1.5A.54.54 0 0 1 0 9.5c0-.305.234-.562.563-.562h1.5a.57.57 0 0 1 .562.562m7.617-3.445L9.164 7.133c-.21.21-.562.21-.797 0-.21-.235-.21-.586 0-.797l1.078-1.078c.211-.211.563-.211.797 0 .211.234.211.586 0 .797M3.61 11.89c.211.234.211.586 0 .797l-1.078 1.054a.513.513 0 0 1-.773 0 .513.513 0 0 1 0-.773l1.055-1.078c.21-.211.562-.211.796 0m5.836 1.851-1.078-1.055c-.21-.21-.21-.562 0-.796.235-.211.586-.211.797 0l1.078 1.078c.211.21.211.562 0 .773-.234.235-.586.235-.797 0M3.61 7.132c-.234.212-.586.212-.796 0L1.758 6.056c-.235-.211-.235-.563 0-.797.21-.211.562-.211.773 0L3.61 6.336c.211.21.211.562 0 .797M6 12.126a2.58 2.58 0 0 1-2.273-1.312 2.52 2.52 0 0 1 0-2.626A2.63 2.63 0 0 1 6 6.876c.938 0 1.781.516 2.25 1.313.492.82.492 1.828 0 2.624A2.57 2.57 0 0 1 6 12.126' />
    </g>
    <defs>
      <clipPath id='f7fbbaaaff9eb834a1dffe2d9c7a5e57__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightCaptionFillIcon);
export default ForwardRef;
