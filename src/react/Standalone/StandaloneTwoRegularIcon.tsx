import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneTwoRegularIcon = (
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
    <path d='M15.531 9q-1.757.04-3.008 1.25l-1.093 1.055q-.43.39-.86 0-.39-.43 0-.86l1.055-1.093q1.641-1.563 3.906-1.602 2.306.039 3.867 1.602Q20.922 10.875 21 13.18q-.039 2.343-1.719 3.945L11.977 24h9.648q.585.039.625.625-.039.585-.625.625h-11.25q-.43 0-.586-.39a.7.7 0 0 1 .156-.704l8.477-7.93q1.29-1.25 1.328-3.046-.04-1.758-1.25-2.97Q17.329 9.04 15.531 9' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTwoRegularIcon);
export default ForwardRef;
