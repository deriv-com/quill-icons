import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.96 8.984 4.5-4.5a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.055L2.555 9.5l3.96 3.984a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0l-4.5-4.5a.723.723 0 0 1 0-1.055m9-4.5a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.055L7.055 9.5l3.96 3.984a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.054 0l-4.5-4.5a.723.723 0 0 1 0-1.055z' />
    </g>
    <defs>
      <clipPath id='12a5c2ff926667b49bb9e5323ceb81af__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftCaptionFillIcon);
export default ForwardRef;
