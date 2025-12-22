import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowLeftCaptionRegularIcon = (
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
      <path d='M.75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0a5.228 5.228 0 0 0 0-9.07 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5M12 9.5a6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18M5.344 6.992c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L4.266 9.124h4.359c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-4.36l1.618 1.617c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0l-2.25-2.25a.397.397 0 0 1 0-.54z' />
    </g>
    <defs>
      <clipPath id='a74db5b6db4b58f8867cd94a81ecdc23__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowLeftCaptionRegularIcon);
export default ForwardRef;
