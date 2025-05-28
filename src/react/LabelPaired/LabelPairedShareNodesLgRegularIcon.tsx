import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.75 9.875A3.11 3.11 0 0 1 14.625 13a3.13 3.13 0 0 1-2.305-.977l-5.898 2.97c.039.155.078.35.078.507 0 .195-.04.39-.078.547l5.898 2.93A3.28 3.28 0 0 1 14.625 18a3.134 3.134 0 0 1 3.125 3.125 3.11 3.11 0 0 1-3.125 3.125c-1.758 0-3.125-1.367-3.125-3.125 0-.352.04-.742.156-1.055L5.992 17.22c-.586.86-1.523 1.406-2.617 1.406C1.617 18.625.25 17.258.25 15.5a3.11 3.11 0 0 1 3.125-3.125c1.094 0 2.031.586 2.617 1.445l5.664-2.851a3.4 3.4 0 0 1-.156-1.094 3.11 3.11 0 0 1 3.125-3.125 3.134 3.134 0 0 1 3.125 3.125m-14.375 7.5c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.875-.352-.547-.938-.938-1.602-.938-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.874a1.87 1.87 0 0 0 1.64.938m13.125-7.5c0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.876 0-.585.352-.937.938-.937 1.602 0 .703.352 1.29.938 1.64.546.352 1.289.352 1.874 0 .547-.35.938-.937.938-1.64M14.625 23c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.875-.352-.547-.938-.938-1.602-.938-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.875a1.87 1.87 0 0 0 1.64.937' />
    </g>
    <defs>
      <clipPath id='0e1ca8f290bc9e2417b1c4a0462c0418__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesLgRegularIcon);
export default ForwardRef;
