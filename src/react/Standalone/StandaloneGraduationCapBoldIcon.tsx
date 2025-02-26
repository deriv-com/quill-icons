import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneGraduationCapBoldIcon = (
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
    <path d='M16 9.625c-.117 0-.195.04-.312.078L7.172 12.75l1.758.664c.195-.117.39-.195.586-.273l6.25-2.344a.637.637 0 0 1 .82.39.597.597 0 0 1-.39.782l-5.509 2.07 5 1.797a.9.9 0 0 0 .313.039c.078 0 .195 0 .273-.04l8.516-3.085-8.516-3.047A.7.7 0 0 0 16 9.625M4.086 13.648c-.352-.117-.586-.468-.586-.898 0-.39.234-.742.586-.86l10.976-3.945A2.4 2.4 0 0 1 16 7.75c.313 0 .625.078.898.195l10.977 3.946a.93.93 0 0 1 .625.859c0 .43-.273.781-.625.898l-10.977 3.946a2.3 2.3 0 0 1-.898.195c-.352 0-.664-.078-.937-.195L8.422 15.21c-1.055.937-1.719 2.226-1.797 3.672.234.547.39 1.094.508 1.64.234 1.055.43 2.579.078 4.258-.04.157-.117.313-.274.39-.156.079-.312.118-.468.079l-2.5-.625a.6.6 0 0 1-.469-.39.77.77 0 0 1 .117-.587c.313-.468.625-.976.86-1.484.468-.898.898-2.031.898-3.164v-.04c.04-1.6.703-3.085 1.758-4.218zm18.789 3.125.625 5.665c0 1.406-3.36 2.812-7.5 2.812s-7.5-1.406-7.5-2.812l.586-5.665 1.797.665-.469 4.687c.156.156.469.313.938.508 1.132.43 2.773.742 4.648.742s3.516-.312 4.61-.742c.468-.195.78-.352.937-.508l-.469-4.687zm-1.133 5.196v.039zm-11.523 0v.039z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGraduationCapBoldIcon);
export default ForwardRef;
