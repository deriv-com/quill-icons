import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={4}
    height={22}
    viewBox='0 0 4 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 13.813c.465 0 .875.273 1.121.656.246.41.246.93 0 1.312-.246.41-.656.656-1.121.656a1.31 1.31 0 0 1-1.148-.656c-.247-.383-.247-.902 0-1.312.246-.383.656-.656 1.148-.656m0-4.376c.465 0 .875.274 1.121.657.246.41.246.93 0 1.312-.246.41-.656.656-1.121.656a1.31 1.31 0 0 1-1.148-.656c-.247-.383-.247-.902 0-1.312.246-.383.656-.656 1.148-.656m1.313-3.062c0 .492-.274.902-.657 1.148-.41.247-.93.247-1.312 0a1.31 1.31 0 0 1-.657-1.148c0-.465.247-.875.657-1.121.383-.246.902-.246 1.312 0 .383.246.656.656.656 1.121' />
    </g>
    <defs>
      <clipPath id='7914720e0bd0ee6c38b1b05c44ce65f7__a'>
        <path d='M0 0h4v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalSmBoldIcon);
export default ForwardRef;
