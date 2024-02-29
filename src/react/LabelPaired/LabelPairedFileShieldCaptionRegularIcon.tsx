import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.75 14.75h.094q.28.304.61.586a1.46 1.46 0 0 1-.704.164h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 14V5q.024-.632.445-1.055.422-.421 1.055-.445h3.656q.469 0 .797.328l2.719 2.719q.328.328.328.797v1.008l-.75.304V8H5.875a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797V4.25h-3a.73.73 0 0 0-.54.21A.73.73 0 0 0 1 5v9q0 .328.21.54.212.21.54.21zm.75-7.5a.6.6 0 0 0-.117-.164L5.664 4.367a.35.35 0 0 0-.164-.094v2.602q.023.352.375.375zm-.75 3.305q0 .985.492 2.11T10 14.538V9.664zm5.25 0-2.25-.89v4.874q1.266-.75 1.758-1.875t.492-2.11m-2.414-1.758 2.812 1.125q.329.14.352.515.024.774-.258 1.735-.258.96-.937 1.851-.704.89-1.97 1.43a.5.5 0 0 1-.42 0q-1.266-.54-1.97-1.43-.68-.89-.937-1.851-.282-.96-.258-1.735.024-.374.352-.515l2.812-1.125a.5.5 0 0 1 .422 0' />
    </g>
    <defs>
      <clipPath id='d3ef9ad17a24a510a3adbf1dd2ca7df9__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldCaptionRegularIcon);
export default ForwardRef;
