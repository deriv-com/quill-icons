import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePresentationScreenBoldIcon = (
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
    <path d='M5.688 6.5h20.625q.858.078.937.938-.079.858-.937.937H5.688q-.86-.078-.938-.937.078-.86.938-.938M6 9.625h1.875v8.438q.039.273.313.312h15.625q.273-.039.312-.312V9.625H26v8.438q-.039.937-.625 1.562-.625.585-1.562.625h-6.875v1.797l2.851 2.851q.547.665 0 1.329-.664.546-1.328 0L16 23.766l-2.46 2.46q-.665.547-1.33 0-.546-.663 0-1.328l2.852-2.851V20.25H8.189q-.938-.039-1.563-.625Q6.04 19 6 18.063z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePresentationScreenBoldIcon);
export default ForwardRef;
