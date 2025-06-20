import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseCaptionBoldIcon = (
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
      <path d='M4.125 4.813v.937h3.75v-.937a.2.2 0 0 0-.187-.188H4.313a.185.185 0 0 0-.188.188M3 5.75v-.937C3 4.109 3.586 3.5 4.313 3.5h3.375C8.39 3.5 9 4.11 9 4.813v.937h1.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-6c0-.82.656-1.5 1.5-1.5zm-1.875 4.875v2.625c0 .21.164.375.375.375h9a.385.385 0 0 0 .375-.375v-2.625H7.5V11c0 .422-.352.75-.75.75h-1.5A.74.74 0 0 1 4.5 11v-.375zM4.5 9.5h6.375V7.25a.4.4 0 0 0-.375-.375h-9a.385.385 0 0 0-.375.375V9.5z' />
    </g>
    <defs>
      <clipPath id='6ee5d685d59acdfd7da6e706f2cab543__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseCaptionBoldIcon);
export default ForwardRef;
