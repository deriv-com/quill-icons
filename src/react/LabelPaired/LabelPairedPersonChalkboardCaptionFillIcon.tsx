import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardCaptionFillIcon = (
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
      <path d='M4.5 5.75c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.125c.21-.329.562-.563.984-.563.398 0 .75.234.96.563.212.351.212.796 0 1.125-.21.351-.562.562-.96.562m-.187 9c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V9.523l-.68 1.125a.76.76 0 0 1-1.031.258.76.76 0 0 1-.258-1.031l1.36-2.273A2.29 2.29 0 0 1 4.147 6.5H7.5V4.625c0-.61.492-1.125 1.125-1.125h5.25c.61 0 1.125.516 1.125 1.125v5.25c0 .633-.516 1.125-1.125 1.125h-5.25A1.11 1.11 0 0 1 7.5 9.875V8.75H9v.75h4.5V5H9v1.5h.375c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H6.188v6.75c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-3h-.375z' />
    </g>
    <defs>
      <clipPath id='b2a8e89cf60fe466b1b42ed17de4fed2__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardCaptionFillIcon);
export default ForwardRef;
