import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightXlBoldIcon = (
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
      <path d='m20.672 18.797-8.25 7.875q-.844.656-1.594 0-.655-.844 0-1.594l6.235-5.953H1.124Q.095 19.032 0 18q.095-1.03 1.125-1.125h15.938l-6.188-5.953q-.703-.75-.047-1.594.75-.655 1.594 0l8.25 7.875Q21 17.532 21 18t-.328.797' />
    </g>
    <defs>
      <clipPath id='bc356265bab7206cf11b3d9987ff6623__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightXlBoldIcon);
export default ForwardRef;
