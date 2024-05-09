import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyRedditIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#333'>
      <path d='M6.166 8a.835.835 0 0 0-.833.833c0 .458.375.832.833.832A.835.835 0 0 0 7 8.833.835.835 0 0 0 6.166 8M8.01 11.64c.318 0 1.403-.038 1.974-.608a.24.24 0 0 0 .018-.31.22.22 0 0 0-.308 0c-.365.356-1.123.487-1.675.487s-1.32-.13-1.675-.486a.22.22 0 0 0-.309 0 .22.22 0 0 0 0 .309c.562.561 1.656.608 1.974.608M9.001 8.833c0 .458.374.832.833.832a.835.835 0 0 0 .833-.832A.835.835 0 0 0 9.834 8 .835.835 0 0 0 9 8.833' />
      <path
        fillRule='evenodd'
        d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.836-1.17c.645 0 1.17.524 1.17 1.17 0 .477-.29.889-.674 1.076q.028.166.028.346c0 1.797-2.087 3.247-4.67 3.247S3.35 11.219 3.35 9.422c0-.121.01-.243.028-.355a1.17 1.17 0 0 1 .477-2.236c.309 0 .599.13.805.327.804-.59 1.918-.955 3.162-.992l.59-2.788a.23.23 0 0 1 .093-.131q.072-.042.16-.028l1.936.411a.81.81 0 0 1 .74-.467c.458 0 .832.374.832.832a.834.834 0 0 1-1.665.037l-1.731-.364-.534 2.498c1.217.047 2.32.421 3.116.992.206-.206.487-.328.805-.328'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyRedditIcon);
export default ForwardRef;
