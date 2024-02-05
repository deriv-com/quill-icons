import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourCaptionRegularIcon = (
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
      <path d='M4.078 4.79.984 11H6.75V6.875q.023-.352.375-.375.352.023.375.375V11h1.125q.352.023.375.375-.023.352-.375.375H7.5v2.625q-.023.352-.375.375-.352-.023-.375-.375V11.75H.375a.38.38 0 0 1-.328-.164.4.4 0 0 1 0-.375l3.375-6.75q.164-.305.492-.164.305.188.164.492' />
    </g>
    <defs>
      <clipPath id='81af38c41b805c611b535cd92288f91a__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourCaptionRegularIcon);
export default ForwardRef;
