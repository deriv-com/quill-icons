import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBarsFilterBoldIcon = (
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
    <path d='M7.25 9.938c0-.508.39-.938.938-.938h15.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H8.188c-.547 0-.938-.39-.938-.937m2.5 6.25c0-.508.39-.938.938-.938h10.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H10.688c-.547 0-.938-.39-.938-.937m8.75 6.25c0 .546-.43.937-.937.937h-3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.124a.95.95 0 0 1 .938.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBarsFilterBoldIcon);
export default ForwardRef;
