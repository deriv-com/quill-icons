import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInfoCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={18}
    viewBox='0 0 5 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75A.74.74 0 0 1 1.75 5M.625 7.625c0-.187.164-.375.375-.375h1.5c.188 0 .375.188.375.375V14h1.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.625a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h1.5V8H1a.37.37 0 0 1-.375-.375' />
    </g>
    <defs>
      <clipPath id='f633559ae2896fa8003dc557643ed86a__a'>
        <path d='M0 0h5v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoCaptionRegularIcon);
export default ForwardRef;
