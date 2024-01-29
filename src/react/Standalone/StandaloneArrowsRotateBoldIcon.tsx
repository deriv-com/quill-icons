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
    <path d='M25.375 14.313q-.079.858-.937.937h-5.625q-.86-.079-.938-.937.078-.86.938-.938h3.359l-2.031-2.031Q18.422 9.664 16 9.625q-2.148.04-3.828 1.172a6.9 6.9 0 0 0-2.5 3.008q-.39.78-1.211.508-.78-.43-.508-1.25a8.57 8.57 0 0 1 3.164-3.829Q13.265 7.79 16 7.75q3.164.039 5.469 2.266l2.031 2.03V8.689q.078-.86.938-.938.858.078.937.938zM7.563 17.75h4.375q.858.078.937.938-.079.858-.937.937h-2.11l2.031 2.031q1.719 1.68 4.141 1.719 2.148-.04 3.828-1.172a6.9 6.9 0 0 0 2.5-3.008q.39-.741 1.211-.468.78.39.508 1.21-1.055 2.383-3.164 3.829Q18.735 25.21 16 25.25q-3.164-.039-5.469-2.266L8.5 20.954v2.108q-.078.86-.937.938-.86-.079-.938-.937v-4.375q.078-.86.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowsRotateBoldIcon);
export default ForwardRef;
