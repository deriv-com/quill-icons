import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLocationCrosshairsSlashBoldIcon = (
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
    <path d='m4.984 6.734 5.704 4.454c1.171-1.133 2.656-1.915 4.374-2.11v-1.64c0-.508.391-.938.938-.938a.95.95 0 0 1 .938.938v1.64c3.359.43 6.054 3.125 6.484 6.485h1.64A.95.95 0 0 1 26 16.5c0 .547-.43.938-.937.938h-1.641a6.9 6.9 0 0 1-1.016 2.93l5.703 4.491c.43.313.508.899.157 1.29-.313.43-.899.507-1.29.156L3.853 8.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156m7.227 5.625 1.484 1.172A3.9 3.9 0 0 1 16 12.75c2.07 0 3.75 1.68 3.75 3.75 0 .547-.117 1.055-.312 1.523l1.484 1.172c.43-.78.703-1.718.703-2.695 0-3.086-2.54-5.625-5.625-5.625a5.6 5.6 0 0 0-3.79 1.484m5.625 4.414V16.5c0-1.016-.82-1.875-1.875-1.875-.234 0-.469.078-.664.156zm.234 4.961 1.602 1.29c-.82.507-1.758.82-2.735.937v1.602c0 .546-.43.937-.937.937-.547 0-.937-.39-.937-.937V23.96c-3.399-.43-6.094-3.125-6.524-6.484H6.938A.925.925 0 0 1 6 16.539c0-.547.39-.937.938-.937h1.601c.04-.43.117-.782.234-1.172l1.641 1.289c-.039.273-.039.547-.039.781 0 3.125 2.5 5.625 5.625 5.625.703 0 1.406-.117 2.07-.39' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLocationCrosshairsSlashBoldIcon);
export default ForwardRef;
