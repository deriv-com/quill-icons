import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersCaptionRegularIcon = (
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
      <path d='M0 13.25c0-.187.164-.375.375-.375h1.523a1.91 1.91 0 0 1 1.852-1.5c.89 0 1.664.656 1.828 1.5h6.047c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H5.578a1.86 1.86 0 0 1-1.828 1.5 1.885 1.885 0 0 1-1.852-1.5H.375A.37.37 0 0 1 0 13.25m2.625 0c0 .422.21.773.563.984.328.211.773.211 1.124 0 .329-.21.563-.562.563-.984 0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.125 0c-.352.21-.563.562-.563.96m4.5-3.75c0 .422.21.773.563.984.328.211.773.211 1.125 0 .328-.21.562-.562.562-.984 0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.126 0c-.351.21-.562.562-.562.96M8.25 7.625c.89 0 1.664.656 1.828 1.5h1.547c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-1.547a1.86 1.86 0 0 1-1.828 1.5 1.885 1.885 0 0 1-1.852-1.5H.375A.37.37 0 0 1 0 9.5c0-.187.164-.375.375-.375h6.023a1.91 1.91 0 0 1 1.852-1.5m-3.75-.75c.398 0 .75-.21.96-.562.212-.329.212-.774 0-1.125-.21-.329-.562-.563-.96-.563-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.125.21.351.562.562.984.562m1.828-1.5h5.297c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H6.328a1.86 1.86 0 0 1-1.828 1.5 1.885 1.885 0 0 1-1.852-1.5H.375A.37.37 0 0 1 0 5.75c0-.187.164-.375.375-.375h2.273a1.91 1.91 0 0 1 1.852-1.5c.89 0 1.664.656 1.828 1.5' />
    </g>
    <defs>
      <clipPath id='2ed0a694d7f97eb38eee4b0d79a597a5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersCaptionRegularIcon);
export default ForwardRef;
