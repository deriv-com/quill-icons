import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneAtRegularIcon = (
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
    <path d='M16 7.75q-2.46.04-4.414 1.21a8.2 8.2 0 0 0-3.125 3.126Q7.289 14.039 7.25 16.5q.04 2.46 1.21 4.414a8.2 8.2 0 0 0 3.126 3.125Q13.539 25.211 16 25.25q.585.039.625.625-.039.585-.625.625-2.812-.04-5.04-1.367a9.9 9.9 0 0 1-3.593-3.594Q6.04 19.313 6 16.5q.04-2.812 1.367-5.04a9.9 9.9 0 0 1 3.594-3.593Q13.187 6.54 16 6.5q2.813.04 5.04 1.367a9.9 9.9 0 0 1 3.593 3.594Q25.96 13.687 26 16.5v.938q-.04 1.445-1.016 2.421-.975.977-2.422 1.016-.976 0-1.796-.508a3.2 3.2 0 0 1-1.211-1.289q-1.29 1.719-3.555 1.797-1.875-.039-3.086-1.29-1.25-1.21-1.289-3.085.039-1.875 1.29-3.086 1.21-1.25 3.085-1.289 1.875.04 3.125 1.328v-.078q.039-.585.625-.625.585.039.625.625v4.063q.039.937.625 1.562.625.585 1.563.625.937-.039 1.562-.625.585-.625.625-1.562V16.5q-.04-2.46-1.21-4.414a8.2 8.2 0 0 0-3.126-3.125Q18.461 7.789 16 7.75m3.125 8.75q-.04-1.758-1.562-2.695-1.563-.86-3.125 0-1.524.937-1.563 2.695.039 1.758 1.563 2.695 1.562.86 3.124 0 1.524-.937 1.563-2.695' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneAtRegularIcon);
export default ForwardRef;
