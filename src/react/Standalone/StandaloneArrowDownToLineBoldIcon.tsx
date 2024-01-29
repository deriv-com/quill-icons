import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowDownToLineBoldIcon = (
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
    <path d='M22.563 25.25H9.438q-.86-.079-.938-.937.078-.86.938-.938h13.125q.858.078.937.938-.079.858-.937.937m-7.227-5.312v.039l-5-5.313q-.548-.703.039-1.328.664-.548 1.328.039l3.36 3.594V8.687q.078-.858.937-.937.859.078.938.938v8.28l3.398-3.593q.626-.586 1.328-.04.547.626.04 1.29l-5 5.313q-.315.312-.704.312a.85.85 0 0 1-.664-.312' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownToLineBoldIcon);
export default ForwardRef;
