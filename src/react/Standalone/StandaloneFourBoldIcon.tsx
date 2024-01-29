import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFourBoldIcon = (
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
    <path d='M15.883 9.117 11 18.375h8.125v-5.937q.078-.86.938-.938.858.078.937.938v5.937h1.563q.858.078.937.938-.079.858-.937.937H21v4.063q-.078.858-.937.937-.86-.079-.938-.937V20.25H9.438q-.508 0-.82-.469-.236-.43 0-.898l5.624-10.625q.47-.742 1.25-.39.742.468.39 1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFourBoldIcon);
export default ForwardRef;
