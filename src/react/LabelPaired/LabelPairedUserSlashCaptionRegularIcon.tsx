import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 6.5q0 .774-.352 1.406a3 3 0 0 1-.914 1.055l-.632-.492q.515-.305.843-.82.305-.516.305-1.149-.024-.96-.656-1.594Q8.46 4.274 7.5 4.25q-.796.024-1.36.469-.585.445-.796 1.172l-.633-.493A3.1 3.1 0 0 1 5.789 4.04Q6.54 3.524 7.5 3.5q1.266.024 2.133.867.843.868.867 2.133m1.219 8.25.773.61a.72.72 0 0 1-.445.14H2.953a.63.63 0 0 1-.492-.21.63.63 0 0 1-.211-.493q.047-1.758 1.219-2.953 1.195-1.172 2.953-1.219h.094l.937.75H6.422q-1.43.047-2.39.984-.985.962-1.032 2.391zM.609 3.57l14.25 11.274q.258.234.07.515-.256.258-.538.07L.14 4.18q-.258-.256-.07-.538.256-.235.538-.07' />
    </g>
    <defs>
      <clipPath id='808783d74a9c5276__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashCaptionRegularIcon);
export default ForwardRef;
