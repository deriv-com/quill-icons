import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenCaptionRegularIcon = (
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
      <path d='M.625 3.5h12.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.625a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375M1 5h.75v5.25c0 .422.328.75.75.75h9c.398 0 .75-.328.75-.75V5H13v5.25c0 .844-.68 1.5-1.5 1.5H7.375v.984l2.133 2.133c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L7 13.413l-1.992 1.992a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l2.157-2.133v-.984H2.5a1.48 1.48 0 0 1-1.5-1.5z' />
    </g>
    <defs>
      <clipPath id='7d2c621fe51ae2fedf4b0e1b588abd48__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenCaptionRegularIcon);
export default ForwardRef;
