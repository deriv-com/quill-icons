import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeAccumulatorOptionsIcon = (
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
    <path d='M8.267 28.693c-1.28 0-2.32-1.04-2.32-2.32v-1.547a3.335 3.335 0 0 1 3.333-3.333h2v-2.107a3.334 3.334 0 0 1 3.333-3.333h2.214V11.4l-.56.56a2.07 2.07 0 0 1-2.934 0l-.48-.48a2.07 2.07 0 0 1-.613-1.467c0-.56.213-1.067.613-1.467l4.494-4.493a2.56 2.56 0 0 1 3.6 0l4.493 4.493c.813.814.813 2.12 0 2.934l-.48.48c-.787.786-2.147.786-2.933 0l-.56-.56v5.946a3.335 3.335 0 0 1-3.334 3.334H15.92v2.106a3.335 3.335 0 0 1-3.333 3.334h-2v.24c0 1.28-1.04 2.32-2.32 2.32zM9.28 22.84c-1.107 0-2 .893-2 2v1.546c0 .547.44.987.987.987s.986-.44.986-.987v-.906a.66.66 0 0 1 .667-.667h2.667c1.106 0 2-.893 2-2V20.04a.66.66 0 0 1 .666-.667h2.88c1.107 0 2-.893 2-2v-6.427c0-.466.28-.88.707-1.053s.907-.08 1.24.24l.893.893a.74.74 0 0 0 1.054 0l.48-.48a.74.74 0 0 0 0-1.053L20.013 5a1.2 1.2 0 0 0-.853-.347c-.32 0-.627.12-.853.36l-4.494 4.493a.736.736 0 0 0 0 1.04l.48.48a.74.74 0 0 0 1.054 0l.906-.906c.32-.32.814-.427 1.24-.24.427.173.707.586.707 1.053v5.8a.66.66 0 0 1-.667.667h-2.88c-1.106 0-2 .893-2 2v2.773a.66.66 0 0 1-.666.667H9.28' />
  </svg>
);
const ForwardRef = forwardRef(IllustrativeAccumulatorOptionsIcon);
export default ForwardRef;
