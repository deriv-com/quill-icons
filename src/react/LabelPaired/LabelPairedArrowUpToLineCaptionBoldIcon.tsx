import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineCaptionBoldIcon = (
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
      <path d='M.563 4.25h7.875A.57.57 0 0 1 9 4.813a.555.555 0 0 1-.562.562H.561A.54.54 0 0 1 0 4.813c0-.305.234-.563.563-.563m4.335 3.188 3 3.187c.211.234.211.586-.023.797-.234.21-.586.21-.797-.024L5.062 9.242v4.945a.555.555 0 0 1-.562.563.54.54 0 0 1-.562-.562V9.242l-2.04 2.156c-.21.235-.562.235-.796.024-.235-.211-.235-.563-.024-.797l3-3.187A.59.59 0 0 1 4.5 7.25c.14 0 .305.07.398.188' />
    </g>
    <defs>
      <clipPath id='5d1759a4b4a1f88a15f139ce80380d6a__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineCaptionBoldIcon);
export default ForwardRef;
