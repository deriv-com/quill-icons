import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopCaptionFillIcon = (
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
      <path d='M1.75 3.5h10.5c.82 0 1.5.68 1.5 1.5v6.75c0 .844-.68 1.5-1.5 1.5H8.125l.234.75H10c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H4a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h1.617l.258-.75H1.75a1.48 1.48 0 0 1-1.5-1.5V5c0-.82.656-1.5 1.5-1.5M12.25 5H1.75v5.25h10.5z' />
    </g>
    <defs>
      <clipPath id='016a14d708f579b2ff308f0f880ab174__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopCaptionFillIcon);
export default ForwardRef;
