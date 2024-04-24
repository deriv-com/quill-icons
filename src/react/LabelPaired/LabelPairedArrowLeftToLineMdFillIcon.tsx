import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineMdFillIcon = (
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
      <path d='M0 7c0-.531.438-1 1-1 .531 0 1 .469 1 1v10c0 .563-.469 1-1 1-.562 0-1-.437-1-1zm4.281 5.719a.964.964 0 0 1 0-1.406l4-4a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406L7.408 11H13c.531 0 1 .469 1 1 0 .563-.469 1-1 1H7.406l2.282 2.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0z' />
    </g>
    <defs>
      <clipPath id='f1bc7534cb6a8342616e7e900fb13ce5__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineMdFillIcon);
export default ForwardRef;
