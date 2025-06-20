import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 5.5c0-.465.383-.875.875-.875h6.563c.355 0 .683.246.792.574a.85.85 0 0 1-.218.957L4.555 9.438h.601a3.723 3.723 0 0 1 3.719 3.718 3.705 3.705 0 0 1-3.719 3.719h-2.16a3.09 3.09 0 0 1-2.734-1.668l-.055-.11a.867.867 0 0 1 .383-1.175.866.866 0 0 1 1.176.383l.054.11c.22.437.684.71 1.176.71h2.16a1.98 1.98 0 0 0 1.969-1.969c0-1.066-.902-1.969-1.969-1.969H2.313a.87.87 0 0 1-.82-.546.85.85 0 0 1 .218-.957l3.582-3.309H1A.864.864 0 0 1 .125 5.5' />
    </g>
    <defs>
      <clipPath id='b541350563b4ca52c7b1c5191928990e__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeSmFillIcon);
export default ForwardRef;
