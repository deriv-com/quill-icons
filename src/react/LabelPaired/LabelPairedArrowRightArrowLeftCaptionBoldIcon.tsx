import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftCaptionBoldIcon = (
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
      <path d='m2.664 15.148-2.25-2.25c-.234-.21-.234-.562 0-.796l2.25-2.227a.513.513 0 0 1 .773 0 .513.513 0 0 1 0 .773l-1.289 1.29h8.04a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563l-8.04.023 1.29 1.289a.513.513 0 0 1 0 .773.513.513 0 0 1-.774 0m7.922-8.25-2.25 2.25c-.234.235-.586.235-.797 0-.234-.21-.234-.562 0-.796l1.29-1.29H.811A.54.54 0 0 1 .25 6.5c0-.305.234-.562.563-.562h8.015L7.54 4.648c-.234-.21-.234-.562 0-.796.211-.211.563-.211.797 0l2.25 2.273a.55.55 0 0 1 0 .773' />
    </g>
    <defs>
      <clipPath id='3d8d8ca9c7ff5990d2f2b33da7ba07f1__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftCaptionBoldIcon);
export default ForwardRef;
