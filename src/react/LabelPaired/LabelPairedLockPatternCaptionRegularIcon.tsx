import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternCaptionRegularIcon = (
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
      <path d='M1.875 5c0-.61.492-1.125 1.125-1.125.469 0 .89.328 1.055.75h2.367c.164-.422.586-.75 1.078-.75.469 0 .89.328 1.055.75h2.367c.164-.422.586-.75 1.078-.75.61 0 1.125.516 1.125 1.125 0 .633-.516 1.125-1.125 1.125-.187 0-.352-.023-.492-.094l-3 3c.07.14.117.305.117.469 0 .633-.516 1.125-1.125 1.125-.187 0-.352-.023-.492-.094l-3 3c.023.024.023.07.047.094h2.367c.164-.422.586-.75 1.078-.75.469 0 .89.328 1.055.75h2.367c.164-.422.586-.75 1.078-.75.61 0 1.125.516 1.125 1.125 0 .633-.516 1.125-1.125 1.125-.492 0-.914-.305-1.078-.75H8.555c-.164.445-.586.75-1.055.75-.492 0-.914-.305-1.078-.75H4.055c-.164.445-.586.75-1.078.75-.61 0-1.125-.492-1.125-1.125 0-.61.515-1.125 1.125-1.125.187 0 .351.047.492.117l3-3a1.1 1.1 0 0 1-.117-.492c0-.61.515-1.125 1.125-1.125.187 0 .351.047.492.117l3-3c-.024-.023-.024-.07-.047-.117H8.555c-.164.445-.586.75-1.055.75-.492 0-.914-.305-1.078-.75H4.055c-.164.445-.586.75-1.055.75A1.11 1.11 0 0 1 1.875 5m0 4.5c0 .422.21.773.563.984.328.211.773.211 1.124 0 .329-.21.563-.562.563-.984 0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.126 0c-.351.21-.562.562-.562.96m9 0c0 .422.21.773.563.984.328.211.773.211 1.124 0 .329-.21.563-.562.563-.984 0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.126 0c-.351.21-.562.562-.562.96' />
    </g>
    <defs>
      <clipPath id='35aa60fd36c507f8e58bbf13e7ff1d80__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternCaptionRegularIcon);
export default ForwardRef;
