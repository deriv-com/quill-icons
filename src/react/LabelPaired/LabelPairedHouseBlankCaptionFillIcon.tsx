import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankCaptionFillIcon = (
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
      <path d='M13.727 9.5c0 .422-.352.75-.75.75h-.75L12.25 14c0 .844-.656 1.523-1.5 1.523h-7.5c-.844 0-1.5-.68-1.5-1.5V10.25H1a.74.74 0 0 1-.75-.75c0-.21.07-.398.234-.562l6-5.25c.164-.165.352-.188.516-.188s.352.047.492.164l5.977 5.274c.187.164.281.351.258.562' />
    </g>
    <defs>
      <clipPath id='9b14a3ce7fee9476c4a859c8ddffca3c__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankCaptionFillIcon);
export default ForwardRef;
