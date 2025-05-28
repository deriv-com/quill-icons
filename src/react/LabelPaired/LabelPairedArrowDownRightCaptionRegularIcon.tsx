import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.875 13.25h-5.25a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h4.336L.844 6.406a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0L7.5 11.984V7.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375v5.25c0 .21-.187.375-.375.375' />
    </g>
    <defs>
      <clipPath id='5c94df33a53ac72a707868f84f23deb3__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightCaptionRegularIcon);
export default ForwardRef;
