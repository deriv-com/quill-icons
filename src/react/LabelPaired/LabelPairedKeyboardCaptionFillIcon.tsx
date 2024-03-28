import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardCaptionFillIcon = (
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
      <path d='M1.75 5h10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5v-6c0-.82.656-1.5 1.5-1.5m.375 1.5a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375zM1.75 9.125v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375h-.75a.385.385 0 0 0-.375.375M2.125 11a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75A.4.4 0 0 0 2.875 11zM4 6.875v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375h-.75A.385.385 0 0 0 4 6.875m.375 1.875A.385.385 0 0 0 4 9.125v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375zM4 11.375v.75c0 .21.164.375.375.375h5.25a.385.385 0 0 0 .375-.375v-.75A.4.4 0 0 0 9.625 11h-5.25a.385.385 0 0 0-.375.375M6.625 6.5a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375zM6.25 9.125v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375h-.75a.385.385 0 0 0-.375.375M8.875 6.5a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75A.385.385 0 0 0 10 7.625v-.75a.4.4 0 0 0-.375-.375zM8.5 9.125v.75c0 .21.164.375.375.375h.75A.385.385 0 0 0 10 9.875v-.75a.4.4 0 0 0-.375-.375h-.75a.385.385 0 0 0-.375.375M11.125 6.5a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375zm-.375 2.625v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375h-.75a.385.385 0 0 0-.375.375M11.125 11a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375z' />
    </g>
    <defs>
      <clipPath id='85dfb2587fa4e7453e47bd245ed60812__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardCaptionFillIcon);
export default ForwardRef;
