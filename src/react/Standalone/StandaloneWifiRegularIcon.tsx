import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneWifiRegularIcon = (
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
    <path d='M4.555 13.727c-.274.234-.664.234-.899 0-.234-.274-.234-.665 0-.899A17.55 17.55 0 0 1 16 7.75c4.766 0 9.14 1.953 12.305 5.078.234.235.234.625 0 .899-.235.234-.625.234-.899 0A16.06 16.06 0 0 0 16 9a16.08 16.08 0 0 0-11.445 4.727M16 15.25a9.98 9.98 0 0 0-7.07 2.93c-.235.234-.625.234-.899 0a.613.613 0 0 1 0-.86A11.21 11.21 0 0 1 16 14.04c3.086 0 5.898 1.25 7.93 3.28a.613.613 0 0 1 0 .86c-.235.234-.625.234-.899 0A9.95 9.95 0 0 0 16 15.25m0 6.25c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25m0 3.75A2.54 2.54 0 0 1 13.813 24c-.43-.742-.43-1.719 0-2.5.468-.742 1.289-1.25 2.187-1.25.86 0 1.68.508 2.148 1.25.43.781.43 1.758 0 2.5-.468.781-1.289 1.25-2.148 1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWifiRegularIcon);
export default ForwardRef;
