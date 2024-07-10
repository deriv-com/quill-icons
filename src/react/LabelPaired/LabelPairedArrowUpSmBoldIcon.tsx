import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpSmBoldIcon = (
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
      <path d='m5.965 4.844 4.594 4.812c.246.274.246.684-.028.93-.273.246-.683.246-.93-.027L6.157 6.922v9.297c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V6.922L1.37 10.559c-.246.273-.656.273-.93.027a.653.653 0 0 1-.027-.93l4.594-4.812a.69.69 0 0 1 .492-.219c.164 0 .328.082.465.219' />
    </g>
    <defs>
      <clipPath id='02425c6dd0f38fa3b0925b5b3a1b9d32__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpSmBoldIcon);
export default ForwardRef;
