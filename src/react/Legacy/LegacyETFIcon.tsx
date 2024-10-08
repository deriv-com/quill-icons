import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyETFIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M23.665 22.667h-2.89v-12H28v2.999h-4.335v1.5H28v3h-4.335zM11.804 10.667h8.67v2.999h-2.89v9h-2.89v-9h-2.89z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M6.884 18.159h3.605V15.91H6.884v-2.247h4.613l.007-2.997H4v11.988h7.497l.007-2.997h-4.62z'
    />
    <path
      fill='#33658A'
      fillRule='evenodd'
      d='M6 0a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm4.489 18.159H6.884v1.499h4.62l-.007 2.996H4V10.667h7.504l-.007 2.996H6.884v2.247h3.605zm1.315-7.492h8.67v2.999h-2.89v9h-2.89v-9h-2.89zm11.861 12h-2.89v-12H28v2.999h-4.335v1.5H28v3h-4.335z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyETFIcon);
export default ForwardRef;
