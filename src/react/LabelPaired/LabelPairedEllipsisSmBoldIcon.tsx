import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.188 10.75c0 .492-.274.902-.657 1.148-.41.247-.93.247-1.312 0a1.31 1.31 0 0 1-.656-1.148c0-.465.246-.875.656-1.121.383-.246.902-.246 1.312 0 .383.246.656.656.656 1.121m-4.376 0c0 .492-.273.902-.656 1.148-.41.247-.93.247-1.312 0a1.31 1.31 0 0 1-.657-1.148c0-.465.247-.875.657-1.121.383-.246.902-.246 1.312 0 .383.246.657.656.657 1.121m-5.687 1.313a1.31 1.31 0 0 1-1.148-.657c-.247-.383-.247-.902 0-1.312.246-.383.656-.656 1.148-.656.465 0 .875.273 1.121.656.246.41.246.93 0 1.312-.246.41-.656.656-1.121.656' />
    </g>
    <defs>
      <clipPath id='1273ca41ec48faf985f38c4ee74542b1__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisSmBoldIcon);
export default ForwardRef;
