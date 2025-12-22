import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarCaptionRegularIcon = (
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
      <path d='M2.875 3.5c.188 0 .375.188.375.375V5h4.5V3.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375V5h.75c.82 0 1.5.68 1.5 1.5V14c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14V6.5c0-.82.656-1.5 1.5-1.5h.75V3.875c0-.187.164-.375.375-.375M10 8H1v6c0 .422.328.75.75.75h7.5c.398 0 .75-.328.75-.75zm-.75-2.25h-7.5A.755.755 0 0 0 1 6.5v.75h9V6.5a.77.77 0 0 0-.75-.75' />
    </g>
    <defs>
      <clipPath id='e1cfb47a01e7a6347b93e555ad5f4760__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarCaptionRegularIcon);
export default ForwardRef;
