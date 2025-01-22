import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateLeftSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.418 8.125h1.394A.9.9 0 0 1 5.688 9c0 .492-.41.875-.875.875h-3.5A.864.864 0 0 1 .439 9V5.5c0-.465.382-.875.875-.875a.9.9 0 0 1 .875.875v1.422l.464-.492a6.156 6.156 0 0 1 8.668 0 6.156 6.156 0 0 1 0 8.668 6.156 6.156 0 0 1-8.668 0c-.328-.356-.328-.903 0-1.23.356-.356.903-.356 1.23 0a4.423 4.423 0 0 0 6.208 0 4.423 4.423 0 0 0 0-6.208 4.423 4.423 0 0 0-6.207 0z' />
    </g>
    <defs>
      <clipPath id='e028260bc47f847e99b8f70af11fa198__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateLeftSmFillIcon);
export default ForwardRef;
