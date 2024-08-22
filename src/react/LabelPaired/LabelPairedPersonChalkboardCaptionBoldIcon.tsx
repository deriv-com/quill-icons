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
      <path d='M4.5 5.75c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.125c.21-.329.562-.563.984-.563.398 0 .75.234.96.563.212.351.212.796 0 1.125-.21.351-.562.562-.96.562m-.328 1.875c-.024 0-.047.023-.047.023v2.977h.75v-3zm-.047 7.313a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V8.75l-1.031 1.781a.526.526 0 0 1-.75.211.526.526 0 0 1-.211-.75l1.36-2.437C2.741 6.922 3.421 6.5 4.171 6.5H7.5V4.625c0-.61.492-1.125 1.125-1.125h5.25c.61 0 1.125.516 1.125 1.125v5.25c0 .633-.516 1.125-1.125 1.125h-5.25A1.11 1.11 0 0 1 7.5 9.875V8.75h1.125v1.125h5.25v-5.25h-5.25V6.5h.563a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H6v7.313a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V11.75h-.75z' />
    </g>
    <defs>
      <clipPath id='349a0f1d075b2d479e4bbb845c101973__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardCaptionBoldIcon);
export default ForwardRef;
