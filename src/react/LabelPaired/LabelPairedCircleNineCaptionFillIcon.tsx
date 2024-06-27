import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineCaptionFillIcon = (
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
      <path d='M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6 .375c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.126c.21-.328.562-.562.984-.562.398 0 .75.234.96.563.212.351.212.796 0 1.124-.21.352-.562.563-.96.563m-.61 1.055-.702.586a.584.584 0 0 0-.07.797c.21.234.562.257.796.07l1.922-1.64A2.67 2.67 0 0 0 8.25 8.75a2.25 2.25 0 0 0-4.5 0c0 1.031.68 1.922 1.64 2.18' />
    </g>
    <defs>
      <clipPath id='e21ba4448bf957c3965d792aa598419b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineCaptionFillIcon);
export default ForwardRef;
