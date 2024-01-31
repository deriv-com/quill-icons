import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCreditCardBoldIcon = (
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
    <path d='M25.25 9.625H7.75q-.585.039-.625.625v1.25h18.75v-1.25q-.039-.585-.625-.625m.625 5.625H7.125v7.5q.039.585.625.625h17.5q.585-.039.625-.625zM7.75 7.75h17.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H7.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758v-12.5q.039-1.055.742-1.758T7.75 7.75m2.188 11.875h1.874q.86.078.938.938-.079.858-.937.937H9.937q-.858-.079-.937-.937.078-.86.938-.938m5 0h4.374q.86.078.938.938-.078.858-.937.937h-4.375q-.86-.079-.938-.937.078-.86.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCreditCardBoldIcon);
export default ForwardRef;
