import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyIndicatorOthersIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M6.814 7.076a.5.5 0 0 1 .652.644l-2.5 6.46a.5.5 0 0 1-.932 0l-2.5-6.46a.5.5 0 0 1 .652-.644L4.5 8zM6.12 8.43l-1.433.573a.5.5 0 0 1-.372 0l-1.433-.573L4.5 12.615zm4.91-6.6a.5.5 0 0 1 .942 0l2.5 7a.5.5 0 0 1-.67.628L11.5 8.465l-2.302.994a.5.5 0 0 1-.669-.627zm.471 1.656L9.858 8.085l1.444-.624a.5.5 0 0 1 .396 0l1.444.624z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyIndicatorOthersIcon);
export default ForwardRef;
