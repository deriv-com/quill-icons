import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderCaptionFillIcon = (
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
      <path d='M2.5 4.25h.75v1.5H2.5a.755.755 0 0 0-.75.75v.75H.25V6.5A2.25 2.25 0 0 1 2.5 4.25M.25 8h1.5v3H.25zm9 0h1.5v3h-1.5zm1.5-.75h-1.5V6.5a.77.77 0 0 0-.75-.75h-.75v-1.5h.75a2.25 2.25 0 0 1 2.25 2.25zm0 4.5v.75a2.25 2.25 0 0 1-2.25 2.25h-.75v-1.5h.75c.398 0 .75-.328.75-.75v-.75zm-9 0v.75c0 .422.328.75.75.75h.75v1.5H2.5A2.25 2.25 0 0 1 .25 12.5v-.75zm2.25 3v-1.5h3v1.5zm0-9v-1.5h3v1.5z' />
    </g>
    <defs>
      <clipPath id='81051c3b8b4f65c2f7710b09ec453ee8__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderCaptionFillIcon);
export default ForwardRef;
