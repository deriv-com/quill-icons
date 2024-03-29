import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBellOnBoldIcon = (
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
    <path d='M16 6.5c.664 0 1.25.586 1.25 1.25v.781c2.852.547 5 3.086 5 6.094v1.016c0 1.757.586 3.476 1.68 4.882l.586.704c.234.312.273.703.117 1.015a.91.91 0 0 1-.82.508H8.188c-.391 0-.704-.195-.86-.508-.156-.312-.117-.703.117-1.015l.586-.704c1.094-1.406 1.719-3.125 1.719-4.882v-1.016c0-3.008 2.148-5.547 5-6.094V7.75c0-.664.547-1.25 1.25-1.25m0 3.75c-2.422 0-4.375 1.992-4.375 4.375v1.016a9.56 9.56 0 0 1-1.562 5.234h11.835c-1.015-1.562-1.523-3.36-1.523-5.234v-1.016c0-2.383-1.992-4.375-4.375-4.375M18.5 24c0 .664-.273 1.328-.742 1.797S16.664 26.5 16 26.5s-1.328-.234-1.797-.703S13.5 24.664 13.5 24h5m-15-9.687c0-.508.39-.938.938-.938h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.438c-.547 0-.938-.39-.938-.937m20.938-.938h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938m2.382-6.016a.925.925 0 0 1-.43 1.25l-2.5 1.25a.925.925 0 0 1-1.25-.43.925.925 0 0 1 .43-1.25l2.5-1.25a.925.925 0 0 1 1.25.43M5.57 8.61a.925.925 0 0 1-.43-1.25.925.925 0 0 1 1.25-.43l2.5 1.25a.925.925 0 0 1 .43 1.25.925.925 0 0 1-1.25.43z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBellOnBoldIcon);
export default ForwardRef;
