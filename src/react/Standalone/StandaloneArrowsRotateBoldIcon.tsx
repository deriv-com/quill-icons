import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowsRotateBoldIcon = (
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
    <path d='M9.672 13.844a.976.976 0 0 1-1.25.469.935.935 0 0 1-.508-1.211C9.242 9.977 12.367 7.75 16 7.75c2.031 0 3.984.82 5.43 2.266l2.07 2.07V9.937c0-.507.39-.937.938-.937a.95.95 0 0 1 .937.938v4.374c0 .547-.43.938-.937.938h-4.375c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h2.109l-2.07-2.031A5.83 5.83 0 0 0 16 9.625a6.86 6.86 0 0 0-6.328 4.219m14.375 6.133C22.68 23.062 19.594 25.25 16 25.25c-2.07 0-4.023-.781-5.469-2.266L8.5 20.954v2.108c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-4.375c0-.508.39-.938.938-.938h4.375a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H9.789l2.07 2.07c1.094 1.094 2.579 1.68 4.141 1.68 2.813 0 5.273-1.68 6.29-4.14.233-.508.78-.704 1.25-.508.468.195.702.742.507 1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowsRotateBoldIcon);
export default ForwardRef;
