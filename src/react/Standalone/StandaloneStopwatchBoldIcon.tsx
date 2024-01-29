import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneStopwatchBoldIcon = (
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
    <path d='M12.875 7.438q.078-.86.938-.938h4.374q.86.078.938.938-.078.858-.937.937h-1.25v1.914q2.577.352 4.453 1.992l1.132-1.133q.665-.546 1.329 0 .546.664 0 1.329l-1.211 1.21q1.445 2.032 1.484 4.688-.078 3.438-2.383 5.742Q19.438 26.422 16 26.5q-3.438-.078-5.742-2.383-2.304-2.304-2.383-5.742.078-3.202 2.07-5.43 2.031-2.227 5.118-2.656V8.375h-1.25q-.86-.078-.938-.937M16 24.625q1.68 0 3.125-.82A6.5 6.5 0 0 0 21.43 21.5q.82-1.484.82-3.125a6.37 6.37 0 0 0-.82-3.125 6.5 6.5 0 0 0-2.305-2.305 6.2 6.2 0 0 0-3.125-.82q-1.68 0-3.125.82a6.5 6.5 0 0 0-2.305 2.305 6.37 6.37 0 0 0-.82 3.125q0 1.64.82 3.125a6.5 6.5 0 0 0 2.305 2.305q1.445.82 3.125.82m.938-9.687V19q-.079.859-.938.938-.86-.079-.937-.938v-4.062q.078-.86.937-.938.859.078.938.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneStopwatchBoldIcon);
export default ForwardRef;
