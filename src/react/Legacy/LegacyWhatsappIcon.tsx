import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyWhatsappIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule='evenodd'
      d='M13.667 2.337A7.93 7.93 0 0 0 8.034 0C3.643 0 .073 3.574.07 7.962c0 1.405.366 2.772 1.061 3.983L0 16l4.223-1.035a8 8 0 0 0 3.808.97h.003c4.388 0 7.962-3.574 7.966-7.966a7.91 7.91 0 0 0-2.333-5.632M8.034 14.591a6.6 6.6 0 0 1-3.371-.924l-.241-.145-2.505.656.668-2.443-.156-.252a6.6 6.6 0 0 1-1.012-3.521c0-3.65 2.97-6.618 6.621-6.618a6.6 6.6 0 0 1 4.682 1.94 6.59 6.59 0 0 1 1.936 4.682c-.004 3.654-2.975 6.625-6.622 6.625m3.632-4.96c-.199-.1-1.176-.58-1.36-.65-.183-.065-.316-.099-.446.1-.134.198-.516.649-.63.779-.115.133-.233.149-.432.05-.198-.1-.84-.31-1.6-.99-.592-.527-.989-1.18-1.107-1.378-.115-.199-.012-.306.088-.405.087-.088.198-.233.297-.347.1-.115.134-.2.199-.333s.034-.248-.015-.347c-.05-.1-.447-1.08-.615-1.478-.16-.39-.325-.336-.447-.34-.114-.008-.248-.008-.382-.008a.73.73 0 0 0-.53.249c-.184.198-.696.68-.696 1.66 0 .982.715 1.925.814 2.059.1.134 1.401 2.142 3.398 3.005.474.207.844.329 1.135.42.477.153.908.13 1.252.08.382-.057 1.176-.48 1.344-.947.164-.465.164-.863.115-.947-.05-.084-.184-.133-.382-.232'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyWhatsappIcon);
export default ForwardRef;
