import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.25 4.625H1.75A.385.385 0 0 0 1.375 5v4.5h11.25V5a.4.4 0 0 0-.375-.375m1.5 4.875v2.25c0 .844-.68 1.5-1.5 1.5H8.781l.188 1.125h1.219a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H3.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h1.195l.187-1.125H1.75a1.48 1.48 0 0 1-1.5-1.5V5c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5zM1.375 10.625v1.125c0 .21.164.375.375.375h10.5a.385.385 0 0 0 .375-.375v-1.125zm4.781 3.75H7.82l-.187-1.125h-1.29z' />
    </g>
    <defs>
      <clipPath id='302f0e1a45f7fffe1572faa676f793ab__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopCaptionBoldIcon);
export default ForwardRef;
