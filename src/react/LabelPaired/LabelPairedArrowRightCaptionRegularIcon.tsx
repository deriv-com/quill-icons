import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightCaptionRegularIcon = (
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
      <path d='m10.633 9.781-4.125 4.125a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l3.493-3.492H.625A.37.37 0 0 1 .25 9.5c0-.187.164-.375.375-.375h8.836L5.969 5.656a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0l4.125 4.125c.14.14.14.399 0 .54' />
    </g>
    <defs>
      <clipPath id='55a8bf6a5b189916186ea220f8b53277__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightCaptionRegularIcon);
export default ForwardRef;
