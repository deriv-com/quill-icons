import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneDealCancellationBoldIcon = (
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
    <path d='M6.664 11.266h3.945q1.056 0 1.875.351c.586.195 1.055.547 1.485.977.39.43.703.976.898 1.64.235.664.352 1.407.352 2.266 0 .898-.117 1.64-.352 2.305a4.15 4.15 0 0 1-.898 1.64c-.43.43-.899.742-1.485.977q-.819.351-1.875.351H6.664zm3.945 8.476c.664 0 1.211-.195 1.602-.586.39-.39.586-.976.586-1.836V15.72c0-.86-.195-1.446-.586-1.836s-.938-.586-1.602-.586H8.93v6.445zm10.743 2.188a5.8 5.8 0 0 1-1.915-.313 3.9 3.9 0 0 1-1.445-1.015 4.2 4.2 0 0 1-.937-1.68q-.352-.996-.352-2.344c0-.86.117-1.64.352-2.305q.293-1.055.937-1.757c.39-.47.86-.82 1.445-1.055.547-.234 1.211-.352 1.915-.352.976 0 1.757.196 2.382.586q.996.586 1.524 1.875l-1.953 1.016c-.157-.43-.352-.781-.664-1.055-.274-.273-.703-.39-1.29-.39-.663 0-1.21.195-1.601.664-.43.43-.625 1.054-.625 1.875v1.68c0 .82.195 1.445.625 1.913.39.43.938.625 1.602.625.546 0 1.015-.156 1.328-.43a2.7 2.7 0 0 0 .742-1.132l1.875 1.094c-.39.78-.899 1.406-1.563 1.875-.625.43-1.406.625-2.382.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneDealCancellationBoldIcon);
export default ForwardRef;
