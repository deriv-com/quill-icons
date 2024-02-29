import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFaceViewfinderBoldIcon = (
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
    <path d='M6 8.688q.039-.938.625-1.563.625-.585 1.563-.625h3.124q.86.078.938.938-.079.858-.937.937H8.187q-.273.039-.312.313v3.124q-.078.86-.937.938-.86-.079-.938-.937zm13.75-1.25q.078-.86.938-.938h3.125q.937.039 1.562.625.585.625.625 1.563v3.124q-.079.86-.937.938-.86-.079-.938-.937V8.687q-.039-.273-.312-.312h-3.125q-.86-.078-.938-.937M6.938 20.25q.859.078.937.938v3.125q.039.273.313.312h3.124q.86.078.938.938-.079.858-.937.937H8.187q-.936-.039-1.562-.625Q6.04 25.25 6 24.313v-3.125q.078-.86.938-.938m18.125 0q.858.078.937.938v3.125q-.039.937-.625 1.562-.625.585-1.562.625h-3.125q-.86-.079-.938-.937.078-.86.938-.938h3.125q.273-.039.312-.312v-3.125q.078-.86.938-.938m-9.688-5.312q-.079.858-.937.937-.86-.079-.938-.937.078-.86.938-.938.858.078.937.938m2.188.937q-.86-.079-.938-.937.078-.86.938-.938.858.078.937.938-.078.858-.937.937M16 12.125q-1.172 0-2.187.586-1.016.585-1.602 1.601a4.3 4.3 0 0 0-.586 2.188q0 1.171.586 2.188.585 1.015 1.601 1.601 1.017.585 2.188.586 1.171 0 2.188-.586a4.3 4.3 0 0 0 1.601-1.602q.585-1.015.586-2.187 0-1.172-.586-2.187a4.3 4.3 0 0 0-1.602-1.602A4.3 4.3 0 0 0 16 12.125m0 10.625a6.2 6.2 0 0 1-3.125-.82 6.5 6.5 0 0 1-2.305-2.305 6.37 6.37 0 0 1-.82-3.125q0-1.64.82-3.125a6.5 6.5 0 0 1 2.305-2.305A6.2 6.2 0 0 1 16 10.25q1.68 0 3.125.82a6.5 6.5 0 0 1 2.305 2.305q.82 1.485.82 3.125a6.37 6.37 0 0 1-.82 3.125 6.5 6.5 0 0 1-2.305 2.305 6.2 6.2 0 0 1-3.125.82m-1.64-5.312q.546.898 1.64.937 1.095-.039 1.64-.937.313-.47.86-.235.43.352.195.86-.86 1.485-2.695 1.562-1.836-.078-2.695-1.562-.274-.508.234-.86.508-.234.82.235' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFaceViewfinderBoldIcon);
export default ForwardRef;
