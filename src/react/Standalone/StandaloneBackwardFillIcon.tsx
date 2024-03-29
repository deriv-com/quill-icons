import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBackwardFillIcon = (
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
    <path d='m23.93 23.727-6.68-5.586v-3.243l6.68-5.585c.39-.313.898-.391 1.328-.196.43.235.742.664.742 1.133v12.5c0 .508-.312.938-.742 1.133-.43.234-.938.156-1.328-.156M16 20.25v2.5c0 .508-.312.938-.742 1.133-.43.234-.938.156-1.328-.156l-7.5-6.25A1.27 1.27 0 0 1 6 16.5c0-.352.156-.703.43-.937l7.5-6.25c.39-.313.898-.391 1.328-.196.43.235.742.664.742 1.133v10' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardFillIcon);
export default ForwardRef;
