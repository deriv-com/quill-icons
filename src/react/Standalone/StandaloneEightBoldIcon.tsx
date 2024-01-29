import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneEightBoldIcon = (
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
    <path d='M21.625 12.594q-.078 2.265-1.68 3.672a5.05 5.05 0 0 1 1.68 1.718q.625 1.095.625 2.422-.04 2.07-1.406 3.438-1.368 1.367-3.438 1.406h-2.812q-2.07-.04-3.438-1.406-1.367-1.368-1.406-3.438 0-1.327.625-2.422a5.05 5.05 0 0 1 1.68-1.718q-1.602-1.407-1.68-3.672.04-2.07 1.406-3.438Q13.148 7.79 15.22 7.75h1.562q2.07.04 3.438 1.406 1.367 1.367 1.406 3.438m-4.844 4.844h-2.187q-1.25.039-2.11.859-.82.86-.859 2.11.04 1.25.86 2.109.858.82 2.109.859h2.812q1.25-.039 2.11-.86.82-.858.859-2.109-.039-1.25-.86-2.11-.858-.819-2.109-.858zm0-1.875q1.25-.04 2.11-.86.82-.86.859-2.11-.039-1.25-.86-2.109-.858-.82-2.109-.859H15.22q-1.25.04-2.11.86-.82.858-.859 2.109.04 1.25.86 2.11.858.819 2.109.858z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEightBoldIcon);
export default ForwardRef;
