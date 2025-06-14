import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 3.5h3.75v3c0 .422.328.75.75.75h3V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m4.5 0 3 3H6zm-.937 5.813A.57.57 0 0 0 4.5 8.75a.555.555 0 0 0-.562.563v4.124c0 .329.234.563.562.563a.555.555 0 0 0 .563-.562zm2.062 1.5a.57.57 0 0 0-.562-.563.555.555 0 0 0-.563.563v2.624c0 .329.234.563.563.563a.555.555 0 0 0 .562-.562zM3 12.313a.57.57 0 0 0-.562-.563.555.555 0 0 0-.563.563v1.124c0 .329.234.563.563.563A.555.555 0 0 0 3 13.438z' />
    </g>
    <defs>
      <clipPath id='30fcca75d5fd2350fd7b0301ffc7f362__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnCaptionFillIcon);
export default ForwardRef;
