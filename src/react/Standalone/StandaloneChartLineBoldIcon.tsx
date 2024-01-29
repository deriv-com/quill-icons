import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartLineBoldIcon = (
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
    <path d='M7.875 8.688v13.75q.078.858.938.937h16.25q.858.078.937.938-.079.858-.937.937H8.813q-1.212-.04-1.993-.82-.78-.781-.82-1.992V8.688q.078-.86.938-.938.859.078.937.938m16.602 4.414-5.313 5.312q-.664.547-1.328 0l-3.086-3.086-3.086 3.086q-.664.547-1.328 0-.548-.664 0-1.328l3.75-3.75a.9.9 0 0 1 .664-.274q.39 0 .664.274l3.086 3.086 4.648-4.649q.665-.546 1.329 0 .546.664 0 1.329' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartLineBoldIcon);
export default ForwardRef;
