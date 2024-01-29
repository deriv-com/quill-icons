import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneAtBoldIcon = (
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
    <path d='M16 8.375q-3.438.078-5.742 2.383-2.304 2.304-2.383 5.742.078 3.438 2.383 5.742 2.304 2.305 5.742 2.383.859.078.938.938-.079.858-.938.937-2.812-.04-5.04-1.367a9.9 9.9 0 0 1-3.593-3.594Q6.04 19.313 6 16.5q.04-2.812 1.367-5.04a9.9 9.9 0 0 1 3.594-3.593Q13.187 6.54 16 6.5q2.813.04 5.04 1.367a9.9 9.9 0 0 1 3.593 3.594Q25.96 13.687 26 16.5v1.094q-.04 1.523-1.055 2.539t-2.539 1.055q-1.913-.079-2.93-1.524Q18.11 21.11 16 21.187q-1.992-.039-3.32-1.367t-1.367-3.32q.038-1.992 1.367-3.32T16 11.813q1.718.038 2.969 1.054.273-.39.781-.43.859.079.938.938v4.219q0 .742.507 1.21.469.51 1.211.509.743 0 1.211-.508.508-.469.508-1.211V16.5q-.078-3.438-2.383-5.742Q19.438 8.454 16 8.375m2.813 8.125q-.039-1.602-1.407-2.422-1.406-.78-2.812 0-1.368.82-1.406 2.422.038 1.602 1.406 2.422 1.406.78 2.812 0 1.367-.82 1.407-2.422' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneAtBoldIcon);
export default ForwardRef;
