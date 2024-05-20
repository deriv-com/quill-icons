import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftCaptionRegularIcon = (
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
      <path d='M1.125 13.25a.37.37 0 0 1-.375-.375v-5.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375v4.36l6.094-6.118c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L2.016 12.5h4.359c.188 0 .375.188.375.375 0 .21-.187.375-.375.375z' />
    </g>
    <defs>
      <clipPath id='a0c3b2ee14b9d3e6b7b09af7136831b1__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftCaptionRegularIcon);
export default ForwardRef;
