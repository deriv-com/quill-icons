import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 7.063V9.5h3.75q.352.023.375.375-.023.352-.375.375h-3.75a9.2 9.2 0 0 1-.89 3.75h6.14q.352.023.375.375-.023.352-.375.375H.625a.37.37 0 0 1-.328-.187.4.4 0 0 1 0-.376l.023-.046a8.7 8.7 0 0 0 1.055-3.891h-.75q-.352-.023-.375-.375.023-.352.375-.375h.75V7.063q.025-1.195.82-1.993.798-.796 1.993-.82h.164q.468 0 .89.14l1.875.633q.304.14.235.47-.14.327-.47.234l-1.874-.61A2 2 0 0 0 4.352 5h-.165q-.867.024-1.453.61-.585.585-.609 1.452' />
    </g>
    <defs>
      <clipPath id='044e3981b19706fcca9dbab4ccd4f8f9__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignCaptionRegularIcon);
export default ForwardRef;
