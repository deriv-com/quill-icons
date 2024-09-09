import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEightLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.125 11.594a4.86 4.86 0 0 1-1.719 3.71 4.78 4.78 0 0 1 2.344 4.102 4.843 4.843 0 0 1-4.844 4.844H5.094A4.82 4.82 0 0 1 .25 19.406c0-1.718.898-3.281 2.305-4.101-1.055-.899-1.68-2.227-1.68-3.711A4.843 4.843 0 0 1 5.719 6.75H7.28c2.657 0 4.844 2.188 4.844 4.844m-4.844 4.844H5.094a2.967 2.967 0 0 0-2.969 2.968 2.967 2.967 0 0 0 2.969 2.969h2.812a2.967 2.967 0 0 0 2.969-2.969 2.967 2.967 0 0 0-2.969-2.968zm0-1.875a2.967 2.967 0 0 0 2.969-2.97 2.967 2.967 0 0 0-2.969-2.968H5.72a2.967 2.967 0 0 0-2.969 2.969 2.967 2.967 0 0 0 2.969 2.969z' />
    </g>
    <defs>
      <clipPath id='3e00d5b9b2f571248961fe0cab90d569__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightLgBoldIcon);
export default ForwardRef;
