import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={18}
    viewBox='0 0 6 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 5v8.25h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H.75A.74.74 0 0 1 0 14c0-.398.328-.75.75-.75h1.5V6.406l-1.102.727c-.328.234-.796.14-1.03-.211a.73.73 0 0 1 .21-1.031l2.25-1.5c.235-.164.516-.164.774-.047.234.14.398.398.398.656' />
    </g>
    <defs>
      <clipPath id='188096c3b2e513fe47849c53cc1d8db1__a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneCaptionFillIcon);
export default ForwardRef;
