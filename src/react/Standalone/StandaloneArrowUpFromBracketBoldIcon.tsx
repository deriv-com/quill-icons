import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowUpFromBracketBoldIcon = (
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
    <path d='m16.664 6.773 5 5q.547.664 0 1.329-.664.546-1.328 0l-3.398-3.399v9.61q-.079.858-.938.937-.86-.078-.937-.937v-9.61l-3.399 3.399q-.664.546-1.328 0-.548-.664 0-1.329l5-5q.664-.546 1.328 0M9.125 19.938v3.125q0 .663.469 1.093.428.47 1.094.469h10.625q.663 0 1.093-.469.47-.429.469-1.093v-3.125q.078-.86.938-.938.858.078.937.938v3.125q-.04 1.445-1.016 2.421-.975.977-2.422 1.016H10.688q-1.444-.04-2.421-1.016-.977-.975-1.016-2.422v-3.125q.078-.858.938-.937.858.078.937.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpFromBracketBoldIcon);
export default ForwardRef;
