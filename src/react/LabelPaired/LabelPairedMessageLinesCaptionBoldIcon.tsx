import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesCaptionBoldIcon = (
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
      <path d='M4.875 13.25v.375l1.688-1.266c.187-.14.421-.234.68-.234H10.5a.385.385 0 0 0 .375-.375V5a.4.4 0 0 0-.375-.375h-9A.385.385 0 0 0 1.125 5v6.75c0 .21.164.375.375.375h2.25c.61 0 1.125.516 1.125 1.125m-.023 1.805-.118.07-.398.305c-.117.093-.258.093-.399.047a.39.39 0 0 1-.187-.352V13.25H1.5a1.48 1.48 0 0 1-1.5-1.5V5c0-.82.656-1.5 1.5-1.5h9c.82 0 1.5.68 1.5 1.5v6.75c0 .844-.68 1.5-1.5 1.5H7.242l-2.367 1.781zm-1.29-8.18h4.876A.57.57 0 0 1 9 7.438.555.555 0 0 1 8.438 8H3.561A.54.54 0 0 1 3 7.438c0-.305.234-.563.563-.563m0 2.25h2.626a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H3.563A.54.54 0 0 1 3 9.688c0-.305.234-.563.563-.563' />
    </g>
    <defs>
      <clipPath id='223d2d5a5bd7da5c4d79cd59e14b4d4f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesCaptionBoldIcon);
export default ForwardRef;
