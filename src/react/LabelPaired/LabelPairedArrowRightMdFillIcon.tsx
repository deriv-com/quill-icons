import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m13.688 12.719-5 5a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407L10.563 13H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h9.563L7.28 7.719a.964.964 0 0 1 0-1.407.964.964 0 0 1 1.407 0l5 5a.964.964 0 0 1 0 1.407' />
    </g>
    <defs>
      <clipPath id='82b030fe73050d84cd3ddd9d3d1fb1c7__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightMdFillIcon);
export default ForwardRef;
