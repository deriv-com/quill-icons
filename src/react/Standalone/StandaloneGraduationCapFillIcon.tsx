import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneGraduationCapFillIcon = (
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
    <path d='M16 7.75c.313 0 .625.078.898.195l10.977 3.946a.93.93 0 0 1 .625.859c0 .43-.273.781-.625.898l-10.977 3.946c-.273.117-.585.156-.937.156-.313 0-.625-.04-.899-.156l-6.25-2.266a3.9 3.9 0 0 1 1.25-.82l6.133-2.422c.352-.117.508-.469.352-.82a.607.607 0 0 0-.781-.352l-6.133 2.422c-.781.312-1.445.781-1.953 1.406a5.3 5.3 0 0 0-1.055 3.164v.977c.234.508.39 1.094.508 1.64.234 1.055.43 2.579.078 4.258-.04.157-.117.313-.274.39-.156.079-.312.118-.468.079l-2.5-.625a.6.6 0 0 1-.469-.39.77.77 0 0 1 .117-.587c.313-.468.625-.976.86-1.484.468-.898.898-2.031.898-3.164v-1.094c0-1.25.352-2.422.977-3.437l-2.266-.82c-.352-.118-.586-.47-.586-.899 0-.39.234-.742.586-.86l10.976-3.945A2.4 2.4 0 0 1 16 7.75M8.5 22.438l.586-5.665 5.547 1.993c.43.156.898.234 1.367.234.43 0 .898-.078 1.328-.234l5.547-1.993.625 5.665c0 1.406-3.36 2.812-7.5 2.812s-7.5-1.406-7.5-2.812' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGraduationCapFillIcon);
export default ForwardRef;
