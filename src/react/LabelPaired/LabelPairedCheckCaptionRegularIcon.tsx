import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCheckCaptionRegularIcon = (
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
      <path d='M10.633 5.867c.14.14.14.399 0 .54L4.258 12.78a.397.397 0 0 1-.54 0L.345 9.406a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0L4 11.984l6.094-6.117c.14-.14.398-.14.539 0' />
    </g>
    <defs>
      <clipPath id='53e2471daf281f4184951acd03e355b2__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckCaptionRegularIcon);
export default ForwardRef;
