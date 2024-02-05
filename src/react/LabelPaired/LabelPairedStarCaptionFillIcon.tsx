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
      <path d='m7.68 3.922 1.5 3.094 3.375.515q.445.07.61.492a.78.78 0 0 1-.188.774l-2.438 2.414.563 3.422q.07.446-.305.726a.7.7 0 0 1-.774.047L7 13.812l-3 1.594q-.422.21-.797-.047a.77.77 0 0 1-.305-.726l.586-3.422-2.437-2.414a.72.72 0 0 1-.188-.774.69.69 0 0 1 .586-.492l3.375-.515 1.5-3.094A.8.8 0 0 1 7 3.5q.47.023.68.422' />
    </g>
    <defs>
      <clipPath id='711d75d3f2f7ec608d767136e865fcbc__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarCaptionFillIcon);
export default ForwardRef;
