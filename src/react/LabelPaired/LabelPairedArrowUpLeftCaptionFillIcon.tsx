import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftCaptionFillIcon = (
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
      <path d='M1.5 5.75h5.25c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H3.305l4.71 4.734a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0L2.25 8.33v3.421c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.5c0-.398.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='dfb845e5191a8074493fb806c650c34f__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftCaptionFillIcon);
export default ForwardRef;
