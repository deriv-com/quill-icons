import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftCaptionRegularIcon = (
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
      <path d='m10.633 6.781-2.25 2.25a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l1.618-1.617H.625A.37.37 0 0 1 .25 6.5c0-.187.164-.375.375-.375h8.836L7.844 4.531a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0l2.25 2.25c.14.14.14.399 0 .54m-8.04 8.25-2.25-2.25a.397.397 0 0 1 0-.539l2.25-2.25c.141-.14.4-.14.54 0s.14.399 0 .54l-1.617 1.593h8.859c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-8.86l1.618 1.617c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0' />
    </g>
    <defs>
      <clipPath id='ee9e1d24c7210f17395c9c497fe2f94b__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftCaptionRegularIcon);
export default ForwardRef;
