import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyDerivedIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='m25.709 8.946-6-4.357H12.29l-6 4.357L4 16l2.291 7.054 6 4.357h7.418l6-4.357L28 16zM18.56 25.68H13.45V20.65h5.111zm-5.111-6.765V13.09h5.111v5.824zm0-12.589h5.111v5.029H13.45zm6.848 6.765h4.93l.946 2.91-.945 2.91h-4.931v-5.824zm4.368-1.736h-4.369V7.16l3.934 2.858zm-12.949-4.2v4.2h-4.38l.436-1.335L11.72 7.15zM6.772 13.09h4.946v5.824H6.772l-.945-2.91.945-2.91zm.563 7.56h4.38v4.2l-3.949-2.869-.431-1.335zm12.964 4.193V20.65h4.368l-.435 1.335z'
    />
    <path
      fill='#33658A'
      d='M13.45 25.679h5.111V20.65H13.45zM13.45 13.09v5.824h5.111V13.09zM18.561 6.325H13.45v5.029h5.111zM25.229 13.09h-4.931v5.82h4.93l.946-2.91zM20.298 11.354h4.368l-.435-1.335-3.934-2.858zM11.718 11.354v-4.2l.003-.004-3.948 2.869-.435 1.335zM11.718 13.09H6.77v.004l-.945 2.91.945 2.91h4.946zM7.335 20.65l.43 1.331 3.949 2.869v-4.2zM20.298 20.65v4.193l3.933-2.858.435-1.335z'
    />
    <path
      fill='#33658A'
      fillRule='evenodd'
      d='M6 0a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm13.709 4.589 6 4.357L28 16l-2.291 7.054-6 4.357H12.29l-6-4.357L4 16l2.291-7.054 6-4.357z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyDerivedIcon);
export default ForwardRef;
