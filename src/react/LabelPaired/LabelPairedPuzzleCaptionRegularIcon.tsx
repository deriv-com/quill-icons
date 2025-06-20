import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleCaptionRegularIcon = (
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
      <path d='M7.5 3.5h3c.82 0 1.5.68 1.5 1.5v2.625c0 .422-.352.75-.75.75h-.75c0 .633-.516 1.125-1.125 1.125A1.11 1.11 0 0 1 8.25 8.375H7.5a.74.74 0 0 1-.75-.75v-.562c0-.399.328-.75.75-.75h.375a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375H7.5a.74.74 0 0 1-.75-.75V4.25c0-.398.328-.75.75-.75m0 .75v.563h.375c.61 0 1.125.515 1.125 1.125 0 .632-.516 1.125-1.125 1.125H7.5v.562h1.125c.188 0 .375.188.375.375v.375c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375V8c0-.187.164-.375.375-.375h1.125V5a.77.77 0 0 0-.75-.75zM1.5 5h3.375c.398 0 .75.352.75.75v4.125h.75c.398 0 .75.352.75.75V11c0 .21.164.375.375.375A.385.385 0 0 0 7.875 11v-.375c0-.398.328-.75.75-.75H9.75c.398 0 .75.352.75.75V14c0 .844-.68 1.5-1.5 1.5H1.5A1.48 1.48 0 0 1 0 14V6.5C0 5.68.656 5 1.5 5m3.375.75H1.5a.755.755 0 0 0-.75.75v3.375h1.125V9.5c0-.61.492-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v.375h.75zm-3 4.875H.75V14c0 .422.328.75.75.75h3.375v-1.125H4.5A1.11 1.11 0 0 1 3.375 12.5c0-.61.492-1.125 1.125-1.125h.375v-.75h-.75a.74.74 0 0 1-.75-.75V9.5A.4.4 0 0 0 3 9.125a.385.385 0 0 0-.375.375v.375c0 .422-.352.75-.75.75m3.75 3v1.125H9c.398 0 .75-.328.75-.75v-3.375H8.625V11c0 .633-.516 1.125-1.125 1.125A1.11 1.11 0 0 1 6.375 11v-.375h-.75v.75c0 .422-.352.75-.75.75H4.5a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h.375c.398 0 .75.352.75.75' />
    </g>
    <defs>
      <clipPath id='5515a025cf5ba52160d91d477477fb36__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleCaptionRegularIcon);
export default ForwardRef;
