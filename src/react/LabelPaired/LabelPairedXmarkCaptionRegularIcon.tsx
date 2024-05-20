import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkCaptionRegularIcon = (
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
      <path d='M7.594 13.156 4.5 10.04l-3.117 3.117c-.14.14-.375.14-.54 0-.14-.164-.14-.398 0-.539L3.962 9.5.844 6.406c-.14-.14-.14-.375 0-.539.164-.14.398-.14.539 0L4.5 8.984l3.094-3.117c.14-.14.375-.14.539 0 .14.164.14.399 0 .54L5.016 9.5l3.117 3.117c.14.14.14.375 0 .54-.164.14-.399.14-.54 0' />
    </g>
    <defs>
      <clipPath id='5ead7dcae766acb05c9ba15e0a8c6106__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkCaptionRegularIcon);
export default ForwardRef;
