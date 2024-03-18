import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMoonBoldIcon = (
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
    <path d='M14.125 10.367a6.9 6.9 0 0 0-3.75 6.133c0 3.828 3.047 6.875 6.836 6.875.508 0 1.016-.04 1.523-.156a8.75 8.75 0 0 1-5.898-8.282c0-1.68.469-3.242 1.289-4.57m2.422-2.578h1.406c.274.04.508.234.547.508a.56.56 0 0 1-.273.664c-.157.078-.274.156-.391.234l-.469.352c-.078.039-.117.078-.156.117a6.85 6.85 0 0 0-2.5 5.313c0 3.789 3.086 6.836 6.836 6.875h.156c.235-.04.43-.04.625-.04.117-.039.274-.039.43-.078.273-.039.547.078.664.313.117.273.078.547-.117.742-.117.117-.196.195-.313.273-.195.157-.351.313-.547.47-.078.038-.156.116-.234.155a8.73 8.73 0 0 1-5 1.563c-4.805 0-8.711-3.906-8.711-8.75 0-4.61 3.555-8.36 8.047-8.71' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMoonBoldIcon);
export default ForwardRef;
