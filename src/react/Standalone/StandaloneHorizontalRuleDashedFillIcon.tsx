import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneHorizontalRuleDashedFillIcon = (
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
    <path d='M3.5 16.5c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25m6.64 0c0-.664.587-1.25 1.25-1.25h2.5c.704 0 1.25.586 1.25 1.25 0 .703-.546 1.25-1.25 1.25h-2.5c-.663 0-1.25-.547-1.25-1.25m6.68 0c0-.664.547-1.25 1.25-1.25h2.5c.703 0 1.25.586 1.25 1.25 0 .703-.547 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25m6.68 0c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHorizontalRuleDashedFillIcon);
export default ForwardRef;
