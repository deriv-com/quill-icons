import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.563 16.047a1.863 1.863 0 0 1 0 2.656l-3.516 3.555a1.936 1.936 0 0 1-2.656 0l-7.07-7.07a1.863 1.863 0 0 1 0-2.657l3.515-3.554a1.936 1.936 0 0 1 2.656 0zm-9.18-5.625c.351.312.351.86 0 1.21L5.977 13.04a.873.873 0 0 1-1.25 0l-.079-.078-.468.43c-.235.273-.235.664 0 .898l7.07 7.07c.273.235.664.235.898 0l3.555-3.515c.235-.274.235-.664 0-.899l-7.07-7.07c-.274-.234-.664-.234-.899 0l-.43.43zm8.75-.781a6 6 0 0 0-.938-.782l-.312-.234a7 7 0 0 0-1.211-.586l-.39-.117c-.118-.04-.196-.078-.313-.078l.937.898-.898.899-3.242-3.282h1.953c.469.04.937.118 1.367.196l.547.156.469.156c.507.196.976.43 1.445.703l.39.274c.352.234.743.547 1.055.898a8.07 8.07 0 0 1 2.383 5.742h-1.25a6.83 6.83 0 0 0-1.992-4.843M3.867 21.867c.313.274.625.547.938.781l.312.196c.39.234.781.43 1.211.586l.43.156c.078.039.195.039.273.078l-.898-.898.898-.899 3.203 3.281H8.75l-.469-.039c-.469 0-.898-.078-1.367-.195l-.508-.117-.508-.195a5.8 5.8 0 0 1-1.406-.665l-.39-.273c-.391-.273-.743-.586-1.094-.898a8.07 8.07 0 0 1-2.383-5.743h1.25a6.7 6.7 0 0 0 2.031 4.844z' />
    </g>
    <defs>
      <clipPath id='d92512c0516a3932c4a6674475b05ab2__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceLgFillIcon);
export default ForwardRef;
