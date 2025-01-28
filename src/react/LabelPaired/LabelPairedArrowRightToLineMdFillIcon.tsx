import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineMdFillIcon = (
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
      <path d='M14 7v10c0 .563-.469 1-1 1-.562 0-1-.437-1-1V7c0-.531.438-1 1-1 .531 0 1 .469 1 1m-4.312 5.719-4 4a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407L6.563 13H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h5.563L4.28 8.719a.964.964 0 0 1 0-1.406.964.964 0 0 1 1.407 0l4 4a.964.964 0 0 1 0 1.406' />
    </g>
    <defs>
      <clipPath id='7fb460f489feff78b8cc6c466d39d3ab__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineMdFillIcon);
export default ForwardRef;
