import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseCaptionFillIcon = (
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
      <path d='M4.313 4.625a.185.185 0 0 0-.188.188v.937h3.75v-.937a.2.2 0 0 0-.187-.188zM3 4.813C3 4.109 3.586 3.5 4.313 3.5h3.375C8.39 3.5 9 4.11 9 4.813v.937h1.5c.82 0 1.5.68 1.5 1.5V9.5H0V7.25c0-.82.656-1.5 1.5-1.5H3zm9 5.437v3c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-3h4.5V11c0 .422.328.75.75.75h1.5c.398 0 .75-.328.75-.75v-.75z' />
    </g>
    <defs>
      <clipPath id='cb64f3be5cdd596b7112690f12c233dc__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseCaptionFillIcon);
export default ForwardRef;
