import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMoneyBillBoldIcon = (
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
    <path d='M9.125 10.875q-.039 1.055-.742 1.758t-1.758.742v6.25q1.055.039 1.758.742.703.704.742 1.758h13.75q.039-1.055.742-1.758.704-.703 1.758-.742v-6.25q-1.055-.039-1.758-.742t-.742-1.758zM4.75 11.5q.039-1.055.742-1.758T7.25 9h17.5q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758-.704.703-1.758.742H7.25q-1.055-.039-1.758-.742-.703-.704-.742-1.758zM16 12.75q1.015 0 1.875.508A3.759 3.759 0 0 1 19.75 16.5a3.76 3.76 0 0 1-1.875 3.242A3.6 3.6 0 0 1 16 20.25a3.6 3.6 0 0 1-1.875-.508A3.759 3.759 0 0 1 12.25 16.5a3.76 3.76 0 0 1 1.875-3.242A3.6 3.6 0 0 1 16 12.75' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMoneyBillBoldIcon);
export default ForwardRef;
