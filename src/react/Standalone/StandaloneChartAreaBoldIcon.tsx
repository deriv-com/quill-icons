import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartAreaBoldIcon = (
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
    <path d='M7.875 8.688v13.75q.078.858.938.937h16.25q.858.078.937.938-.079.858-.937.937H8.813q-1.212-.04-1.993-.82-.78-.781-.82-1.992V8.688q.078-.86.938-.938.859.078.937.938m9.297 6.64-2.422-2.422-3.125 3.125v3.594h11.25v-3.047l-1.992-2.305-1.055 1.055a1.8 1.8 0 0 1-1.328.547q-.78 0-1.328-.547M18.5 14l1.328-1.328.235-.235q.39-.351.898-.351.547.04.898.43l2.422 2.851q.47.508.469 1.211v3.672q0 .547-.352.898-.35.352-.898.352H11q-.547 0-.898-.352-.352-.35-.352-.898v-4.219q0-.78.547-1.328l3.555-3.555q.39-.39.898-.39t.898.39l1.524 1.524z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartAreaBoldIcon);
export default ForwardRef;
