import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={7}
    height={22}
    viewBox='0 0 7 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.313 7.688A1.31 1.31 0 0 1 .163 7.03c-.246-.383-.246-.902 0-1.312.246-.383.656-.657 1.149-.657.464 0 .875.274 1.12.657.247.41.247.93 0 1.312-.245.41-.656.657-1.12.657m0 4.375a1.31 1.31 0 0 1-1.149-.657c-.246-.383-.246-.902 0-1.312.246-.383.656-.656 1.149-.656.464 0 .875.273 1.12.656.247.41.247.93 0 1.312-.245.41-.656.656-1.12.656m1.312 3.062c0 .492-.273.902-.656 1.148-.41.247-.93.247-1.313 0A1.31 1.31 0 0 1 0 15.125c0-.465.246-.875.656-1.121.383-.246.903-.246 1.313 0 .383.246.656.656.656 1.121m3.063-7.437a1.31 1.31 0 0 1-1.149-.657c-.246-.383-.246-.902 0-1.312.246-.383.656-.657 1.149-.657.464 0 .875.274 1.12.657.247.41.247.93 0 1.312-.245.41-.656.657-1.12.657M7 10.75c0 .492-.273.902-.656 1.148-.41.247-.93.247-1.313 0a1.31 1.31 0 0 1-.656-1.148c0-.465.246-.875.656-1.121.383-.246.903-.246 1.313 0 .383.246.656.656.656 1.121m-1.312 5.688a1.31 1.31 0 0 1-1.149-.657c-.246-.383-.246-.902 0-1.312.246-.383.656-.656 1.149-.656.464 0 .875.273 1.12.656.247.41.247.93 0 1.312-.245.41-.656.656-1.12.656' />
    </g>
    <defs>
      <clipPath id='258b405feb49245f5800cba25313ab79__a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalSmFillIcon);
export default ForwardRef;
