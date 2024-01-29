import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCaretUpBoldIcon = (
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
    <path d='m16 13.648-3.477 3.477h6.954zm-.898-1.796q.39-.352.898-.352t.898.352l5 5q.547.624.274 1.367Q21.82 18.96 21 19H11q-.82-.04-1.172-.781-.273-.742.274-1.367z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCaretUpBoldIcon);
export default ForwardRef;
