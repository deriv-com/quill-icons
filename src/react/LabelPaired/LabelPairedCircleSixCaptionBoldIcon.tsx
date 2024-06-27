import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSixCaptionBoldIcon = (
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
      <path d='M10.875 9.5c0-1.734-.937-3.328-2.437-4.219a4.89 4.89 0 0 0-4.876 0A4.87 4.87 0 0 0 1.126 9.5a4.88 4.88 0 0 0 2.438 4.242c1.5.867 3.351.867 4.874 0 1.5-.89 2.438-2.484 2.438-4.242M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6 1.875c.398 0 .75-.21.96-.562.212-.329.212-.774 0-1.126-.21-.328-.562-.562-.96-.562-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.124.21.352.562.563.984.563M3.75 10.25c0-.75.328-1.477.89-1.969l1.923-1.64a.584.584 0 0 1 .796.07.584.584 0 0 1-.07.797l-.68.586A2.24 2.24 0 0 1 8.25 10.25a2.25 2.25 0 0 1-4.5 0' />
    </g>
    <defs>
      <clipPath id='299f440e9b69b3d1f24be1f154bfa9aa__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSixCaptionBoldIcon);
export default ForwardRef;
