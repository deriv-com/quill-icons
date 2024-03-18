import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLaptopRegularIcon = (
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
    <path d='M23.5 9h-15c-.703 0-1.25.586-1.25 1.25v10H6v-10c0-1.367 1.094-2.5 2.5-2.5h15c1.367 0 2.5 1.133 2.5 2.5v10h-1.25v-10c0-.664-.586-1.25-1.25-1.25M6.469 24h19.023c.781 0 1.445-.508 1.68-1.25H4.789c.234.742.899 1.25 1.68 1.25M3.5 22.281c0-.43.313-.781.742-.781H27.72c.43 0 .781.352.781.781 0 1.64-1.367 2.969-3.008 2.969H6.47A2.967 2.967 0 0 1 3.5 22.281' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLaptopRegularIcon);
export default ForwardRef;
