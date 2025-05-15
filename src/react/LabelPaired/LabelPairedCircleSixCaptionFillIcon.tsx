import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSixCaptionFillIcon = (
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
      <path d='M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6-.375c.398 0 .75.234.96.563.212.351.212.796 0 1.124a1.122 1.122 0 0 1-1.945 0 1.08 1.08 0 0 1 0-1.124c.212-.329.563-.563.985-.563M3.75 10.25a2.25 2.25 0 0 0 4.5 0 2.24 2.24 0 0 0-1.64-2.156l.68-.586a.584.584 0 0 0 .07-.797.584.584 0 0 0-.798-.07L4.642 8.28a2.63 2.63 0 0 0-.891 1.969' />
    </g>
    <defs>
      <clipPath id='1f29c798c44240718cc7e3dc5f9f3eea__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSixCaptionFillIcon);
export default ForwardRef;
