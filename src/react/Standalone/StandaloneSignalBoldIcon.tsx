import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSignalBoldIcon = (
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
    <path d='M26 6.5q.859.078.938.938v18.125q-.079.858-.938.937-.86-.079-.937-.937V7.438q.078-.86.937-.938m-5 3.75q.859.078.938.938v14.375q-.079.858-.938.937-.86-.079-.937-.937V11.188q.078-.86.937-.938M16 14q.859.078.938.938v10.625q-.079.858-.938.937-.86-.079-.937-.937V14.938q.078-.86.937-.938m-5 3.75q.859.078.938.938v6.875q-.079.858-.938.937-.86-.079-.937-.937v-6.875q.078-.86.937-.938M6 21.5q.859.078.938.938v3.125q-.079.858-.938.937-.86-.079-.937-.937v-3.125q.078-.86.937-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSignalBoldIcon);
export default ForwardRef;
