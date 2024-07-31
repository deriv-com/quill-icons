import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCheckSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.875 7.25c0-1.23.656-2.379 1.75-3.008a3.48 3.48 0 0 1 3.5 0c1.066.63 1.75 1.778 1.75 3.008a3.54 3.54 0 0 1-1.75 3.035 3.48 3.48 0 0 1-3.5 0 3.48 3.48 0 0 1-1.75-3.035M.25 16.957c0-2.707 2.16-4.895 4.867-4.895h2.488a4.89 4.89 0 0 1 4.895 4.895c0 .438-.383.793-.82.793H1.043a.794.794 0 0 1-.793-.793M17.34 8.59l-3.5 3.5c-.274.273-.684.273-.93 0l-1.75-1.75a.6.6 0 0 1 0-.902c.246-.274.656-.274.93 0l1.285 1.285L16.41 7.66a.644.644 0 0 1 .902 0c.274.274.274.684 0 .93z' />
    </g>
    <defs>
      <clipPath id='dcd196569d3b90613e9796d22a6ae994__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCheckSmFillIcon);
export default ForwardRef;
