import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFilterFillIcon = (
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
    <path d='M6.117 8.648c.274-.546.82-.898 1.446-.898h16.875c.585 0 1.132.352 1.406.898a1.64 1.64 0 0 1-.235 1.68L18.5 19.04V24c0 .508-.273.938-.703 1.133s-.938.156-1.328-.117l-2.5-1.875c-.313-.235-.469-.586-.469-1.016v-3.086l-7.148-8.71a1.64 1.64 0 0 1-.235-1.68' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFilterFillIcon);
export default ForwardRef;
