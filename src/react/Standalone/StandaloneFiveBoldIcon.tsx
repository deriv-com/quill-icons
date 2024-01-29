import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFiveBoldIcon = (
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
    <path d='M11 8.531q.195-.742.938-.781h8.124q.86.078.938.938-.078.858-.937.937h-7.344l-.899 5.313h5.274q2.187.038 3.633 1.523 1.484 1.445 1.523 3.633-.04 2.187-1.523 3.633-1.446 1.484-3.633 1.523h-3.711q-1.094 0-1.992-.547a3.53 3.53 0 0 1-1.368-1.523l-.195-.313q-.273-.82.43-1.289.82-.273 1.25.43l.195.312q.547 1.016 1.68 1.055h3.71q1.407-.04 2.305-.977.938-.898.977-2.304-.04-1.407-.977-2.305-.899-.937-2.304-.977h-6.407a.85.85 0 0 1-.703-.351.95.95 0 0 1-.234-.742z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFiveBoldIcon);
export default ForwardRef;
