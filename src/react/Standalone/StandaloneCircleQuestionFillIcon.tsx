import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleQuestionFillIcon = (
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
    <path d='M16 26.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m-3.398-13.516v.04a.976.976 0 0 0 .585 1.21c.47.157 1.016-.078 1.172-.586l.04-.039a.29.29 0 0 1 .273-.195h2.265c.352 0 .625.234.625.586a.61.61 0 0 1-.312.508l-1.719.976c-.312.157-.469.47-.469.82v.509c0 .546.391.937.938.937.508 0 .898-.39.938-.898l1.25-.743c.742-.43 1.25-1.25 1.25-2.109 0-1.367-1.133-2.5-2.5-2.5h-2.266c-.938 0-1.758.586-2.07 1.484m2.148 7.266c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleQuestionFillIcon);
export default ForwardRef;
