import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpLeftBoldIcon = (
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
    <path d='M10.688 10.25v.04h9.375c.507 0 .937.39.937.937a.95.95 0 0 1-.937.937h-7.149l9.024 9.024c.39.351.39.937 0 1.289a.856.856 0 0 1-1.29 0l-9.023-9.024v7.11c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-9.375c0-.508.39-.938.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpLeftBoldIcon);
export default ForwardRef;
