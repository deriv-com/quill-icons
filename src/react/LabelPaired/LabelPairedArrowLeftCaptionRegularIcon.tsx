import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.367 9.242 4.125-4.125q.258-.234.516 0 .234.258 0 .516L1.539 9.125h8.836q.352.023.375.375-.023.352-.375.375H1.539l3.469 3.492q.234.258 0 .516-.258.234-.516 0L.367 9.758q-.234-.258 0-.516' />
    </g>
    <defs>
      <clipPath id='5762c6d808bfb510a09873aa4ed847eb__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftCaptionRegularIcon);
export default ForwardRef;
