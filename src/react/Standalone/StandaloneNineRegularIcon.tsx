import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneNineRegularIcon = (
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
    <path d='M11 14q.04 2.109 1.445 3.555Q13.891 18.96 16 19q2.109-.04 3.516-1.406 1.367-1.407 1.484-3.477V14q-.04-2.109-1.445-3.555Q18.109 9.04 16 9q-2.109.04-3.555 1.445Q11.04 11.891 11 14m6.29 6.133a7 7 0 0 1-1.29.117q-2.655-.078-4.414-1.836T9.75 14q.078-2.655 1.836-4.414T16 7.75q2.656.078 4.414 1.836T22.25 14v.234q-.117 2.266-1.602 4.024l-6.054 6.797q-.43.39-.899.039-.39-.43-.039-.899z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneNineRegularIcon);
export default ForwardRef;
