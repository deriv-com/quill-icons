import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCaptionRegularIcon = (
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
      <path d='M8.25 14V8H5.625a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797V4.25h-3a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v9q0 .328.21.54.212.21.54.21h6a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54m0-6.75a.6.6 0 0 0-.117-.164L5.414 4.367a.35.35 0 0 0-.164-.094v2.602q.023.352.375.375zM0 5q.024-.632.445-1.055Q.868 3.524 1.5 3.5h3.656q.469 0 .797.328l2.719 2.719Q9 6.875 9 7.344V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14z' />
    </g>
    <defs>
      <clipPath id='51e938d1c972b7f8eca40453083303ab__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCaptionRegularIcon);
export default ForwardRef;
