import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFlagCheckeredBoldIcon = (
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
    <path d='M8.188 6.5q.858.078.937.938V8.53l3.32-.82a6.58 6.58 0 0 1 4.453.469 6.16 6.16 0 0 0 2.852.703q1.485 0 2.89-.703l.352-.157q.665-.312 1.172.04.547.312.586 1.015v10.938q-.04.82-.82 1.172l-1.328.507q-2.851 1.015-5.547-.312-2.305-1.095-4.805-.508l-3.125.781v3.907q-.079.858-.937.937-.86-.079-.938-.937V7.437q.078-.86.938-.938m.937 5.898 3.125-.703V9.703l-3.125.781zm0 1.915v1.835l3.125-.703v-1.797zm0 3.75v1.68l2.695-.704q.196-.039.43-.078v-1.563zm5 .742a9 9 0 0 1 3.75.898V17.79l-2.148-.664a3.7 3.7 0 0 0-1.602-.117zm5.625 1.445a5.3 5.3 0 0 0 2.188-.312l.937-.352V17.75l-1.016.234a7.2 7.2 0 0 1-2.109.157zm3.125-4.414V14l-1.016.234a7.2 7.2 0 0 1-2.109.157v1.875a5.5 5.5 0 0 0 1.719-.118zm0-3.75v-1.953a8.2 8.2 0 0 1-3.125.625v1.758a5.5 5.5 0 0 0 1.719-.118zm-5-1.563a7 7 0 0 1-1.836-.664 4.8 4.8 0 0 0-1.914-.468v1.953a7.1 7.1 0 0 1 2.11.234l1.64.508zm0 3.516-2.148-.664a3.7 3.7 0 0 0-1.602-.117v1.875a6.3 6.3 0 0 1 2.11.195l1.64.508z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFlagCheckeredBoldIcon);
export default ForwardRef;
