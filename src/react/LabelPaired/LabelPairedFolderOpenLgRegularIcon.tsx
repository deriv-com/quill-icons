import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenLgRegularIcon = (
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
      <path d='M17.75 11.75c0-.664-.586-1.25-1.25-1.25h-4.61c-.976 0-1.953-.39-2.656-1.094L8.22 8.391l.86-.899-.86.899A1.27 1.27 0 0 0 7.32 8H2.75c-.703 0-1.25.586-1.25 1.25v11.21l1.992-5a1.86 1.86 0 0 1 1.758-1.21h15.625c.586 0 1.172.313 1.523.86.352.507.43 1.132.196 1.718l-2.5 6.25c-.274.742-.977 1.172-1.719 1.172H2.75a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5h4.57c.664 0 1.29.273 1.758.742l1.055 1.055c.469.469 1.094.703 1.758.703H16.5c1.367 0 2.5 1.133 2.5 2.5V13h-1.25zM15.25 23h3.125a.59.59 0 0 0 .547-.39l2.5-6.25a.63.63 0 0 0-.04-.587.67.67 0 0 0-.507-.273H5.25a.59.59 0 0 0-.586.43l-2.5 6.25a.55.55 0 0 0 .04.547c.116.195.312.273.546.273z' />
    </g>
    <defs>
      <clipPath id='9f176483455c313acf76d921386130fa__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenLgRegularIcon);
export default ForwardRef;
