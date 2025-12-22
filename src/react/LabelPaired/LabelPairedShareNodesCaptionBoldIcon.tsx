import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesCaptionBoldIcon = (
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
      <path d='M10.75 6.5A2.25 2.25 0 0 1 8.5 8.75c-.68 0-1.29-.281-1.71-.773L4.68 9.03c.047.164.07.328.07.469q0 .246-.07.492l2.11 1.031a2.3 2.3 0 0 1 1.71-.773 2.25 2.25 0 1 1-2.25 2.25c0-.14 0-.305.047-.469l-2.11-1.054a2.21 2.21 0 0 1-1.687.773 2.25 2.25 0 0 1 0-4.5c.656 0 1.266.305 1.688.773l2.109-1.03c-.047-.165-.047-.329-.047-.493a2.25 2.25 0 0 1 4.5 0M2.5 10.625c.398 0 .75-.21.96-.562.212-.329.212-.774 0-1.126-.21-.328-.562-.562-.96-.562-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.124.21.352.562.563.984.563M9.625 6.5c0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.126 0 1.122 1.122 0 0 0 0 1.945c.329.21.774.21 1.125 0 .329-.212.563-.563.563-.985M8.5 13.625c.398 0 .75-.21.96-.562.212-.329.212-.774 0-1.126-.21-.328-.562-.562-.96-.562-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.124.21.352.562.563.984.563' />
    </g>
    <defs>
      <clipPath id='c01d67080921f4e2aa3c5f729853818e__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesCaptionBoldIcon);
export default ForwardRef;
