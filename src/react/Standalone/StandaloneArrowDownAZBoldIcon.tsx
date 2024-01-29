import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownAZBoldIcon = (
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
    <path d='M6.586 21.227q-.548-.665 0-1.329.664-.546 1.328 0l2.149 2.149V8.687q.078-.858.937-.937.859.078.938.938v13.359l2.148-2.149q.664-.546 1.328 0 .548.665 0 1.329l-3.75 3.75q-.664.546-1.328 0zM18.5 17.75h5q.585.039.86.547.195.547-.157 1.015l-3.633 4.063h2.93q.859.078.938.938-.079.858-.938.937h-5a.99.99 0 0 1-.86-.547 1.02 1.02 0 0 1 .157-1.015l3.633-4.063H18.5q-.86-.078-.937-.937.078-.86.937-.938m2.5-10q.586.039.82.508l3.125 6.25q.313.82-.39 1.25-.82.312-1.25-.39l-.547-1.056h-3.515l-.548 1.055q-.43.703-1.25.43-.703-.469-.39-1.29l3.125-6.25q.273-.507.82-.507m-.82 4.688h1.64L21 10.797z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownAZBoldIcon);
export default ForwardRef;
