import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeCaptionBoldIcon = (
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
      <path d='M1.5 6.125a.385.385 0 0 0-.375.375v.54l4.031 3.304a1.31 1.31 0 0 0 1.664 0l4.055-3.305V6.5a.4.4 0 0 0-.375-.375zm-.375 2.367V12.5c0 .21.164.375.375.375h9a.385.385 0 0 0 .375-.375V8.492l-3.328 2.719c-.914.75-2.203.75-3.094 0zM0 6.5C0 5.68.656 5 1.5 5h9c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 0 12.5z' />
    </g>
    <defs>
      <clipPath id='6716bed8c37e0237a8e0c43975008c47__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeCaptionBoldIcon);
export default ForwardRef;
