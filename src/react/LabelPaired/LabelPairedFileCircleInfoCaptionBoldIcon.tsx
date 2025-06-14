import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoCaptionBoldIcon = (
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
      <path d='M1.75 14.375h5.156q.423.668 1.055 1.125H1.75A1.48 1.48 0 0 1 .25 14V5c0-.82.656-1.5 1.5-1.5h3.867c.399 0 .774.164 1.055.445l2.133 2.133c.28.281.445.656.445 1.055v1.031a3.5 3.5 0 0 0-1.125.516V7.25H6.25a.74.74 0 0 1-.75-.75V4.625H1.75A.385.385 0 0 0 1.375 5v9c0 .21.164.375.375.375m8.625-5.625c1.195 0 2.297.656 2.906 1.688a3.34 3.34 0 0 1 0 3.374 3.35 3.35 0 0 1-2.906 1.688 3.36 3.36 0 0 1-2.93-1.687 3.34 3.34 0 0 1 0-3.376 3.4 3.4 0 0 1 2.93-1.687m0 2.25a.555.555 0 0 0 .563-.562.57.57 0 0 0-.563-.563.555.555 0 0 0-.562.563c0 .328.234.562.562.562m-.75 1.125c0 .21.164.375.375.375v1.125a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375v-1.5a.4.4 0 0 0-.375-.375H10a.385.385 0 0 0-.375.375' />
    </g>
    <defs>
      <clipPath id='33bcd7776a5b1d9f64ab52a5bacdbb6f__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoCaptionBoldIcon);
export default ForwardRef;
