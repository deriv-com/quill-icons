import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftCaptionRegularIcon = (
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
      <path d='m.344 9.242 4.125-4.125c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L1.516 9.124h8.859c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-8.86l3.493 3.492c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L.345 9.78a.397.397 0 0 1 0-.539' />
    </g>
    <defs>
      <clipPath id='cdf3088eddb3d8f3243d4e4de2818947__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftCaptionRegularIcon);
export default ForwardRef;
