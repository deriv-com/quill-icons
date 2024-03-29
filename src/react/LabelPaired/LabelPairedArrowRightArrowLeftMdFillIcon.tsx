import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftMdFillIcon = (
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
      <path d='m13.688 8.719-3 3a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.406L10.562 9H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h9.563L9.28 5.719a.964.964 0 0 1 0-1.407.964.964 0 0 1 1.406 0l3 3a.964.964 0 0 1 0 1.407m-10.407 11-3-3a.964.964 0 0 1 0-1.407l3-3a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.407L3.407 15H13c.531 0 1 .469 1 1 0 .563-.469 1-1 1H3.406l1.281 1.313a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.406 0' />
    </g>
    <defs>
      <clipPath id='93061c439f8d92ce216b81cccec8760b__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftMdFillIcon);
export default ForwardRef;
