import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineCaptionBoldIcon = (
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
      <path d='M10.75 5.563v7.875a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V5.562c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563M7.563 9.922l-3.188 3a.58.58 0 0 1-.797-.024c-.21-.234-.21-.585.024-.796l2.156-2.04H.813A.54.54 0 0 1 .25 9.5c0-.305.234-.562.563-.562h4.945L3.602 6.922c-.235-.211-.235-.563-.024-.797s.563-.234.797-.023l3.188 3a.58.58 0 0 1 .187.398c0 .164-.07.305-.187.422' />
    </g>
    <defs>
      <clipPath id='6d5f3ab4f823f444c2df39b95f3cca12__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineCaptionBoldIcon);
export default ForwardRef;
