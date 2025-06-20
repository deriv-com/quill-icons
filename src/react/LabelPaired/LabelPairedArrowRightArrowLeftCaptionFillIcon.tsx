import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftCaptionFillIcon = (
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
      <path d='m10.516 7.04-2.25 2.25a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.056l.96-.984H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h7.172l-.961-.96a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0l2.25 2.25a.723.723 0 0 1 0 1.055M2.71 15.29.46 13.04a.723.723 0 0 1 0-1.056l2.25-2.25a.723.723 0 0 1 1.055 0 .723.723 0 0 1 0 1.055l-.961.961H10c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H2.805l.96.984a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0' />
    </g>
    <defs>
      <clipPath id='6f4ee93e3b0fe743eb69aaccd69e5f85__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftCaptionFillIcon);
export default ForwardRef;
