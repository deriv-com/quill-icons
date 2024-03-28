import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m17.555 15.969-6.875 6.875a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l5.82-5.82H.876A.617.617 0 0 1 .25 15.5c0-.312.273-.625.625-.625h14.727l-5.82-5.781a.66.66 0 0 1 0-.899.66.66 0 0 1 .898 0l6.875 6.875a.66.66 0 0 1 0 .899' />
    </g>
    <defs>
      <clipPath id='e8b74660160bc60dcd620286190beb49__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightLgRegularIcon);
export default ForwardRef;
