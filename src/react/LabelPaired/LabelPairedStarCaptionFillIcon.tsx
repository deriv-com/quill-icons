import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarCaptionFillIcon = (
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
      <path d='M7.656 3.922 9.18 7.039l3.351.492a.76.76 0 0 1 .61.516.7.7 0 0 1-.188.75l-2.437 2.414.586 3.422a.74.74 0 0 1-.305.726c-.235.188-.54.188-.797.07l-3-1.617-3.023 1.618a.72.72 0 0 1-.774-.07.74.74 0 0 1-.305-.727l.563-3.422-2.438-2.414c-.187-.188-.257-.492-.187-.75a.76.76 0 0 1 .61-.516L4.82 7.04l1.5-3.117A.73.73 0 0 1 7 3.5c.281 0 .54.164.656.422' />
    </g>
    <defs>
      <clipPath id='c801264ab3848953eeeac59faeee1fc7__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarCaptionFillIcon);
export default ForwardRef;
