import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneUserSlashBoldIcon = (
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
    <path d='m5.523 6.695 5.977 4.688q.078-2.07 1.484-3.438Q14.391 6.54 16.5 6.5q2.109.04 3.555 1.445Q21.46 9.391 21.5 11.5q-.04 1.758-1.055 3.086-1.015 1.29-2.656 1.758l10.86 8.476q.624.586.156 1.328-.586.626-1.328.157L4.352 8.18q-.626-.586-.157-1.328.586-.626 1.328-.157m9.844 7.696a2.7 2.7 0 0 0 1.133.234q1.328-.039 2.227-.898.858-.9.898-2.227-.04-1.328-.898-2.227-.9-.858-2.227-.898-1.328.04-2.227.898-.858.9-.898 2.227 0 1.016.586 1.836zm-1.055 3.984 2.383 1.875h-1.992q-1.953.04-3.32 1.25-1.406 1.21-1.719 3.125h12.578l2.266 1.797q-.196.078-.43.078H8.922q-.508 0-.82-.352-.352-.312-.352-.82.078-2.851 1.914-4.765 1.836-1.954 4.649-2.188' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUserSlashBoldIcon);
export default ForwardRef;
