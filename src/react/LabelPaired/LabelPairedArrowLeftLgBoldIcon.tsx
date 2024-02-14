import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftLgBoldIcon = (
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
      <path d='M.523 16.164A.9.9 0 0 1 .25 15.5q0-.39.273-.664l6.875-6.563q.704-.546 1.329 0 .546.704-.04 1.329l-5.156 4.96h13.282q.858.079.937.938-.078.859-.937.938H3.53l5.196 4.96q.546.626 0 1.329-.625.546-1.29 0L.564 16.164z' />
    </g>
    <defs>
      <clipPath id='c6f83de38bded9c9946f7ce1c32cfaa2__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftLgBoldIcon);
export default ForwardRef;
