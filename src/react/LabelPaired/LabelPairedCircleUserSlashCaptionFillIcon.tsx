import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashCaptionFillIcon = (
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
      <path d='M.117 3.734a.518.518 0 0 1 .774-.093l2.25 1.734A5.6 5.6 0 0 1 4.5 4.32a5.97 5.97 0 0 1 6 0 5.98 5.98 0 0 1 3 5.18 6.1 6.1 0 0 1-.96 3.258l2.226 1.758c.257.187.304.539.093.773a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774M1.5 9.5c0-.773.14-1.523.422-2.227l4.734 3.75a2.99 2.99 0 0 0-2.531 1.5A4.55 4.55 0 0 0 7.477 14c.82 0 1.57-.21 2.226-.586l1.266.984a6 6 0 0 1-.492.305 5.97 5.97 0 0 1-6 0A5.99 5.99 0 0 1 1.5 9.5m4.43-1.922L8.484 9.57c.188-.14.352-.328.47-.539a1.67 1.67 0 0 0 0-1.687A1.72 1.72 0 0 0 7.476 6.5c-.586 0-1.149.328-1.454.844a.7.7 0 0 0-.093.234' />
    </g>
    <defs>
      <clipPath id='8a9d1f2a89e39d67e5d2464882c50e92__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashCaptionFillIcon);
export default ForwardRef;
