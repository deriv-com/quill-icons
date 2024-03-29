import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMessagesQuestionRegularIcon = (
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
    <path d='M11.39 17.75h5.86c.664 0 1.25-.547 1.25-1.25V9c0-.664-.586-1.25-1.25-1.25H6c-.703 0-1.25.586-1.25 1.25v7.5c0 .703.547 1.25 1.25 1.25h1.25c.664 0 1.25.586 1.25 1.25v.625l2.148-1.602c.235-.156.47-.273.743-.273M17.25 19h-5.86l-3.163 2.383c-.196.156-.43.156-.665.078-.195-.117-.312-.313-.312-.586V19H6a2.47 2.47 0 0 1-2.5-2.5V9c0-1.367 1.094-2.5 2.5-2.5h11.25c1.367 0 2.5 1.133 2.5 2.5v7.5c0 1.406-1.133 2.5-2.5 2.5M16 24a2.47 2.47 0 0 1-2.5-2.5v-1.25h1.25v1.25c0 .703.547 1.25 1.25 1.25h4.57c.274 0 .547.117.742.273l2.188 1.602V24c0-.664.547-1.25 1.25-1.25H26c.664 0 1.25-.547 1.25-1.25V14c0-.664-.586-1.25-1.25-1.25h-5V11.5h5c1.367 0 2.5 1.133 2.5 2.5v7.5c0 1.406-1.133 2.5-2.5 2.5h-1.25v1.875c0 .273-.156.469-.352.586-.234.078-.468.078-.664-.078L20.57 24zM10.688 9.273c-.665 0-1.211.391-1.446.977v.04a.654.654 0 0 0 .39.82c.313.117.665-.079.782-.391l.04-.04c0-.117.116-.156.233-.156h1.602c.274 0 .469.196.469.43 0 .195-.078.352-.235.43l-1.21.703a.62.62 0 0 0-.313.547v.351c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625l.898-.546c.547-.274.86-.86.86-1.446 0-.976-.781-1.719-1.719-1.719zm.937 7.032a.76.76 0 0 0 .781-.43.76.76 0 0 0 0-.898c-.156-.274-.469-.47-.781-.43a.85.85 0 0 0-.82.43.76.76 0 0 0 0 .898c.156.313.468.469.82.43' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMessagesQuestionRegularIcon);
export default ForwardRef;
