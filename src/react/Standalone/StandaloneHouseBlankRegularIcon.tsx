import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneHouseBlankRegularIcon = (
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
    <path d='M15.57 6.656a.65.65 0 0 1 .82 0l10.626 9.375c.273.235.273.625.078.899-.235.273-.625.273-.899.039l-1.445-1.29v7.696a3.11 3.11 0 0 1-3.125 3.125h-11.25c-1.758 0-3.125-1.367-3.125-3.125V15.68l-1.484 1.289c-.235.234-.664.234-.86-.04-.234-.273-.234-.663.04-.898zm-7.07 7.93v8.789c0 1.055.82 1.875 1.875 1.875h11.25c1.016 0 1.875-.82 1.875-1.875v-8.79l-7.5-6.6z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHouseBlankRegularIcon);
export default ForwardRef;
