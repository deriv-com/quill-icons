import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashLgFillIcon = (
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
      <path d='M5.523 6.203c.196-.43.625-.703 1.094-.703h4.727c.469 0 .898.273 1.094.703l.312.547h3.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-15C.797 9.25.25 8.703.25 8c0-.664.547-1.25 1.25-1.25h3.75zM16.5 10.5l-.86 13.242c-.038 1.016-.859 1.758-1.874 1.758h-9.57c-1.016 0-1.837-.742-1.876-1.758L1.5 10.5z' />
    </g>
    <defs>
      <clipPath id='74d6c091e0308c732753b32e55bc3dca__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashLgFillIcon);
export default ForwardRef;
