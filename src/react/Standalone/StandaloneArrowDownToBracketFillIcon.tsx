import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownToBracketFillIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m21.86 14.898-5 5a1.205 1.205 0 0 1-1.758 0l-5-5a1.204 1.204 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l2.891 2.851V7.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v8.242l2.852-2.851a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757M9.75 20.25v2.5c0 .703.547 1.25 1.25 1.25h10c.664 0 1.25-.547 1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v2.5c0 2.07-1.68 3.75-3.75 3.75H11c-2.07 0-3.75-1.68-3.75-3.75v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownToBracketFillIcon);
export default ForwardRef;
