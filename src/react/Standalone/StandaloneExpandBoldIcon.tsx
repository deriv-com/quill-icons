import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneExpandBoldIcon = (
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
    <path d='M12.563 7.75q.858.078.937.938-.079.858-.937.937H9.125v3.438q-.079.858-.937.937-.86-.079-.938-.937V8.686q.078-.858.938-.937zM7.25 19.938q.078-.86.938-.938.858.078.937.938v3.437h3.438q.858.078.937.938-.079.858-.937.937H8.186q-.859-.079-.937-.937zM23.813 7.75q.858.078.937.938v4.374q-.079.86-.937.938-.86-.079-.938-.937V9.625h-3.437q-.86-.079-.938-.937.078-.86.938-.938zm-.938 12.188q.078-.86.938-.938.858.078.937.938v4.375q-.079.858-.937.937h-4.375q-.86-.079-.938-.937.078-.86.938-.938h3.437z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneExpandBoldIcon);
export default ForwardRef;
