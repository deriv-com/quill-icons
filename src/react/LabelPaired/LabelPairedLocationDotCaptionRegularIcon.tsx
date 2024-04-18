import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotCaptionRegularIcon = (
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
      <path d='M8.25 8A3.76 3.76 0 0 0 4.5 4.25 3.746 3.746 0 0 0 .75 8c0 .375.117.867.375 1.5.258.61.61 1.266 1.031 1.922A33 33 0 0 0 4.5 14.703a44 44 0 0 0 2.344-3.281c.398-.656.75-1.313 1.008-1.922.257-.633.398-1.125.398-1.5M9 8c0 2.063-2.742 5.695-3.96 7.219a.707.707 0 0 1-1.102 0C2.742 13.695 0 10.063 0 8a4.501 4.501 0 0 1 9 0M3.375 8c0 .422.21.773.563.984.328.211.773.211 1.124 0 .329-.21.563-.562.563-.984 0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.125 0c-.352.21-.563.562-.563.96M4.5 9.875c-.68 0-1.29-.352-1.64-.937a1.91 1.91 0 0 1 0-1.876c.35-.562.96-.937 1.64-.937.656 0 1.266.375 1.617.938a1.91 1.91 0 0 1 0 1.875c-.351.585-.96.937-1.617.937' />
    </g>
    <defs>
      <clipPath id='9ca41a735d7ec5824f57c82a70f8e5f2__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotCaptionRegularIcon);
export default ForwardRef;
