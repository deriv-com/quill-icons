import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m20.766 18.563-8.25 8.25c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l6.984-6.984H.75A.74.74 0 0 1 0 18c0-.375.328-.75.75-.75h17.672l-6.985-6.937c-.28-.282-.28-.797 0-1.079.282-.28.797-.28 1.079 0l8.25 8.25c.28.282.28.797 0 1.078' />
    </g>
    <defs>
      <clipPath id='0776fe3dd33877081b9bcd44a78c3b30__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightXlRegularIcon);
export default ForwardRef;
