import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.11 15.016 5.5 11.379l-3.637 3.637c-.164.164-.437.164-.629 0-.164-.192-.164-.465 0-.63l3.637-3.636-3.637-3.61c-.164-.163-.164-.437 0-.628.192-.164.465-.164.63 0L5.5 10.148l3.61-3.636c.163-.164.437-.164.628 0 .164.191.164.465 0 .629L6.102 10.75l3.636 3.637c.164.164.164.437 0 .629-.191.164-.465.164-.629 0' />
    </g>
    <defs>
      <clipPath id='17e795d1a00ab23f472c312bc533d9d2__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkSmRegularIcon);
export default ForwardRef;
