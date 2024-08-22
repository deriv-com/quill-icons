import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixLgBoldIcon = (
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
      <path d='M10.875 18c0-2.383-1.992-4.375-4.375-4.375a4.3 4.3 0 0 0-3.203 1.406l-.195.235c-.664.78-.977 1.757-.977 2.734A4.37 4.37 0 0 0 6.5 22.375c2.383 0 4.375-1.953 4.375-4.375m-4.96-6.21c.194 0 .39-.04.585-.04 3.438 0 6.25 2.813 6.25 6.25a6.243 6.243 0 0 1-6.25 6.25A6.22 6.22 0 0 1 .25 18c0-1.602.586-3.086 1.602-4.18L7.32 7.102a.93.93 0 0 1 1.328-.118.93.93 0 0 1 .118 1.329z' />
    </g>
    <defs>
      <clipPath id='149d9fe62dbc56373fbe88b67b1af12b__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixLgBoldIcon);
export default ForwardRef;
