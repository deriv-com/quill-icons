import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneStarBoldIcon = (
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
    <path d='M16 6.5q.585.039.86.547l2.656 5.508 5.976.86q.585.116.781.663.157.547-.234.938l-4.336 4.297 1.016 6.093q.078.547-.39.938-.47.312-.977.039L16 23.53l-5.352 2.852q-.507.273-.976-.078-.47-.352-.39-.899l1.015-6.093-4.336-4.297q-.39-.39-.234-.938.195-.547.78-.664l5.977-.86 2.657-5.507A.99.99 0 0 1 16 6.5m0 3.086-2.07 4.219q-.196.429-.703.547l-4.61.664 3.36 3.32q.312.352.273.82l-.82 4.688 4.14-2.188a.85.85 0 0 1 .86 0l4.101 2.188-.781-4.688a.9.9 0 0 1 .273-.82l3.36-3.32-4.61-.664q-.507-.117-.703-.547z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneStarBoldIcon);
export default ForwardRef;
