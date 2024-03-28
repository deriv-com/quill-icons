import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.828 6.984c.352.235.547.625.547 1.016v3.75H19c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-3.75c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.625V9.758l-.234.078c-.664.195-1.368-.156-1.602-.781-.195-.664.156-1.367.781-1.602l1.875-.625c.39-.117.82-.039 1.133.195zM6.5 6.75c.352 0 .664.156.898.43l3.438 3.75a1.24 1.24 0 0 1-.078 1.758A1.24 1.24 0 0 1 9 12.609l-1.25-1.367V23c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V11.242L3.96 12.61a1.24 1.24 0 0 1-1.757.079 1.24 1.24 0 0 1-.078-1.758l3.438-3.75c.234-.274.585-.43.937-.43m11.133 13.008a1.2 1.2 0 0 0 .586-1.64c-.274-.626-1.016-.9-1.64-.626-.626.313-.9 1.055-.587 1.68a1.2 1.2 0 0 0 1.64.586m-1.563 2.148c-1.406-.43-2.383-1.718-2.383-3.281a3.443 3.443 0 0 1 3.438-3.437c1.875 0 3.438 1.562 3.438 3.437 0 .938-.313 1.836-.86 2.578l-1.914 2.54c-.39.585-1.172.702-1.758.273-.547-.391-.664-1.172-.234-1.758z' />
    </g>
    <defs>
      <clipPath id='8ad423a2c140473eec3acc4a9a8b3fe6__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineLgFillIcon);
export default ForwardRef;
