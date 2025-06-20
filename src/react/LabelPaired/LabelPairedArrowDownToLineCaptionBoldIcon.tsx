import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineCaptionBoldIcon = (
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
      <path d='M8.438 14.75H.561A.54.54 0 0 1 0 14.188c0-.305.234-.563.563-.563h7.875a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562m-4.36-3.164-3-3.188a.58.58 0 0 1 .024-.796c.234-.211.585-.211.796.023l2.04 2.156V4.812c0-.304.234-.562.562-.562a.57.57 0 0 1 .563.563V9.78l2.015-2.156c.211-.234.563-.234.797-.023.234.21.234.562.023.796l-3 3.188a.55.55 0 0 1-.398.164.56.56 0 0 1-.422-.164' />
    </g>
    <defs>
      <clipPath id='fd3f3bbeb9dd91d6a32c27670e942ab1__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineCaptionBoldIcon);
export default ForwardRef;
