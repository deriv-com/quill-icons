import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpFromSquareBoldIcon = (
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
    <path d='m16.664 6.773 4.375 4.375q.547.664 0 1.329-.664.546-1.328 0l-2.773-2.774v9.61q-.079.858-.938.937-.86-.078-.937-.937v-9.61l-2.774 2.774q-.664.546-1.328 0-.548-.664 0-1.329l4.375-4.375q.664-.546 1.328 0m-7.852.977h.313q.859.078.938.938-.079.858-.938.937h-.312q-.86.078-.938.938v13.125q.078.858.938.937h14.375q.858-.079.937-.937V10.563q-.079-.86-.937-.938h-.313q-.86-.079-.937-.937.078-.86.937-.938h.313q1.21.04 1.992.82.78.782.82 1.992v13.126q-.04 1.21-.82 1.992-.781.78-1.992.82H8.813q-1.212-.04-1.993-.82-.78-.781-.82-1.992V10.563q.04-1.212.82-1.993.781-.78 1.992-.82' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpFromSquareBoldIcon);
export default ForwardRef;
