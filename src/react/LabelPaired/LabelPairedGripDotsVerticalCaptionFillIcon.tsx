import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={18}
    viewBox='0 0 6 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 6.875c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.125c.21-.329.562-.563.984-.563.398 0 .75.234.96.563.212.351.212.796 0 1.125-.21.351-.562.562-.96.562m0 3.75c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.126c.21-.328.562-.562.984-.562.398 0 .75.234.96.563.212.351.212.796 0 1.124-.21.352-.562.563-.96.563M2.25 13.25c0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.125 0 1.122 1.122 0 0 1 0-1.945 1.08 1.08 0 0 1 1.125 0c.328.211.562.563.562.961m2.625-6.375c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.125c.21-.329.562-.563.984-.563.398 0 .75.234.96.563.212.351.212.796 0 1.125-.21.351-.562.562-.96.562M6 9.5c0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.125 0 1.122 1.122 0 0 1 0-1.945c.328-.21.773-.21 1.125 0 .328.211.562.563.562.961m-1.125 4.875c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.126c.21-.328.562-.562.984-.562.398 0 .75.234.96.563.212.351.212.796 0 1.124-.21.352-.562.563-.96.563' />
    </g>
    <defs>
      <clipPath id='626c04537ecb0941c18270993a12ad2e__a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalCaptionFillIcon);
export default ForwardRef;
